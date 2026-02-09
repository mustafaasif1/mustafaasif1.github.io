export const articleAgentEvaluation = `
---
For a long time, the deal was simple: if a unit test passed on Monday, it passed on Tuesday. \`input A\` gave you \`output B\`. We built on logic and determinism.

That's breaking down. We're moving from LLMs that generate text to **autonomous agents** that take action. They don't just write; they run tools, hit APIs, change state. They can query your database, move money, change user data.

So an agent isn't just a fancy chatbot. It's a probabilistic system that *operates* in the world. That means we have to rethink how we evaluate it. BLEU and ROUGE don't apply. Even benchmarks like MMLU miss what matters: multi-step planning, persistent state, tool use.

Here I'll go through how agents fail (including the math), why the "vibe check" isn't enough, and what an evaluation stack that actually builds trust looks like.

## The Math: Compounding Non-Determinism

You can't evaluate an agent until you know how it fails. In normal software, 99.9% reliability is great. In agentic workflows, 99% *per step* can still mean disaster at the system level.

**Compounding non-determinism** is the reason. An agentic task is rarely one call. It's a chain: search, filter, reason, format, respond. Each link can fail.

Say your agent does a 10-step workflow and each step has a 95% success rate. The chance the whole chain succeeds isn't 95%. It's:

$$
P(success) = 0.95^{10} \\approx 59.8\\%
$$

So a "highly reliable" model per step can still be a coin flip end-to-end. And one successful run doesn't prove much; it might be a fluke. Evaluation has to move from \`assert result == expected\` to something like \`assert success_rate > 95% over k trials\`.

## The Trap: The "Vibe Check"

Early on, everyone does it: you poke the agent a few times. "I asked it to book a flight and it worked!" Feels good. Not enough for production.

Vibe checks miss **regression** (you improve one capability and break another), **drift** (a model update changes how it follows instructions), and worst of all **hallucinated tool arguments**. That's when the agent calls a real tool like \`queryDatabase\` but with made-up params (e.g. a user ID it never actually retrieved). The code doesn't crash. The API returns empty. The agent says "No records found." User thinks the data's missing; you think the pipeline works. Both wrong.

To ship, you need to turn vibes into numbers: **Performance**, **Efficiency**, and **Safety**.

---

## The Agent Evaluation Pyramid

You can't evaluate an agent with one big test. Same idea as the test pyramid: you need layers. Unit tests for the tools, integration for sub-systems, system tests for full trajectories. That way you can pin failures to a specific layer instead of staring at a black box.

### Layer 1: Unit Testing (The Tool Layer)

Start with the parts that are deterministic. The agent talks to the world through tools. Before you stress-test the "brain," make sure the "hands" work.

Your parsers have to survive whatever the LLM actually outputs. Trailing commas, comments in the JSON, markdown-wrapped payloads. Does the parser crash or does it handle the mess?

\`\`\`typescript
// Example: Testing Robust Parsing
test('Tool Parser handles messy LLM JSON', () => {
  // LLMs often add commentary or markdown to JSON
  const messyOutput = \`\`\`json
  {
    "action": "search",
    "params": { 
      "query": "Q3 Revenue" // This is the query
    }, 
  }
  \`\`\`;
  
  // The parser must strip comments and handle trailing commas
  const result = parseAgentAction(messyOutput);
  expect(result).toEqual({ action: "search", params: { query: "Q3 Revenue" } });
});
\`\`\`

### Layer 2: Integration Testing (Sub-systems)

Next you test specific capabilities in isolation: **RAG** and **state**.

**RAG:** When the agent has to pull a specific fact from a long conversation, does retrieval actually return the right chunk? Recall@k and "needle in a haystack" style tests (hide a fact in noise and see if the agent finds it) are the usual approach.

**State:** Agents have memory. If it adds something to the cart in turn 3, does it still know in turn 5? Integration tests should run multi-turn flows and check that variable binding and state tracking work.

### Layer 3: System Testing (Trajectory)

The heaviest but most important layer: can the agent solve a real user request end to end? And not just the final answer. You have to check the **trajectory**. Did it take a sane path? Or did it loop (same search tool over and over with the same params)?

**Trajectory validity** means comparing the sequence of tool calls to a reference. If the agent "books" a flight by guessing a flight ID instead of searching for it, the result might be right but the process is wrong. That's "process hallucination": right answer, wrong reasons.

---

## The Metrics of Agency: KPIs for Production

Beyond simple success, organizations must track distinct KPIs to determine if an agent is viable for enterprise deployment.

### 1. Performance: Pass@k vs. Pass^k
Because of non-determinism, a single "Pass" is noise.
* **Pass@k:** Useful for code generation. If we generate 5 solutions, is *at least one* correct?
* **Pass^k (Consistency):** Critical for autonomous agents. This measures the probability that the agent succeeds in **all** k attempts. If your agent has a 90% success rate, it will fail 1 out of 10 times. In a high-volume support center, that is thousands of frustrated users per day.

### 2. Efficiency: The Economics of Tokens
An agent that solves a problem but costs $4.00 per query is effectively useless for B2C applications.
* **Cost per Task:** Summing input/output tokens plus tool execution costs.
* **Token Efficiency Ratio:** The ratio of "useful" tokens (final answer) to "process" tokens (internal reasoning). A low ratio indicates the agent is spinning its wheels.
* **Latency Distribution (P99):** Average latency is misleading. Agents have "long tails." Most queries take 2 seconds, but complex reasoning paths might take 60. Tracking P99 helps identify which queries trigger these "think spirals."

### 3. Safety: Hallucination & Refusal
* **Hallucination Rate:** Frequency of generating factually incorrect info or referencing non-existent data.
* **Refusal Rate (False Positives):** How often does the agent refuse a *valid* request because it was too conservative?

---

## Methodology I: LLM-as-a-Judge

You can't scale evaluation on human review alone. So the standard move is **LLM-as-a-Judge**: a strong model (e.g. GPT-4o, Claude 3.5) scores the agent's traces.

A generic "is this good?" judge doesn't cut it. You want a **persona-based judge** with a clear rubric and "chain of thought" style grading (reason first, then score).

\`\`\`python
const JUDGE_PROMPT = \`
You are a Senior QA Engineer evaluating a Customer Support Agent.
You are strict, detail-oriented, and prioritize user safety.

Evaluation Steps:
1.  Analyze the User's Intent.
2.  Review the Agent's Tool Usage. Did it use too many steps?
3.  Check for Safety Violations (PII leaks, harmful content).
4.  Assign a score (1-5).

Rubric:
1: Fails to address request or hallucinations.
3: Addresses request but includes unnecessary steps.
5: Perfect execution, optimal path, correct tone.

Output your reasoning first, then the score.
\`;
\`\`\`

**Pairwise vs. Pointwise:**
For nuanced metrics like "Tone" or "Helpfulness," absolute scoring is difficult. It is often better to use **Pairwise Evaluation**, where the judge compares Model A vs. Model B and selects a winner. This effectively measures if a new deployment is *better* than the previous one, even if the absolute score is hard to quantify.

## Methodology II: Stateful Mocks

To test whether an agent can *act*, you have to give it an environment where actions are possible without touching production. No real flight bookings, no real DB deletes.

**Stateful mocks** are the answer. A static mock always returns the same thing. A stateful mock behaves like a real system: state changes over time.

**The Scenario:** Testing an agent's ability to handle sold-out flights.
1.  **Turn 1:** Agent calls \`get_flights\`. Mock returns: \`{ seats_remaining: 1 }\`.
2.  **Turn 2:** Agent calls \`book_flight\`. Mock decrements internal counter to 0.
3.  **Turn 3:** Agent tries to double-book. Mock returns: \`Error: No seats available\`.

This persistence is crucial for testing **Reflection,** the agent's ability to realize it made a mistake (or hit a constraint), analyze the error message, and self-correct without human intervention.

---

## Production: CI/CD and Shadow Mode

Evaluation doesn't stop at deploy. It lives in the pipeline.

### Gating and regression
* **Smoke test.** A small slice of the golden set (e.g. 20 critical queries) runs on every commit. If pass rate isn't 100%, the build fails.
* **Deep eval.** A bigger run (e.g. 500+ queries) runs nightly or before releases. Catches regressions in accuracy or tone that the smoke test might miss.

### Shadow mode
Before you flip the switch on a new agent, run it in **shadow mode**. Send real traffic to *both* the current agent (v1) and the new one (v2). The user only sees v1's response; v2's is logged. A judge compares the two offline.

If v2 consistently beats v1 on that traffic, you've got a data-backed reason to promote it.

## Building the "Golden Dataset"

A common mistake is testing only on synthetic stuff ("What's the capital of France?"). Real agents need a **golden dataset**: real-ish inputs and expected behavior, from real usage.

1.  **Harvest.** Log production interactions (anonymized).
2.  **Filter.** Keep traces where users thumbs-downed, latency spiked, or errors showed up.
3.  **Curate.** Humans label the failures and add the *correct* trajectory and answer.

Then every production failure becomes a regression test. The agent might fail again, but at least you'll catch it if it makes the same mistake twice.

---

## Conclusion: Engineering Trust

Evaluating agents isn't just a technical problem. It's a mindset shift: from "did the code do the right thing?" to "is the system reliable?"

The teams that win won't be the ones with the best models. They'll be the ones with the best yardsticks. The ones that can show their agents are safe, efficient, and aligned with what users actually want.

The vibe check had its moment. Now we have to build trust the hard way.
`;
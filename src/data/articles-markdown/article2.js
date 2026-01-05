export const article2markdown = `
---
Web applications are no longer just tools. They are the backbone of modern life, used by over 68% of the global population for everything from banking to education. But as we generate trillions of bytes of data daily, we are also creating a massive "attack surface". In recent years, we’ve seen how single vulnerabilities can lead to catastrophic results, such as the Equifax breach affecting 147 million people or the British Airways data breach that led to a £183 million fine.

For my Master's thesis at the Technical University of Munich (TUM), I wanted to move away from rigid, "one-size-fits-all" security tools. I developed a collaborative multi-agent framework that uses Large Language Models (LLMs) to detect vulnerabilities not by just reading code, but by "debating" it.

## The Problem: Why Traditional Security is Often "Noisy" or "Blind"

Currently, most developers rely on two main methods, but both have significant flaws:

1. **Static Analysis**  
   This scans code without running it. While fast, it is famous for high false positive rates, often flagging code that isn't actually dangerous and causing "alert fatigue" for developers.

2. **Dynamic Analysis**  
   This involves executing code with test cases. It is more accurate but can be prohibitively expensive and complex to set up for large, modern codebases.

Even when we try to use a single "smart" AI like GPT-4, we run into the hallucination problem where the AI confidently claims a vulnerability exists when it doesn't, or misses subtle logic because it lacks a deep "reasoning" process.

## The Solution: A Layered "War Room" of Specialized Agents

My research suggests that the answer isn't one "genius" AI, but a modular, layered architecture where different agents play specific roles, much like a human security audit team.

### Layer 1: The Hyper-Paranoid Scout (Pattern Matching)

The process begins with the Pattern Matching Agent. Unlike traditional tools that try to be perfectly accurate, this agent is prompted to be ultra-vigilant and "hyper-paranoid". Using a hybrid approach that combines LLM reasoning with tools like Semgrep, it flags anything even the slightest hint of a weakness across 11 critical categories including SQL Injection (SQLi), Cross-Site Scripting (XSS), and Path Traversal.

### Layer 2: The Reasoning Loop (The "Debate")

Once a potential flaw is flagged, a specialized team of three agents enters a recursive loop to validate the claim:

- **The Generator**  
  This agent acts as a "white-hat hacker". It must absolutely confirm a vulnerability exists before crafting a realistic test case and explaining the technical "attack chain".

- **The Simulator**  
  This is a "virtual runtime environment". It doesn't actually run the code (saving on cost), but it faithfully models the behaviour described by the Generator’s test case to see if it causes a security violation.

- **The Evaluator**  
  Acting as a senior security auditor, the Evaluator is brutally honest. It critiques the Generator's logic and simulation results. If the evidence is weak or speculative, it sends the Generator back to the drawing board.

### Layer 3: The Supreme Court (Judgment & Aggregation)

Finally, a Judge Agent reviews the entire conversation history. It doesn't just look at the final answer, but it reviews the "debate" between the Generator and Evaluator to make an evidence-based final verdict: **Vulnerable**, **Potentially Vulnerable**, or **Not Vulnerable**.

<div className="grid grid-cols-1 gap-4">
  <img src="/assets/images/articles/multi-agent-thesis/multi_agent_framework.png" alt="Multi-agent architecture and data flow" />
</div>

---

## The Verdict: Does the "A-Team" Approach Actually Work?

The empirical results were eye-opening. By comparing a "single-agent" baseline to this multi-agent framework, we saw massive improvements:

- **Reliability Boost**  
  For models like GPT-4.1-Mini, the recall (the ability to find actual flaws) jumped from 0.35 to a staggering 0.85.

- **Hallucination Control**  
  The inter-agent critique was incredibly effective at filtering out false alarms. In GPT-4, the system correctly removed 191 false positives that would have otherwise bothered a developer.

- **Arbitration Accuracy**  
  In the 4.4% of cases where the agents disagreed, the Judge was able to resolve the conflict and align with the "ground truth" 75.47% of the time.

## Looking Ahead: The Future of Autonomous Security

This research proves that the future of software security isn't just about "bigger" AI models, but about smarter collaboration. By forcing AI agents to cross-examine each other, we can create systems that are not only more accurate but also more transparent and explainable.

As we move forward, the next step is to integrate dynamic execution agents which are actual sandboxed runners that can "prove" a vulnerability by executing it in a safe environment.

---

*This research was conducted as part of my Master's thesis at the Technical University of Munich, completed in August 2025. The full thesis document is available upon request.*
`;


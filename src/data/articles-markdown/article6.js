export const articleEuAiActDevelopers = `
*This is an engineer's reading of the consolidated text of Regulation (EU) 2024/1689, as amended by Regulation (EU) 2026/1744, and of the European Commission's public guidance. It is not legal advice. Have a lawyer review anything you intend to rely on.*

Many engineering write-ups treat the EU AI Act as a single compliance stack. Log every prompt for six months, put a human in front of every answer, and sign every output with a provenance manifest. That work is in the regulation. It applies to particular systems, and only from particular dates.

If you integrate a model into a product, start by classifying the system. Then implement disclosure and marking where those duties apply. Build the conformity machinery later, and only for the systems that actually fall under it.

The Act has applied in stages since 2024. The text to use now is the [consolidated regulation](https://eur-lex.europa.eu/eli/reg/2024/1689/2026-07-27/eng), which includes the Digital Omnibus on AI, [Regulation (EU) 2026/1744](https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng).

## Two roles, and who is in scope

The Act divides the value chain into several roles. Two of them answer most design questions.

A **provider** develops an AI system or a general-purpose model, or has it developed, and places it on the market or puts it into service under its own name or trademark. A **deployer** uses an AI system under its own authority in a professional context. One company can be both. A vendor that ships a product under its own brand is the provider of that system. The customer that turns it on for its own staff or clients is the deployer.

Article 2 also reaches teams outside the Union. It covers a system placed on the EU market or put into service in the Union, and it covers output used in the Union. A team in another country that calls a model and serves EU users still has to classify the system.

Integrators can become providers of a system they did not train. Under Article 25, that happens if you substantially modify a high-risk system and it remains high-risk, or if you change the intended purpose of a system so that it becomes high-risk. Calling an API is only a complete answer after you have written down the intended purpose of the product you shipped.

## The calendar

Article 113 sets the dates. Read the high-risk rows twice. They come later than the transparency rules.

| When | What starts |
| --- | --- |
| 1 August 2024 | The Act enters into force. |
| 2 February 2025 | The original prohibited practices in Article 5, and the AI-literacy duty in Article 4. |
| 2 August 2025 | Duties for providers of general-purpose AI models, in Chapter V. |
| 2 August 2026 | Article 50 transparency, and the rest of the Act that was not already in force. The Commission's power to fine general-purpose model providers under Article 101 is in this wave. |
| 2 December 2026 | Machine-readable marking, under Article 50(2), for generative systems already placed on the market before 2 August 2026. New prohibitions on AI systems that generate or manipulate non-consensual intimate material or child sexual abuse material. |
| 2 December 2027 | High-risk requirements for standalone systems listed in Annex III. |
| 2 August 2028 | High-risk requirements for AI that is a safety component of a product covered by Annex I, such as machinery or a medical device. |

The Omnibus moved the high-risk dates because the standards and the national conformity bodies were not ready. Article 50 stayed on 2 August 2026. The grace period on 2 December 2026 covers only the marking duty in Article 50(2), and only for generative systems placed on the market before 2 August 2026. A system placed on the market after that date has to meet the marking duty from 2 August 2026. The Omnibus entered into force on 27 July 2026. That date is the start of the amending regulation, and the cutoff for the grace period remains 2 August 2026.

Article 4 is narrower than a training programme. Since the Omnibus, providers and deployers must take measures to support AI literacy for their staff and for people who operate systems on their behalf. The article says this does not require a guaranteed level of literacy for any individual. A recorded briefing, together with a short note of what operators are expected to understand, meets the shape of that duty.

## Classify the system before you open a ticket

Run these questions against the system you are about to ship. Each answer points to a later section.

1. Will this system be placed on the EU market, put into service in the Union, or produce output used in the Union? If none of those is true, you can stop. If any of them is true, continue.
2. Are you the provider, the deployer, or both? Write down the brand on the product and the relevant contract in one sentence.
3. Did you train the general-purpose model, or are you calling someone else's? Training a model, or having one trained and placing it under your name, brings in Chapter V. Calling an API brings in the duties of the system you wrap around it.
4. Does the system talk to a person, or produce synthetic audio, image, video, or text? That is Article 50.
5. Is the intended purpose on the prohibited list in Article 5? Those systems stay off the market.
6. Is the intended purpose on Annex III, such as hiring, education, credit, biometrics, or essential services? That is the December 2027 high-risk track, unless a narrow exemption in Article 6(3) really applies.
7. Is the system a safety component of a product already regulated under Annex I? That is the August 2028 track.

The intended purpose classifies the system. The brand of the underlying model does not. A chatbot that answers product questions and a model used to score credit applicants can sit on the same foundation model and fall under different chapters.

### Prohibited practices

Article 5 has been enforceable since 2 February 2025. The list includes manipulative techniques that cause significant harm, exploitation of people's vulnerabilities, social scoring, predicting criminal offending from profiling alone, untargeted scraping of facial images to build recognition databases, and emotion recognition in the workplace or in education outside medical and safety uses. Real-time remote biometric identification in publicly accessible spaces for law enforcement is prohibited except in the narrow cases the article itself sets out.

From 2 December 2026, Article 5 also prohibits placing on the market, putting into service, or using systems that generate or manipulate non-consensual intimate material or child sexual abuse material, on the terms set out in the amended article. If a product can generate images of people, read that amendment before you treat image generation as a side feature. Use the article as the list. A summary is where a case gets dropped.

### High-risk, and the narrow way out

A system becomes high-risk through one of two routes.

**Annex I** covers AI integrated as a safety component into a product that already goes through EU product-safety rules, including medical devices, machinery, lifts, toys, and the other laws listed there. Those requirements apply from 2 August 2028.

**Annex III** is a list of standalone uses: biometrics, critical infrastructure, education and vocational training, employment, access to essential private and public services, law enforcement, migration and border control, and the administration of justice. Those requirements apply from 2 December 2027.

Article 6(3) can take an Annex III system out of the high-risk category, and the test has two parts. The system must not pose a significant risk of harm to health, safety, or fundamental rights, which includes the case where it does not materially influence the outcome of a decision. One of the following must also be true. The system performs a narrow procedural task. It improves the result of a human activity that is already finished. It detects decision-making patterns and is not meant to replace or influence the completed human assessment without proper human review. Or it performs a preparatory task for an assessment listed in Annex III.

Profiling of natural persons remains high-risk even if one of those conditions is met. A provider who relies on the exemption must document the assessment before the system is placed on the market or put into service, and must register the system under Article 49(2). The exemption is a written assessment and a database entry.

### Everything else

A system that is neither prohibited nor high-risk can still owe Article 50, and the organisation still owes Article 4. Outside those duties, the Act does not add a product-safety file. GDPR, copyright, and sector rules continue to apply on their own terms.

## What an application developer implements now

If question 4 above is yes, this is the section to build against. Article 50 is the chapter in force for ordinary products. It sets four duties, plus a rule about how the information is shown. The [Commission guidelines](https://digital-strategy.ec.europa.eu/en/policies/guidelines-ai-transparency-obligations) are the practical reading, and the article numbers below follow the consolidated text.

**The system talks to a person.** Under Article 50(1), the provider designs the system so that the person is told they are interacting with an AI system, unless that fact is already obvious to a reasonably well-informed, observant, and circumspect person in that context. The exception is narrow. A human first name on a support channel is a weak case for "obvious." The notice belongs at the start of the interaction. Article 50(5) requires the information in paragraphs 1 to 4 to be clear and distinguishable, to be provided at the latest at the first interaction or exposure, and to meet accessibility requirements.

A line in the terms of service, a footer that says the site uses AI, and a model-name badge are weak forms of this notice. The guidelines describe an opening sentence that a person can actually read, in the language of the conversation. Repeat it when the interaction is long, or when the audience is less likely to recognise a machine.

**The system generates synthetic content.** Article 50(2) requires providers of systems that generate synthetic audio, image, video, or text to mark the outputs in a machine-readable format, so that the outputs can be detected as artificially generated or manipulated. The technical solution has to be effective, interoperable, robust, and reliable as far as that is technically feasible, taking account of the type of content, the cost, and the state of the art.

The duty does not apply to the extent that the system only assists standard editing, or does not substantially alter the input or its meaning. A spellchecker and a crop tool are the usual examples. A model that writes a new paragraph, synthesises a voice, or edits a person's face into a new scene falls under the duty.

**Emotion recognition and biometric categorisation.** Article 50(3) requires the deployer to inform the people exposed to those systems, and to process personal data under the applicable data-protection rules. An ordinary product assistant does not do this. If yours does, the notice is a separate piece of interface from the chatbot disclosure.

**Deepfakes and public-interest text.** Article 50(4) applies to the deployer. If the system generates or manipulates image, audio, or video that constitutes a deepfake, the deployer discloses the artificial origin. For an evidently artistic, satirical, or fictional work, the disclosure is limited to making the artificial origin known in a way that does not hamper the display or enjoyment of the work. If the system generates text published to inform the public on a matter of public interest, the deployer discloses that too, unless a person has reviewed the text and someone holds editorial responsibility for publishing it.

A reply inside a one-to-one chat is not that kind of publication, so it does not need a stamp on every message. The person still receives the Article 50(1) disclosure. A file header that the viewer never sees also fails Article 50(4), because the deployer label has to be perceivable. The provider's machine-readable mark is a separate layer, used for detection, and it does not replace that label.

### How marking works in practice

The [Code of Practice on Transparency of AI-generated Content](https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content), published in June 2026, is voluntary. In July 2026 the Commission and the AI Board assessed it as an adequate way to demonstrate compliance with the marking and labelling duties in Articles 50(2) and 50(4). Signing it is optional. A team that does not sign has to show an equivalently adequate method. Article 50(7) allows the Commission to adopt an implementing act later if it decides that codes of practice are not enough. That act is not what you implement today.

For files, a signed provenance manifest is a strong option. The C2PA Content Credentials model stores a manifest in the file and signs it with a certificate that a verifier can check. For images, audio, and video, that fits the "machine-readable and detectable" requirement more closely than a comment in a filename. Recompression and social platforms often strip metadata, so a team that needs the mark to survive a re-upload should also consider a watermark bound into the signal itself. Those techniques are engineering choices. SynthID, Video Seal, and other named watermarks are products and papers. The Act does not require any of them by name.

Text is the weaker case. A manifest on an API response helps the next system in the chain, and it does nothing for a paragraph someone pastes into an email. Statistical watermarking of tokens is still an active research area, and it degrades on short strings. Record that limit in the design document. Article 50(2) already tells you to weigh technical feasibility and cost. A chat API can attach detection metadata. A claim that every sentence stays detectable after a person edits it goes beyond what current techniques support.

Place the mark at the boundary where the bytes leave your system. In a media pipeline, that is the moment the file is finalised. In a chat API, that is the response metadata, together with the Article 50(1) sentence in the client. Keep the logic in one place. If you scatter "AI generated" strings through prompts and hope the model repeats them, the mark disappears as soon as the model is told to stop.

## What you build only if the system is high-risk

Questions 6 and 7 lead here, and the dates in the calendar still apply. Chapter III, Sections 1 to 3, is the heavy engineering. It applies from 2 December 2027 for Annex III and from 2 August 2028 for Annex I. Building it this quarter for a product assistant spends the time on a conformity file the statute does not yet require, and may never require for that system.

When the relevant date arrives, and only if classification puts you in this chapter, the provider's technical duties in Articles 9 to 15 are these:

| Article | What the provider designs |
| --- | --- |
| 9 | A risk-management process that runs for the life of the system, covering foreseeable risks to health, safety, and fundamental rights. |
| 10 | Data governance for training, validation, and testing sets: relevant, representative, checked for errors, and examined for bias. |
| 11 | Technical documentation, in Annex IV, that lets an authority see how the system was built and how it meets the requirements. |
| 12 | Automatic logging of events that matter for tracing risks and substantial modifications. |
| 13 | Instructions for the deployer, covering capabilities, limitations, and how to use the system. |
| 14 | Human oversight. The interface has to let a person understand the output, decide not to use it, and intervene. |
| 15 | Accuracy, robustness, and cybersecurity appropriate to the purpose, including resistance to attempts to manipulate the system. |

Logging is the duty teams most often copy onto every service. Article 19 tells providers to keep automatically generated logs for at least six months, unless Union or national law says otherwise, in particular data-protection law. Article 26(6) tells deployers to keep the logs under their control for a period appropriate to the purpose, and for at least six months, with the same data-protection qualification. Both articles sit in the high-risk chapter. A retrieval-augmented assistant that stores every prompt for half a year, on the theory that the AI Act requires it, has imported a high-risk retention rule into a system that does not have one. That choice can also conflict with GDPR data minimisation.

Deployers of high-risk systems have their own list in Article 26. They use the system according to the instructions, assign human oversight to competent people, monitor operation, and keep the logs they control. Some public deployers also owe a fundamental-rights impact assessment under Article 27. Conformity assessment is Article 43. Registration in the EU database is Article 49. Post-market monitoring is Article 72. If you have classified the system as outside Chapter III, none of those articles belongs on the release checklist.

If the system does fall under this chapter, build the controls into the product. A risk register that exists only in a wiki, a log line with no defined event schema, and an override button that nobody is trained to use will not meet Articles 9, 12, and 14. The design is ordinary software: an event schema, a retention policy written beside the GDPR policy, an escalation path with a named role, and a way to stop the system. The statute does not require a particular inference server, a particular vector database, or a proxy that inspects every tensor.

## What you build only if you provide the model

Question 3 leads here. Chapter V has applied to providers of general-purpose AI models since 2 August 2025. A general-purpose model can perform a wide range of distinct tasks and is placed on the market so that other systems can integrate it. Shipping an application on top of someone else's model does not, by itself, make you the provider of that model. You still classify the application.

Article 53(1) gives model providers four duties.

| Duty | What it is |
| --- | --- |
| Annex XI documentation | Technical documentation of the training and testing process and the evaluation results, kept current, and available to the AI Office on request. |
| Annex XII package | Information for downstream providers who integrate the model, so they can understand capabilities, limitations, and their own obligations. |
| Copyright policy | A policy to comply with Union copyright law, including a way to identify and honour text-and-data-mining opt-outs under Article 4(3) of Directive (EU) 2019/790. |
| Training summary | A sufficiently detailed public summary of the content used for training, using the template from the AI Office. |

Article 53(2) exempts some open models from the first two duties, and from those two only. The model has to be released under a free and open-source licence that allows access, use, modification, and distribution. The parameters, including the weights, the architecture, and the information on how to use the model, have to be public. A licence that forbids commercial use does not qualify, and neither does a release that hides the weights. The copyright policy and the public training summary remain in place either way.

The exemption does not cover models with systemic risk. Article 51 classifies a model that way when it has high-impact capabilities, or when the Commission designates it. Training compute above 10<sup>25</sup> floating-point operations creates a presumption of those capabilities, and the Commission can update the threshold. Article 55 then adds model evaluation, including adversarial testing, assessment and mitigation of systemic risk, reporting of serious incidents to the AI Office, and cybersecurity for the model and its physical infrastructure.

A second open-source rule applies to systems rather than to models. Article 2 says the Act generally does not apply to an AI system released under a free and open-source licence, unless that system is placed on the market or put into service as a high-risk system, or it falls under Article 5 or Article 50. An open-source chatbot that talks to people can still owe Article 50. An open-source resume ranker can still be high-risk. Publishing the weights leaves those duties in place.

If you are downstream of a model provider, read the Annex XII package you were given and carry the relevant limits into your own instructions and evaluation set. You do not inherit the model provider's Annex XI file. If your application is high-risk, you still owe the high-risk duties on the application.

## Fines, briefly

Member States set the penalties, within the ceilings in Article 99. For a company, the ceiling is the fixed amount or the share of worldwide annual turnover in the previous year, whichever is higher.

| Infringement | Ceiling |
| --- | --- |
| Prohibited practices, Article 5 | €35 million, or 7% |
| Listed operator duties, including Article 50 transparency and high-risk obligations | €15 million, or 3% |
| Supplying incorrect, incomplete, or misleading information to authorities | €7.5 million, or 1% |

For small mid-cap enterprises, Article 99(6a) caps the fines under Article 99(4) and 99(5) at the lower of the two figures. The article also requires proportionality for smaller firms. The Commission, rather than a national authority, fines providers of general-purpose models under Article 101, within the same ceiling of €15 million or 3%.

National market-surveillance authorities enforce the rules for AI systems, including Article 50. The AI Office supervises general-purpose models. It also supervises systems built on those models when the same provider supplies both, along with a small set of very large platforms. The fine applies when the classification was wrong, or when a duty that does apply was missed. The engineering question is still which article covers the system.

## The order of work

Write the classification down. Name the provider, the deployer, the intended purpose, and the article you believe applies. If you are relying on Article 6(3), include the assessment and the Article 49(2) registration in that note.

If the system talks to a person, put the disclosure in the first interaction on every channel, in a form a person can perceive. If it emits synthetic media or text, choose the machine-readable mark at the boundary where the content leaves you. Use the 2 December 2026 date only if the system was already on the market before 2 August 2026. If a deployer will publish deepfakes, or public-interest text that nobody has edited, the perceivable label is the deployer's duty. A file header does not meet it.

Leave Articles 9 to 15, EU database registration for high-risk systems, and conformity assessment on the roadmap for 2 December 2027 or 2 August 2028, and only for systems that the classification puts there. Leave Annex XI, Annex XII, the copyright policy, and the training summary with the team that provides the model.

Once that classification exists, the checks are small enough to automate. For each channel, confirm that the first interaction tells the person they are dealing with an AI system. For a generated file, confirm that a verifier can detect the mark after a normal save. For a high-risk claim, confirm that a document names the Annex III point, or the Article 6(3) condition, before the release branch. Put those checks next to the rest of the evaluation suite.

The primary sources to keep open are the [consolidated Act](https://eur-lex.europa.eu/eli/reg/2024/1689/2026-07-27/eng), the [Omnibus](https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng), the [Article 50 guidelines](https://digital-strategy.ec.europa.eu/en/policies/guidelines-ai-transparency-obligations), the [Code of Practice](https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content), and the [Commission timeline](https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline/timeline-implementation-eu-ai-act).
`;

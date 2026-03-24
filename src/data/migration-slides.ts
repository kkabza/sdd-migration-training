import type { Slide } from '@/types';

type SlideDefn = { audioSrc: string; slides: Slide[] };

/* ================================================================
   Slide definitions for every migration course lesson.
   Each lesson gets 7–8 timed slides that track the audio narration.
   ================================================================ */

export const lessonSlides: Record<string, SlideDefn> = {

  /* ───────── MODULE 1 ───────── */

  'm-lesson-1-1': {
    audioSrc: '/media/module1-lesson1-why-migrations-fail.mp3',
    slides: [
      { startTime: 0, layout: 'title', title: 'Why Migrations Fail', subtitle: 'Module 1, Lesson 1 — The Migration Reality', image: '/images/m1-why-migrations-fail.webp' },
      { startTime: 14, layout: 'bullets', title: 'The Specification Gap', subtitle: '60–70% of enterprise migrations exceed their budget or timeline.', bullets: ['Teams start migrating before they truly understand what the legacy system does', 'The gap between "what we think it does" and "what it actually does" grows exponentially', 'Every assumption that survives into implementation costs more to fix'] },
      { startTime: 28, layout: 'bullets', title: 'Root Causes — All Traceable to the Spec Gap', bullets: ['Undocumented business logic buried in legacy code', 'Incomplete dependency mapping — integrations nobody mentioned', 'Assumption-driven architecture decisions instead of evidence-based ones', 'No traceability from legacy behavior to cloud implementation', '"We thought we understood it" — the most expensive sentence in migration'] },
      { startTime: 42, layout: 'callout', title: 'The Hidden Cost', callout: { variant: 'warning', text: 'Every assumption that turns out to be wrong costs exponentially more to fix the later it\'s discovered. A missing integration found during planning costs hours. The same discovery during cutover costs weeks.' } },
      { startTime: 56, layout: 'bullets', title: 'AI Migrate — What Works at Scale', bullets: ['30% productivity improvement on AI-assisted assessment tasks, path to ~50%', 'Consistent assessments with reduced variability and quality guardrails', 'Reusable IP: patterns harvested from one engagement applied across programmes', 'Strategic value: agentic AI driving migration programmes at scale'] },
      { startTime: 70, layout: 'bullets', title: 'Why a Lighter Approach Is Also Needed', bullets: ['Full tooling requires security approvals, compliance, and data boundary negotiations', 'Not every engagement justifies that overhead', 'Spec-driven migration: same structured outcomes using code analysis + GitHub Copilot + SDD pipeline', 'Complements AI Migrate where it\'s deployed — stands alone where it isn\'t'] },
      { startTime: 86, layout: 'callout', title: 'Key Insight', callout: { variant: 'tip', text: 'Migration is a specification problem, not a technology problem. If you can\'t specify what legacy code does, you can\'t verify the migration is correct. The spec becomes the contract between "what the old system does" and "what the new system must do."' } },
      { startTime: 100, layout: 'bullets', title: 'Discussion Exercise', subtitle: 'Share a migration experience where "unknown unknowns" caused problems.', bullets: ['What assumptions were made about the legacy system?', 'When were those assumptions proven wrong?', 'What would have been different with a formal spec of what the legacy system actually did?'] },
    ],
  },

  'm-lesson-1-2': {
    audioSrc: '/media/module1-lesson2-spec-driven-pipeline.mp3',
    slides: [
      { startTime: 0, layout: 'title', title: 'The Spec-Driven Migration Pipeline', subtitle: 'Module 1, Lesson 2 — From Greenfield SDD to Migration SDD', image: '/images/m1-spec-driven-pipeline.webp' },
      { startTime: 16, layout: 'bullets', title: 'SDD Pipeline → Migration Pipeline', subtitle: 'Every SDD step has a greenfield purpose and a migration-specific purpose.', bullets: ['Constitution → Define how we migrate (standards, constraints, quality gates)', 'Specify → What the legacy system does (reverse-engineered spec)', 'Clarify → Validate reverse-engineered spec against SME knowledge'] },
      { startTime: 32, layout: 'bullets', title: 'SDD Pipeline → Migration Pipeline (cont.)', bullets: ['Plan → How to re-architect (target architecture, phasing, data strategy)', 'Analyze → Legacy-to-cloud traceability — does the plan cover the spec?', 'Tasks → Migration execution steps — ordered, with rollback criteria', 'Implement → Generate cloud-native code and infrastructure from the spec'] },
      { startTime: 48, layout: 'bullets', title: 'The Migration Flow in Practice', subtitle: 'Six phases from discovery to execution.', bullets: ['1. Discover — Analyze legacy code, infrastructure, and dependencies', '2. Reverse-Engineer — Generate a spec of what the legacy system does', '3. Clarify — Validate with SMEs, flag gaps'] },
      { startTime: 64, layout: 'bullets', title: 'The Migration Flow (cont.)', bullets: ['4. Re-Specify — Write the cloud target spec (same behaviors, new architecture)', '5. Plan — Migration waves, data strategy, integration rewiring, cutover', '6. Execute — Tasks → Implement → Validate → Iterate'] },
      { startTime: 80, layout: 'callout', title: 'The Spec Pair', callout: { variant: 'info', text: 'Every migration produces two specs — the AS-IS spec (what exists) and the TO-BE spec (what comes next). The delta between them IS the migration.' } },
      { startTime: 96, layout: 'bullets', title: 'Key Concepts', bullets: ['"Specify the AS-IS before designing the TO-BE"', 'Two specs, one pipeline — the same SDD process handles both', 'The constitution captures organizational migration standards as reusable constraints', 'This process works regardless of source technology — the spec abstracts away the implementation'] },
      { startTime: 112, layout: 'callout', title: 'Remember', callout: { variant: 'tip', text: 'The AS-IS spec is the truth about the legacy system. The TO-BE spec is the contract for the cloud system. Both flow through the same SDD pipeline.' } },
    ],
  },

  'm-lesson-1-3': {
    audioSrc: '/media/module1-lesson3-migration-strategies.mp3',
    slides: [
      { startTime: 0, layout: 'title', title: 'Migration Strategies & Spec Depth', subtitle: 'Module 1, Lesson 3 — Not Every Migration Needs the Same Specification', image: '/images/m1-migration-strategies.webp' },
      { startTime: 14, layout: 'bullets', title: 'Low-Spec Strategies', subtitle: 'Minimal specification effort required.', bullets: ['Retire — Just the decision rationale', 'Retain — Current state documentation', 'Rehost — Infrastructure mapping, dependency list', 'Replatform — Platform-specific adaptation points'] },
      { startTime: 28, layout: 'bullets', title: 'High-Spec Strategies', subtitle: 'Full behavioral specification required.', bullets: ['Refactor — Behavior spec + architecture redesign', 'Rearchitect — Domain decomposition + new architecture', 'Rebuild — What it does, not how (entirely new implementation)', 'Replace — Gap analysis (SaaS coverage vs. custom work)'] },
      { startTime: 42, layout: 'callout', title: 'Where Spec-Driven Migration Shines', callout: { variant: 'tip', text: 'Spec-driven migration is most valuable for refactor, rearchitect, and rebuild strategies — where understanding behavior is the critical path. You can\'t choose the right strategy confidently until you\'ve specified what the system does.' } },
      { startTime: 56, layout: 'bullets', title: 'The Decision Process', bullets: ['Run a lightweight spec pass FIRST to understand complexity', 'THEN choose the migration strategy', 'Choosing strategy before understanding the system is a common anti-pattern', 'This leads to costly mid-migration strategy changes'] },
      { startTime: 70, layout: 'bullets', title: 'Spec Depth Drives Everything', bullets: ['The spec depth determines the effort, the risk, and the tooling needed', 'Shallow specs work for rehost/replatform — you\'re mostly moving infrastructure', 'Deep specs are required for refactor/rebuild — you\'re rebuilding behavior', 'The strategy choice should be evidence-based, not assumption-based'] },
      { startTime: 84, layout: 'callout', title: 'Key Takeaway', callout: { variant: 'info', text: 'Invest specification effort where it matters most. A rehost doesn\'t need a full behavior spec. A rearchitect does. Match your spec depth to your migration strategy.' } },
    ],
  },

  'm-lesson-1-4': {
    audioSrc: '/media/module1-lesson4-cold-start.mp3',
    slides: [
      { startTime: 0, layout: 'title', title: 'Simulation: Cold Start', subtitle: '"Here\'s the code repository. Here\'s a one-page README from 2019. The previous architect left. Good luck."', image: '/images/m1-cold-start.webp' },
      { startTime: 15, layout: 'bullets', title: 'The Northwind Simulation', subtitle: 'A single progressive simulation across all 3 days.', bullets: ['You receive a real legacy .NET application — Northwind Global Services', 'Work it through the full spec-driven pipeline', 'Clone it now: github.com/kkabza/northwind-legacy-app'] },
      { startTime: 30, layout: 'bullets', title: 'Repository Structure', bullets: ['Models/ — Domain entities (Customer, Order, Product, Category…)', 'Services/ — Business logic (OrderService, CustomerService…)', 'Controllers/ — MVC controllers for the web UI', 'Data/ — NorthwindDbContext.cs (EF Core + seed data)'] },
      { startTime: 45, layout: 'bullets', title: 'Repository Structure (cont.)', bullets: ['BatchJobs/ — NightlyOrderProcessor, AuditLogPurge, WeeklyInventoryJob', 'Config/ — AuthHelper (NTLM auth), AppConfig (multi-source config)', 'Utilities/ — ShippingCalculator, NorthwindHelpers (God class)', 'appsettings.json — Connection strings, UNC paths, feature flags'] },
      { startTime: 60, layout: 'bullets', title: 'Why It\'s Hard', bullets: ['Business logic scattered across Services/, Utilities/, and Config/', 'Hardcoded Windows paths (\\\\NWFS01, \\\\NWMAIL01, \\\\NWPRINT01)', 'NTLM auth with static session store and hardcoded super-admins', 'Batch jobs nobody documented — what breaks if they stop?'] },
      { startTime: 75, layout: 'bullets', title: 'Exercise Steps', bullets: ['1. Clone the repo and build (dotnet build)', '2. Initialize: specify init northwind-migration --ai copilot', '3. Write a migration constitution', '4. Explore freely for 20 minutes — start with Models/, Services/, BatchJobs/'] },
      { startTime: 90, layout: 'bullets', title: 'First Impressions Template', bullets: ['What\'s immediately clear? (Start with Models/ and Controllers/)', 'What\'s unclear or suspicious? (Check Utilities/NorthwindHelpers.cs)', 'Where does business logic live? (Services/, Config/, Utilities/)', 'What integrations can you spot? (Search for UNC paths)', 'What\'s your initial risk assessment? (Check BatchJobs/)'] },
      { startTime: 105, layout: 'callout', title: 'Debrief', callout: { variant: 'tip', text: 'The instructor reveals what\'s actually in the codebase. How much did each team find in 20 minutes? What did everybody miss? This sets up the need for systematic analysis in Module 2.' } },
    ],
  },

  /* ───────── MODULE 2 ───────── */

  'm-lesson-2-1': {
    audioSrc: '/media/module2-lesson1-analyzing-legacy-code.mp3',
    slides: [
      { startTime: 0, layout: 'title', title: 'Analyzing Legacy Code with AI', subtitle: 'Module 2, Lesson 1 — Structured Prompts for Structured Output', image: '/images/m2-analyzing-legacy-code.webp' },
      { startTime: 16, layout: 'bullets', title: 'The Analysis Challenge', bullets: ['Large codebases with decades of accumulated logic', 'Business rules in unexpected places — DB logic, config files, utility classes, comments', 'Implicit dependencies — shared databases, file drops, message queues', 'Tribal knowledge that lives in people\'s heads, not documentation'] },
      { startTime: 32, layout: 'bullets', title: 'Using GitHub Copilot for Structured Analysis', subtitle: 'Consistent prompts → consistent analysis → consistent specs.', bullets: ['Architecture discovery: "Explain the high-level architecture"', 'Module analysis: "What does this module do and what are its dependencies?"', 'Business rule extraction: "Extract all business rules from this component"'] },
      { startTime: 48, layout: 'bullets', title: 'Analysis Prompt Examples (cont.)', bullets: ['Data flow tracing: "Trace the data flow from [input] to [output]"', 'Integration discovery: "List all external system integrations"', 'Dependency mapping: "What external systems does this component depend on?"', 'Risk assessment: "What are the migration risks for this module?"'] },
      { startTime: 64, layout: 'callout', title: 'The Quality Lever', callout: { variant: 'info', text: 'Structured prompts are the quality lever — it\'s why AI Migrate uses well-defined assessment patterns. In spec-flow, the constitution encodes the analysis standards.' } },
      { startTime: 80, layout: 'bullets', title: 'Key Principles', bullets: ['AI accelerates the reverse-engineering; the architect validates it', 'Never trust extracted business rules without verification — mark confidence levels', 'Analyze behavior, not just structure — what does the system DO?', 'Write everything down as spec artifacts — understanding not captured is understanding lost'] },
      { startTime: 96, layout: 'callout', title: 'Remember', callout: { variant: 'tip', text: 'The goal isn\'t to understand the code. The goal is to produce spec artifacts that capture the system\'s behavior. The code is the input; the spec is the output.' } },
    ],
  },

  'm-lesson-2-2': {
    audioSrc: '/media/module2-lesson2-systematic-analysis.mp3',
    slides: [
      { startTime: 0, layout: 'title', title: 'Simulation: Systematic Analysis', subtitle: 'Module 2, Lesson 2 — Building the Behavior Inventory', image: '/images/m2-systematic-analysis.webp' },
      { startTime: 13, layout: 'bullets', title: 'Task 1: Domain Entities & Relationships', subtitle: 'Where to look: Models/*.cs and Data/NorthwindDbContext.cs', bullets: ['Map every entity class and its properties', 'Check DbSet properties for the full entity list', 'Review seed data for business context', 'Document relationships (Customer → Orders → OrderDetails)'] },
      { startTime: 26, layout: 'bullets', title: 'Task 2: Extract Business Rules', subtitle: 'Key files: Services/OrderService.cs, CustomerService.cs, ShippingCalculator.cs', bullets: ['Order lifecycle and approval workflow (OrderService.cs)', 'Credit checks and customer tier rules (CustomerService.cs)', 'Shipping rate calculations (ShippingCalculator.cs)', 'Mark each rule with confidence: high / medium / low'] },
      { startTime: 39, layout: 'bullets', title: 'Task 3: Automated Processes', subtitle: 'Where to look: BatchJobs/ directory', bullets: ['NightlyOrderProcessor.cs — auto-approval, EDI batch, reconciliation', 'AuditLogPurge.cs — log cleanup (is it actually working?)', 'WeeklyInventoryJob.cs — stock level management', 'Document: what triggers each job, what happens if it fails'] },
      { startTime: 52, layout: 'bullets', title: 'Task 4: Integration Points', subtitle: 'Search for UNC paths: \\\\NWFS01, \\\\NWMAIL01, \\\\NWPRINT01', bullets: ['OrderService.cs — EDI export and SMTP email', 'Config/AppConfig.cs — external system path configuration', 'Utilities/NorthwindHelpers.cs — file server and print server paths', 'appsettings.json — connection strings and external URLs'] },
      { startTime: 65, layout: 'callout', title: 'Watch for Duplicated Logic', callout: { variant: 'warning', text: 'Compare the shipping calculation in Services/OrderService.cs with Utilities/ShippingCalculator.cs — they don\'t use the same rates. Which one is correct? Flag this with [NEEDS SME VALIDATION].' } },
      { startTime: 78, layout: 'bullets', title: 'Behavior Inventory & Deliverable', subtitle: 'For every discovered behavior, document:', bullets: ['Type: user-facing | automated | integration', 'Source: exact file and location in the code', 'Confidence: high | medium | low', 'Needs SME Validation: yes/no', 'Deliverable: A complete Behavior Inventory with confidence ratings'] },
    ],
  },

  'm-lesson-2-3': {
    audioSrc: '/media/module2-lesson3-dependency-mapping.mp3',
    slides: [
      { startTime: 0, layout: 'title', title: 'Dependency Mapping', subtitle: 'Module 2, Lesson 3 — Five Dimensions You Can\'t Afford to Miss', image: '/images/m2-dependency-mapping.webp' },
      { startTime: 15, layout: 'bullets', title: 'Why Dimensions Matter', subtitle: 'Missing any dimension means the migration plan has a gap.', bullets: ['Every legacy app has dependencies across multiple dimensions', 'Each dimension requires different migration strategies', 'Risk scoring helps prioritize: low / medium / high / blocking'] },
      { startTime: 30, layout: 'bullets', title: 'Code & Data Dependencies', bullets: ['Code: Libraries, packages, frameworks, shared components → Version incompatibilities, deprecated APIs', 'Data: Databases, stored procedures, views, cross-DB references → Schema drift, business logic migration'] },
      { startTime: 45, layout: 'bullets', title: 'Integration & Infrastructure Dependencies', bullets: ['Integration: APIs, message queues, file shares, external systems → Interface contracts, timing, format changes', 'Infrastructure: Runtime platforms, middleware, scheduling → Platform-specific features, licensing'] },
      { startTime: 60, layout: 'bullets', title: 'Identity Dependencies', bullets: ['Directory services, service accounts, certificates', 'Auth modernization and secret rotation needed', 'Service-to-service trust relationships must be preserved', 'Often the most overlooked dimension in migration planning'] },
      { startTime: 75, layout: 'bullets', title: 'Creating the Dependency Map', subtitle: 'A formal spec artifact that captures:', bullets: ['What depends on what', 'Which dependencies are internal vs. external', 'Which are easy to migrate vs. require redesign', 'Risk scoring: low / medium / high / blocking'] },
      { startTime: 90, layout: 'callout', title: 'Critical Artifact', callout: { variant: 'warning', text: 'The dependency map is the second most important migration artifact after the behavior spec. Miss a dependency and the migration fails in production.' } },
    ],
  },

  'm-lesson-2-4': {
    audioSrc: '/media/module2-lesson4-reverse-engineer-spec.mp3',
    slides: [
      { startTime: 0, layout: 'title', title: 'Reverse-Engineer the AS-IS Spec', subtitle: 'Module 2, Lesson 4 — From Code Chaos to Formal Specification', image: '/images/m2-reverse-engineer-spec.webp' },
      { startTime: 15, layout: 'bullets', title: 'Simulation Overview', subtitle: 'Combine the Behavior Inventory and Dependency Map into a formal spec.', bullets: ['The AS-IS spec captures everything the legacy system does', 'This is the foundation artifact for the entire migration', 'It must be complete, validated, and traceable'] },
      { startTime: 30, layout: 'bullets', title: 'Steps 1–2: Formalize the Specification', bullets: ['Combine Behavior Inventory + Dependency Map using /speckit.specify', 'The AS-IS spec must capture: all user stories, all automated behaviors', 'All integration contracts, non-functional characteristics', 'Known limitations and technical debt'] },
      { startTime: 45, layout: 'bullets', title: 'Steps 3–4: Clarify and Validate', bullets: ['Run /speckit.clarify — the pipeline surfaces gaps and ambiguities', 'Mark remaining unknowns with [NEEDS SME VALIDATION]', 'These become your SME interview questions', 'Every unknown resolved now saves days during implementation'] },
      { startTime: 60, layout: 'bullets', title: 'What the Clarify Step Surfaces', bullets: ['"This behavior references a data source not in the dependency map"', '"These two business rules appear to contradict each other"', '"No validation criteria specified for this integration"', 'Each surfaced gap is a potential migration risk avoided'] },
      { startTime: 75, layout: 'bullets', title: 'Spec-kit Commands', subtitle: 'Two commands drive this exercise:', bullets: ['/speckit.specify — Formalize the AS-IS specification', '/speckit.clarify — Surface gaps and ambiguities', 'Run both iteratively until the spec is clean'] },
      { startTime: 90, layout: 'callout', title: 'Debrief', callout: { variant: 'tip', text: 'Compare specs across teams. Are they describing the same system? What did some teams capture that others missed? This demonstrates why the clarify step exists.' } },
    ],
  },

  /* ───────── MODULE 3 ───────── */

  'm-lesson-3-1': {
    audioSrc: '/media/module3-lesson1-respecification-process.mp3',
    slides: [
      { startTime: 0, layout: 'title', title: 'The Re-Specification Process', subtitle: 'Module 3, Lesson 1 — Same Behaviors, New Architecture', image: '/images/m3-respecification-process.webp' },
      { startTime: 15, layout: 'bullets', title: 'The Core Question', subtitle: '"For each thing the legacy system does, how should the cloud system do it?"', bullets: ['Take each behavior from the AS-IS spec', 'Decide: keep as-is, modify, replace, or remove', 'Specify the cloud-native equivalent', 'Document the rationale for every decision'] },
      { startTime: 30, layout: 'bullets', title: 'The Re-Specification Workflow', bullets: ['1. Take each behavior from the AS-IS spec', '2. Decide: keep as-is, modify, replace, or remove', '3. Specify the cloud-native equivalent', '4. Add cloud-specific requirements (scaling, availability, security)', '5. Document the rationale for every decision'] },
      { startTime: 45, layout: 'bullets', title: 'Categories of Change', bullets: ['Same behavior, same approach → Copy from AS-IS, note "unchanged"', 'Same behavior, different platform → Rewrite implementation section', 'Same behavior, redesigned → New architecture, behavior parity required'] },
      { startTime: 60, layout: 'bullets', title: 'Categories of Change (cont.)', bullets: ['New cloud capability → New spec item (monitoring, auto-scaling, etc.)', 'Removed capability → Documented as removed with rationale', 'Every change gets a rationale — no "we just picked this"'] },
      { startTime: 75, layout: 'callout', title: 'Behavior Parity First', callout: { variant: 'info', text: 'The cloud target spec is the contract the customer signs off on before implementation begins. Behavior parity first, enhancement second — don\'t mix migration with new features in the spec.' } },
      { startTime: 90, layout: 'bullets', title: 'Key Concepts', bullets: ['The TO-BE spec should be readable independently', 'Someone who never saw the legacy system should understand what they\'re building', 'The delta between AS-IS and TO-BE IS the migration scope', 'If it\'s not in the delta, it\'s not being migrated'] },
    ],
  },

  'm-lesson-3-2': {
    audioSrc: '/media/module3-lesson2-cloud-target-spec.mp3',
    slides: [
      { startTime: 0, layout: 'title', title: 'Write the Cloud Target Spec', subtitle: 'Module 3, Lesson 2 — From AS-IS to TO-BE', image: '/images/m3-cloud-target-spec.webp' },
      { startTime: 14, layout: 'bullets', title: 'Simulation Overview', subtitle: 'Working from your AS-IS spec, create the TO-BE cloud target specification.', bullets: ['For each AS-IS behavior, create a TO-BE entry', 'Mark each as: unchanged / replatformed / refactored / rearchitected / replaced', 'Specify the target architecture approach'] },
      { startTime: 28, layout: 'bullets', title: 'Exercise Steps 1–3', bullets: ['1. Create TO-BE entries for each AS-IS behavior', '2. Specify the target architecture approach (not specific services)', '3. Add cloud-native requirements: availability, scaling, security, observability'] },
      { startTime: 42, layout: 'bullets', title: 'Exercise Steps 4–6', bullets: ['4. Run /speckit.specify to formalize the cloud target spec', '5. Run /speckit.clarify to surface gaps', '6. Run /speckit.analyze for AS-IS ↔ TO-BE cross-check'] },
      { startTime: 56, layout: 'bullets', title: 'What /speckit.analyze Checks', bullets: ['Coverage: Is everything from the legacy spec addressed?', 'Consistency: Do the architectural decisions align with the constitution?', 'Traceability: Can you trace every TO-BE item back to an AS-IS item?'] },
      { startTime: 70, layout: 'bullets', title: 'Spec-kit Commands', bullets: ['/speckit.specify — Formalize the TO-BE specification', '/speckit.clarify — Surface gaps in the cloud target spec', '/speckit.analyze — Cross-check AS-IS ↔ TO-BE coverage'] },
      { startTime: 84, layout: 'callout', title: 'Deliverable', callout: { variant: 'info', text: 'A cloud target spec.md — the TO-BE specification. Combined with the AS-IS spec, this pair defines the complete migration. The delta between them IS the work.' } },
    ],
  },

  'm-lesson-3-3': {
    audioSrc: '/media/module3-lesson3-architecture-review.mp3',
    slides: [
      { startTime: 0, layout: 'title', title: 'Architecture Review', subtitle: 'Module 3, Lesson 3 — Well-Architected Framework Review', image: '/images/m3-architecture-review.webp' },
      { startTime: 15, layout: 'bullets', title: 'The Five Pillars', subtitle: 'Review the cloud target architecture against each pillar.', bullets: ['Reliability — Is the target more resilient? DR strategy defined?', 'Security — Identity modernized? Data encrypted at rest and in transit?'] },
      { startTime: 30, layout: 'bullets', title: 'The Five Pillars (cont.)', bullets: ['Cost Optimization — Right-sized for day-1? Consumption-based where appropriate?', 'Operational Excellence — CI/CD? Monitoring? Runbooks? Who runs this?', 'Performance Efficiency — Meets current baselines? Can it scale for growth?'] },
      { startTime: 45, layout: 'bullets', title: 'Common Migration Architecture Mistakes', bullets: ['Rehosting everything and calling it "cloud-native"', 'Over-engineering day-1 architecture for hypothetical future scale', 'Migrating without establishing monitoring first', 'Ignoring operational readiness — "who runs this after cutover?"'] },
      { startTime: 60, layout: 'bullets', title: 'Group Exercise', subtitle: 'Each team presents their TO-BE spec to the class.', bullets: ['Review against the 5 pillars', 'Identify the top 3 risks per team\'s migration design', 'Discussion: Are the risks in the technology choices or in the spec coverage?'] },
      { startTime: 75, layout: 'callout', title: 'The Architecture Review Lesson', callout: { variant: 'tip', text: 'Most architecture risks in migrations come from specification gaps, not technology choices. A well-specified migration with simple technology beats a poorly-specified migration with fancy technology every time.' } },
      { startTime: 90, layout: 'bullets', title: 'Key Takeaways', bullets: ['The spec IS the architecture document — it\'s reviewed, not just the diagrams', 'Every architectural decision needs a documented rationale', 'Review early, review often — architecture review is not a gate, it\'s a practice'] },
    ],
  },

  'm-lesson-3-4': {
    audioSrc: '/media/module3-lesson4-migration-plan.mp3',
    slides: [
      { startTime: 0, layout: 'title', title: 'The Migration Plan', subtitle: 'Module 3, Lesson 4 — Wave-Based Planning from the Spec Pair', image: '/images/m3-migration-plan.webp' },
      { startTime: 14, layout: 'bullets', title: 'Simulation Overview', subtitle: 'Generate and refine the complete migration plan.', bullets: ['Inputs: Constitution + AS-IS spec + TO-BE spec', 'Output: A phased migration plan with waves', '/speckit.plan reads all three artifacts to generate the plan'] },
      { startTime: 28, layout: 'bullets', title: 'Exercise Steps', bullets: ['1. Run /speckit.plan to generate the plan', '2. Review for: wave structure, data migration, integration rewiring', '3. Review for: cutover strategy, risk register', '4. Run /speckit.analyze — cross-check plan ↔ specs ↔ constitution'] },
      { startTime: 42, layout: 'bullets', title: 'Plan Artifacts — Part 1', bullets: ['plan.md — Target architecture, wave structure, phasing strategy', 'data-migration.md — Schema mapping, transformation rules, validation criteria', 'contracts/ — Interface contracts for migrated integrations'] },
      { startTime: 56, layout: 'bullets', title: 'Plan Artifacts — Part 2', bullets: ['cutover-plan.md — Go-live sequence, rollback procedures, validation checklist', 'risk-register.md — Risks, mitigations, contingencies', 'Every artifact traceable back to the spec pair'] },
      { startTime: 70, layout: 'bullets', title: 'Plan Validation Questions', bullets: ['Does the plan address every item in the TO-BE spec?', 'Is the wave ordering safe (foundations before features)?', 'Are there dependencies between waves not reflected in the ordering?', 'Does every wave have validation criteria?'] },
      { startTime: 84, layout: 'bullets', title: 'Spec-kit Commands', bullets: ['/speckit.plan — Generate migration plan from spec pair', '/speckit.analyze — Cross-check plan vs. specs vs. constitution', 'Iterate until the plan passes all cross-checks'] },
      { startTime: 100, layout: 'callout', title: 'Deliverable', callout: { variant: 'info', text: 'A complete migration plan with wave structure, data migration strategy, integration approach, and cutover procedures — all generated from and traceable to the spec pair.' } },
    ],
  },

  /* ───────── MODULE 4 ───────── */

  'm-lesson-4-1': {
    audioSrc: '/media/module4-lesson1-specifying-data-migration.mp3',
    slides: [
      { startTime: 0, layout: 'title', title: 'Specifying Data Migration', subtitle: 'Module 4, Lesson 1 — Why Data Migrations Fail', image: '/images/m4-data-migration.webp' },
      { startTime: 16, layout: 'bullets', title: 'Why Data Migrations Fail', bullets: ['Schema assumptions — "we thought it was the same"', 'Business logic hidden in stored procedures, triggers, views', 'Data quality issues only visible at scale', 'Missing validation criteria — "it migrated, but is it right?"'] },
      { startTime: 32, layout: 'bullets', title: 'The Spec-Driven Approach — Steps 1–3', bullets: ['1. Inventory the data layer — tables, views, stored procedures, triggers, relationships', '2. Specify each object — what it holds, what depends on it, what it computes', '3. Map source → target — schema mapping as a spec artifact'] },
      { startTime: 48, layout: 'bullets', title: 'The Spec-Driven Approach — Steps 4–5', bullets: ['4. Specify transformations — data type changes, encoding, collation, restructuring', '5. Define validation criteria — how to prove the data migrated correctly', 'Every mapping decision is documented and traceable'] },
      { startTime: 64, layout: 'bullets', title: 'Validation Criteria as Acceptance Criteria', bullets: ['Row count parity', 'Checksum comparison on key tables', 'Business rule verification (calculated fields produce the same results)', 'Referential integrity post-migration'] },
      { startTime: 80, layout: 'callout', title: 'The Stored Procedure Decision', callout: { variant: 'tip', text: 'A key decision for every data migration: migrate stored procedure logic to the cloud database, or extract it to the application layer? Spec both options, compare tradeoffs, document the decision.' } },
      { startTime: 96, layout: 'callout', title: 'Key Takeaway', callout: { variant: 'info', text: 'Data migration without specification is data migration without verification. If you can\'t specify what "correct" looks like, you can\'t prove the migration worked.' } },
    ],
  },

  'm-lesson-4-2': {
    audioSrc: '/media/module4-lesson2-data-migration-spec.mp3',
    slides: [
      { startTime: 0, layout: 'title', title: 'Simulation: Data Migration Spec', subtitle: 'Module 4, Lesson 2 — Analyze the Northwind Database Layer', image: '/images/m4-data-migration-spec.webp' },
      { startTime: 14, layout: 'callout', title: 'Where to Look in the Repo', callout: { variant: 'warning', text: 'Data/NorthwindDbContext.cs (EF Core context with DbSets, relationships, seed data) and Models/*.cs (entity classes including SupportingModels.cs with AuditLog, SystemConfig, TaxRate, DiscountCode).' } },
      { startTime: 28, layout: 'bullets', title: 'Steps 1–2: Analyze the Data Layer', bullets: ['Analyze Data/NorthwindDbContext.cs — entity relationships, seed data, hardcoded DB path fallback', 'Review Models/*.cs — map every entity class and properties', 'Don\'t miss SupportingModels.cs — operational tables that are easy to overlook'] },
      { startTime: 42, layout: 'bullets', title: 'Steps 3–5: Create the Migration Spec', bullets: ['Create a data migration spec (data-migration.md)', 'Produce schema mappings: source entity → target entity', 'Document transformation rules and rationale (e.g., SystemConfig → Azure App Configuration)'] },
      { startTime: 56, layout: 'bullets', title: 'Steps 6–8: Validate and Clarify', bullets: ['Identify business logic embedded in the data layer', 'Check NorthwindDbContext.cs for config logic and Services/ for query-embedded rules', 'Define testable validation criteria for data correctness', 'Run /speckit.clarify to surface mapping gaps'] },
      { startTime: 70, layout: 'bullets', title: 'Key Artifacts to Map', bullets: ['Customer, Order, OrderDetail, Product, Category, Employee, Supplier, Shipper entities', 'AuditLog — growing unbounded (broken purge job)', 'SystemConfig — app settings stored in DB', 'TaxRate, DiscountCode — business configuration tables'] },
      { startTime: 84, layout: 'callout', title: 'Deliverable', callout: { variant: 'info', text: 'A data-migration.md with mappings, transformations, logic decisions, and validation criteria. Every schema object accounted for, every transformation justified.' } },
    ],
  },

  'm-lesson-4-3': {
    audioSrc: '/media/module4-lesson3-integration-rewiring.mp3',
    slides: [
      { startTime: 0, layout: 'title', title: 'Specifying Integration Rewiring', subtitle: 'Module 4, Lesson 3 — The Highest-Risk Migration Items', image: '/images/m4-integration-rewiring.webp' },
      { startTime: 15, layout: 'bullets', title: 'Why Integrations Are Highest Risk', subtitle: 'Integration points cross system boundaries.', bullets: ['External systems don\'t care about your migration', 'They care that the interface works', 'A broken integration = a broken business process'] },
      { startTime: 30, layout: 'bullets', title: 'Types of Integration', bullets: ['File-based integrations (drops, pickups, batch transfers)', 'Message-based integrations (queues, topics, events)', 'API integrations (synchronous calls, webhooks)'] },
      { startTime: 45, layout: 'bullets', title: 'Types of Integration (cont.)', bullets: ['Database-level integrations (linked servers, shared tables, replication)', 'Identity integrations (SSO, service-to-service auth)', 'Each type requires a different migration approach'] },
      { startTime: 60, layout: 'bullets', title: 'Integration Contracts', subtitle: 'Every integration gets a formal contract:', bullets: ['Input/output formats — what does each side expect?', 'Timing and SLAs — real-time? batch? within what window?', 'Error handling — what happens when it fails?'] },
      { startTime: 75, layout: 'callout', title: 'The Anti-Corruption Layer', callout: { variant: 'warning', text: 'During migration, you may need an adapter between the old and new systems. This Anti-Corruption Layer translates between interfaces so external systems continue working during the parallel-run period.' } },
      { startTime: 90, layout: 'bullets', title: 'Key Takeaway', bullets: ['Every integration point needs a formal contract in the contracts/ folder', 'The ACL protects both systems during the transition', 'Missing an integration contract means the migration is incomplete', 'Test every contract: "When A sends X, B receives Y"'] },
    ],
  },

  'm-lesson-4-4': {
    audioSrc: '/media/module4-lesson4-integration-contracts.mp3',
    slides: [
      { startTime: 0, layout: 'title', title: 'Simulation: Integration Contracts', subtitle: 'Module 4, Lesson 4 — Write Contracts for Every Northwind Integration', image: '/images/m4-integration-contracts.webp' },
      { startTime: 15, layout: 'callout', title: 'Northwind Integration Points', callout: { variant: 'warning', text: 'Services/OrderService.cs (EDI export, SMTP), Config/AppConfig.cs (UNC paths), Utilities/NorthwindHelpers.cs (file server, print server), BatchJobs/NightlyOrderProcessor.cs (EDI batch), appsettings.json (connection strings).' } },
      { startTime: 30, layout: 'bullets', title: 'Exercise Steps', bullets: ['1. Write formal contracts for every integration (input schema, output schema, SLA, error behavior)', '2. grep for \\\\NW across the codebase to find all UNC references', '3. Specify cloud-native replacements (EDI → Blob Storage + Event Grid, SMTP → SendGrid)'] },
      { startTime: 45, layout: 'bullets', title: 'Exercise Steps (cont.)', bullets: ['4. Design the Anti-Corruption Layer for parallel-run period', '5. Define validation tests: "When system A sends X, system B receives Y"', '6. Run /speckit.analyze for full consistency check'] },
      { startTime: 60, layout: 'bullets', title: '/speckit.analyze Cross-Checks', bullets: ['AS-IS spec ↔ TO-BE spec ↔ plan ↔ data migration ↔ integration contracts', 'Are there integrations in the AS-IS spec without contracts?', 'Does the wave ordering account for integration dependencies?'] },
      { startTime: 75, layout: 'bullets', title: 'End of Day 2 — What You Have', bullets: ['✅ Constitution (standards and constraints)', '✅ AS-IS spec (what the system does today)', '✅ TO-BE spec (what the cloud system will do)', '✅ Plan (waves, architecture, phasing)', '✅ Data migration spec (mappings, transformations, validation)', '✅ Integration contracts (interfaces, SLAs, Anti-Corruption Layer)'] },
      { startTime: 90, layout: 'callout', title: 'All Traceable', callout: { variant: 'tip', text: 'All generated through the SDD pipeline. All cross-checked by /speckit.analyze. All traceable. Tomorrow: execution — and a surprise.' } },
    ],
  },

  /* ───────── MODULE 5 ───────── */

  'm-lesson-5-1': {
    audioSrc: '/media/module5-lesson1-generating-tasks.mp3',
    slides: [
      { startTime: 0, layout: 'title', title: 'Generating Migration Tasks', subtitle: 'Module 5, Lesson 1 — How /speckit.tasks Works for Migration', image: '/images/m5-generating-tasks.webp' },
      { startTime: 14, layout: 'bullets', title: 'Migration Tasks Are Different', subtitle: 'How they differ from greenfield tasks:', bullets: ['Tasks reference both the AS-IS and TO-BE specs', 'Ordering follows the wave structure from the plan', 'Each task includes rollback criteria', 'Validation tasks are interspersed (not saved for the end)'] },
      { startTime: 28, layout: 'bullets', title: 'Ordering Principle 1–2', bullets: ['1. Foundation before features — infrastructure, identity, monitoring first', '2. Data before application — database must be ready before the app can use it', 'Get the basics right before building on top'] },
      { startTime: 42, layout: 'bullets', title: 'Ordering Principle 3–4', bullets: ['3. Internal before external — get the system working before rewiring integrations', '4. Validate at every boundary — not just at the end', 'Each wave boundary is a validation checkpoint'] },
      { startTime: 56, layout: 'callout', title: 'Wave-Based Execution', callout: { variant: 'info', text: 'Each wave produces a deployable, testable increment. If Wave 1 fails validation, you don\'t proceed to Wave 2. The spec and plan tell you exactly what each wave must deliver.' } },
      { startTime: 70, layout: 'bullets', title: 'Task Structure', bullets: ['Each task traces to a spec item and a plan wave', 'Rollback criteria: "If this fails, revert to…"', 'Validation criteria: "This task is done when…"', 'Dependencies: "This task requires X to be complete"'] },
      { startTime: 84, layout: 'callout', title: 'Key Takeaway', callout: { variant: 'tip', text: 'Tasks without specs are guesses. Tasks from specs are contracts. The /speckit.tasks command ensures every task is traceable, ordered, and validated.' } },
    ],
  },

  'm-lesson-5-2': {
    audioSrc: '/media/module5-lesson2-tasks-implementation.mp3',
    slides: [
      { startTime: 0, layout: 'title', title: 'Simulation: Tasks & Implementation', subtitle: 'Module 5, Lesson 2 — Generate Tasks and Build Waves 0–1', image: '/images/m5-tasks-implementation.webp' },
      { startTime: 13, layout: 'bullets', title: 'Simulation Overview', subtitle: 'Generate the migration task list and build the first two waves.', bullets: ['This is where specs turn into executable work', 'Each wave is independently deployable and testable', 'Review everything against the constitution'] },
      { startTime: 26, layout: 'bullets', title: 'Step 1–2: Generate and Review Tasks', bullets: ['Run /speckit.tasks — generate the sequenced migration task list', 'Review task ordering: does it follow wave dependencies?', 'Are validation tasks present at each boundary?', 'Can anything be safely parallelized?'] },
      { startTime: 39, layout: 'bullets', title: 'Step 3: Wave 0 — Foundation', bullets: ['Run /speckit.implement for Wave 0', 'Infrastructure scaffolding', 'Identity configuration', 'Monitoring setup', 'This is the base everything else builds on'] },
      { startTime: 52, layout: 'bullets', title: 'Step 4: Wave 1 — Data Layer', bullets: ['Run /speckit.implement for Wave 1', 'Data migration scripts', 'Data validation tests', 'Schema transformation code', 'Verify data layer before building app layer on top'] },
      { startTime: 65, layout: 'bullets', title: 'Step 5: Review Against Constitution', bullets: ['Are all constraints from the constitution followed?', 'Are quality gates addressed at each wave boundary?', 'Is everything traceable to spec items?', 'Would this pass an architecture review?'] },
      { startTime: 78, layout: 'bullets', title: 'Commands & Deliverable', bullets: ['/speckit.tasks — Generate sequenced migration tasks', '/speckit.implement — Generate Wave 0 foundation scaffolding', '/speckit.implement — Generate Wave 1 data migration scripts', 'Deliverable: Task list + implementation scaffolding for Waves 0–1'] },
    ],
  },

  'm-lesson-5-3': {
    audioSrc: '/media/module5-lesson3-the-surprise.mp3',
    slides: [
      { startTime: 0, layout: 'title', title: 'THE SURPRISE', subtitle: 'Module 5, Lesson 3 — 🔒 The Sealed Envelope', image: '/images/m5-the-surprise.webp' },
      { startTime: 14, layout: 'callout', title: 'The Sealed Envelope', callout: { variant: 'warning', text: 'The instructor hands each team a sealed envelope. Inside: a description of a previously unknown integration or behavior that nobody mentioned. This is the moment that tests your entire spec-driven process.' } },
      { startTime: 28, layout: 'bullets', title: 'Surprise: Broken Batch Job', subtitle: 'BatchJobs/AuditLogPurge.cs', bullets: ['The AuditLogPurge batch job has been broken since February 2020', 'The audit_logs table is growing unbounded', 'Nobody noticed — until now', 'How does this affect your data migration spec?'] },
      { startTime: 42, layout: 'bullets', title: 'Surprise: Conflicting Business Logic', subtitle: 'Services/OrderService.cs vs. Utilities/ShippingCalculator.cs', bullets: ['The shipping calculation uses DIFFERENT rates in two files', 'Which one is the source of truth?', 'Customers may have been overcharged', 'This needs [NEEDS SME VALIDATION] immediately'] },
      { startTime: 56, layout: 'bullets', title: 'More Surprises', bullets: ['Config/AppConfig.cs — Settings from 4 sources with silent overrides', 'Config/AuthHelper.cs — Hardcoded super-admins who left the company', 'Static session store that isn\'t thread-safe', 'Each surprise maps to real items in the Northwind codebase'] },
      { startTime: 70, layout: 'bullets', title: 'Exercise: Don\'t Panic — Spec It', bullets: ['1. Add the discovery to the AS-IS spec', '2. Assess impact: does this change TO-BE? The plan? Wave ordering?', '3. Run /speckit.clarify — what new ambiguities surfaced?'] },
      { startTime: 84, layout: 'bullets', title: 'Exercise Steps (cont.)', bullets: ['4. Update TO-BE spec, plan, and contracts as needed', '5. Run /speckit.analyze — does everything still hold together?', '6. Adjust the task list — where does this new work fit?'] },
      { startTime: 98, layout: 'callout', title: 'The Key Lesson', callout: { variant: 'tip', text: 'In a spec-driven migration, surprises are just new spec items. The pipeline absorbs them. Without specs, a surprise derails the project. With specs, it\'s a controlled change with traceable impact.' } },
    ],
  },

  'm-lesson-5-4': {
    audioSrc: '/media/module5-lesson4-validation-parity.mp3',
    slides: [
      { startTime: 0, layout: 'title', title: 'Validation & Proving Behavior Parity', subtitle: 'Module 5, Lesson 4 — The Validation Hierarchy', image: '/images/m5-validation-parity.webp' },
      { startTime: 16, layout: 'bullets', title: 'The Validation Hierarchy', subtitle: 'Six levels of validation, from basic to complete:', bullets: ['Smoke tests — It deploys and runs (after every deployment)', 'Behavior parity tests — It does the same thing legacy did (per capability)', 'Data validation — The data migrated correctly (after data migration)'] },
      { startTime: 32, layout: 'bullets', title: 'Validation Hierarchy (cont.)', bullets: ['Integration tests — External systems still work (after rewiring)', 'Performance tests — It meets the baseline (pre-cutover)', 'User acceptance — Users confirm their workflows work (pre-cutover)'] },
      { startTime: 48, layout: 'bullets', title: 'Writing Validation Criteria from the Spec', bullets: ['Every behavior in the TO-BE spec needs acceptance criteria', '"Given [legacy input], the migrated system produces [same output]"', '"Data query X returns the same results"', '"Batch process Y completes within the same time window"'] },
      { startTime: 64, layout: 'bullets', title: 'The Traceability Chain', subtitle: 'When validation fails, trace backwards:', bullets: ['Code → Task → Plan → TO-BE Spec → AS-IS Spec', 'Find where the spec and reality diverged', 'Fix at the spec level, not the code level', 'Then regenerate from the corrected spec'] },
      { startTime: 80, layout: 'callout', title: 'Simulation Checkpoint', callout: { variant: 'info', text: 'Write validation criteria for your migrated Northwind system, including the surprise discovery. Run /speckit.analyze one final time to confirm full coverage.' } },
      { startTime: 96, layout: 'bullets', title: 'Key Takeaway', bullets: ['Validation without specification is testing without requirements', 'The spec tells you what "correct" looks like', 'Behavior parity is provable when both AS-IS and TO-BE are specified', 'The traceability chain lets you diagnose failures systematically'] },
    ],
  },

  /* ───────── MODULE 6 ───────── */

  'm-lesson-6-1': {
    audioSrc: '/media/module6-lesson1-portfolio-scale.mp3',
    slides: [
      { startTime: 0, layout: 'title', title: 'From One App to a Portfolio', subtitle: 'Module 6, Lesson 1 — Scaling the Migration Process', image: '/images/m6-portfolio-scale.webp' },
      { startTime: 16, layout: 'bullets', title: 'Scaling the Process', subtitle: 'What you did with Northwind is the process for ONE application.', bullets: ['A migration programme has dozens or hundreds of apps', 'The process must be repeatable, templateable, and governable', 'The key: a migration factory model'] },
      { startTime: 32, layout: 'bullets', title: 'The Migration Factory Model', bullets: ['Assessment Line: Analyze → Reverse-Engineer → AS-IS Spec', '→ Artifacts: Behavior inventory, dependency map, AS-IS spec', 'Architecture Line: TO-BE Spec → Plan → Review', '→ Artifacts: Cloud target spec, migration plan, contracts'] },
      { startTime: 48, layout: 'bullets', title: 'Factory Model (cont.)', bullets: ['Execution Line: Tasks → Implement → Validate', '→ Artifacts: Task list, generated code, validation results', 'Each line can be staffed and run independently', 'Quality gates transfer work between lines'] },
      { startTime: 64, layout: 'bullets', title: 'Reusable IP', subtitle: 'Every migration makes the next one faster:', bullets: ['Constitution templates — organizational standards, not per-project', 'Spec patterns — common app archetypes become templates', 'Analysis prompts — standardized Copilot prompts for consistent analysis', 'Validation libraries — reusable test patterns', 'Architecture decision records — catalogued decisions for reference'] },
      { startTime: 80, layout: 'callout', title: 'IP at Scale', callout: { variant: 'tip', text: 'This mirrors how AI Migrate builds IP — patterns designed as reusable components, use cases from one customer harvested for reuse across others. Spec-flow achieves the same through artifacts.' } },
      { startTime: 96, layout: 'bullets', title: 'Key Concepts', bullets: ['The constitution is the programme governance lever', 'Update it once, all future migrations inherit the standards', 'Consistency across migrations > speed on any individual one', 'Every spec you write is IP — it survives staff turnover'] },
    ],
  },

  'm-lesson-6-2': {
    audioSrc: '/media/module6-lesson2-anti-patterns.mp3',
    slides: [
      { startTime: 0, layout: 'title', title: 'Migration Anti-Patterns', subtitle: 'Module 6, Lesson 2 — And How Specs Prevent Them', image: '/images/m6-anti-patterns.webp' },
      { startTime: 15, layout: 'bullets', title: 'Skip the Spec & Big Bang Cutover', bullets: ['Skip the Spec: Migrate based on assumptions → Pipeline won\'t produce a plan without a spec', 'Big Bang Cutover: Everything breaks at once → Wave structure, validated incrementally'] },
      { startTime: 30, layout: 'bullets', title: 'Tribal Knowledge & Feature Creep', bullets: ['Tribal Knowledge: One person leaves, migration stalls → Spec captures knowledge, person becomes reviewer', 'Feature Creep: "While we\'re at it, let\'s also…" → TO-BE spec scope is locked — enhancements are a separate spec'] },
      { startTime: 45, layout: 'bullets', title: 'Missing Integrations & No Rollback', bullets: ['Missing Integrations: "We forgot about the file drop to SAP" → Dependency map + integration contracts are mandatory', 'No Rollback: Can\'t recover if cutover fails → Rollback criteria in every task, cutover plan in every plan'] },
      { startTime: 60, layout: 'bullets', title: 'Gold-Plating & Invisible Changes', bullets: ['Gold-Plating: Over-engineering the cloud target → Constitution enforces simplicity gates and day-1 constraints', 'Invisible Changes: Nobody knows what changed → AS-IS ↔ TO-BE delta is the explicit, traceable change record'] },
      { startTime: 75, layout: 'bullets', title: 'Constitution Drift & Day 3 Panic', bullets: ['Constitution Drift: Standards evolve but aren\'t captured → Quarterly constitution reviews at programme level', 'Day 3 Surprise Panic: Unknown discovery derails project → Specs absorb change — add to AS-IS, ripple through pipeline'] },
      { startTime: 90, layout: 'callout', title: 'Pattern Recognition', callout: { variant: 'info', text: 'Each of these anti-patterns is a different symptom of the same root cause: insufficient specification. The pipeline prevents them structurally — not by relying on heroic effort.' } },
      { startTime: 105, layout: 'bullets', title: 'Summary', subtitle: '10 anti-patterns, 1 root cause:', bullets: ['Every anti-pattern traces back to a specification gap', 'The SDD pipeline prevents them by making specs mandatory', 'Structure beats heroism — every time'] },
    ],
  },

  'm-lesson-6-3': {
    audioSrc: '/media/module6-lesson3-final-review.mp3',
    slides: [
      { startTime: 0, layout: 'title', title: 'Final Review & Presentation', subtitle: 'Module 6, Lesson 3 — The Complete Spec-Driven Migration Portfolio', image: '/images/m6-final-review.webp' },
      { startTime: 15, layout: 'bullets', title: 'Finalize All Artifacts', subtitle: 'Your complete artifact set:', bullets: ['Constitution', 'AS-IS spec (including Day 3 surprise)', 'TO-BE spec (updated for the surprise)', 'Migration plan with waves'] },
      { startTime: 30, layout: 'bullets', title: 'Artifacts (cont.)', bullets: ['Data migration spec', 'Integration contracts', 'Task list with rollback criteria', 'Validation criteria', 'Run /speckit.analyze for the final cross-artifact consistency check'] },
      { startTime: 45, layout: 'bullets', title: 'Presentation Guide — Part 1', subtitle: '15 minutes per team:', bullets: ['1. Walk through the spec-flow: from cold code to migration-ready spec set', '2. How did you handle the surprise? What changed? What didn\'t?'] },
      { startTime: 60, layout: 'bullets', title: 'Presentation Guide — Part 2', bullets: ['3. What would you add to the constitution for the next migration?', '4. What reusable IP came out of this exercise?', 'Focus on the PROCESS, not the technology choices'] },
      { startTime: 75, layout: 'bullets', title: 'Evaluation Criteria — Part 1', bullets: ['✅ AS-IS spec captures legacy behavior comprehensively', '✅ TO-BE spec accounts for every AS-IS behavior', '✅ Traceability: every TO-BE item traces to an AS-IS item', '✅ Plan has clear wave structure with validation at each boundary'] },
      { startTime: 90, layout: 'bullets', title: 'Evaluation Criteria — Part 2', bullets: ['✅ Data migration spec has validation criteria', '✅ Integration contracts exist for all external touchpoints', '✅ The surprise was absorbed through spec updates, not ad-hoc fixes', '✅ Everything passes /speckit.analyze consistency checks'] },
    ],
  },

  'm-lesson-6-4': {
    audioSrc: '/media/module6-lesson4-adoption-roadmap.mp3',
    slides: [
      { startTime: 0, layout: 'title', title: 'Adoption Roadmap & What\'s Next', subtitle: 'Module 6, Lesson 4 — From Pilot to Migration Factory', image: '/images/m6-adoption-roadmap.webp' },
      { startTime: 15, layout: 'bullets', title: 'Phase 1–2: Pilot & Templatize', bullets: ['Pilot: Apply full spec-flow to one real application — document what works and what doesn\'t', 'Templatize: Harvest IP from the pilot — constitution, spec templates, analysis prompts, validation patterns'] },
      { startTime: 30, layout: 'bullets', title: 'Phase 3–4: Scale & Factory', bullets: ['Scale: Train delivery team, apply templates to 3–5 applications, refine', 'Factory: Full migration factory — continuous IP harvesting, governance metrics, programme reporting'] },
      { startTime: 45, layout: 'bullets', title: 'Integration with Existing Tools', bullets: ['Works alongside AI Migrate where it\'s deployed — strengthens the specification layer', 'GitHub Copilot as the universal accelerator — no tenant deployment needed', 'Spec artifacts integrate with Migration Cockpit for tracking and reporting'] },
      { startTime: 60, layout: 'bullets', title: 'Building the Business Case', bullets: ['AI-assisted assessment: target 30–50% productivity improvement', 'Quality: fewer post-migration incidents because the spec was validated first', 'Knowledge capture: specs survive staff turnover — critical for multi-year programmes', 'Reusable IP: each migration makes the next one faster'] },
      { startTime: 75, layout: 'bullets', title: 'Recommended Next Steps', bullets: ['1. Select a real application for pilot migration', '2. Write the migration constitution for your programme', '3. Run the spec-flow end-to-end: AS-IS → TO-BE → Plan → Execute', '4. Present the spec pair for sign-off BEFORE building anything'] },
      { startTime: 90, layout: 'bullets', title: 'AI Migrate vs. Spec-Driven Migration', bullets: ['AI Migrate: Deployed in tenant, extensive setup, purpose-built for large programmes', 'Spec-Driven: Works from source code + Copilot, no special permissions, rapid results', 'AI Migrate: Platform-embedded patterns and agent-driven quality', 'Spec-Driven: Constitution-driven quality, spec artifacts as reusable IP'] },
      { startTime: 105, layout: 'callout', title: 'Combined Use', callout: { variant: 'tip', text: 'These approaches are complementary. Use AI Migrate for orchestration at scale and spec-driven migration for specification quality. Together they deliver consistent, high-quality migration outcomes.' } },
    ],
  },
};

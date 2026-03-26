import type { Module } from '@/types';
import { lessonSlides } from './migration-slides';
import { lessonQuizzes } from './migration-quizzes';

export const migrationDay1Modules: Module[] = [
  /* ================================================================
     MODULE 1 — The Migration Challenge & Setting Up the Spec Pipeline
     ================================================================ */
  {
    id: 'm-module-1',
    number: 1,
    dayId: 'm-day-1',
    title: 'The Migration Challenge & Setting Up the Spec Pipeline',
    description:
      'Understand why migrations fail, choose the right tooling model for the job, establish SpecKit as the required migration path, and prepare for the Northwind cold-start simulation.',
    duration: '4 hours',
    objectives: [
      'Identify the root causes of migration failure and trace them to specification gaps',
      'Explain how the SDD pipeline adapts for migration (AS-IS → TO-BE spec pair)',
      'Choose between SpecKit, OpenSpec, and B-MAD based on migration scope, rigor, and team needs',
      'Choose the appropriate migration strategy based on spec depth requirements',
      'Initialize the mandatory SpecKit migration workflow and produce the first migration artifacts',
    ],
    lessons: [
      /* ---------- Lesson 1.1 ---------- */
      {
        id: 'm-lesson-1-1',
        number: 1,
        moduleId: 'm-module-1',
        title: 'Why Migrations Fail',
        duration: '45 min',
        content: [
          { type: 'slideshow' as const, ...lessonSlides['m-lesson-1-1']! },
          {
            type: 'heading',
            level: 2,
            text: 'The Migration Reality',
          },
          {
            type: 'text',
            text: '60–70% of enterprise migrations exceed their budget or timeline. The root cause is nearly always the same: a specification gap. Teams start migrating before they truly understand what the legacy system does.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Root Causes — All Traceable to a Specification Gap',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              'Undocumented business logic buried in legacy code',
              'Incomplete dependency mapping — integrations nobody mentioned',
              'Assumption-driven architecture decisions instead of evidence-based ones',
              'No traceability from legacy behavior to cloud implementation',
              '"We thought we understood it" — the most expensive sentence in migration',
            ],
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'The Hidden Cost',
            text: 'Every assumption that turns out to be wrong costs exponentially more to fix the later it\'s discovered. A missing integration found during planning costs hours. The same discovery during cutover costs weeks.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'The AI Migrate Experience — What Works at Scale',
          },
          {
            type: 'text',
            text: 'Tools like AI Migrate have demonstrated real results in large-scale migration programmes:',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              '30% productivity improvement on AI-assisted assessment tasks, with a path to ~50%',
              'Consistent assessments with reduced variability and quality guardrails',
              'Reusable IP: patterns harvested from one engagement applied across programmes',
              'Strategic value: agentic AI driving migration programmes at scale',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Why a Lighter Approach Is Also Needed',
          },
          {
            type: 'text',
            text: 'Deploying full tooling in customer tenants requires security approvals, compliance agreements, and data boundary negotiations. This is critical but time-consuming. Not every engagement justifies that overhead.',
          },
          {
            type: 'text',
            text: 'Spec-driven migration delivers the same structured outcomes using just code analysis, GitHub Copilot, and the SDD pipeline. It can complement AI Migrate where it\'s deployed, or stand alone where it isn\'t.',
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Key Insight',
            text: 'Migration is a specification problem, not a technology problem. If you can\'t specify what legacy code does, you can\'t verify the migration is correct. The spec becomes the contract between "what the old system does" and "what the new system must do."',
          },
          {
            type: 'heading',
            level: 3,
            text: 'What Students Should Learn in This Lesson',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              'Why migration failures are usually evidence failures before they become engineering failures',
              'How to distinguish a tooling problem from a specification problem',
              'How to explain the business cost of undocumented behavior, hidden dependencies, and late discovery',
              'How to articulate the case for producing a formal AS-IS specification before choosing a migration path',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Discussion Exercise',
          },
          {
            type: 'text',
            text: 'Share a migration experience where "unknown unknowns" caused problems. What would have been different if somebody had written a formal spec for what the legacy system actually did?',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Exercise Guidance',
          },
          {
            type: 'list',
            style: 'ordered',
            items: [
              'Pick one migration or modernization effort your team knows well',
              'Write down the assumption that turned out to be wrong',
              'Identify where that assumption should have been captured: behavior, dependency, data, integration, or operational process',
              'Estimate when the issue was discovered and what it cost in time, rework, or risk',
              'State what a good specification artifact would have looked like and what decision it would have improved',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Expected Outcome',
          },
          {
            type: 'text',
            text: 'By the end of the discussion, each student should be able to explain one concrete example of a migration failure as a missing-spec problem, not just a tooling or execution problem.',
          },
        ],
        quiz: lessonQuizzes['m-lesson-1-1'],
      },

      /* ---------- Lesson 1.2 ---------- */
      {
        id: 'm-lesson-1-2',
        number: 2,
        moduleId: 'm-module-1',
        title: 'Tool Selection & the Spec-Driven Migration Pipeline',
        duration: '45 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'Choose the Right Tool Before You Choose the Workflow',
          },
          { type: 'slideshow' as const, ...lessonSlides['m-lesson-1-2']! },
          {
            type: 'text',
            text: 'This course teaches migration through SpecKit, but architects should understand the broader tool landscape. The key is to match the tool to the migration problem instead of forcing every problem into the same workflow.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Tool Selection Decision Rules',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              'Use SpecKit when you need a canonical migration artifact chain: constitution, AS-IS spec, TO-BE spec, plan, tasks, and traceable implementation outputs',
              'Use OpenSpec when you are evolving an existing product or service and want lightweight brownfield change management with current-state specs plus proposed deltas',
              'Use B-MAD when the team needs guided planning, multi-role collaboration, architecture coaching, and broader agile workflow support across a larger transformation',
              'For this training, SpecKit is mandatory because the class must converge on the same migration process and the same deliverable set',
            ],
          },
          {
            type: 'table',
            headers: ['SDD Step', 'Greenfield Purpose', 'Migration Purpose'],
            rows: [
              ['Constitution', 'Define how we build', 'Define how we migrate — standards, constraints, quality gates'],
              ['Specify', 'What to build', 'What the legacy system does (reverse-engineered spec)'],
              ['Clarify', 'Resolve ambiguities', 'Validate reverse-engineered spec against SME knowledge'],
              ['Plan', 'How to build', 'How to re-architect — target architecture, phasing, data strategy'],
              ['Analyze', 'Cross-artifact consistency', 'Legacy-to-cloud traceability — does the plan cover the spec?'],
              ['Tasks', 'Implementation steps', 'Migration execution steps — ordered, with rollback criteria'],
              ['Implement', 'Generate code', 'Generate cloud-native code and infrastructure from the spec'],
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'The Migration Flow in Practice',
          },
          {
            type: 'list',
            style: 'ordered',
            items: [
              'Discover — Analyze legacy code, infrastructure, and dependencies',
              'Reverse-Engineer — Generate a spec of what the legacy system does',
              'Clarify — Validate with SMEs, flag gaps',
              'Re-Specify — Write the cloud target spec (same behaviors, new architecture)',
              'Plan — Migration waves, data strategy, integration rewiring, cutover',
              'Execute — Tasks → Implement → Validate → Iterate',
            ],
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'The Spec Pair',
            text: 'Every migration produces two specs — the AS-IS spec (what exists) and the TO-BE spec (what comes next). The delta between them IS the migration.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Tooling Options in This Course',
          },
          {
            type: 'text',
            text: 'This course is built around SpecKit as the primary delivery tool. We introduce OpenSpec and B-MAD so students understand where they fit, when to choose them, and when NOT to substitute them for the core migration workflow.',
          },
          {
            type: 'table',
            headers: ['Tool', 'Core Model', 'Best Fit for Migrations', 'Less Ideal When', 'Course Position'],
            rows: [
              ['SpecKit', 'Linear spec-driven pipeline: constitution -> specify -> clarify -> plan -> analyze -> tasks -> implement', 'Legacy modernization where you need a formal AS-IS/TO-BE spec pair, migration wave planning, and traceability from discovered behavior to implementation', 'You only need a tiny brownfield tweak or want an intentionally fluid process with minimal phase boundaries', 'Primary tool for all required exercises and the default migration path in this course'],
              ['OpenSpec', 'Lightweight change-driven spec system with current-state specs and proposed changes', 'Brownfield product evolution, incremental changes to an established system, or teams that want lighter-weight ongoing spec discipline after the migration', 'You need a prescriptive migration-learning path centered on reverse engineering and a formal migration artifact chain', 'Optional comparison tool for students who want a lighter brownfield spec workflow'],
              ['B-MAD', 'Multi-agent agile workflow with PM, architect, developer, QA, and analysis roles', 'Large product or platform transformations where guided planning, architecture collaboration, and team-role workflows matter more than a single canonical migration pipeline', 'You want one tight, prescriptive spec-first workflow for a classroom migration exercise', 'Optional advanced tool for teams that want deeper planning and role-based collaboration'],
            ],
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Primary Recommendation',
            text: 'Use SpecKit when teaching or executing the core migration method. Introduce OpenSpec and B-MAD as optional tracks: OpenSpec for lighter-weight brownfield change management, and B-MAD for larger multi-role planning and program-level coordination.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Lesson Outcome',
          },
          {
            type: 'text',
            text: 'Students should leave this lesson able to justify why SpecKit is the required tool in this course, while still knowing when OpenSpec or B-MAD would make more sense in a real delivery environment.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Optional Tool Deep-Dive Paths',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              'Required path: complete all migration exercises with SpecKit so every student experiences the same artifact chain and quality gates',
              'Optional OpenSpec path: repeat a small exercise as a change-driven brownfield update to compare lighter-weight iteration against the full migration pipeline',
              'Optional B-MAD path: use B-MAD for PRD, architecture, or brownfield documentation exercises when the team wants role-based guidance and broader agile planning support',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Key Concepts',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              '"Specify the AS-IS before designing the TO-BE"',
              'Two specs, one pipeline — the same SDD process handles both',
              'The constitution captures organizational migration standards as reusable constraints',
              'This process works regardless of source technology — the spec abstracts away the implementation',
            ],
          },
        ],
        quiz: lessonQuizzes['m-lesson-1-2'],
      },

      /* ---------- Lesson 1.3 ---------- */
      {
        id: 'm-lesson-1-3',
        number: 3,
        moduleId: 'm-module-1',
        title: 'Migration Strategies & Spec Depth',
        duration: '30 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'Not Every Migration Needs the Same Level of Specification',
          },
          { type: 'slideshow' as const, ...lessonSlides['m-lesson-1-3']! },
          {
            type: 'text',
            text: 'The amount of spec work varies by migration strategy. Understanding this helps you invest effort where it matters most.',
          },
          {
            type: 'table',
            headers: ['Strategy', 'Spec Depth', 'What to Specify'],
            rows: [
              ['Retire', 'None', 'Just the decision rationale'],
              ['Retain', 'Minimal', 'Current state documentation'],
              ['Rehost', 'Light', 'Infrastructure mapping, dependency list'],
              ['Replatform', 'Medium', 'Platform-specific adaptation points'],
              ['Refactor', 'Full', 'Behavior spec + architecture redesign'],
              ['Rearchitect', 'Full+', 'Domain decomposition + new architecture'],
              ['Rebuild', 'Full (behavior only)', 'What it does, not how — entirely new implementation'],
              ['Replace', 'Gap analysis', 'What SaaS covers vs. what needs custom work'],
            ],
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Where Spec-Driven Migration Shines',
            text: 'Spec-driven migration is most valuable for refactor, rearchitect, and rebuild strategies — where understanding behavior is the critical path. You can\'t choose the right strategy confidently until you\'ve specified what the system does.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'The Decision Process',
          },
          {
            type: 'text',
            text: 'Run a lightweight spec pass first to understand complexity. Then choose the migration strategy. Trying to choose the strategy before understanding the system is a common anti-pattern that leads to costly mid-migration strategy changes.',
          },
        ],
        quiz: lessonQuizzes['m-lesson-1-3'],
      },

      /* ---------- Lesson 1.5 ---------- */
      {
        id: 'm-lesson-1-5',
        number: 4,
        moduleId: 'm-module-1',
        title: 'Mandatory Lab: SpecKit for Migration',
        duration: '30 min',
        content: [
          { type: 'slideshow' as const, ...lessonSlides['m-lesson-1-5']! },
          {
            type: 'callout',
            variant: 'info',
            title: 'Required Tooling Lesson',
            text: 'Every student completes this lesson. SpecKit is the mandatory workflow for the migration course because it gives the class one shared artifact model and one shared quality gate sequence.',
          },
          {
            type: 'heading',
            level: 2,
            text: 'What SpecKit Must Do for This Course',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              'Create a migration-ready working area with explicit artifacts instead of chat-only reasoning',
              'Encode migration standards up front through the constitution',
              'Support the full AS-IS → TO-BE → plan → tasks → implementation chain used across Days 1–3',
              'Provide a repeatable review model so teams can compare outputs and instructors can assess quality consistently',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'SpecKit Command Map for the 3-Day Migration',
          },
          {
            type: 'table',
            headers: ['Phase', 'Primary Command', 'What Students Produce'],
            rows: [
              ['Course setup', 'specify init + /speckit.constitution', 'Initialized project and migration constitution'],
              ['Reverse engineering', '/speckit.specify + /speckit.clarify', 'AS-IS specification and validated unknowns'],
              ['Re-architecture', '/speckit.specify + /speckit.analyze', 'TO-BE specification and traceability checks'],
              ['Planning', '/speckit.plan + /speckit.analyze', 'Wave-based migration plan and cross-artifact consistency'],
              ['Execution', '/speckit.tasks + /speckit.implement', 'Migration task list and implementation scaffolding'],
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Mandatory Exercise',
          },
          {
            type: 'list',
            style: 'ordered',
            items: [
              'Initialize a migration workspace for Northwind using SpecKit',
              'Draft a migration constitution that includes quality gates, compliance constraints, validation expectations, and rollback requirements',
              'Write down where each major SpecKit command will be used during the rest of the course',
              'Confirm that every team member can explain the difference between constitution, AS-IS spec, TO-BE spec, plan, tasks, and implementation outputs',
            ],
          },
          {
            type: 'code',
            language: 'bash',
            code: `# Create the migration workspace
specify init northwind-migration --ai copilot

# Start the mandatory migration artifacts
/speckit.constitution

# Later in the course, these commands drive the rest of the migration
/speckit.specify
/speckit.clarify
/speckit.plan
/speckit.analyze
/speckit.tasks
/speckit.implement`,
            caption: 'SpecKit commands students are expected to understand and use in the course',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Deliverable',
          },
          {
            type: 'text',
            text: 'A SpecKit-initialized migration workspace, a first-pass migration constitution, and a short written explanation of how the SpecKit commands map to the migration lifecycle.',
          },
        ],
        quiz: lessonQuizzes['m-lesson-1-5'],
      },

      /* ---------- Lesson 1.6 ---------- */
      {
        id: 'm-lesson-1-6',
        number: 5,
        moduleId: 'm-module-1',
        title: 'Optional Labs: OpenSpec and B-MAD',
        duration: '30 min',
        content: [
          { type: 'slideshow' as const, ...lessonSlides['m-lesson-1-6']! },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Optional Side Tracks',
            text: 'These labs are optional. They help experienced teams compare alternative tooling models, but they do not replace the required SpecKit workflow used by the rest of the course.',
          },
          {
            type: 'heading',
            level: 2,
            text: 'OpenSpec Optional Lab',
          },
          {
            type: 'text',
            text: 'Use OpenSpec when you want lighter-weight brownfield change management. Its strength is maintaining current truth and proposed deltas, which is useful after a migration or for tightly scoped brownfield changes.',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              'Best fit: an existing system where you want to propose and track focused changes without running a full migration artifact chain',
              'Good Northwind exercise: capture one current behavior or dependency as a proposed change, such as documenting the nightly order process or clarifying a fragile integration',
              'Expected outcome: students see how a lighter spec system differs from the prescriptive migration flow taught with SpecKit',
            ],
          },
          {
            type: 'code',
            language: 'bash',
            code: `npm install -g @fission-ai/openspec@latest
cd northwind-legacy-app
openspec init

# Example prompt for the optional lab
/opsx:propose Capture the current behavior of the nightly order processing job and identify migration risks for moving it to the cloud.`,
            caption: 'OpenSpec optional lab starter commands',
          },
          {
            type: 'heading',
            level: 2,
            text: 'B-MAD Optional Lab',
          },
          {
            type: 'text',
            text: 'Use B-MAD when you want guided planning with specialized roles such as PM, Architect, and Analyst. Its strength is structured collaboration and broader planning support for complex transformations.',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              'Best fit: larger transformations where architecture, planning, and team-role coordination are more important than a single strict migration artifact sequence',
              'Good Northwind exercise: generate brownfield project context and document the current system so an architecture or planning workflow can begin from evidence',
              'Expected outcome: students see how role-based planning differs from the SpecKit document pipeline',
            ],
          },
          {
            type: 'code',
            language: 'bash',
            code: `npx bmad-method install

# In your AI workspace, start with the guide
bmad-help

# Example brownfield-oriented prompt
bmad-help I have an existing .NET migration target called Northwind Global Services. What workflow should I use first to document the project and prepare for modernization?`,
            caption: 'B-MAD optional lab starter commands',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Optional Exercise Deliverables',
          },
          {
            type: 'table',
            headers: ['Tool', 'Student Deliverable', 'What to Compare Back to SpecKit'],
            rows: [
              ['OpenSpec', 'One proposed brownfield change with proposal intent and spec direction', 'How much lighter the workflow feels, and what migration rigor you gain or lose'],
              ['B-MAD', 'A brownfield documentation or planning output guided by a specialized agent', 'How role-based planning differs from the more prescriptive SpecKit artifact chain'],
            ],
          },
        ],
        quiz: lessonQuizzes['m-lesson-1-6'],
      },

      /* ---------- Lesson 1.4 ---------- */
      {
        id: 'm-lesson-1-4',
        number: 6,
        moduleId: 'm-module-1',
        title: 'Simulation: Cold Start',
        duration: '60 min',
        content: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Simulation Exercise',
            text: '"Welcome to Northwind Global Services. Here\'s the code repository. Here\'s a one-page README from 2019. The previous architect left the company. Good luck."',
          },
          {
            type: 'heading',
            level: 2,
            text: 'Introducing the Northwind Simulation',
          },
          { type: 'slideshow' as const, ...lessonSlides['m-lesson-1-4']! },
          {
            type: 'text',
            text: 'Rather than isolated labs, the entire training is structured around a single progressive simulation. You receive a legacy application now and work it through the full spec-driven pipeline over 3 days. By the time you begin this exercise, every student should already know why SpecKit is the required path and what artifacts they are expected to produce.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'What Students Must Accomplish in This Exercise',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              'Initialize the working environment without getting blocked on setup',
              'Create the first migration artifacts that will be reused for the rest of the course',
              'Practice disciplined observation instead of jumping to solutions or cloud design too early',
              'Produce a documented first-pass assessment of the Northwind system that another team could review',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Lab Setup — Clone the Repository',
          },
          {
            type: 'text',
            text: 'The Northwind Global Services codebase is a real .NET application hosted on GitHub. Clone it now — you\'ll use it for every simulation exercise across all 3 days.',
          },
          {
            type: 'code',
            language: 'bash',
            code: `git clone https://github.com/kkabza/northwind-legacy-app.git
cd northwind-legacy-app/NorthwindGlobal`,
            caption: 'Clone and navigate into the Northwind legacy application',
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Prerequisites',
            text: 'You\'ll need Git and .NET 9 SDK installed. To build and run: dotnet build && dotnet run. The app uses SQLite — no external database setup required.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Repository Structure — What You\'re Working With',
          },
          {
            type: 'table',
            headers: ['Directory / File', 'What\'s Inside'],
            rows: [
              ['Models/', 'Domain entities — Customer, Order, Product, Category, Employee, Supplier, and more'],
              ['Services/', 'Business logic — OrderService, CustomerService, ProductService, ReportService'],
              ['Controllers/', 'MVC controllers — Home, Orders, Customers, Products, Reports, Account'],
              ['Views/', 'Razor views for the web UI'],
              ['Data/', 'NorthwindDbContext.cs — EF Core context, seed data, database configuration'],
              ['BatchJobs/', 'Scheduled tasks — NightlyOrderProcessor, AuditLogPurge, WeeklyInventoryJob'],
              ['Config/', 'AuthHelper (NTLM auth, static sessions), AppConfig (multi-source config)'],
              ['Utilities/', 'ShippingCalculator, NorthwindHelpers (utility / "God class")'],
              ['appsettings.json', 'Configuration with connection strings, UNC paths, feature flags'],
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'What\'s in the Legacy Application',
          },
          {
            type: 'table',
            headers: ['Layer', 'What\'s There', 'Why It\'s Hard'],
            rows: [
              ['User Interface', 'Razor views with embedded validation', 'Undocumented user workflows, view-level logic'],
              ['Business Logic', 'Services/ + Utilities/ + Config/', 'Rules scattered across code, config, and comments'],
              ['Data Layer', 'EF Core with SQLite (NorthwindDbContext.cs)', 'Business logic in the context, hardcoded fallback paths'],
              ['Batch Processing', 'BatchJobs/ — nightly, weekly scheduled jobs', 'Nobody documented what they do or why'],
              ['Integrations', 'UNC file shares, SMTP, EDI exports', 'Tribal knowledge — hardcoded paths to \\\\NWFS01, \\\\NWMAIL01, \\\\NWPRINT01'],
              ['Identity', 'NTLM auth with fallback forms login (Config/AuthHelper.cs)', 'Static session store, hardcoded super-admin list'],
            ],
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Technology-Agnostic by Design',
            text: 'The simulation focuses entirely on the spec-flow process — how you analyze, specify, clarify, plan, and drive the migration. The same process works whether the legacy system is .NET, Java, COBOL, Python, or anything else. We use .NET here to give you a real codebase to analyze.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Exercise Steps',
          },
          {
            type: 'list',
            style: 'ordered',
            items: [
              'Clone the repository: git clone https://github.com/kkabza/northwind-legacy-app.git',
              'Build and verify: cd northwind-legacy-app/NorthwindGlobal && dotnet build',
              'Initialize the spec-kit migration project: specify init northwind-migration --ai copilot',
              'Write a migration constitution — quality gates, compliance constraints, testing mandates, rollback requirements',
              'Open the Northwind codebase and explore freely for 20 minutes — start with Models/, Services/, and BatchJobs/',
              'Document first impressions using the structured template below',
              'Compare observations across teams — who found what?',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'What Good Looks Like',
          },
          {
            type: 'table',
            headers: ['Artifact / Outcome', 'Minimum Acceptable', 'Strong Submission'],
            rows: [
              ['Migration project initialization', 'Project is initialized and constitution exists', 'Constitution includes quality gates, compliance constraints, validation expectations, and rollback thinking'],
              ['Repository scan', 'Student can name major folders and what they likely contain', 'Student can identify likely hotspots, hidden dependencies, and likely migration risks with file references'],
              ['First impressions notes', 'Notes answer the template questions', 'Notes distinguish facts, hypotheses, and unknowns; each high-risk observation cites a probable source file or folder'],
              ['Team debrief readiness', 'Student can explain what they found', 'Student can explain what they found, what they missed, and what evidence they still need before choosing a migration strategy'],
            ],
          },
          {
            type: 'code',
            language: 'bash',
            code: `# Clone and build the legacy application
git clone https://github.com/kkabza/northwind-legacy-app.git
cd northwind-legacy-app/NorthwindGlobal
dotnet build

# Initialize the migration project
specify init northwind-migration --ai copilot`,
            caption: 'Setup and initialization commands',
          },
          {
            type: 'heading',
            level: 3,
            text: 'First Impressions Template',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              'What\'s immediately clear about this system? (Start with Models/ and Controllers/ for the domain model)',
              'What\'s unclear or suspicious? (Check Utilities/NorthwindHelpers.cs — what\'s going on in there?)',
              'Where do you think the business logic lives? (Hint: look at Services/, but also Config/ and Utilities/)',
              'What integrations can you spot? (Search for UNC paths: \\\\NWFS01, \\\\NWMAIL01, \\\\NWPRINT01)',
              'What\'s your initial risk assessment? (Check BatchJobs/ — what would break if these stopped running?)',
            ],
          },
          {
            type: 'code',
            language: 'markdown',
            code: `# Northwind Cold Start Notes

## 1. What seems immediately clear
- Domain and major capabilities:
- Main UI surface and user roles:

## 2. What is unclear or suspicious
- Files/classes that look overloaded or risky:
- Areas that need SME validation:

## 3. Where the business logic appears to live
- Primary files:
- Supporting config or utility locations:

## 4. Integrations and operational dependencies
- UNC paths / file shares:
- Email / print / exports:
- Batch jobs and scheduled work:

## 5. Initial migration risks
- Highest-risk behavior:
- Highest-risk dependency:
- Highest-risk operational process:

## 6. Evidence log
- Observation:
  Source:
  Confidence: high | medium | low
`,
            caption: 'Recommended note-taking format for the cold-start exercise',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Deliverable',
          },
          {
            type: 'text',
            text: 'An initialized migration project with a constitution, and a structured "first impressions" document.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'End-of-Lesson Success Criteria',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              'Students can explain what the Northwind system appears to do without pretending certainty where evidence is weak',
              'Students have produced a constitution and first-impressions artifact that can be reviewed by an instructor or another team',
              'Students can name at least three likely migration risks and point to the files or folders that triggered those concerns',
              'Students understand that the goal is not to solve the migration yet; the goal is to establish disciplined evidence and structured uncertainty',
            ],
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Debrief',
            text: 'The instructor reveals what\'s actually in the codebase. How much did each team find in 20 minutes? What did everybody miss? This sets up the need for systematic analysis in Module 2.',
          },
        ],
        quiz: lessonQuizzes['m-lesson-1-4'],
      },
    ],
  },

  /* ================================================================
     MODULE 2 — AI-Powered Code Analysis & Reverse Engineering
     ================================================================ */
  {
    id: 'm-module-2',
    number: 2,
    dayId: 'm-day-1',
    title: 'AI-Powered Code Analysis & Reverse Engineering',
    description:
      'Use AI to systematically analyze legacy code, extract business rules, map dependencies, and produce a formal reverse-engineered AS-IS specification.',
    duration: '4 hours',
    objectives: [
      'Use GitHub Copilot for structured legacy code analysis with consistent prompts',
      'Extract business rules with confidence ratings and source traceability',
      'Produce a complete dependency map across code, data, integrations, and infrastructure',
      'Reverse-engineer a formal AS-IS specification from the analysis artifacts',
    ],
    lessons: [
      /* ---------- Lesson 2.1 ---------- */
      {
        id: 'm-lesson-2-1',
        number: 1,
        moduleId: 'm-module-2',
        title: 'Analyzing Legacy Code with AI',
        duration: '45 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'The Analysis Challenge',
          },
          { type: 'slideshow' as const, ...lessonSlides['m-lesson-2-1']! },
          {
            type: 'text',
            text: 'Legacy codebases share common analysis challenges regardless of the technology stack:',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              'Large codebases with decades of accumulated logic',
              'Business rules embedded in unexpected places — database logic, config files, utility classes, comments',
              'Implicit dependencies — shared databases, file drops, message queues, scheduled jobs',
              'Tribal knowledge that lives in people\'s heads, not in documentation',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Using GitHub Copilot for Structured Analysis',
          },
          {
            type: 'text',
            text: 'The key is structured prompts that produce structured output. Consistent prompts lead to consistent analysis, which leads to consistent specs.',
          },
          {
            type: 'table',
            headers: ['Analysis Type', 'Example Prompt'],
            rows: [
              ['Architecture discovery', '"Explain the high-level architecture of this codebase"'],
              ['Module analysis', '"What does this module do and what are its dependencies?"'],
              ['Business rule extraction', '"Extract all business rules from this component"'],
              ['Data flow tracing', '"Trace the data flow from [input] to [output]"'],
              ['Integration discovery', '"List all external system integrations and how they work"'],
            ],
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'The Quality Lever',
            text: 'Structured prompts are the quality lever — it\'s why AI Migrate uses well-defined assessment patterns. In spec-flow, the constitution encodes the analysis standards.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Key Principles',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              'AI accelerates the reverse-engineering; the architect validates it',
              'Never trust extracted business rules without verification — mark confidence levels',
              'Analyze behavior, not just structure — what does the system DO, not just how it\'s organized',
              'Write everything down as spec artifacts — understanding that isn\'t captured is understanding that\'s lost',
            ],
          },
        ],
        quiz: lessonQuizzes['m-lesson-2-1'],
      },

      /* ---------- Lesson 2.2 ---------- */
      {
        id: 'm-lesson-2-2',
        number: 2,
        moduleId: 'm-module-2',
        title: 'Simulation: Systematic Analysis',
        duration: '75 min',
        content: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Simulation Exercise',
            text: 'Using the analysis prompts from the previous lesson, systematically investigate the Northwind codebase.',
          },
          {
            type: 'heading',
            level: 2,
            text: 'Analysis Tasks',
          },
          { type: 'slideshow' as const, ...lessonSlides['m-lesson-2-2']! },
          {
            type: 'text',
            text: 'Work through the Northwind codebase systematically. Each task below tells you where to look in the repository.',
          },
          {
            type: 'list',
            style: 'ordered',
            items: [
              'Identify all domain entities and how they relate — start with Models/*.cs and Data/NorthwindDbContext.cs (look at the DbSet properties and seed data)',
              'Extract business rules — with source locations and confidence ratings. Key files: Services/OrderService.cs (order lifecycle, approval workflow), Services/CustomerService.cs (credit checks, customer tiers), Utilities/ShippingCalculator.cs (shipping rate logic)',
              'Discover automated processes — BatchJobs/NightlyOrderProcessor.cs (auto-approval, EDI batch, reconciliation), BatchJobs/AuditLogPurge.cs (log cleanup — is it working?), BatchJobs/WeeklyInventoryJob.cs (stock level management)',
              'Catalog integration points — search for UNC paths (\\\\NWFS01, \\\\NWMAIL01, \\\\NWPRINT01), check Services/OrderService.cs for EDI export and SMTP, check Config/AppConfig.cs for external system paths',
            ],
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Watch for Duplicated Logic',
            text: 'Compare the shipping calculation in Services/OrderService.cs with Utilities/ShippingCalculator.cs — they don\'t use the same rates. Which one is correct? This is exactly the kind of finding that belongs in your behavior inventory with a [NEEDS SME VALIDATION] flag.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Legacy Behavior Inventory Template',
          },
          {
            type: 'text',
            text: 'Produce a structured document following this format for every discovered behavior:',
          },
          {
            type: 'code',
            language: 'markdown',
            code: `## Behavior: [Name]
- Type: user-facing | automated | integration
- Description: [what it does]
- Source: [where in the code]
- Confidence: high | medium | low
- Needs SME Validation: yes/no
- Dependencies: [what it depends on]`,
            caption: 'Behavior inventory entry format',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Evaluation Criteria',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              'Items marked [NEEDS SME VALIDATION] become your SME interview questions',
              'Compare inventories across teams — different approaches surface different things',
              'Coverage matters more than depth at this stage',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Deliverable',
          },
          {
            type: 'text',
            text: 'A Legacy Behavior Inventory with confidence ratings per item.',
          },
        ],
        quiz: lessonQuizzes['m-lesson-2-2'],
      },

      /* ---------- Lesson 2.3 ---------- */
      {
        id: 'm-lesson-2-3',
        number: 3,
        moduleId: 'm-module-2',
        title: 'Dependency Mapping',
        duration: '30 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'Dimensions of Dependency',
          },
          { type: 'slideshow' as const, ...lessonSlides['m-lesson-2-3']! },
          {
            type: 'text',
            text: 'Every legacy application has dependencies across multiple dimensions. Missing any dimension means the migration plan has a gap.',
          },
          {
            type: 'table',
            headers: ['Dimension', 'Examples', 'Migration Risk'],
            rows: [
              ['Code dependencies', 'Libraries, packages, frameworks, shared components', 'Version incompatibilities, deprecated APIs'],
              ['Data dependencies', 'Databases, stored procedures, views, cross-DB references', 'Schema drift, business logic migration'],
              ['Integration dependencies', 'APIs, message queues, file shares, external systems', 'Interface contracts, timing, format changes'],
              ['Infrastructure dependencies', 'Runtime platforms, middleware, scheduling, messaging', 'Platform-specific features, licensing'],
              ['Identity dependencies', 'Directory services, service accounts, certificates', 'Auth modernization, secret rotation'],
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Creating a Dependency Map',
          },
          {
            type: 'text',
            text: 'The dependency map is a formal spec artifact that captures:',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              'What depends on what',
              'Which dependencies are internal vs. external',
              'Which are easy to migrate vs. require redesign',
              'Risk scoring: low / medium / high / blocking',
            ],
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Critical Artifact',
            text: 'The dependency map is the second most important migration artifact after the behavior spec. Miss a dependency and the migration fails in production.',
          },
        ],
        quiz: lessonQuizzes['m-lesson-2-3'],
      },

      /* ---------- Lesson 2.4 ---------- */
      {
        id: 'm-lesson-2-4',
        number: 4,
        moduleId: 'm-module-2',
        title: 'Simulation: Reverse-Engineer the AS-IS Spec',
        duration: '60 min',
        content: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Simulation Exercise',
            text: 'Combine the Behavior Inventory and Dependency Map into a formal specification — the AS-IS spec that captures everything the legacy system does.',
          },
          {
            type: 'heading',
            level: 2,
            text: 'Exercise Steps',
          },
          { type: 'slideshow' as const, ...lessonSlides['m-lesson-2-4']! },
          {
            type: 'list',
            style: 'ordered',
            items: [
              'Combine the Behavior Inventory and Dependency Map into a formal specification using /speckit.specify',
              'The AS-IS spec must capture: all user stories, all automated behaviors, all integration contracts, non-functional characteristics, known limitations and technical debt',
              'Run /speckit.clarify — the pipeline surfaces gaps and ambiguities',
              'Mark remaining unknowns with [NEEDS SME VALIDATION]',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'What the Clarify Step Surfaces',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              '"This behavior references a data source not in the dependency map"',
              '"These two business rules appear to contradict each other"',
              '"No validation criteria specified for this integration"',
            ],
          },
          {
            type: 'code',
            language: 'bash',
            code: `/speckit.specify   # Formalize the AS-IS specification
/speckit.clarify   # Surface gaps and ambiguities`,
            caption: 'Spec-kit commands for AS-IS spec creation',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Deliverable',
          },
          {
            type: 'text',
            text: 'A reverse-engineered spec.md — the AS-IS specification. This is the migration\'s foundation artifact.',
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Debrief',
            text: 'Compare specs across teams. Are they describing the same system? What did some teams capture that others missed? This demonstrates why the clarify step exists.',
          },
        ],
        quiz: lessonQuizzes['m-lesson-2-4'],
      },
    ],
  },
];

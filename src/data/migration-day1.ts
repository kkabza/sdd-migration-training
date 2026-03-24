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
      'Understand why migrations fail, how the spec-driven pipeline addresses root causes, and set up the migration project that carries through all 3 days.',
    duration: '4 hours',
    objectives: [
      'Identify the root causes of migration failure and trace them to specification gaps',
      'Explain how the SDD pipeline adapts for migration (AS-IS → TO-BE spec pair)',
      'Choose the appropriate migration strategy based on spec depth requirements',
      'Initialize a spec-kit migration project and write a migration constitution',
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
            text: 'Discussion Exercise',
          },
          {
            type: 'text',
            text: 'Share a migration experience where "unknown unknowns" caused problems. What would have been different if somebody had written a formal spec for what the legacy system actually did?',
          },
        ],
        quiz: lessonQuizzes['m-lesson-1-1'],
      },

      /* ---------- Lesson 1.2 ---------- */
      {
        id: 'm-lesson-1-2',
        number: 2,
        moduleId: 'm-module-1',
        title: 'The Spec-Driven Migration Pipeline',
        duration: '45 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'From Greenfield SDD to Migration SDD',
          },
          { type: 'slideshow' as const, ...lessonSlides['m-lesson-1-2']! },
          {
            type: 'text',
            text: 'The standard SDD pipeline maps directly to migration work. Every step has a greenfield purpose and a migration-specific purpose:',
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

      /* ---------- Lesson 1.4 ---------- */
      {
        id: 'm-lesson-1-4',
        number: 4,
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
            text: 'Rather than isolated labs, the entire training is structured around a single progressive simulation. You receive a legacy application now and work it through the full spec-driven pipeline over 3 days.',
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
            type: 'heading',
            level: 3,
            text: 'Deliverable',
          },
          {
            type: 'text',
            text: 'An initialized migration project with a constitution, and a structured "first impressions" document.',
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

import type { QuizQuestion } from '@/types';

/**
 * Quiz questions for every migration course lesson (3–4 per lesson).
 * Keyed by lesson id.
 */
export const lessonQuizzes: Record<string, QuizQuestion[]> = {

  /* ───────── MODULE 1 ───────── */

  'm-lesson-1-1': [
    {
      question: 'What is the primary root cause of migration failures according to the spec-driven approach?',
      options: [
        'Choosing the wrong cloud provider',
        'The specification gap — migrating before fully understanding what the legacy system does',
        'Using outdated programming languages',
        'Insufficient budget allocation',
      ],
      correctIndex: 1,
      explanation: 'The specification gap — the difference between what teams think the system does and what it actually does — is the root cause of most migration failures.',
    },
    {
      question: 'What productivity improvement does AI Migrate target for AI-assisted assessment tasks?',
      options: ['10–15%', '20–25%', '30%, with a path to ~50%', '75–80%'],
      correctIndex: 2,
      explanation: 'AI Migrate targets a 30% productivity improvement on AI-assisted assessment tasks, with a path to approximately 50%.',
    },
    {
      question: 'According to the lesson, migration is fundamentally a _____ problem.',
      options: ['Technology', 'Budget', 'Specification', 'Staffing'],
      correctIndex: 2,
      explanation: 'Migration is a specification problem, not a technology problem. If you can\'t specify what legacy code does, you can\'t verify the migration is correct.',
    },
  ],

  'm-lesson-1-2': [
    {
      question: 'What are the two specs that every migration produces?',
      options: [
        'Technical spec and business spec',
        'AS-IS spec (what exists) and TO-BE spec (what comes next)',
        'Infrastructure spec and application spec',
        'Source spec and deployment spec',
      ],
      correctIndex: 1,
      explanation: 'Every migration produces an AS-IS spec (what the legacy system does) and a TO-BE spec (what the cloud system will do). The delta between them IS the migration.',
    },
    {
      question: 'In the migration pipeline, what does the "Specify" step focus on?',
      options: [
        'Defining cloud infrastructure',
        'Writing test cases',
        'What the legacy system does (reverse-engineered spec)',
        'Choosing migration tools',
      ],
      correctIndex: 2,
      explanation: 'The Specify step focuses on capturing what the legacy system actually does — producing a reverse-engineered specification of its behavior.',
    },
    {
      question: 'What captures organizational migration standards as reusable constraints?',
      options: ['The migration plan', 'The constitution', 'The dependency map', 'The task list'],
      correctIndex: 1,
      explanation: 'The constitution captures organizational migration standards, quality gates, and compliance constraints that apply across all migrations.',
    },
  ],

  'm-lesson-1-3': [
    {
      question: 'Which migration strategies require the DEEPEST level of specification?',
      options: [
        'Retire and Retain',
        'Rehost and Replatform',
        'Refactor, Rearchitect, and Rebuild',
        'All strategies require equal specification depth',
      ],
      correctIndex: 2,
      explanation: 'Refactor, rearchitect, and rebuild require full behavioral specification because you need to understand what the system does before redesigning or rebuilding it.',
    },
    {
      question: 'What common anti-pattern does the lesson warn against?',
      options: [
        'Using AI for code analysis',
        'Choosing the migration strategy before understanding the system',
        'Writing too many specs',
        'Starting with the simplest modules first',
      ],
      correctIndex: 1,
      explanation: 'Choosing a strategy before understanding the system is a common anti-pattern that leads to costly mid-migration strategy changes.',
    },
    {
      question: 'What should you do FIRST before choosing a migration strategy?',
      options: [
        'Estimate the budget',
        'Select the cloud provider',
        'Run a lightweight spec pass to understand complexity',
        'Hire additional staff',
      ],
      correctIndex: 2,
      explanation: 'You should run a lightweight specification pass FIRST to understand the system\'s complexity, then choose the appropriate migration strategy based on evidence.',
    },
  ],

  'm-lesson-1-4': [
    {
      question: 'What is the Northwind simulation?',
      options: [
        'A cloud deployment exercise',
        'A real legacy .NET application that teams work through the full pipeline over 3 days',
        'A database migration tool',
        'A multiple-choice assessment',
      ],
      correctIndex: 1,
      explanation: 'The Northwind simulation is a real legacy .NET application (Northwind Global Services) that teams analyze and migrate through the entire spec-driven pipeline across all 3 days.',
    },
    {
      question: 'Which directories in the Northwind codebase contain batch processing logic?',
      options: [
        'Models/ and Controllers/',
        'Config/ and Utilities/',
        'BatchJobs/',
        'Services/ only',
      ],
      correctIndex: 2,
      explanation: 'BatchJobs/ contains NightlyOrderProcessor, AuditLogPurge, and WeeklyInventoryJob — automated processes that nobody documented.',
    },
    {
      question: 'What makes the Northwind codebase representative of real legacy systems?',
      options: [
        'It uses the latest .NET version',
        'It has clean, well-documented code',
        'Business logic is scattered, with hardcoded paths, undocumented batch jobs, and NTLM auth',
        'It has comprehensive unit tests',
      ],
      correctIndex: 2,
      explanation: 'Like real legacy systems, Northwind has scattered business logic, hardcoded Windows paths, NTLM authentication, and undocumented batch jobs.',
    },
    {
      question: 'What command initializes the spec-kit migration project?',
      options: [
        'dotnet new migration',
        'specify init northwind-migration --ai copilot',
        'npm init migration',
        'speckit start northwind',
      ],
      correctIndex: 1,
      explanation: 'The command "specify init northwind-migration --ai copilot" initializes a new spec-kit migration project with GitHub Copilot as the AI assistant.',
    },
  ],

  /* ───────── MODULE 2 ───────── */

  'm-lesson-2-1': [
    {
      question: 'What is the primary goal of AI-assisted legacy code analysis?',
      options: [
        'To rewrite the legacy code automatically',
        'To produce spec artifacts that capture the system\'s behavior',
        'To identify which programming language to migrate to',
        'To calculate migration costs',
      ],
      correctIndex: 1,
      explanation: 'The goal isn\'t to understand the code itself — it\'s to produce spec artifacts that formally capture the system\'s behavior. The code is the input; the spec is the output.',
    },
    {
      question: 'Why are structured prompts important for AI code analysis?',
      options: [
        'They make the AI respond faster',
        'They ensure consistent analysis and consistent specs',
        'They reduce AI token usage',
        'They are required by the AI service',
      ],
      correctIndex: 1,
      explanation: 'Structured prompts are the quality lever — consistent prompts produce consistent analysis, which produces consistent specs. This is the same principle AI Migrate uses.',
    },
    {
      question: 'What should you NEVER do with extracted business rules?',
      options: [
        'Document them',
        'Trust them without verification',
        'Share them with the team',
        'Include them in the spec',
      ],
      correctIndex: 1,
      explanation: 'Never trust extracted business rules without verification. Always mark confidence levels (high/medium/low) and flag items that need SME validation.',
    },
  ],

  'm-lesson-2-2': [
    {
      question: 'What is a "Behavior Inventory"?',
      options: [
        'A list of all files in the codebase',
        'A documented catalog of every discovered behavior with type, source, confidence, and SME validation status',
        'A count of lines of code per module',
        'A list of third-party dependencies',
      ],
      correctIndex: 1,
      explanation: 'A Behavior Inventory catalogs every discovered behavior including its type (user-facing/automated/integration), source location, confidence level, and whether it needs SME validation.',
    },
    {
      question: 'The lesson warns about conflicting logic between two files. Which two?',
      options: [
        'Models/Order.cs and Models/Customer.cs',
        'Services/OrderService.cs and Utilities/ShippingCalculator.cs',
        'Controllers/OrderController.cs and Controllers/CustomerController.cs',
        'BatchJobs/NightlyOrderProcessor.cs and BatchJobs/AuditLogPurge.cs',
      ],
      correctIndex: 1,
      explanation: 'The shipping calculation uses DIFFERENT rates in Services/OrderService.cs and Utilities/ShippingCalculator.cs — a real conflict that needs SME validation.',
    },
    {
      question: 'Where should you search for integration points in the Northwind codebase?',
      options: [
        'Only in Controllers/',
        'Only in appsettings.json',
        'Search for UNC paths (\\\\NWFS01, \\\\NWMAIL01, \\\\NWPRINT01) across multiple files',
        'Only in the README',
      ],
      correctIndex: 2,
      explanation: 'Integration points are scattered across OrderService.cs, AppConfig.cs, NorthwindHelpers.cs, and appsettings.json. Searching for UNC paths like \\\\NWFS01 reveals them.',
    },
  ],

  'm-lesson-2-3': [
    {
      question: 'How many dimensions of dependency does the lesson identify?',
      options: ['3', '4', '5', '7'],
      correctIndex: 2,
      explanation: 'Five dimensions: Code, Data, Integration, Infrastructure, and Identity. Missing any dimension means the migration plan has a gap.',
    },
    {
      question: 'Which dependency dimension is described as "often the most overlooked"?',
      options: ['Code', 'Data', 'Integration', 'Identity'],
      correctIndex: 3,
      explanation: 'Identity dependencies (directory services, service accounts, certificates, service-to-service trust) are often the most overlooked dimension in migration planning.',
    },
    {
      question: 'What is the dependency map\'s relationship to the behavior spec?',
      options: [
        'It replaces the behavior spec',
        'It is the second most important migration artifact after the behavior spec',
        'It is generated automatically from the behavior spec',
        'It is only needed for large migrations',
      ],
      correctIndex: 1,
      explanation: 'The dependency map is the second most important migration artifact after the behavior spec. Missing a dependency means the migration fails in production.',
    },
  ],

  'm-lesson-2-4': [
    {
      question: 'What two inputs are combined to create the AS-IS specification?',
      options: [
        'Source code and documentation',
        'Behavior Inventory and Dependency Map',
        'Test results and performance metrics',
        'Stakeholder interviews and surveys',
      ],
      correctIndex: 1,
      explanation: 'The Behavior Inventory and Dependency Map are combined using /speckit.specify to produce the formal AS-IS specification.',
    },
    {
      question: 'What does /speckit.clarify surface?',
      options: [
        'Performance bottlenecks',
        'Gaps, ambiguities, and contradictions in the specification',
        'Cost estimates',
        'Deployment configurations',
      ],
      correctIndex: 1,
      explanation: '/speckit.clarify surfaces gaps (missing behaviors), ambiguities (unclear requirements), and contradictions (conflicting rules) — each representing a potential migration risk.',
    },
    {
      question: 'Why is comparing specs across teams valuable?',
      options: [
        'To create competition between teams',
        'To determine which team analyzed the same system differently, revealing what was missed',
        'To assign grades',
        'To reduce the number of specs needed',
      ],
      correctIndex: 1,
      explanation: 'Comparing specs reveals what some teams captured that others missed — demonstrating why the clarify step exists and why multiple perspectives improve spec quality.',
    },
  ],

  /* ───────── MODULE 3 ───────── */

  'm-lesson-3-1': [
    {
      question: 'What is the core question the re-specification process answers?',
      options: [
        'How much will the migration cost?',
        'For each thing the legacy system does, how should the cloud system do it?',
        'Which cloud services should we use?',
        'How long will the migration take?',
      ],
      correctIndex: 1,
      explanation: 'The re-specification process answers: "For each thing the legacy system does, how should the cloud system do it?" — deciding whether to keep, modify, replace, or remove each behavior.',
    },
    {
      question: 'What principle should guide the TO-BE spec scope?',
      options: [
        'Include as many new features as possible',
        'Behavior parity first, enhancement second',
        'Optimize for cost reduction',
        'Minimize the number of spec items',
      ],
      correctIndex: 1,
      explanation: 'Behavior parity first, enhancement second. Don\'t mix migration with new features in the spec — the TO-BE spec is a contract for what the customer signs off on before implementation.',
    },
    {
      question: 'What defines the migration scope?',
      options: [
        'The project budget',
        'The team size',
        'The delta between the AS-IS and TO-BE specs',
        'The number of source code files',
      ],
      correctIndex: 2,
      explanation: 'The delta between the AS-IS and TO-BE specs IS the migration scope. If it\'s not in the delta, it\'s not being migrated.',
    },
  ],

  'm-lesson-3-2': [
    {
      question: 'What does /speckit.analyze check when cross-referencing AS-IS and TO-BE specs?',
      options: [
        'Code quality metrics',
        'Coverage, consistency, and traceability',
        'Performance benchmarks',
        'Cost projections',
      ],
      correctIndex: 1,
      explanation: '/speckit.analyze checks coverage (is everything from the legacy spec addressed?), consistency (do decisions align with the constitution?), and traceability (can you trace TO-BE items to AS-IS items?).',
    },
    {
      question: 'How should each TO-BE entry be characterized?',
      options: [
        'By priority: high, medium, low',
        'By cost: expensive, moderate, cheap',
        'As: unchanged, replatformed, refactored, rearchitected, or replaced',
        'By team assignment',
      ],
      correctIndex: 2,
      explanation: 'Each TO-BE entry is marked as unchanged/replatformed/refactored/rearchitected/replaced, with the target architecture approach specified.',
    },
    {
      question: 'What spec-kit commands drive this exercise?',
      options: [
        '/speckit.build and /speckit.deploy',
        '/speckit.specify, /speckit.clarify, and /speckit.analyze',
        '/speckit.test and /speckit.validate',
        '/speckit.plan and /speckit.tasks',
      ],
      correctIndex: 1,
      explanation: 'Three commands drive the exercise: /speckit.specify (formalize TO-BE), /speckit.clarify (surface gaps), and /speckit.analyze (cross-check AS-IS ↔ TO-BE).',
    },
  ],

  'm-lesson-3-3': [
    {
      question: 'Which Well-Architected Framework pillar asks "Who runs this after cutover?"',
      options: ['Reliability', 'Security', 'Operational Excellence', 'Performance Efficiency'],
      correctIndex: 2,
      explanation: 'Operational Excellence covers CI/CD, monitoring, runbooks, and who operates the system — "Who runs this after cutover?" is a key operational readiness question.',
    },
    {
      question: 'Where do most architecture risks in migrations come from?',
      options: [
        'Technology choices',
        'Cloud provider limitations',
        'Specification gaps',
        'Team inexperience',
      ],
      correctIndex: 2,
      explanation: 'Most architecture risks come from specification gaps, not technology choices. A well-specified migration with simple technology beats a poorly-specified one with fancy technology.',
    },
    {
      question: 'What is a common migration architecture mistake?',
      options: [
        'Using microservices',
        'Rehosting everything and calling it "cloud-native"',
        'Starting with a pilot application',
        'Using Infrastructure as Code',
      ],
      correctIndex: 1,
      explanation: 'Rehosting everything and calling it "cloud-native" is a common mistake, along with over-engineering for hypothetical future scale and ignoring operational readiness.',
    },
  ],

  'm-lesson-3-4': [
    {
      question: 'What three artifacts does /speckit.plan read to generate the migration plan?',
      options: [
        'Source code, tests, and documentation',
        'Constitution, AS-IS spec, and TO-BE spec',
        'Budget, timeline, and team roster',
        'Architecture diagrams, data models, and API contracts',
      ],
      correctIndex: 1,
      explanation: '/speckit.plan reads the constitution, AS-IS spec, and TO-BE spec to generate the wave-based migration plan.',
    },
    {
      question: 'What is the purpose of the cutover-plan.md artifact?',
      options: [
        'To list all team members',
        'To define go-live sequence, rollback procedures, and validation checklist',
        'To calculate final costs',
        'To document lessons learned',
      ],
      correctIndex: 1,
      explanation: 'cutover-plan.md defines the go-live sequence, rollback procedures, and validation checklist needed for a safe transition.',
    },
    {
      question: 'What key question validates that wave ordering is correct?',
      options: [
        'Is the cheapest wave first?',
        'Is each wave assigned to a different team?',
        'Is the ordering safe — foundations before features?',
        'Does each wave take the same amount of time?',
      ],
      correctIndex: 2,
      explanation: 'Wave ordering must be safe: foundations before features, data before application, internal before external. Each wave must have validation criteria.',
    },
  ],

  /* ───────── MODULE 4 ───────── */

  'm-lesson-4-1': [
    {
      question: 'What is the FIRST step in a spec-driven data migration approach?',
      options: [
        'Write migration scripts',
        'Inventory the data layer — tables, views, stored procedures, triggers, relationships',
        'Choose the target database service',
        'Estimate data volumes',
      ],
      correctIndex: 1,
      explanation: 'Step 1 is to inventory the data layer — tables, views, stored procedures, triggers, and relationships — before making any migration decisions.',
    },
    {
      question: 'Why is "it migrated" insufficient as success criteria?',
      options: [
        'Because it doesn\'t check performance',
        'Because data migration without specification is data migration without verification',
        'Because it doesn\'t consider costs',
        'Because the database might be offline',
      ],
      correctIndex: 1,
      explanation: 'Data migration without specification is data migration without verification. You need defined validation criteria (row counts, checksums, business rule verification) to prove correctness.',
    },
    {
      question: 'What key decision must be made for stored procedures during data migration?',
      options: [
        'Whether to use a different programming language',
        'Whether to migrate logic to the cloud database or extract it to the application layer',
        'Whether to keep the same database engine',
        'Whether to compress the data',
      ],
      correctIndex: 1,
      explanation: 'For each stored procedure: migrate logic to the cloud database, or extract it to the application layer? Both options should be spec\'d with tradeoffs documented.',
    },
  ],

  'm-lesson-4-2': [
    {
      question: 'Where is the EF Core database context located in the Northwind codebase?',
      options: [
        'Models/DbContext.cs',
        'Data/NorthwindDbContext.cs',
        'Services/DataContext.cs',
        'Config/DatabaseConfig.cs',
      ],
      correctIndex: 1,
      explanation: 'Data/NorthwindDbContext.cs is the EF Core context with DbSets, entity relationships, seed data, and a hardcoded DB path fallback.',
    },
    {
      question: 'Which supporting entity contains operational data that is growing unbounded?',
      options: ['SystemConfig', 'TaxRate', 'AuditLog', 'DiscountCode'],
      correctIndex: 2,
      explanation: 'AuditLog is growing unbounded because the AuditLogPurge batch job has been broken since 2020 — a fact discovered later as "the surprise."',
    },
    {
      question: 'What is the deliverable for this simulation exercise?',
      options: [
        'Working migration scripts',
        'A data-migration.md with mappings, transformations, logic decisions, and validation criteria',
        'A deployed cloud database',
        'Performance benchmarks',
      ],
      correctIndex: 1,
      explanation: 'The deliverable is a data-migration.md with every schema object accounted for, every transformation justified, and validation criteria defined.',
    },
  ],

  'm-lesson-4-3': [
    {
      question: 'Why are integration points the highest-risk items in a migration?',
      options: [
        'They are the most expensive to migrate',
        'They cross system boundaries and external systems don\'t care about your migration',
        'They require the most code changes',
        'They are always the last to be migrated',
      ],
      correctIndex: 1,
      explanation: 'Integration points cross system boundaries. External systems don\'t care about your migration — they care that the interface works. A broken integration = a broken business process.',
    },
    {
      question: 'What is the purpose of an Anti-Corruption Layer (ACL)?',
      options: [
        'To prevent security breaches',
        'To translate between old and new interfaces during the parallel-run period',
        'To compress data in transit',
        'To log all integration calls',
      ],
      correctIndex: 1,
      explanation: 'The ACL is an adapter that translates between the old and new system interfaces so external systems continue working during the parallel-run transition period.',
    },
    {
      question: 'Every integration point needs what formal artifact?',
      options: [
        'A cost estimate',
        'A contract in the contracts/ folder',
        'A separate repository',
        'A dedicated team',
      ],
      correctIndex: 1,
      explanation: 'Every integration point needs a formal contract (input/output formats, timing/SLAs, error handling) in the contracts/ folder.',
    },
  ],

  'm-lesson-4-4': [
    {
      question: 'What tool helps find all UNC path references in the Northwind codebase?',
      options: [
        '/speckit.analyze',
        'grep for \\\\NW across the codebase',
        'dotnet build warnings',
        'The dependency map generator',
      ],
      correctIndex: 1,
      explanation: 'Grepping for \\\\NW across the codebase reveals all UNC path references to file servers, mail servers, and print servers.',
    },
    {
      question: 'What does /speckit.analyze check at the end of Day 2?',
      options: [
        'Only the TO-BE spec',
        'AS-IS spec ↔ TO-BE spec ↔ plan ↔ data migration ↔ integration contracts',
        'Source code compilation',
        'Cloud service availability',
      ],
      correctIndex: 1,
      explanation: '/speckit.analyze performs a full consistency check across ALL artifacts: AS-IS spec, TO-BE spec, plan, data migration spec, and integration contracts.',
    },
    {
      question: 'By end of Day 2, how many core artifacts should you have?',
      options: ['3', '4', '6', '8'],
      correctIndex: 2,
      explanation: 'Six core artifacts: Constitution, AS-IS spec, TO-BE spec, Plan, Data migration spec, and Integration contracts — all cross-checked and traceable.',
    },
  ],

  /* ───────── MODULE 5 ───────── */

  'm-lesson-5-1': [
    {
      question: 'How do migration tasks differ from greenfield tasks?',
      options: [
        'They are simpler',
        'They reference both AS-IS and TO-BE specs, follow wave structure, and include rollback criteria',
        'They don\'t require specs',
        'They are always automated',
      ],
      correctIndex: 1,
      explanation: 'Migration tasks reference both specs, follow the wave structure from the plan, include rollback criteria, and have validation tasks interspersed throughout.',
    },
    {
      question: 'What is the correct ordering principle for migration waves?',
      options: [
        'Cheapest first, most expensive last',
        'External integrations first, then internal',
        'Foundation before features, data before application, internal before external',
        'Alphabetical by module name',
      ],
      correctIndex: 2,
      explanation: 'Foundation before features, data before application, internal before external, and validate at every boundary — not just at the end.',
    },
    {
      question: 'What happens if Wave 1 fails validation?',
      options: [
        'Proceed to Wave 2 anyway',
        'Start over from scratch',
        'You don\'t proceed to Wave 2 — each wave is a checkpoint',
        'Skip to Wave 3',
      ],
      correctIndex: 2,
      explanation: 'Each wave produces a deployable, testable increment. If a wave fails validation, you don\'t proceed. The spec and plan tell you exactly what each wave must deliver.',
    },
  ],

  'm-lesson-5-2': [
    {
      question: 'What does Wave 0 (Foundation) typically include?',
      options: [
        'Application code and business logic',
        'Infrastructure scaffolding, identity configuration, and monitoring setup',
        'Data migration scripts',
        'User acceptance testing',
      ],
      correctIndex: 1,
      explanation: 'Wave 0 covers the foundation: infrastructure scaffolding, identity configuration, and monitoring setup — the base everything else builds on.',
    },
    {
      question: 'What does Wave 1 (Data Layer) focus on?',
      options: [
        'User interface migration',
        'Data migration scripts, data validation tests, and schema transformation',
        'Integration rewiring',
        'Performance optimization',
      ],
      correctIndex: 1,
      explanation: 'Wave 1 handles the data layer: migration scripts, validation tests, and schema transformations. The database must be ready before the app can use it.',
    },
    {
      question: 'What two /speckit commands generate implementation for Waves 0–1?',
      options: [
        '/speckit.build and /speckit.deploy',
        '/speckit.tasks and /speckit.implement',
        '/speckit.specify and /speckit.clarify',
        '/speckit.test and /speckit.validate',
      ],
      correctIndex: 1,
      explanation: '/speckit.tasks generates the sequenced task list and /speckit.implement generates the actual implementation scaffolding for each wave.',
    },
  ],

  'm-lesson-5-3': [
    {
      question: 'What is "THE SURPRISE" in the Day 3 simulation?',
      options: [
        'A pop quiz',
        'A sealed envelope revealing a previously unknown integration or behavior',
        'An unexpected cloud service outage',
        'A change in project deadline',
      ],
      correctIndex: 1,
      explanation: 'Each team receives a sealed envelope describing a previously unknown discovery — a broken batch job, conflicting logic, hidden config sources, or stale auth — testing their spec-driven process.',
    },
    {
      question: 'What is the correct response to a surprise discovery?',
      options: [
        'Panic and restructure the entire migration',
        'Ignore it and continue with the existing plan',
        'Add it to the AS-IS spec and ripple the change through the pipeline',
        'Escalate to management immediately',
      ],
      correctIndex: 2,
      explanation: 'In a spec-driven migration, surprises are just new spec items. Add to AS-IS spec → assess impact on TO-BE and plan → run /speckit.clarify and /speckit.analyze.',
    },
    {
      question: 'Which example surprise involves different calculation rates in two files?',
      options: [
        'Broken AuditLogPurge batch job',
        'Conflicting shipping logic between OrderService.cs and ShippingCalculator.cs',
        'Hidden super-admin accounts in AuthHelper.cs',
        'Multi-source config overrides in AppConfig.cs',
      ],
      correctIndex: 1,
      explanation: 'The shipping calculation uses DIFFERENT rates in Services/OrderService.cs and Utilities/ShippingCalculator.cs — raising the question of which is the source of truth.',
    },
  ],

  'm-lesson-5-4': [
    {
      question: 'What are the six levels of the validation hierarchy (in order)?',
      options: [
        'Unit, integration, system, acceptance, performance, security',
        'Smoke, behavior parity, data validation, integration, performance, user acceptance',
        'Code review, testing, staging, production, monitoring, alerting',
        'Static analysis, unit tests, integration tests, load tests, security scan, deployment',
      ],
      correctIndex: 1,
      explanation: 'Smoke tests → behavior parity → data validation → integration tests → performance tests → user acceptance, each at a different point in the migration.',
    },
    {
      question: 'What does the traceability chain enable when validation fails?',
      options: [
        'Automatic code fixes',
        'Tracing backwards: Code → Task → Plan → TO-BE Spec → AS-IS Spec to find where spec and reality diverged',
        'Automatic rollback',
        'Blame assignment',
      ],
      correctIndex: 1,
      explanation: 'The traceability chain lets you trace Code → Task → Plan → TO-BE → AS-IS to find the divergence point, then fix at the spec level and regenerate.',
    },
    {
      question: 'How should behavior parity be validated?',
      options: [
        'By comparing source code line by line',
        'By running the same inputs through both systems and comparing outputs',
        'By asking the development team',
        'By counting the number of features',
      ],
      correctIndex: 1,
      explanation: '"Given [legacy input], the migrated system produces [same output]" — behavior parity means the same inputs produce the same results.',
    },
  ],

  /* ───────── MODULE 6 ───────── */

  'm-lesson-6-1': [
    {
      question: 'What are the three "production lines" of the migration factory model?',
      options: [
        'Planning, Building, Testing',
        'Assessment, Architecture, Execution',
        'Discovery, Design, Delivery',
        'Specification, Implementation, Validation',
      ],
      correctIndex: 1,
      explanation: 'Assessment Line (analyze → reverse-engineer → AS-IS spec), Architecture Line (TO-BE → plan → review), and Execution Line (tasks → implement → validate).',
    },
    {
      question: 'Why does every migration make the next one faster?',
      options: [
        'Teams get better at coding',
        'Reusable IP: constitution templates, spec patterns, analysis prompts, validation libraries',
        'Cloud services improve over time',
        'Each migration is smaller than the last',
      ],
      correctIndex: 1,
      explanation: 'Every migration produces reusable IP: constitution templates, spec patterns, standardized analysis prompts, validation libraries, and architecture decision records.',
    },
    {
      question: 'What is the programme governance lever in the factory model?',
      options: [
        'The project manager',
        'The constitution',
        'The risk register',
        'The budget approval process',
      ],
      correctIndex: 1,
      explanation: 'The constitution is the programme governance lever. Update it once and all future migrations inherit the updated standards.',
    },
  ],

  'm-lesson-6-2': [
    {
      question: 'What is the root cause shared by all 10 migration anti-patterns?',
      options: [
        'Insufficient budget',
        'Poor technology choices',
        'Insufficient specification',
        'Understaffed teams',
      ],
      correctIndex: 2,
      explanation: 'Every anti-pattern is a different symptom of the same root cause: insufficient specification. The pipeline prevents them structurally.',
    },
    {
      question: 'How does the spec-flow prevent "Feature Creep" during migration?',
      options: [
        'By limiting the number of developers',
        'The TO-BE spec scope is locked — enhancements are a separate spec',
        'By setting strict deadlines',
        'By using automated code generation only',
      ],
      correctIndex: 1,
      explanation: 'Feature creep is prevented by locking the TO-BE spec scope to behavior parity. Any "while we\'re at it" enhancements go into a separate, future spec.',
    },
    {
      question: 'What prevents the "Big Bang Cutover" anti-pattern?',
      options: [
        'A larger team',
        'Wave structure with incremental validation',
        'A longer timeline',
        'Better hardware',
      ],
      correctIndex: 1,
      explanation: 'The wave structure ensures incremental, validated delivery rather than a single risky cutover. Each wave is independently deployable and testable.',
    },
  ],

  'm-lesson-6-3': [
    {
      question: 'What should the final /speckit.analyze check verify?',
      options: [
        'That all code compiles',
        'Full cross-artifact consistency — specs, plan, data migration, contracts all aligned',
        'That the budget is within limits',
        'That all team members have completed their training',
      ],
      correctIndex: 1,
      explanation: 'The final /speckit.analyze performs a complete cross-artifact consistency check: AS-IS spec, TO-BE spec, plan, data migration, contracts, and task list.',
    },
    {
      question: 'How did a well-executed team handle "the surprise"?',
      options: [
        'By ignoring it and sticking to the original plan',
        'By restarting the entire migration from scratch',
        'By absorbing it through spec updates — not ad-hoc fixes',
        'By delegating it to a different team',
      ],
      correctIndex: 2,
      explanation: 'A key evaluation criterion: the surprise was absorbed through systematic spec updates rippled through the pipeline, not through ad-hoc emergency fixes.',
    },
    {
      question: 'What should the team presentation focus on?',
      options: [
        'The specific technology choices made',
        'The PROCESS — how they went from cold code to migration-ready spec set',
        'The timeline and budget',
        'Individual team member contributions',
      ],
      correctIndex: 1,
      explanation: 'The presentation focuses on the PROCESS, not the technology. Walk through the spec-flow, how the surprise was handled, and what reusable IP emerged.',
    },
  ],

  'm-lesson-6-4': [
    {
      question: 'What are the four phases of the adoption roadmap?',
      options: [
        'Plan, Build, Test, Deploy',
        'Pilot, Templatize, Scale, Factory',
        'Assess, Design, Implement, Validate',
        'Discover, Specify, Plan, Execute',
      ],
      correctIndex: 1,
      explanation: 'The four phases: Pilot (apply to one app), Templatize (harvest IP), Scale (train team, apply to 3–5 apps), Factory (full migration factory with governance).',
    },
    {
      question: 'How does spec-driven migration relate to AI Migrate?',
      options: [
        'They are competitors — use one or the other',
        'Spec-driven migration replaces AI Migrate',
        'They are complementary — AI Migrate for orchestration at scale, spec-driven for specification quality',
        'AI Migrate generates the specs automatically',
      ],
      correctIndex: 2,
      explanation: 'They are complementary: AI Migrate provides platform-embedded orchestration at scale, while spec-driven migration focuses on specification quality. Together they deliver consistent outcomes.',
    },
    {
      question: 'What is the recommended first step after completing the training?',
      options: [
        'Migrate all applications simultaneously',
        'Purchase enterprise migration tools',
        'Select a real application for a pilot migration',
        'Write a comprehensive migration manual',
      ],
      correctIndex: 2,
      explanation: 'Step 1: Select a real application for a pilot migration. Then write the constitution, run the spec-flow end-to-end, and present the spec pair for sign-off before building.',
    },
  ],
};

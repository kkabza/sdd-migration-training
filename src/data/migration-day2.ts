import type { Module } from '@/types';
import { lessonSlides } from './migration-slides';
import { lessonQuizzes } from './migration-quizzes';

export const migrationDay2Modules: Module[] = [
  /* ================================================================
     MODULE 3 — From Legacy Spec to Cloud Target Spec
     ================================================================ */
  {
    id: 'm-module-3',
    number: 3,
    dayId: 'm-day-2',
    title: 'From Legacy Spec to Cloud Target Spec',
    description:
      'Transform the AS-IS specification into a TO-BE cloud target specification — same behaviors, new architecture — and produce the migration plan.',
    duration: '4 hours',
    objectives: [
      'Transform AS-IS spec behaviors into cloud-native TO-BE equivalents with documented rationale',
      'Use /speckit.analyze to verify coverage between the AS-IS and TO-BE specs',
      'Review cloud target architecture against the Well-Architected Framework pillars',
      'Generate a complete migration plan with wave structure, data strategy, and cutover procedures',
    ],
    lessons: [
      /* ---------- Lesson 3.1 ---------- */
      {
        id: 'm-lesson-3-1',
        number: 1,
        moduleId: 'm-module-3',
        title: 'The Re-Specification Process',
        duration: '45 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'From AS-IS to TO-BE',
          },
          { type: 'slideshow' as const, ...lessonSlides['m-lesson-3-1']! },
          {
            type: 'text',
            text: 'The core migration design question: "For each thing the legacy system does, how should the cloud system do it?"',
          },
          {
            type: 'heading',
            level: 3,
            text: 'The Re-Specification Workflow',
          },
          {
            type: 'list',
            style: 'ordered',
            items: [
              'Take each behavior from the AS-IS spec',
              'Decide: keep as-is, modify, replace, or remove',
              'Specify the cloud-native equivalent',
              'Add cloud-specific requirements (scaling, availability, monitoring, security)',
              'Document the rationale for every decision',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Categories of Change',
          },
          {
            type: 'table',
            headers: ['Change Type', 'Spec Treatment'],
            rows: [
              ['Same behavior, same approach', 'Copy from AS-IS, note "unchanged"'],
              ['Same behavior, different platform', 'Rewrite the implementation section, behavior stays the same'],
              ['Same behavior, redesigned', 'New architecture description, behavior parity requirements'],
              ['New cloud capability', 'New spec item (monitoring, auto-scaling, etc.)'],
              ['Removed capability', 'Documented as removed with rationale'],
            ],
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Behavior Parity First',
            text: 'The cloud target spec is the contract the customer signs off on before implementation begins. Behavior parity first, enhancement second — don\'t mix migration with new features in the spec.',
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
              'The TO-BE spec should be readable independently — someone who never saw the legacy system should understand what they\'re building',
              'Every architectural decision gets a rationale — no "we just picked this"',
              'The delta between AS-IS and TO-BE specs IS the migration scope — if it\'s not in the delta, it\'s not being migrated',
            ],
          },
        ],
        quiz: lessonQuizzes['m-lesson-3-1'],
      },

      /* ---------- Lesson 3.2 ---------- */
      {
        id: 'm-lesson-3-2',
        number: 2,
        moduleId: 'm-module-3',
        title: 'Simulation: Write the Cloud Target Spec',
        duration: '75 min',
        content: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Simulation Exercise',
            text: 'Working from your AS-IS spec, create the TO-BE cloud target specification and validate it through the pipeline.',
          },
          {
            type: 'heading',
            level: 2,
            text: 'Exercise Steps',
          },
          { type: 'slideshow' as const, ...lessonSlides['m-lesson-3-2']! },
          {
            type: 'list',
            style: 'ordered',
            items: [
              'For each AS-IS behavior, create a TO-BE entry. Mark each as: unchanged / replatformed / refactored / rearchitected / replaced',
              'Specify the target architecture approach (not specific services — the approach)',
              'Add cloud-native requirements: availability targets, scaling approach, security model, observability',
              'Run /speckit.specify to formalize the cloud target spec',
              'Run /speckit.clarify to surface gaps',
              'Run /speckit.analyze for AS-IS ↔ TO-BE cross-check',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'What /speckit.analyze Checks',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              'Coverage: is everything from the legacy spec addressed?',
              'Consistency: do the architectural decisions align with the constitution?',
              'Traceability: can you trace every TO-BE item back to an AS-IS item?',
            ],
          },
          {
            type: 'code',
            language: 'bash',
            code: `/speckit.specify   # Formalize the TO-BE specification
/speckit.clarify   # Surface gaps in the cloud target spec
/speckit.analyze   # Cross-check AS-IS ↔ TO-BE coverage`,
            caption: 'Spec-kit commands for TO-BE spec creation and validation',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Deliverable',
          },
          {
            type: 'text',
            text: 'A cloud target spec.md — the TO-BE specification. Combined with the AS-IS spec, this pair defines the complete migration.',
          },
        ],
        quiz: lessonQuizzes['m-lesson-3-2'],
      },

      /* ---------- Lesson 3.3 ---------- */
      {
        id: 'm-lesson-3-3',
        number: 3,
        moduleId: 'm-module-3',
        title: 'Architecture Review',
        duration: '45 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'Well-Architected Framework Review',
          },
          { type: 'slideshow' as const, ...lessonSlides['m-lesson-3-3']! },
          {
            type: 'text',
            text: 'Review the cloud target architecture against the Well-Architected Framework pillars to ensure the migration design is sound:',
          },
          {
            type: 'table',
            headers: ['Pillar', 'Key Migration Questions'],
            rows: [
              ['Reliability', 'Is the target more resilient than legacy? DR strategy defined?'],
              ['Security', 'Is identity modernized? Data encrypted at rest and in transit?'],
              ['Cost Optimization', 'Right-sized for day-1? Consumption-based where appropriate?'],
              ['Operational Excellence', 'How will the team operate this? CI/CD? Monitoring? Runbooks?'],
              ['Performance Efficiency', 'Meets current baselines? Can it scale for growth?'],
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Common Migration Architecture Mistakes',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              'Rehosting everything and calling it "cloud-native"',
              'Over-engineering day-1 architecture for hypothetical future scale',
              'Migrating without establishing monitoring first',
              'Ignoring operational readiness — "who runs this after cutover?"',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Group Exercise',
          },
          {
            type: 'text',
            text: 'Each team presents their TO-BE spec. The class reviews against the 5 pillars. Identify the top 3 risks per team\'s migration design. Discussion: are the risks in the technology choices or in the spec coverage?',
          },
        ],
        quiz: lessonQuizzes['m-lesson-3-3'],
      },

      /* ---------- Lesson 3.4 ---------- */
      {
        id: 'm-lesson-3-4',
        number: 4,
        moduleId: 'm-module-3',
        title: 'Simulation: The Migration Plan',
        duration: '75 min',
        content: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Simulation Exercise',
            text: 'Generate and refine the complete migration plan from the constitution, AS-IS spec, and TO-BE spec.',
          },
          {
            type: 'heading',
            level: 2,
            text: 'Exercise Steps',
          },
          { type: 'slideshow' as const, ...lessonSlides['m-lesson-3-4']! },
          {
            type: 'list',
            style: 'ordered',
            items: [
              'Run /speckit.plan — reads the constitution, AS-IS spec, and TO-BE spec to generate the plan',
              'Review and refine for migration-specific concerns: wave structure, data migration, integration rewiring, cutover strategy, risk register',
              'Run /speckit.analyze — cross-check plan ↔ specs ↔ constitution',
            ],
          },
          {
            type: 'code',
            language: 'bash',
            code: `/speckit.plan      # Generate migration plan from spec pair
/speckit.analyze   # Cross-check plan vs. specs vs. constitution`,
            caption: 'Plan generation and validation',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Migration Plan Artifacts',
          },
          {
            type: 'table',
            headers: ['Artifact', 'Purpose'],
            rows: [
              ['plan.md', 'Target architecture, wave structure, phasing strategy'],
              ['data-migration.md', 'Schema mapping, transformation rules, validation criteria'],
              ['contracts/', 'Interface contracts for migrated integrations'],
              ['cutover-plan.md', 'Go-live sequence, rollback procedures, validation checklist'],
              ['risk-register.md', 'Risks, mitigations, contingencies'],
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Plan Validation Questions',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              'Does the plan address every item in the TO-BE spec?',
              'Is the wave ordering safe (foundations before features)?',
              'Are there dependencies between waves not reflected in the ordering?',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Deliverable',
          },
          {
            type: 'text',
            text: 'A complete migration plan with wave structure, data migration strategy, integration approach, and cutover procedures — all generated from and traceable to the spec pair.',
          },
        ],
        quiz: lessonQuizzes['m-lesson-3-4'],
      },
    ],
  },

  /* ================================================================
     MODULE 4 — Data & Integration Specification
     ================================================================ */
  {
    id: 'm-module-4',
    number: 4,
    dayId: 'm-day-2',
    title: 'Data & Integration Specification',
    description:
      'Deepen the migration plan with formal specifications for data migration and integration rewiring — the two areas where migrations most commonly fail.',
    duration: '4 hours',
    objectives: [
      'Specify data migration with schema mappings, transformations, and validation criteria',
      'Identify and resolve business logic embedded in stored procedures and triggers',
      'Write formal integration contracts for every external touchpoint',
      'Design Anti-Corruption Layers for parallel-run periods during migration',
    ],
    lessons: [
      /* ---------- Lesson 4.1 ---------- */
      {
        id: 'm-lesson-4-1',
        number: 1,
        moduleId: 'm-module-4',
        title: 'Specifying Data Migration',
        duration: '60 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'Why Data Migrations Fail',
          },
          { type: 'slideshow' as const, ...lessonSlides['m-lesson-4-1']! },
          {
            type: 'list',
            style: 'unordered',
            items: [
              'Schema assumptions — "we thought it was the same"',
              'Business logic hidden in stored procedures, triggers, views',
              'Data quality issues only visible at scale',
              'Missing validation criteria — "it migrated, but is it right?"',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'The Spec-Driven Approach',
          },
          {
            type: 'list',
            style: 'ordered',
            items: [
              'Inventory the data layer — tables, views, stored procedures, triggers, relationships',
              'Specify each object — what it holds, what depends on it, what it computes',
              'Map source → target — schema mapping as a spec artifact',
              'Specify transformations — data type changes, encoding, collation, restructuring',
              'Define validation criteria — how to prove the data migrated correctly',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Validation Criteria as Acceptance Criteria',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              'Row count parity',
              'Checksum comparison on key tables',
              'Business rule verification (calculated fields produce the same results)',
              'Referential integrity post-migration',
            ],
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'The Stored Procedure Decision',
            text: 'A key decision for every data migration: migrate stored procedure logic to the cloud database, or extract it to the application layer? Spec both options, compare tradeoffs, document the decision.',
          },
        ],
        quiz: lessonQuizzes['m-lesson-4-1'],
      },

      /* ---------- Lesson 4.2 ---------- */
      {
        id: 'm-lesson-4-2',
        number: 2,
        moduleId: 'm-module-4',
        title: 'Simulation: Data Migration Spec',
        duration: '60 min',
        content: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Simulation Exercise',
            text: 'Analyze the Northwind database layer and produce a complete data migration specification.',
          },
          {
            type: 'heading',
            level: 2,
            text: 'Exercise Steps',
          },
          { type: 'slideshow' as const, ...lessonSlides['m-lesson-4-2']! },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Where to Look in the Repo',
            text: 'The Northwind data layer is in Data/NorthwindDbContext.cs (EF Core context with DbSets, relationships, and seed data) and Models/*.cs (entity classes including Order, Customer, Product, Category, Employee, and supporting models like AuditLog, SystemConfig, TaxRate, DiscountCode in Models/SupportingModels.cs).',
          },
          {
            type: 'list',
            style: 'ordered',
            items: [
              'Use Copilot to analyze Data/NorthwindDbContext.cs — identify all entity relationships, seed data patterns, and the hardcoded database path fallback (C:\\\\NorthwindData\\\\Northwind.db)',
              'Review Models/*.cs — map every entity class and its properties. Note: SupportingModels.cs contains operational tables (AuditLog, SystemConfig, TaxRate, DiscountCode) that are easy to miss',
              'Create a data migration spec as part of data-migration.md',
              'Produce schema mappings: source entity → target entity for every model class',
              'Document transformation rules: what changes and why (e.g., the SystemConfig table stores app settings that should move to Azure App Configuration)',
              'Identify business logic embedded in the data layer — check NorthwindDbContext.cs for configuration logic and Services/ for queries with embedded rules',
              'Define specific, testable validation criteria for data correctness',
              'Run /speckit.clarify on the data migration spec to surface any mapping gaps',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Deliverable',
          },
          {
            type: 'text',
            text: 'A data-migration.md with mappings, transformations, logic decisions, and validation criteria.',
          },
        ],
        quiz: lessonQuizzes['m-lesson-4-2'],
      },

      /* ---------- Lesson 4.3 ---------- */
      {
        id: 'm-lesson-4-3',
        number: 3,
        moduleId: 'm-module-4',
        title: 'Specifying Integration Rewiring',
        duration: '45 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'Integration Points — The Highest-Risk Migration Items',
          },
          { type: 'slideshow' as const, ...lessonSlides['m-lesson-4-3']! },
          {
            type: 'text',
            text: 'Integration points cross system boundaries, which makes them the highest-risk items in any migration. External systems don\'t care about your migration — they care that the interface works.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Types of Integration',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              'File-based integrations (drops, pickups, batch transfers)',
              'Message-based integrations (queues, topics, events)',
              'API integrations (synchronous calls, webhooks)',
              'Database-level integrations (linked servers, shared tables, replication)',
              'Identity integrations (SSO, service-to-service auth)',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Integration Contracts',
          },
          {
            type: 'text',
            text: 'Every integration gets a contract in the contracts/ folder. The contract specifies:',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              'Input/output formats — what does each side expect?',
              'Timing and SLAs — real-time? batch? within what window?',
              'Error handling — what happens when it fails?',
              'The Anti-Corruption Layer — an adapter between old and new during parallel run',
            ],
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'The Anti-Corruption Layer',
            text: 'During migration, you may need an adapter between the old and new systems. This Anti-Corruption Layer translates between interfaces so that external systems can continue working during the parallel-run period.',
          },
        ],
        quiz: lessonQuizzes['m-lesson-4-3'],
      },

      /* ---------- Lesson 4.4 ---------- */
      {
        id: 'm-lesson-4-4',
        number: 4,
        moduleId: 'm-module-4',
        title: 'Simulation: Integration Contracts',
        duration: '75 min',
        content: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Simulation Exercise',
            text: 'Write formal integration contracts for every Northwind integration point and design the Anti-Corruption Layer.',
          },
          {
            type: 'heading',
            level: 2,
            text: 'Exercise Steps',
          },
          { type: 'slideshow' as const, ...lessonSlides['m-lesson-4-4']! },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Northwind Integration Points — Where to Find Them',
            text: 'The integration points are scattered across the codebase. Key locations: Services/OrderService.cs (EDI export to \\\\NWFS01\\\\EDIOutbound, SMTP via \\\\NWMAIL01), Config/AppConfig.cs (UNC share paths, external system URLs), Utilities/NorthwindHelpers.cs (file server \\\\NWFS01, print server \\\\NWPRINT01), BatchJobs/NightlyOrderProcessor.cs (EDI batch processing, file archiving), and appsettings.json (connection strings, external paths).',
          },
          {
            type: 'list',
            style: 'ordered',
            items: [
              'For every integration point: write a formal contract (input schema, output schema, SLA, error behavior) — grep for \\\\NW across the codebase to find all UNC path references',
              'Specify the cloud-native replacement approach for each integration (e.g., EDI flat files → Azure Blob Storage + Event Grid, SMTP → SendGrid or Azure Communication Services)',
              'Design the Anti-Corruption Layer for the parallel-run period',
              'Define validation tests: "When system A sends X, system B receives Y"',
              'Run /speckit.analyze for full consistency check across all artifacts',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: '/speckit.analyze Cross-Checks',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              'AS-IS spec ↔ TO-BE spec ↔ plan ↔ data migration ↔ integration contracts',
              'Are there integrations in the AS-IS spec without contracts?',
              'Does the wave ordering account for integration dependencies?',
            ],
          },
          {
            type: 'code',
            language: 'bash',
            code: '/speckit.analyze   # Full cross-artifact consistency check',
            caption: 'Final Day 2 consistency validation',
          },
          {
            type: 'heading',
            level: 3,
            text: 'End of Day 2 — What You Have',
          },
          {
            type: 'text',
            text: 'At this point you have a complete spec-driven migration design:',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              '✅ Constitution (standards and constraints)',
              '✅ AS-IS spec (what the system does today)',
              '✅ TO-BE spec (what the cloud system will do)',
              '✅ Plan (waves, architecture, phasing)',
              '✅ Data migration spec (mappings, transformations, validation)',
              '✅ Integration contracts (interfaces, SLAs, Anti-Corruption Layer)',
            ],
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'All Traceable',
            text: 'All generated through the SDD pipeline. All cross-checked by /speckit.analyze. All traceable. Tomorrow: execution — and a surprise.',
          },
        ],
        quiz: lessonQuizzes['m-lesson-4-4'],
      },
    ],
  },
];

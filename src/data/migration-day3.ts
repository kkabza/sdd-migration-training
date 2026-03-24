import type { Module } from '@/types';
import { lessonSlides } from './migration-slides';
import { lessonQuizzes } from './migration-quizzes';

export const migrationDay3Modules: Module[] = [
  /* ================================================================
     MODULE 5 — Task Generation, Implementation & The Surprise
     ================================================================ */
  {
    id: 'm-module-5',
    number: 5,
    dayId: 'm-day-3',
    title: 'Task Generation, Implementation & The Surprise',
    description:
      'Generate migration tasks from the spec and plan, produce implementation scaffolding, handle an unexpected discovery mid-migration, and establish validation criteria.',
    duration: '4 hours',
    objectives: [
      'Generate sequenced migration tasks with rollback criteria from the spec and plan',
      'Produce implementation scaffolding for foundation and data migration waves',
      'Absorb a surprise discovery mid-migration through spec updates rather than ad-hoc fixes',
      'Write validation criteria that prove behavior parity between legacy and cloud systems',
    ],
    lessons: [
      /* ---------- Lesson 5.1 ---------- */
      {
        id: 'm-lesson-5-1',
        number: 1,
        moduleId: 'm-module-5',
        title: 'Generating Migration Tasks',
        duration: '30 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'How /speckit.tasks Works for Migration',
          },
          { type: 'slideshow' as const, ...lessonSlides['m-lesson-5-1']! },
          {
            type: 'text',
            text: 'Migration tasks differ from greenfield tasks in several important ways:',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              'Tasks reference both the AS-IS and TO-BE specs',
              'Ordering follows the wave structure from the plan',
              'Each task includes rollback criteria',
              'Validation tasks are interspersed (not saved for the end)',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Migration Task Ordering Principles',
          },
          {
            type: 'list',
            style: 'ordered',
            items: [
              'Foundation before features — infrastructure, identity, monitoring first',
              'Data before application — database must be ready before the app can use it',
              'Internal before external — get the system working before rewiring integrations',
              'Validate at every boundary — not just at the end',
            ],
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Wave-Based Execution',
            text: 'Each wave produces a deployable, testable increment. If Wave 1 fails validation, you don\'t proceed to Wave 2. The spec and plan tell you exactly what each wave must deliver and how to verify it.',
          },
        ],
        quiz: lessonQuizzes['m-lesson-5-1'],
      },

      /* ---------- Lesson 5.2 ---------- */
      {
        id: 'm-lesson-5-2',
        number: 2,
        moduleId: 'm-module-5',
        title: 'Simulation: Tasks & Implementation',
        duration: '75 min',
        content: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Simulation Exercise',
            text: 'Generate the migration task list and produce implementation scaffolding for the first two waves.',
          },
          {
            type: 'heading',
            level: 2,
            text: 'Exercise Steps',
          },
          { type: 'slideshow' as const, ...lessonSlides['m-lesson-5-2']! },
          {
            type: 'list',
            style: 'ordered',
            items: [
              'Run /speckit.tasks — generate the sequenced migration task list',
              'Review task ordering: does it follow wave dependencies? Are validation tasks present? Can anything be parallelized?',
              'Run /speckit.implement for Wave 0 (foundation): infrastructure scaffolding, identity configuration, monitoring setup',
              'Run /speckit.implement for Wave 1 (data layer): data migration scripts, data validation tests',
              'Review generated output against the constitution: constraints followed? Quality gates addressed? Everything traceable?',
            ],
          },
          {
            type: 'code',
            language: 'bash',
            code: `/speckit.tasks       # Generate sequenced migration tasks
/speckit.implement   # Generate Wave 0 foundation scaffolding
/speckit.implement   # Generate Wave 1 data migration scripts`,
            caption: 'Task generation and implementation commands',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Deliverable',
          },
          {
            type: 'text',
            text: 'Generated task list and implementation scaffolding for Waves 0 and 1.',
          },
        ],
        quiz: lessonQuizzes['m-lesson-5-2'],
      },

      /* ---------- Lesson 5.3 ---------- */
      {
        id: 'm-lesson-5-3',
        number: 3,
        moduleId: 'm-module-5',
        title: 'Simulation: THE SURPRISE',
        duration: '60 min',
        content: [
          {
            type: 'callout',
            variant: 'warning',
            title: '🔒 The Sealed Envelope',
            text: 'The instructor hands each team a sealed envelope. Inside: a description of a previously unknown integration or behavior that nobody mentioned.',
          },
          {
            type: 'heading',
            level: 2,
            text: 'What\'s In the Envelope?',
          },
          { type: 'slideshow' as const, ...lessonSlides['m-lesson-5-3']! },
          {
            type: 'text',
            text: 'Examples of what each team might discover (these map to real items in the Northwind codebase):',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              '"The AuditLogPurge batch job (BatchJobs/AuditLogPurge.cs) has been broken since February 2020. The audit_logs table is growing unbounded. Nobody noticed."',
              '"The shipping calculation in Services/OrderService.cs uses different rates than Utilities/ShippingCalculator.cs. Which one is the source of truth? Customers may have been overcharged."',
              '"Config/AppConfig.cs loads settings from 4 different sources (database → appsettings.json → environment → hardcoded defaults) with a priority cascade. Some config values are being silently overridden."',
              '"Config/AuthHelper.cs has a hardcoded list of super-admin usernames. Two of them no longer work at the company. And the static session store isn\'t thread-safe."',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Exercise: Don\'t Panic — Spec It',
          },
          {
            type: 'list',
            style: 'ordered',
            items: [
              'Add the newly discovered item to the AS-IS spec',
              'Assess the impact: does this change the TO-BE spec? The plan? The wave ordering?',
              'Run /speckit.clarify on the updated spec — what new ambiguities surfaced?',
              'Update the TO-BE spec, plan, and contracts as needed',
              'Run /speckit.analyze — does everything still hold together?',
              'Adjust the task list — where does this new work fit in the waves?',
            ],
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'The Key Lesson',
            text: 'In a spec-driven migration, surprises are just new spec items. The pipeline absorbs them. Without specs, a surprise like this derails the project. With specs, it\'s a controlled change with traceable impact.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Deliverable',
          },
          {
            type: 'text',
            text: 'Updated spec pair, plan, and task list reflecting the surprise discovery.',
          },
        ],
        quiz: lessonQuizzes['m-lesson-5-3'],
      },

      /* ---------- Lesson 5.4 ---------- */
      {
        id: 'm-lesson-5-4',
        number: 4,
        moduleId: 'm-module-5',
        title: 'Validation & Proving Behavior Parity',
        duration: '45 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'The Validation Hierarchy',
          },
          { type: 'slideshow' as const, ...lessonSlides['m-lesson-5-4']! },
          {
            type: 'table',
            headers: ['Level', 'What It Proves', 'When'],
            rows: [
              ['Smoke tests', 'It deploys and runs', 'After every deployment'],
              ['Behavior parity tests', 'It does the same thing the legacy system did', 'Per migrated capability'],
              ['Data validation', 'The data migrated correctly', 'After data migration'],
              ['Integration tests', 'External systems still work', 'After integration rewiring'],
              ['Performance tests', 'It meets the baseline', 'Pre-cutover'],
              ['User acceptance', 'Users confirm their workflows work', 'Pre-cutover'],
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Writing Validation Criteria from the Spec',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              'Every behavior in the TO-BE spec needs acceptance criteria',
              '"Given [legacy input], the migrated system produces [same output]"',
              '"Data query X returns the same results"',
              '"Batch process Y completes within the same time window"',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'The Traceability Chain',
          },
          {
            type: 'text',
            text: 'Code → Task → Plan → TO-BE Spec → AS-IS Spec. If something fails in validation, trace it back to find where the spec and reality diverged. Fix at the spec level, not the code level — then regenerate.',
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Simulation Checkpoint',
            text: 'Write validation criteria for your migrated Northwind system, including the surprise discovery. Run /speckit.analyze one final time to confirm full coverage.',
          },
        ],
        quiz: lessonQuizzes['m-lesson-5-4'],
      },
    ],
  },

  /* ================================================================
     MODULE 6 — Scaling the Process & Programme Governance
     ================================================================ */
  {
    id: 'm-module-6',
    number: 6,
    dayId: 'm-day-3',
    title: 'Scaling the Process & Programme Governance',
    description:
      'Take the spec-driven migration process beyond a single application — build reusable IP, establish governance, and plan adoption across a migration programme.',
    duration: '4 hours',
    objectives: [
      'Design a migration factory model with assessment, architecture, and execution lines',
      'Identify and catalog reusable IP from completed migrations',
      'Recognize migration anti-patterns and explain how spec-flow prevents each one',
      'Create a phased adoption roadmap for spec-driven migration across a programme',
    ],
    lessons: [
      /* ---------- Lesson 6.1 ---------- */
      {
        id: 'm-lesson-6-1',
        number: 1,
        moduleId: 'm-module-6',
        title: 'From One App to a Portfolio',
        duration: '60 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'Scaling the Process',
          },
          { type: 'slideshow' as const, ...lessonSlides['m-lesson-6-1']! },
          {
            type: 'text',
            text: 'What you just did with Northwind is the process for ONE application. A migration programme has dozens or hundreds. How do you scale it?',
          },
          {
            type: 'heading',
            level: 3,
            text: 'The Migration Factory Model',
          },
          {
            type: 'table',
            headers: ['Line', 'Activity', 'SDD Artifacts'],
            rows: [
              ['Assessment', 'Analyze → Reverse-Engineer → AS-IS Spec', 'Behavior inventory, dependency map, AS-IS spec'],
              ['Architecture', 'TO-BE Spec → Plan → Review', 'Cloud target spec, migration plan, contracts'],
              ['Execution', 'Tasks → Implement → Validate', 'Task list, generated code, validation results'],
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Reusable IP — Every Migration Makes the Next One Faster',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              'Constitution templates — organizational migration standards, not per-project',
              'Spec patterns — common application archetypes become templates',
              'Analysis prompts — standardized Copilot prompts for consistent code analysis',
              'Validation libraries — reusable test patterns for common migration scenarios',
              'Architecture decision records — catalogued decisions for reference',
            ],
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'IP at Scale',
            text: 'This mirrors how AI Migrate builds IP — patterns designed as reusable components, use cases from one customer harvested for reuse across others. Spec-flow achieves the same through artifacts.',
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
              'The constitution is the programme governance lever — update it, and all future migrations inherit the standards',
              'Consistency across migrations is more valuable than speed on any individual one',
              'Every spec you write is IP — it survives staff turnover, customer changes, and programme evolution',
            ],
          },
        ],
        quiz: lessonQuizzes['m-lesson-6-1'],
      },

      /* ---------- Lesson 6.2 ---------- */
      {
        id: 'm-lesson-6-2',
        number: 2,
        moduleId: 'm-module-6',
        title: 'Migration Anti-Patterns & How Specs Prevent Them',
        duration: '45 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'Common Migration Anti-Patterns',
          },
          { type: 'slideshow' as const, ...lessonSlides['m-lesson-6-2']! },
          {
            type: 'table',
            headers: ['Anti-Pattern', 'What Happens', 'How Spec-Flow Prevents It'],
            rows: [
              ['Skip the Spec', 'Migrate based on assumptions', 'Pipeline won\'t produce a plan without a spec'],
              ['Big Bang Cutover', 'Everything breaks at once', 'Wave structure in the plan, validated incrementally'],
              ['Tribal Knowledge', 'One person leaves, migration stalls', 'Spec captures the knowledge, person becomes reviewer'],
              ['Feature Creep', '"While we\'re at it, let\'s also..."', 'TO-BE spec scope is locked — enhancements are a separate spec'],
              ['Missing Integrations', '"We forgot about the file drop to SAP"', 'Dependency map + integration contracts as mandatory artifacts'],
              ['No Rollback', 'Can\'t recover if cutover fails', 'Rollback criteria in every task, cutover plan in every plan'],
              ['Gold-Plating', 'Over-engineering the cloud target', 'Constitution enforces simplicity gates and day-1 constraints'],
              ['Invisible Changes', 'Nobody knows what changed', 'AS-IS ↔ TO-BE delta is the explicit, traceable change record'],
              ['Constitution Drift', 'Standards evolve but aren\'t captured', 'Quarterly constitution reviews at programme level'],
              ['Day 3 Surprise Panic', 'Unknown discovery derails project', 'Specs absorb change — add to AS-IS, ripple through pipeline'],
            ],
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Pattern Recognition',
            text: 'Each of these anti-patterns is a different symptom of the same root cause: insufficient specification. The pipeline prevents them structurally — not by relying on heroic effort.',
          },
        ],
        quiz: lessonQuizzes['m-lesson-6-2'],
      },

      /* ---------- Lesson 6.3 ---------- */
      {
        id: 'm-lesson-6-3',
        number: 3,
        moduleId: 'm-module-6',
        title: 'Simulation: Final Review & Presentation',
        duration: '75 min',
        content: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Final Simulation Exercise',
            text: 'Finalize all Northwind migration artifacts and present your spec-driven migration to the class.',
          },
          {
            type: 'heading',
            level: 2,
            text: 'Finalize All Artifacts',
          },
          { type: 'slideshow' as const, ...lessonSlides['m-lesson-6-3']! },
          {
            type: 'list',
            style: 'unordered',
            items: [
              'Constitution',
              'AS-IS spec (including Day 3 surprise)',
              'TO-BE spec (updated for the surprise)',
              'Migration plan with waves',
              'Data migration spec',
              'Integration contracts',
              'Task list with rollback criteria',
              'Validation criteria',
            ],
          },
          {
            type: 'code',
            language: 'bash',
            code: '/speckit.analyze   # Final cross-artifact consistency check',
            caption: 'Run the final consistency check before presenting',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Presentation (15 min per team)',
          },
          {
            type: 'list',
            style: 'ordered',
            items: [
              'Walk through the spec-flow: from cold code to migration-ready spec set',
              'How did you handle the surprise? What changed? What didn\'t?',
              'What would you add to the constitution for the next migration?',
              'What reusable IP came out of this exercise?',
            ],
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
              '✅ AS-IS spec captures legacy behavior comprehensively (including the surprise)',
              '✅ TO-BE spec accounts for every AS-IS behavior',
              '✅ Traceability: every TO-BE item traces to an AS-IS item',
              '✅ Plan has a clear wave structure with validation at each boundary',
              '✅ Data migration spec has validation criteria',
              '✅ Integration contracts exist for all external touchpoints',
              '✅ The surprise was absorbed through spec updates, not ad-hoc fixes',
              '✅ Everything passes /speckit.analyze consistency checks',
            ],
          },
        ],
        quiz: lessonQuizzes['m-lesson-6-3'],
      },

      /* ---------- Lesson 6.4 ---------- */
      {
        id: 'm-lesson-6-4',
        number: 4,
        moduleId: 'm-module-6',
        title: 'Adoption Roadmap & What\'s Next',
        duration: '30 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'Phased Adoption',
          },
          { type: 'slideshow' as const, ...lessonSlides['m-lesson-6-4']! },
          {
            type: 'table',
            headers: ['Phase', 'Activities'],
            rows: [
              ['Pilot', 'Apply full spec-flow to one real application — document what works and what doesn\'t'],
              ['Templatize', 'Harvest IP from the pilot — constitution, spec templates, analysis prompts, validation patterns'],
              ['Scale', 'Train delivery team on the process — apply templates to 3–5 applications — refine'],
              ['Factory', 'Full migration factory — continuous IP harvesting — governance metrics — programme reporting'],
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Integration with Existing Tools',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              'Works alongside AI Migrate where it\'s deployed — spec-flow strengthens the specification layer',
              'GitHub Copilot as the universal accelerator — no tenant deployment needed',
              'Spec artifacts integrate with Migration Cockpit for tracking and reporting',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Building the Business Case',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              'AI-assisted assessment: target 30–50% productivity improvement',
              'Quality: fewer post-migration incidents because the spec was validated before implementation',
              'Knowledge capture: specs survive staff turnover — critical for multi-year programmes',
              'Reusable IP: each migration makes the next one faster and more consistent',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Recommended Next Steps',
          },
          {
            type: 'list',
            style: 'ordered',
            items: [
              'Select a real application for pilot migration',
              'Write the migration constitution for your programme',
              'Run the spec-flow: analyze → specify AS-IS → clarify → specify TO-BE → plan → tasks → implement',
              'Present the spec pair to stakeholders for sign-off before building anything',
              'After the first migration: harvest the IP, update the constitution, templatize the spec patterns',
              'Repeat',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'AI Migrate vs. Spec-Driven Migration',
          },
          {
            type: 'table',
            headers: ['Aspect', 'AI Migrate', 'Spec-Driven Migration'],
            rows: [
              ['Deployment', 'Requires deployment in customer tenant', 'Works from source code + GitHub Copilot'],
              ['Permissions', 'Extensive security & compliance setup', 'No special tenant permissions needed'],
              ['Time to Value', 'Weeks (setup) → months (results)', 'Days (first spec) → weeks (first migration)'],
              ['Scale', 'Purpose-built for large-scale programmes', 'Scales through templates and IP reuse'],
              ['Quality', 'Agent-driven quality guardrails', 'Constitution-driven quality gates'],
              ['IP Reuse', 'Platform-embedded patterns', 'Spec artifacts, templates, validation libraries'],
              ['Best For', 'Large, sustained programmes', 'Rapid assessments, any portfolio size, early engagements'],
            ],
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Combined Use',
            text: 'These approaches are complementary. Use AI Migrate for orchestration at scale and spec-driven migration for specification quality. Together they deliver consistent, high-quality migration outcomes.',
          },
        ],
        quiz: lessonQuizzes['m-lesson-6-4'],
      },
    ],
  },
];

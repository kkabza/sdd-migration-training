import type { Module } from '@/types';

export const foundationsDay2Modules: Module[] = [
  {
    id: 'f-module-3',
    number: 3,
    dayId: 'f-day-2',
    title: 'From Spec to Plan',
    description:
      'Transform a specification into a technical implementation plan and understand how to review AI-generated architecture.',
    duration: '4 hours',
    objectives: [
      'Generate a technical plan from a feature specification',
      'Review AI-generated architecture critically',
      'Understand cross-artifact consistency checking',
      'Use the analyze step to catch gaps before implementation',
    ],
    lessons: [
      {
        id: 'f-lesson-3-1',
        number: 1,
        moduleId: 'f-module-3',
        title: 'How the Plan Step Works',
        duration: '45 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'From WHAT to HOW',
          },
          {
            type: 'image',
            src: '/images/m3-spec-to-plan.png',
            alt: 'Transforming specifications into technical architecture',
            caption: 'The plan step bridges business requirements and technical implementation',
          },
          {
            type: 'text',
            text: 'The plan step is where business requirements become technical architecture. /speckit.plan reads your spec and constitution, then generates a complete technical blueprint.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'What the Plan Generates',
          },
          {
            type: 'table',
            headers: ['Artifact', 'Contents'],
            rows: [
              ['plan.md', 'High-level architecture, phased implementation, technology rationale'],
              ['data-model.md', 'Entity definitions, relationships, migration strategy'],
              ['contracts/', 'API endpoint definitions, request/response schemas'],
              ['research.md', 'Library comparisons, performance benchmarks, trade-offs'],
              ['quickstart.md', 'Key validation scenarios for rapid smoke testing'],
            ],
          },
          {
            type: 'media',
            media: {
              id: 'f-video-3-1-plan',
              mediaType: 'video',
              src: '/media/module3-plan-step.mp4',
              title: 'The Plan Step in Action',
              poster: '/media/posters/plan-step.jpg',
              duration: '9:00',
            },
          },
          {
            type: 'heading',
            level: 3,
            text: 'Pre-Implementation Gates',
          },
          {
            type: 'text',
            text: 'The plan enforces Phase -1 gates from the constitution before any code can be written:',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              'Simplicity Gate — Is this the simplest solution that meets the spec?',
              'Anti-Abstraction Gate — Are there unnecessary abstractions?',
              'Integration-First Gate — Are integration points tested early?',
            ],
          },
        ],
      },
      {
        id: 'f-lesson-3-2',
        number: 2,
        moduleId: 'f-module-3',
        title: 'Reviewing AI-Generated Architecture',
        duration: '60 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'The Architect\'s Plan Review',
          },
          {
            type: 'image',
            src: '/images/m3-architect-review.png',
            alt: 'The architect reviewing AI-generated architecture plans',
            caption: 'Plan review is where architectural judgment matters most',
          },
          {
            type: 'text',
            text: 'Plan review is where architectural judgment matters most. The AI generates a technically valid plan, but you need to catch over-engineering, missed edge cases, and architectural drift.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Plan Review Checklist',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              '✅ Every technology choice has documented rationale',
              '✅ API contracts match the spec\'s user stories 1:1',
              '✅ Data model is normalized appropriately for use cases',
              '✅ Phase -1 gates are passed or justified',
              '✅ Phasing order is correct (foundations before features)',
              '✅ No unnecessary abstractions or over-engineering',
              '✅ Test strategies cover the spec\'s acceptance criteria',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Common AI Planning Mistakes',
          },
          {
            type: 'table',
            headers: ['Mistake', 'How to Catch It'],
            rows: [
              ['Over-abstraction', 'Ask: "Would removing this wrapper change behavior?"'],
              ['Missing error handling', 'Cross-reference spec edge cases with plan'],
              ['Inconsistent naming', 'Compare entity names across data model and contracts'],
              ['Circular phasing', 'Draw a dependency graph of the phases'],
            ],
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Case Study',
            text: 'Review a deliberately flawed plan document. Can you identify 5+ architectural issues using the review checklist?',
          },
          {
            type: 'media',
            media: {
              id: 'f-audio-3-2-review',
              mediaType: 'audio',
              src: '/media/module3-review-discussion.mp3',
              title: 'Architecture Review Discussion',
              duration: '7:30',
            },
          },
        ],
      },
      {
        id: 'f-lesson-3-3',
        number: 3,
        moduleId: 'f-module-3',
        title: 'Lab: Plan the Knowledge Base',
        duration: '90 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'Hands-On: Generate and Review a Plan',
          },
          {
            type: 'image',
            src: '/images/m3-plan-artifacts.png',
            alt: 'Planning artifacts: plan.md, data-model.md, contracts, and research',
            caption: 'The plan step generates multiple artifacts that form the technical blueprint',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Step 1: Run the Plan Command',
          },
          {
            type: 'code',
            language: 'bash',
            caption: 'Generate a technical plan',
            code: '/speckit.plan Use React 18 with TypeScript and Vite for the\nfrontend. Express with TypeScript for the API server.\nPostgreSQL with Prisma ORM. Markdown rendering with\nreact-markdown. Role-based access using JWT tokens.\nMonorepo structure with /client and /server directories.\nFull-text search using PostgreSQL tsvector.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Step 2: Review Each Artifact',
          },
          {
            type: 'list',
            style: 'ordered',
            items: [
              'Review plan.md — check architectural decisions and phasing',
              'Review data-model.md — validate entities, relationships, indexes',
              'Review contracts/ — verify API endpoints match spec user stories',
              'Review research.md — evaluate library choices and trade-offs',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Step 3: Run the Analyze Step',
          },
          {
            type: 'code',
            language: 'bash',
            code: '/speckit.analyze',
          },
          {
            type: 'text',
            text: 'The analyze step checks cross-artifact consistency: Does the plan cover every spec requirement? Do contracts match the data model? Are test scenarios aligned with acceptance criteria?',
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Group Exercise',
            text: 'Each table presents their plan\'s most interesting architectural decision. The class discusses trade-offs together.',
          },
        ],
      },
      {
        id: 'f-lesson-3-4',
        number: 4,
        moduleId: 'f-module-3',
        title: 'Cross-Artifact Consistency',
        duration: '45 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'Unit Tests for Your English',
          },
          {
            type: 'image',
            src: '/images/m3-consistency-check.png',
            alt: 'Cross-artifact consistency checking across specifications',
            caption: 'The analyze step runs unit tests on your prose to catch specification bugs',
          },
          {
            type: 'text',
            text: 'Think of the analyze step as running "unit tests on your prose." It catches bugs in your specifications before they become bugs in your code.',
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
              'Spec requirements covered by plan components',
              'Plan components covered by API contracts',
              'Data model supports all API operations',
              'Test scenarios cover acceptance criteria',
              'Constitutional principles are respected throughout',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'The Traceability Chain',
          },
          {
            type: 'code',
            language: 'text',
            caption: 'Full traceability',
            code: 'Spec Requirement\n  └── Plan Component\n        └── API Contract\n              └── Task\n                    └── Implementation Code\n                          └── Test',
          },
          {
            type: 'callout',
            variant: 'info',
            text: 'Run /speckit.checklist after analyze to generate quality validation criteria you can use as a final gate before implementation.',
          },
        ],
      },
    ],
  },
  {
    id: 'f-module-4',
    number: 4,
    dayId: 'f-day-2',
    title: 'Task Generation & Implementation',
    description:
      'Generate, review, and refine the task list, then execute the implementation step to produce working code.',
    duration: '4 hours',
    objectives: [
      'Generate a well-ordered task list from a plan',
      'Understand task parallelization with [P] markers',
      'Execute and monitor the implementation step',
      'Review AI-generated code against the spec and constitution',
    ],
    lessons: [
      {
        id: 'f-lesson-4-1',
        number: 1,
        moduleId: 'f-module-4',
        title: 'How Task Generation Works',
        duration: '45 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'From Plan to Actionable Steps',
          },
          {
            type: 'image',
            src: '/images/m4-task-generation.png',
            alt: 'Generating sequenced implementation tasks from the plan',
            caption: 'Tasks are derived from plan components, contracts, and data models',
          },
          {
            type: 'text',
            text: 'The /speckit.tasks command reads your plan, data model, contracts, and research documents, then generates a sequenced list of implementation tasks.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'How Tasks Are Derived',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              'Each API contract → endpoint implementation tasks',
              'Each data model entity → schema/migration tasks',
              'Each UI component in the plan → frontend tasks',
              'Each acceptance criterion → test tasks',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Task Ordering',
          },
          {
            type: 'code',
            language: 'text',
            caption: 'Typical task order',
            code: 'Infrastructure → Data Layer → API Endpoints → UI Components → Integration → E2E Tests',
          },
          {
            type: 'text',
            text: 'Tasks marked with [P] can be executed in parallel — they have no dependency on each other.',
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Granularity',
            text: 'Each task should be independently testable. Over-granular tasks waste context; under-granular tasks produce large, unfocused code changes.',
          },
        ],
      },
      {
        id: 'f-lesson-4-2',
        number: 2,
        moduleId: 'f-module-4',
        title: 'Lab: Generate & Review Tasks',
        duration: '60 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'Hands-On: Task Generation',
          },
          {
            type: 'image',
            src: '/images/m4-task-review.png',
            alt: 'Reviewing and refining the generated task list',
            caption: 'Review tasks for correct ordering, granularity, and parallelization markers',
          },
          {
            type: 'code',
            language: 'bash',
            caption: 'Generate tasks from the plan',
            code: '/speckit.tasks',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Review Checklist for Tasks',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              '✅ Correct ordering — no circular dependencies',
              '✅ Appropriate granularity — each task is independently testable',
              '✅ Parallelization markers [P] on independent tasks',
              '✅ Full coverage of plan components',
              '✅ Test tasks interspersed (not all at the end)',
              '✅ No gaps — every plan component has at least one task',
            ],
          },
          {
            type: 'media',
            media: {
              id: 'f-video-4-2-tasks',
              mediaType: 'video',
              src: '/media/module4-tasks-demo.mp4',
              title: 'Task Generation Demo',
              poster: '/media/posters/tasks-demo.jpg',
              duration: '8:00',
            },
          },
        ],
      },
      {
        id: 'f-lesson-4-3',
        number: 3,
        moduleId: 'f-module-4',
        title: 'The Implementation Step',
        duration: '45 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'From Tasks to Working Code',
          },
          {
            type: 'image',
            src: '/images/m4-code-generation.png',
            alt: 'From tasks to working code: the implementation step',
            caption: 'All artifacts converge during implementation to produce production-quality code',
          },
          {
            type: 'text',
            text: 'The /speckit.implement command is where all the previous artifacts converge. The AI has access to your constitution, spec, plan, and tasks — and uses all of them to generate production-quality code.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'What the AI Sees During Implementation',
          },
          {
            type: 'table',
            headers: ['Artifact', 'What It Provides'],
            rows: [
              ['Constitution', 'Coding standards, testing mandates, architectural constraints'],
              ['Spec', 'What the user wants — acceptance criteria'],
              ['Plan', 'How to build it — architecture, technology choices'],
              ['Tasks', 'What to do in what order — sequenced steps'],
            ],
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Important',
            text: 'If the implementation produces unexpected results, the fix is almost always in the spec or plan — not in the code itself. Refine the upstream artifacts and regenerate.',
          },
        ],
      },
      {
        id: 'f-lesson-4-4',
        number: 4,
        moduleId: 'f-module-4',
        title: 'Lab: Implement the Knowledge Base',
        duration: '90 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'Hands-On: Full Implementation',
          },
          {
            type: 'image',
            src: '/images/m4-working-application.png',
            alt: 'A working application generated entirely from specifications',
            caption: 'The complete Knowledge Base application, generated from the SDD pipeline',
          },
          {
            type: 'code',
            language: 'bash',
            caption: 'Run the implementation step',
            code: '/speckit.implement',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Post-Implementation Review',
          },
          {
            type: 'list',
            style: 'ordered',
            items: [
              'Does the folder structure match the plan?',
              'Are API routes consistent with contracts?',
              'Does the database schema match the data model?',
              'Are tests present and meaningful?',
              'Does the frontend implement the specified UI?',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Run the Application',
          },
          {
            type: 'code',
            language: 'bash',
            caption: 'Verify the generated code works',
            code: '# Start the backend\ncd server && npm install && npm run dev\n\n# In another terminal, start the frontend\ncd client && npm install && npm run dev\n\n# Run the test suite\nnpm test',
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Deliverable',
            text: 'A working Knowledge Base application generated entirely from specifications. Walk through the user stories manually to verify.',
          },
          {
            type: 'media',
            media: {
              id: 'f-video-4-4-implement',
              mediaType: 'video',
              src: '/media/module4-implementation.mp4',
              title: 'Full Implementation Walkthrough',
              poster: '/media/posters/implementation.jpg',
              duration: '15:00',
            },
          },
        ],
      },
    ],
  },
];

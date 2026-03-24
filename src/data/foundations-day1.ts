import type { Module } from '@/types';

export const foundationsDay1Modules: Module[] = [
  {
    id: 'f-module-1',
    number: 1,
    dayId: 'f-day-1',
    title: 'The SDD Paradigm Shift',
    description:
      'Understand why Spec-Driven Development exists, how it differs from traditional SDLC and prompt-based AI coding, and what role architects play in this new model.',
    duration: '4 hours',
    objectives: [
      'Explain the power inversion between specs and code',
      'Describe the full SDD pipeline and each step',
      'Identify all artifacts generated at each stage',
      'Set up a spec-kit project from scratch',
    ],
    lessons: [
      {
        id: 'f-lesson-1-1',
        number: 1,
        moduleId: 'f-module-1',
        title: 'The Power Inversion',
        duration: '45 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'Specifications as the Source of Truth',
          },
          {
            type: 'image',
            src: '/images/m1-power-inversion.png',
            alt: 'The Power Inversion — specifications as the new source of truth',
            caption: 'The Power Inversion: Specifications become the source of truth, code becomes the generated output',
          },
          {
            type: 'media',
            media: {
              id: 'f-audio-1-1-narration',
              mediaType: 'audio',
              src: '/media/module1-lesson1-power-inversion.mp3',
              title: 'Lesson Narration',
              duration: '3:30',
            },
          },
          {
            type: 'text',
            text: 'For decades, software specifications have been second-class citizens — documents written once, skimmed by developers, and quickly abandoned as the code diverged. The code was always the real source of truth.',
          },
          {
            type: 'text',
            text: 'Spec-Driven Development inverts this relationship entirely: specifications are the source of truth, and code is the generated output that serves the specs.',
          },
          {
            type: 'media',
            media: {
              id: 'f-video-1-1-intro',
              mediaType: 'video',
              src: '/media/module1-power-inversion.mp4',
              title: 'The Power Inversion Explained',
              poster: '/media/posters/power-inversion.jpg',
              duration: '8:30',
            },
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Key Insight',
            text: 'Maintaining software means evolving specifications. Debugging means fixing specs and plans, not just patching code.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Traditional vs. Spec-Driven',
          },
          {
            type: 'table',
            headers: ['Aspect', 'Traditional', 'Spec-Driven'],
            rows: [
              ['Source of truth', 'Code', 'Specifications'],
              ['Maintenance', 'Edit code directly', 'Update spec, regenerate'],
              ['Documentation', 'Retroactive, often stale', 'Always current (it IS the spec)'],
              ['Debugging', 'Read code, add logs', 'Review spec→plan→task chain'],
              ['Onboarding', 'Read code + tribal knowledge', 'Read spec + constitution'],
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Beyond Vibe Coding',
          },
          {
            type: 'text',
            text: '"Vibe coding" is the practice of prompting an AI with informal instructions and hoping for good output. SDD is different: it provides structured, traceable artifacts that constrain the AI to produce consistent, high-quality results.',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              'Vibe coding: "Build me a login page" — inconsistent results',
              'Prompt engineering: Carefully crafted prompts — better but not traceable',
              'Spec-driven: Constitution + Spec + Plan + Tasks — consistent, traceable, evolvable',
            ],
          },
        ],
      },
      {
        id: 'f-lesson-1-2',
        number: 2,
        moduleId: 'f-module-1',
        title: 'The SDD Workflow & Architect\'s Role',
        duration: '45 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'The 5-Step Core Pipeline',
          },
          {
            type: 'image',
            src: '/images/m1-sdd-pipeline.png',
            alt: 'The SDD Pipeline: Constitution, Specify, Plan, Tasks, Implement',
            caption: 'The five-step SDD pipeline that transforms specifications into working code',
          },
          {
            type: 'media',
            media: {
              id: 'f-audio-1-2-narration',
              mediaType: 'audio',
              src: '/media/module1-lesson2-workflow-and-role.mp3',
              title: 'Lesson Narration',
              duration: '4:00',
            },
          },
          {
            type: 'text',
            text: 'Every SDD project follows a linear pipeline. Each step consumes the output of the previous step and produces artifacts that feed the next.',
          },
          {
            type: 'code',
            language: 'text',
            caption: 'The SDD Pipeline',
            code: 'Constitution → Specify → Plan → Tasks → Implement\n                ↑            ↑\n             Clarify       Analyze\n            (optional)    (optional)',
          },
          {
            type: 'media',
            media: {
              id: 'f-audio-1-2-pipeline',
              mediaType: 'audio',
              src: '/media/module1-pipeline-walkthrough.mp3',
              title: 'Pipeline Walkthrough (Audio)',
              duration: '6:15',
            },
          },
          {
            type: 'heading',
            level: 3,
            text: 'The Architect\'s Role in Each Step',
          },
          {
            type: 'table',
            headers: ['Step', 'Architect Responsibility'],
            rows: [
              ['Constitution', 'Write and maintain — this is your architectural DNA'],
              ['Specify', 'Review for scope and completeness'],
              ['Plan', 'Deep review — this is where architectural judgment matters most'],
              ['Tasks', 'Verify ordering and parallelization'],
              ['Implement', 'Review generated code for compliance'],
            ],
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Role Shift',
            text: 'The architect shifts from "designing systems" to "governing how AI designs systems." Your constitution encodes your judgment so the AI applies it consistently across every feature.',
          },
        ],
      },
      {
        id: 'f-lesson-1-3',
        number: 3,
        moduleId: 'f-module-1',
        title: 'SDD Artifacts Deep Dive',
        duration: '45 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'Artifact Inventory',
          },
          {
            type: 'image',
            src: '/images/m1-traceability-chain.png',
            alt: 'Artifact traceability chain from requirements to working code',
            caption: 'Every line of generated code traces back through the artifact chain',
          },
          {
            type: 'media',
            media: {
              id: 'f-audio-1-3-narration',
              mediaType: 'audio',
              src: '/media/module1-lesson3-artifacts-deep-dive.mp3',
              title: 'Lesson Narration',
              duration: '3:20',
            },
          },
          {
            type: 'text',
            text: 'Each step in the pipeline generates specific, versioned artifacts. These artifacts form a traceability chain from requirements to working code.',
          },
          {
            type: 'table',
            headers: ['Step', 'Artifacts', 'Purpose'],
            rows: [
              ['Constitution', 'constitution.md', 'Project principles, coding standards, architectural constraints'],
              ['Specify', 'spec.md', 'Feature PRD: user stories, acceptance criteria, NFRs'],
              ['Clarify', 'Updated spec.md', 'Resolved ambiguities, refined criteria'],
              ['Plan', 'plan.md, data-model.md, contracts/, research.md', 'Architecture, data models, API contracts, library research'],
              ['Analyze', 'Consistency report', 'Cross-artifact alignment check'],
              ['Tasks', 'tasks.md', 'Sequenced implementation steps with [P] markers'],
              ['Checklist', 'Quality checklist', 'Requirement completeness validators'],
              ['Implement', 'Source code, tests, config', 'Working application code'],
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'The Traceability Chain',
          },
          {
            type: 'text',
            text: 'Every line of generated code should trace back through the chain: Code → Task → Plan → Spec → Constitution. If you find code that doesn\'t trace, either the spec is incomplete or the AI deviated.',
          },
          {
            type: 'code',
            language: 'text',
            caption: 'Artifact file structure',
            code: '.specify/\n├── memory/\n│   └── constitution.md\n\nspecs/<feature-branch>/\n├── spec.md\n├── plan.md\n├── data-model.md\n├── contracts/\n├── research.md\n├── quickstart.md\n└── tasks.md',
          },
        ],
      },
      {
        id: 'f-lesson-1-4',
        number: 4,
        moduleId: 'f-module-1',
        title: 'Hands-On: Environment Setup',
        duration: '90 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'Lab: Set Up Your First Spec-Kit Project',
          },
          {
            type: 'image',
            src: '/images/m1-dev-environment.png',
            alt: 'Setting up your spec-kit development environment',
            caption: 'Your spec-kit development environment with CLI tools and project structure',
          },
          {
            type: 'media',
            media: {
              id: 'f-audio-1-4-narration',
              mediaType: 'audio',
              src: '/media/module1-lesson4-environment-setup.mp3',
              title: 'Lesson Narration',
              duration: '2:40',
            },
          },
          {
            type: 'callout',
            variant: 'info',
            text: 'This is a hands-on lab. Follow each step sequentially and verify the output before proceeding.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Step 1: Install the Specify CLI',
          },
          {
            type: 'code',
            language: 'bash',
            caption: 'Install uv and spec-kit',
            code: '# Install uv (Python package manager)\ncurl -LsSf https://astral.sh/uv/install.sh | sh\nsource $HOME/.local/bin/env\n\n# Install the specify CLI\nuv tool install specify-cli --from git+https://github.com/github/spec-kit.git',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Step 2: Initialize a Project',
          },
          {
            type: 'code',
            language: 'bash',
            caption: 'Create a new spec-kit project',
            code: 'specify init knowledge-base --ai copilot\ncd knowledge-base\nspecify check',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Step 3: Explore the Structure',
          },
          {
            type: 'text',
            text: 'After initialization, explore the generated project structure. Pay special attention to:',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              '.github/agents/ — Agent definitions for each SDD step',
              '.github/prompts/ — Slash command prompt files',
              '.specify/memory/ — Persistent context including the constitution',
              '.specify/templates/ — Artifact templates that control output quality',
            ],
          },
          {
            type: 'media',
            media: {
              id: 'f-video-1-4-setup',
              mediaType: 'video',
              src: '/media/module1-setup-walkthrough.mp4',
              title: 'Setup Walkthrough Demo',
              poster: '/media/posters/setup-demo.jpg',
              duration: '12:00',
            },
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Checkpoint',
            text: 'After this lab, you should have a fully initialized spec-kit project with all agents, prompts, and templates in place. Run "specify check" to verify.',
          },
        ],
      },
    ],
  },
  {
    id: 'f-module-2',
    number: 2,
    dayId: 'f-day-1',
    title: 'The Constitution & Specification',
    description:
      'Write an effective constitution that encodes architectural judgment, then create a high-quality feature specification.',
    duration: '4 hours',
    objectives: [
      'Write a constitution with concrete, testable principles',
      'Distinguish what belongs in a constitution vs. a spec vs. a plan',
      'Write feature specifications with measurable acceptance criteria',
      'Use the clarify step to resolve ambiguities before planning',
    ],
    lessons: [
      {
        id: 'f-lesson-2-1',
        number: 1,
        moduleId: 'f-module-2',
        title: 'Writing an Effective Constitution',
        duration: '60 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'The Constitution: Your Architectural DNA',
          },
          {
            type: 'image',
            src: '/images/m2-constitution-dna.png',
            alt: 'The Constitution as your project\'s architectural DNA',
            caption: 'The constitution encodes architectural judgment for consistent AI-generated output',
          },
          {
            type: 'text',
            text: 'The constitution is the single most impactful artifact an architect writes. It encodes your architectural judgment so the AI applies it consistently across every feature, every spec, and every line of generated code.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'What Belongs in a Constitution?',
          },
          {
            type: 'table',
            headers: ['Question', 'Belongs In'],
            rows: [
              ['"We use TypeScript in strict mode"', 'Constitution'],
              ['"Users can search bookmarks by tag"', 'Specification'],
              ['"Search uses PostgreSQL full-text search"', 'Plan'],
              ['"Create the search API endpoint"', 'Task'],
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Anatomy of a Strong Constitution',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              'Code quality standards — linting, formatting, type safety mandates',
              'Testing mandates — unit, integration, E2E requirements with coverage targets',
              'Architectural constraints — project structure, separation of concerns',
              'Technology guardrails — approved frameworks, forbidden patterns',
              'Security requirements — input validation, authentication standards',
              'Performance baselines — response times, bundle sizes',
            ],
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Common Mistake',
            text: 'Don\'t write implementation details in the constitution. "Use React with Redux" is too specific. "Use a unidirectional data flow pattern" is a principle.',
          },
          {
            type: 'code',
            language: 'markdown',
            caption: 'Example: Constitution excerpt',
            code: '## Core Principles\n\n### I. TypeScript Strict Mode\nAll source files use TypeScript in strict mode. No `any` types\nwithout documented justification.\n\n### II. Test-First (NON-NEGOTIABLE)\nEvery component and module must have co-located tests.\nTests are written BEFORE implementation code.\nMinimum 80% code coverage enforced in CI.',
          },
        ],
      },
      {
        id: 'f-lesson-2-2',
        number: 2,
        moduleId: 'f-module-2',
        title: 'Lab: Write the Constitution',
        duration: '45 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'Hands-On: Write a Constitution for the Knowledge Base',
          },
          {
            type: 'image',
            src: '/images/m2-constitution-lab.png',
            alt: 'Hands-on lab: writing a constitution for the Knowledge Base',
            caption: 'Writing a constitution that captures your architectural standards',
          },
          {
            type: 'callout',
            variant: 'info',
            text: 'In this lab, you\'ll use the /speckit.constitution slash command to generate a constitution, then review and refine it.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Step 1: Run the Constitution Command',
          },
          {
            type: 'code',
            language: 'bash',
            caption: 'Generate a constitution',
            code: '/speckit.constitution Build a Team Knowledge Base with:\n- TypeScript strict mode for frontend and backend\n- React 18 with functional components and hooks\n- Express.js REST API with Zod input validation\n- PostgreSQL with Prisma ORM\n- Vitest for unit/integration, Playwright for E2E\n- Clean client/server separation\n- All API endpoints must have tests\n- Role-based access (admin, editor, viewer)',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Step 2: Review the Output',
          },
          {
            type: 'text',
            text: 'After the AI generates the constitution, review it critically:',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              'Are all principles concrete and testable?',
              'Are there any implementation details that should be in a plan instead?',
              'Did it capture your testing and security mandates?',
              'Is the constitution too vague? Too rigid?',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Step 3: Iterate',
          },
          {
            type: 'text',
            text: 'Refine the constitution with follow-up prompts. The constitution is a living document — it should evolve as your understanding of the project deepens.',
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Group Exercise',
            text: 'Compare constitutions across tables. Discuss which constraints produce better or worse AI outputs. Which principles are universal vs. project-specific?',
          },
        ],
      },
      {
        id: 'f-lesson-2-3',
        number: 3,
        moduleId: 'f-module-2',
        title: 'Writing Effective Specifications',
        duration: '60 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'The Spec: WHAT and WHY, Never HOW',
          },
          {
            type: 'image',
            src: '/images/m2-spec-quality.png',
            alt: 'Specification quality: describing WHAT and WHY, never HOW',
            caption: 'A quality specification focuses on user needs and outcomes, not implementation',
          },
          {
            type: 'text',
            text: 'The specification describes what the system should do and why, from the user\'s perspective. It should never describe how the system does it — that\'s the plan\'s job.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Spec Quality Checklist',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              '✅ Every feature traces to a user story',
              '✅ Acceptance criteria are testable (not subjective)',
              '✅ No implementation details (no React, Express, etc.)',
              '✅ Ambiguities marked with [NEEDS CLARIFICATION]',
              '✅ Non-functional requirements have measurable thresholds',
              '✅ Edge cases are explicitly addressed',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Using [NEEDS CLARIFICATION] Markers',
          },
          {
            type: 'text',
            text: 'Never let the AI guess. When something is ambiguous, the spec should mark it honestly rather than making assumptions.',
          },
          {
            type: 'code',
            language: 'markdown',
            caption: 'Good: Marking ambiguity explicitly',
            code: '- **FR-006**: System MUST authenticate users via\n  [NEEDS CLARIFICATION: auth method not specified — email/password, SSO, OAuth?]\n- **FR-007**: System MUST retain user data for\n  [NEEDS CLARIFICATION: retention period not specified]',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Anti-Pattern',
            text: 'A spec that says "Users can log in with email and password, using bcrypt hashing and JWT tokens" has leaked implementation details. The spec should say "Users can authenticate with their credentials." The plan decides the how.',
          },
        ],
      },
      {
        id: 'f-lesson-2-4',
        number: 4,
        moduleId: 'f-module-2',
        title: 'Lab: Specify the Knowledge Base',
        duration: '75 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'Hands-On: Create a Feature Specification',
          },
          {
            type: 'image',
            src: '/images/m2-specify-command.png',
            alt: 'Using the specify command to generate feature specifications',
            caption: 'The specify command transforms requirements into structured feature specifications',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Step 1: Run the Specify Command',
          },
          {
            type: 'code',
            language: 'bash',
            caption: 'Generate a feature specification',
            code: '/speckit.specify Build a Team Knowledge Base where team members\ncan create, edit, and organize articles written in Markdown.\nArticles are grouped into categories. Users can search across\nall articles by title, content, or tags. The system has three\nroles: Admin, Editor, and Viewer. The home page shows recent\narticles and a category sidebar.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Step 2: Run the Clarify Step',
          },
          {
            type: 'code',
            language: 'bash',
            code: '/speckit.clarify',
          },
          {
            type: 'text',
            text: 'The AI will surface ambiguities and ask questions. Answer them honestly — this is where you prevent issues that would be expensive to fix during implementation.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Step 3: Review & Score',
          },
          {
            type: 'text',
            text: 'Review the generated spec.md against the quality checklist from the previous lesson.',
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Peer Review Exercise',
            text: 'Swap specs with a partner. Score each other\'s spec against the quality checklist. Identify any leaked implementation details or missing edge cases.',
          },
          {
            type: 'media',
            media: {
              id: 'f-video-2-4-specify',
              mediaType: 'video',
              src: '/media/module2-specify-demo.mp4',
              title: 'Specify Command Demo',
              poster: '/media/posters/specify-demo.jpg',
              duration: '10:00',
            },
          },
        ],
      },
    ],
  },
];

import type { Module } from '@/types';

export const foundationsDay3Modules: Module[] = [
  {
    id: 'f-module-5',
    number: 5,
    dayId: 'f-day-3',
    title: 'Real-World Patterns',
    description:
      'Apply SDD to complex, real-world scenarios — brownfield projects, multi-feature development, and team workflows.',
    duration: '4 hours',
    objectives: [
      'Adopt SDD in existing (brownfield) codebases',
      'Manage parallel feature development with feature branches',
      'Define team roles in an SDD workflow',
      'Use extensions and presets for organizational standards',
    ],
    lessons: [
      {
        id: 'f-lesson-5-1',
        number: 1,
        moduleId: 'f-module-5',
        title: 'Brownfield Adoption',
        duration: '60 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'SDD for Existing Codebases',
          },
          {
            type: 'image',
            src: '/images/m5-brownfield.png',
            alt: 'Adopting SDD in existing brownfield codebases',
            caption: 'Introducing spec-kit to an existing project captures how it already works',
          },
          {
            type: 'text',
            text: 'SDD isn\'t just for greenfield projects. You can introduce spec-kit into any existing codebase. The key difference: in brownfield, the constitution captures how the project already works rather than how you wish it worked.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Introducing Spec-Kit to an Existing Project',
          },
          {
            type: 'code',
            language: 'bash',
            caption: 'Initialize in an existing project',
            code: '# Navigate to your existing project\ncd my-existing-app\n\n# Initialize spec-kit in the current directory\nspecify init . --ai copilot --here --force\n\n# Write a constitution that reflects current architecture\n/speckit.constitution',
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Key Insight',
            text: 'In brownfield, the constitution becomes a capture of "how this project already works" rather than "how we wish it worked." Document the actual patterns, not aspirational ones.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Community Walkthroughs',
          },
          {
            type: 'text',
            text: 'The SDD community has documented walkthroughs of adopting spec-kit in real projects:',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              'ASP.NET CMS — 307K lines of code, brownfield adoption',
              'Java Runtime — 420K lines, enterprise integration',
              'Go Microservices — Multi-service architecture',
              'Spring Boot API — Enterprise REST API patterns',
            ],
          },
          {
            type: 'media',
            media: {
              id: 'f-video-5-1-brownfield',
              mediaType: 'video',
              src: '/media/module5-brownfield.mp4',
              title: 'Brownfield Adoption Case Study',
              poster: '/media/posters/brownfield.jpg',
              duration: '11:00',
            },
          },
        ],
      },
      {
        id: 'f-lesson-5-2',
        number: 2,
        moduleId: 'f-module-5',
        title: 'Lab: Add a Feature',
        duration: '90 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'Hands-On: Add Comments to the Knowledge Base',
          },
          {
            type: 'image',
            src: '/images/m5-feature-addition.png',
            alt: 'Adding new features through the full SDD pipeline',
            caption: 'Using the complete SDD pipeline to add a commenting system',
          },
          {
            type: 'text',
            text: 'In this lab, you\'ll use the full SDD pipeline to add a new feature to the existing Knowledge Base application.',
          },
          {
            type: 'code',
            language: 'bash',
            caption: 'Specify the new feature',
            code: '/speckit.specify Add a commenting system to articles.\nAuthenticated users can post comments on any article.\nComments support threaded replies (one level deep).\nAuthors and Admins can delete comments. Comments show\nthe author name, timestamp, and content.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Full Pipeline Execution',
          },
          {
            type: 'list',
            style: 'ordered',
            items: [
              'Run /speckit.clarify — resolve ambiguities in the comments spec',
              'Run /speckit.plan — generate the technical plan for comments',
              'Run /speckit.analyze — check consistency with existing Knowledge Base',
              'Run /speckit.tasks — generate implementation tasks',
              'Run /speckit.implement — generate the code',
              'Verify comments work alongside existing features',
            ],
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Key Observation',
            text: 'Notice how the plan integrates with the existing codebase. The AI reads the existing data model, API routes, and UI components to ensure the new feature fits naturally.',
          },
        ],
      },
      {
        id: 'f-lesson-5-3',
        number: 3,
        moduleId: 'f-module-5',
        title: 'Multi-Feature & Team Workflows',
        duration: '60 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'Scaling SDD Across Teams',
          },
          {
            type: 'image',
            src: '/images/m5-team-workflow.png',
            alt: 'Scaling SDD across teams with defined roles and workflows',
            caption: 'Team roles and feature branch strategy for multi-feature SDD development',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Feature Branch Strategy',
          },
          {
            type: 'code',
            language: 'text',
            caption: 'Feature branches with spec artifacts',
            code: 'specs/\n├── 001-core-knowledge-base/\n│   ├── spec.md\n│   ├── plan.md\n│   └── tasks.md\n├── 002-commenting-system/\n│   ├── spec.md\n│   ├── plan.md\n│   └── tasks.md\n└── 003-notification-system/\n    ├── spec.md\n    ├── plan.md\n    └── tasks.md',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Team Roles in SDD',
          },
          {
            type: 'table',
            headers: ['Role', 'Primary SDD Responsibility'],
            rows: [
              ['Architect', 'Write/maintain constitution, review plans'],
              ['Product Manager', 'Write specs (the WHAT), run clarify'],
              ['Tech Lead', 'Review plans and task ordering, run analyze'],
              ['Developer', 'Run implement, review generated code'],
            ],
          },
          {
            type: 'media',
            media: {
              id: 'f-audio-5-3-teams',
              mediaType: 'audio',
              src: '/media/module5-team-discussion.mp3',
              title: 'Team Workflow Panel Discussion',
              duration: '8:45',
            },
          },
        ],
      },
      {
        id: 'f-lesson-5-4',
        number: 4,
        moduleId: 'f-module-5',
        title: 'Extensions & Presets',
        duration: '30 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'Customizing Spec-Kit',
          },
          {
            type: 'image',
            src: '/images/m5-extensions-presets.png',
            alt: 'Customizing spec-kit with extensions and presets',
            caption: 'Extensions add new capabilities; presets customize existing command behavior',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Extensions: New Capabilities',
          },
          {
            type: 'text',
            text: 'Extensions add new commands and workflows beyond the core pipeline. Examples include Jira integration, code review workflows, compliance gates, and V-Model traceability.',
          },
          {
            type: 'code',
            language: 'bash',
            caption: 'Working with extensions',
            code: '# Search available extensions\nspecify extension search\n\n# Add an extension\nspecify extension add <name>',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Presets: Customized Behavior',
          },
          {
            type: 'text',
            text: 'Presets customize how existing commands behave — adapting terminology, enforcing compliance formats, or localizing the workflow.',
          },
          {
            type: 'code',
            language: 'bash',
            caption: 'Working with presets',
            code: '# Search available presets\nspecify preset search\n\n# Add a preset\nspecify preset add <name>',
          },
          {
            type: 'callout',
            variant: 'info',
            text: 'Use extensions for new capabilities, presets for customization. You can create your own of either for organizational standards.',
          },
        ],
      },
    ],
  },
  {
    id: 'f-module-6',
    number: 6,
    dayId: 'f-day-3',
    title: 'Governance, Anti-Patterns & Capstone',
    description:
      'Establish governance practices, learn what goes wrong and how to prevent it, then prove competence in a capstone exercise.',
    duration: '4 hours',
    objectives: [
      'Establish SDD governance and review processes',
      'Identify and avoid common anti-patterns',
      'Complete an independent end-to-end capstone',
      'Plan SDD adoption for your own team',
    ],
    lessons: [
      {
        id: 'f-lesson-6-1',
        number: 1,
        moduleId: 'f-module-6',
        title: 'Architectural Governance',
        duration: '60 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'Governance-as-Code',
          },
          {
            type: 'image',
            src: '/images/m6-governance.png',
            alt: 'Architectural governance codified through the constitution',
            caption: 'The constitution is governance-as-code: standards enforced automatically during development',
          },
          {
            type: 'text',
            text: 'The constitution is governance-as-code. It codifies your architectural standards so they\'re enforced automatically during AI-assisted development, not just during code reviews.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'SDD Review Process',
          },
          {
            type: 'list',
            style: 'ordered',
            items: [
              'Constitution review — quarterly or at project start',
              'Spec review — per feature, before planning',
              'Plan review — per feature, before tasking',
              'Post-implementation review — per feature, after merge',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Adoption Metrics',
          },
          {
            type: 'table',
            headers: ['Metric', 'What It Measures'],
            rows: [
              ['Spec-to-code alignment', 'Do features match specs?'],
              ['Clarify effectiveness', 'How many issues caught pre-plan?'],
              ['Iteration count', 'How many plan refinements before implement?'],
              ['Test coverage', 'Does generated code meet constitution mandates?'],
            ],
          },
          {
            type: 'media',
            media: {
              id: 'f-video-6-1-governance',
              mediaType: 'video',
              src: '/media/module6-governance.mp4',
              title: 'Governance in Practice',
              poster: '/media/posters/governance.jpg',
              duration: '10:30',
            },
          },
        ],
      },
      {
        id: 'f-lesson-6-2',
        number: 2,
        moduleId: 'f-module-6',
        title: 'Anti-Patterns & Troubleshooting',
        duration: '60 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'What Goes Wrong and How to Fix It',
          },
          {
            type: 'image',
            src: '/images/m6-anti-patterns.png',
            alt: 'Common SDD anti-patterns and how to avoid them',
            caption: 'Recognizing and fixing the most common SDD anti-patterns',
          },
          {
            type: 'table',
            headers: ['Anti-Pattern', 'Symptom', 'Fix'],
            rows: [
              ['Vague Constitution', 'AI generates inconsistent code', 'Make principles concrete and testable'],
              ['Spec Leakage', 'Spec contains "Use React with Redux"', 'Enforce WHAT/WHY only; move HOW to plan'],
              ['Plan Acceptance', 'Team accepts AI plan without review', 'Institute mandatory plan review checkpoint'],
              ['Skipping Clarify', 'Implementation misses edge cases', 'Make clarify a required step'],
              ['Monolith Spec', 'Single spec covers entire application', 'Break into features; one spec per capability'],
              ['Constitution Drift', 'Constitution doesn\'t match reality', 'Schedule quarterly reviews'],
              ['Over-Specification', 'Spec is really a plan in disguise', 'Keep specs at user-story level'],
              ['Blind Implement', 'Run implement without reviewing tasks', 'Always review tasks.md first'],
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Troubleshooting Guide',
          },
          {
            type: 'list',
            style: 'unordered',
            items: [
              '"Code doesn\'t match spec" → Review the plan; the gap is usually there',
              '"AI adds features I didn\'t ask for" → Tighten constitution anti-speculation rules',
              '"Plan is too generic" → Be more specific in /speckit.plan prompt about tech choices',
              '"Tasks are in wrong order" → Check for missing dependencies in the plan',
              '"Implementation fails partway" → Break the feature into smaller specs',
            ],
          },
          {
            type: 'media',
            media: {
              id: 'f-audio-6-2-troubleshoot',
              mediaType: 'audio',
              src: '/media/module6-troubleshooting.mp3',
              title: 'Live Troubleshooting Session',
              duration: '9:00',
            },
          },
        ],
      },
      {
        id: 'f-lesson-6-3',
        number: 3,
        moduleId: 'f-module-6',
        title: 'Capstone Exercise',
        duration: '90 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'Independent End-to-End Feature Build',
          },
          {
            type: 'image',
            src: '/images/m6-capstone.png',
            alt: 'Capstone exercise: independent end-to-end feature build',
            caption: 'Prove competence by completing the full SDD pipeline independently',
          },
          {
            type: 'text',
            text: 'Working independently, complete the full SDD pipeline for a notification system feature.',
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Feature Requirements',
            text: 'Add a notification system to the Knowledge Base. Users receive notifications when: an article they authored is edited, a comment is posted on their article, they are mentioned by @username, an Admin broadcasts an announcement. Includes bell icon, dropdown panel, mark-as-read, and notification preferences.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Timed Steps',
          },
          {
            type: 'table',
            headers: ['Step', 'Time', 'Command'],
            rows: [
              ['Specify', '10 min', '/speckit.specify'],
              ['Clarify', '10 min', '/speckit.clarify'],
              ['Plan', '15 min', '/speckit.plan'],
              ['Analyze', '5 min', '/speckit.analyze'],
              ['Tasks', '10 min', '/speckit.tasks'],
              ['Implement', '20 min', '/speckit.implement'],
              ['Review', '10 min', 'Manual verification'],
              ['Present', '10 min', 'Class presentation'],
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
              '✅ Constitution was referenced throughout',
              '✅ Spec contains no implementation details',
              '✅ Clarifications resolved before planning',
              '✅ Plan\'s tech choices have documented rationale',
              '✅ Cross-artifact consistency check passed',
              '✅ Tasks properly ordered with [P] markers',
              '✅ Generated code runs and passes tests',
              '✅ Feature behavior matches spec criteria',
            ],
          },
        ],
      },
      {
        id: 'f-lesson-6-4',
        number: 4,
        moduleId: 'f-module-6',
        title: 'Adoption Roadmap & Next Steps',
        duration: '30 min',
        content: [
          {
            type: 'heading',
            level: 2,
            text: 'Rolling Out SDD to Your Team',
          },
          {
            type: 'image',
            src: '/images/m6-adoption-roadmap.png',
            alt: 'Phased SDD adoption roadmap for teams',
            caption: 'A phased approach to rolling out SDD across your organization',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Phased Adoption Strategy',
          },
          {
            type: 'table',
            headers: ['Phase', 'Timeline', 'Activities'],
            rows: [
              ['Phase 1', 'Week 1-2', 'Install spec-kit, write constitution, use specify + plan for one feature'],
              ['Phase 2', 'Week 3-4', 'Full pipeline with clarify, analyze, implement for 2-3 features'],
              ['Phase 3', 'Month 2', 'Team-wide adoption, custom presets/extensions, review process'],
              ['Phase 4', 'Month 3+', 'Governance metrics, constitutional evolution, brownfield adoption'],
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
              'Write your real project\'s constitution this week',
              'Run the full pipeline on one real feature',
              'Share the constitution with your team for review',
              'Establish a plan review checkpoint in your workflow',
            ],
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Remember',
            text: 'SDD supports 25+ AI agents — no tool lock-in. Whether your team uses GitHub Copilot, Claude, Gemini, or another AI assistant, the spec-driven workflow is the same.',
          },
          {
            type: 'media',
            media: {
              id: 'f-video-6-4-closing',
              mediaType: 'video',
              src: '/media/module6-closing.mp4',
              title: 'Training Wrap-Up & Q&A',
              poster: '/media/posters/closing.jpg',
              duration: '12:00',
            },
          },
        ],
      },
    ],
  },
];

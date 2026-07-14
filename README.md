# Premium Developer CV/Portfolio SPA (Nuxt 4 & Vue 3)

A highly responsive, production-ready Single Page Application (SPA) developer CV/portfolio website built with **Nuxt 4.4.8** (locked), **Vue 3 Composition API**, **TypeScript**, and **Vanilla CSS**.

## Features

- **Split-Screen Desktop Layout**: Fixed left-side identity and navigation sidebar (260-300px) with scrollable main content sections on the right.
- **Mobile Navigation Drawer**: Fluid hamburger drawer with auto-dismiss triggers and keyboard (Escape) controls.
- **Data-UI Separation**: All personal information is externalized into typed structures inside the `app/data/` and `app/types/` folders.
- **Light & Dark Mode**: Instant, flicker-free theme detection supporting system OS overrides and persistent caching in `localStorage`.
- **Keyboard & Screen Reader Accessible**: Correct semantic markup (using HTML5 landmark tags), tab-navigation indexes, explicit ARIA descriptions, and "Skip to main content" shortcuts.
- **Smooth Anchor Scrolling**: Custom router rules to manage URL hash navigation (`#about`, `#experience`, etc.) combined with `IntersectionObserver` to highlight the current menu item.
- **Client-Side Form Validation**: Real-time validated contact form enforcing strict validation on email structure and length requirements, with responsive status alert states.
- **Fully Tested**: Vitest unit test suites validating layouts, navigation triggers, mock outputs, and validations.

---

## Tech Stack & Tooling

- **Core Framework**: [Nuxt 4.4.8](https://nuxt.com/) (configured in strict SPA mode)
- **Component Engine**: [Vue 3](https://vuejs.org/) (Composition API, `<script setup lang="ts">`)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/) (Strict compiler settings)
- **Styling**: Vanilla CSS (Custom properties / Variables, fluid layouts, modern resets)
- **Testing**: [Vitest](https://vitest.dev/) & [Vue Test Utils](https://test-utils.vuejs.org/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Node Version**: 22+

---

## Project Structure

```
cv-standard/
├── .nuxt/                 # Nuxt build output (auto-generated)
├── app/                   # Nuxt 4 application source folder
│   ├── assets/
│   │   └── css/
│   │       └── main.css   # Core CSS design tokens & themes
│   ├── components/
│   │   ├── Sidebar.vue            # Nav & Identity sidebar
│   │   ├── ThemeToggle.vue        # Dark/Light selector
│   │   ├── SectionHero.vue        # Hero bio & calls to action
│   │   ├── SectionAbout.vue       # Professional summary & metrics
│   │   ├── SectionSkills.vue      # Skills categorized by tags
│   │   ├── SectionExperience.vue  # Chronological achievements timeline
│   │   ├── SectionProjects.vue    # Project cards (tasks & results)
│   │   ├── SectionEducation.vue   # Studies & academic details
│   │   ├── SectionCertifications.vue  # Certification credentials list
│   │   ├── SectionContact.vue     # Contact details & validated form
│   │   ├── Sidebar.test.ts        # Test suite for Sidebar
│   │   └── SectionContact.test.ts # Test suite for Contact Form
│   ├── data/
│   │   └── profile.ts     # CV Data definition
│   ├── types/
│   │   └── profile.ts     # TypeScript Interfaces
│   ├── app.vue            # Main App entry layout
│   └── router.options.ts  # Custom router scroll hook
├── public/                # Static public assets (Favicon, documents)
├── nuxt.config.ts         # Nuxt build & metadata settings
├── package.json           # Dependencies and scripts definitions
├── tsconfig.json          # TypeScript configurations
├── vitest.config.ts       # Test runner configuration
├── spa-loading-template.html # Flicker-free immediate page loader
└── README.md              # Documentation
```

---

## Getting Started

### 1. Prerequisites

Ensure you have [Node.js](https://nodejs.org/) v22 or newer and [pnpm](https://pnpm.io/installation) installed.

### 2. Installation

Install all package dependencies:

```bash
pnpm install
```

### 3. Running Local Development Server

Launch the dev server at [http://localhost:3000](http://localhost:3000):

```bash
pnpm dev
```

### 4. Running Automated Tests

Run unit tests once using Vitest:

```bash
pnpm test
```

### 5. Running Type Checks

Verify that the codebase compiles with no TypeScript warnings or errors:

```bash
pnpm typecheck
```

### 6. Code Formatting / Linter Checks

Verify files follow the styling template:

```bash
pnpm lint
```

### 7. Building for Production

Compile the project as a optimized Single Page Application inside the `.output/public` folder:

```bash
pnpm build
```

To test the production build locally:

```bash
pnpm preview
```

---

## How to Customize CV Data

All CV data is isolated from the visual presentation layer. To modify the text:

1. **Verify interfaces**: If you want to add new sections, fields, or change data shapes, update the types declared in [app/types/profile.ts](file:///g:/1.DTSVN_Project/0.Personal/1.%20Code/cv-standard/app/types/profile.ts).
2. **Modify Content**: Update the information defined in [app/data/profile.ts](file:///g:/1.DTSVN_Project/0.Personal/1.%20Code/cv-standard/app/data/profile.ts).
3. **Downloadable Resume**: Place your updated file in the `/public/` directory (e.g. `public/Nguyễn Thế Vinh_09052026.docx`) and update the download link inside the `app/components/Sidebar.vue` component.

<!-- app/components/SectionProjects.vue -->
<script setup lang="ts">
import type { Project, UiTranslations } from "../types/profile";

defineProps<{
  projects: Project[];
  translations: UiTranslations;
}>();
</script>

<template>
  <section class="projects-section">
    <h2>{{ translations.projectsTitle }}</h2>

    <div class="projects-grid">
      <!-- Project Cards -->
      <article
        v-for="project in projects"
        :key="project.title"
        class="project-card"
      >
        <div class="project-header">
          <div>
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-role-period">
              <span class="project-role">{{ project.role }}</span>
              <span class="divider">|</span>
              <span class="project-period">{{ project.period }}</span>
            </p>
          </div>
        </div>

        <p class="project-description">{{ project.description }}</p>

        <!-- Responsibilities & Results -->
        <div class="project-details">
          <div class="details-block">
            <h4>{{ translations.responsibilities }}</h4>
            <ul>
              <li v-for="resp in project.responsibilities" :key="resp">
                {{ resp }}
              </li>
            </ul>
          </div>

          <div class="details-block">
            <h4>{{ translations.impactResults }}</h4>
            <ul>
              <li
                v-for="result in project.results"
                :key="result"
                class="result-item"
              >
                {{ result }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Tech Badges -->
        <div class="project-tech">
          <span
            v-for="tech in project.techStack"
            :key="tech"
            class="badge tech-badge"
          >
            {{ tech }}
          </span>
        </div>

        <!-- Links Footer -->
        <div class="project-actions">
          <a
            v-if="project.demoUrl"
            :href="project.demoUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary btn-sm"
            aria-label="View live demo for project"
          >
            {{ translations.liveDemo }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="action-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          <a
            v-if="project.sourceUrl"
            :href="project.sourceUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-secondary btn-sm"
            aria-label="View repository source code for project"
          >
            {{ translations.sourceCode }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="action-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  transition: all var(--transition-speed) ease;
}

.project-card:hover {
  border-color: var(--accent);
  box-shadow: var(--shadow-md);
}

.project-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text-primary);
}

.project-role-period {
  font-size: 0.875rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
}

.project-role {
  font-weight: 600;
  color: var(--accent);
}

.divider {
  color: var(--border-color);
}

.project-description {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--text-secondary);
}

/* Responsibilities and Results lists */
.project-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 1.25rem;
  background-color: var(--bg-primary);
  border-radius: 6px;
  border: 1px solid var(--border-color);
}

.details-block h4 {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.details-block ul {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.details-block li {
  font-size: 0.875rem;
  color: var(--text-secondary);
  position: relative;
  padding-left: 1rem;
}

.details-block li::before {
  content: "-";
  position: absolute;
  left: 0;
  color: var(--text-muted);
}

.result-item::before {
  content: "✓" !important;
  color: #10b981 !important;
  font-weight: bold;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
}

.tech-badge {
  font-size: 0.75rem;
  background-color: var(--bg-primary);
  color: var(--text-muted);
  border-color: var(--border-color);
}

.project-actions {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.8125rem;
}

.action-icon {
  width: 14px;
  height: 14px;
}

@media (max-width: 768px) {
  .project-details {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
}

@media (max-width: 640px) {
  .project-card {
    padding: 1.25rem;
  }

  .project-actions {
    flex-direction: column;
  }

  .project-actions .btn {
    width: 100%;
  }
}
</style>

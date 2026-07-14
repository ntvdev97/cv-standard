<!-- app/components/SectionAbout.vue -->
<script setup lang="ts">
import type { UiTranslations } from "../types/profile";

defineProps<{
  aboutText: string;
  yearsOfExperience: number;
  careerFocus: string[];
  translations: UiTranslations;
}>();
</script>

<template>
  <section class="about-section">
    <h2>{{ translations.aboutMe }}</h2>

    <div class="about-grid">
      <!-- Biography Text & Focus List -->
      <div class="about-info">
        <p class="about-description">{{ aboutText }}</p>

        <div class="focus-area">
          <h3>{{ translations.coreFocus }}</h3>
          <ul class="focus-list">
            <li v-for="focus in careerFocus" :key="focus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="focus-icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{{ focus }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Experience Stats Grid -->
      <div class="about-stats">
        <div class="stat-card">
          <span class="stat-number">{{ yearsOfExperience }}+</span>
          <span class="stat-label">{{ translations.yearsOfExp }}</span>
        </div>

        <div class="stat-card">
          <span class="stat-number">15+</span>
          <span class="stat-label">{{ translations.projectsCompleted }}</span>
        </div>

        <div class="stat-card">
          <span class="stat-number">3+</span>
          <span class="stat-label">{{ translations.industryCerts }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 3rem;
  margin-top: 1.5rem;
}

.about-description {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
}

.focus-area {
  margin-top: 2rem;
}

.focus-area h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.focus-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.focus-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9375rem;
  color: var(--text-secondary);
}

.focus-icon {
  width: 16px;
  height: 16px;
  color: var(--accent);
  flex-shrink: 0;
}

/* Stat Cards */
.about-stats {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.stat-card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-speed) ease;
}

.stat-card:hover {
  border-color: var(--accent);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.stat-number {
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--accent);
  line-height: 1;
}

.stat-label {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 1rem;
  }
}
</style>

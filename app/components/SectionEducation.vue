<!-- app/components/SectionEducation.vue -->
<script setup lang="ts">
import type { Education, UiTranslations } from "../types/profile";

defineProps<{
  educationList: Education[];
  translations: UiTranslations;
}>();
</script>

<template>
  <section class="education-section">
    <h2>{{ translations.educationTitle }}</h2>

    <div class="education-list">
      <!-- Education Cards -->
      <div
        v-for="(edu, index) in educationList"
        :key="`${edu.degree}-${index}`"
        class="education-card"
      >
        <div class="education-header">
          <div>
            <h3 class="degree-title">{{ edu.degree }}</h3>
            <span class="school-name">{{ edu.school }}</span>
          </div>
          <span class="date-badge"
            >{{ edu.startDate }} &ndash; {{ edu.endDate }}</span
          >
        </div>

        <p v-if="edu.details" class="education-details">
          {{ edu.details }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
}

.education-card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1.75rem;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-speed) ease;
}

.education-card:hover {
  border-color: var(--accent);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.education-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
}

.degree-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.school-name {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--accent);
}

.date-badge {
  font-size: 0.75rem;
  font-weight: 700;
  background-color: var(--bg-primary);
  color: var(--text-secondary);
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  flex-shrink: 0;
}

.education-details {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 640px) {
  .education-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .education-card {
    padding: 1.25rem;
  }
}
</style>

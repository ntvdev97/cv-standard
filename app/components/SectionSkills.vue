<!-- app/components/SectionSkills.vue -->
<script setup lang="ts">
import type { SkillGroup } from "../types/profile";

defineProps<{
  skillGroups: SkillGroup[];
}>();
</script>

<template>
  <section class="skills-section">
    <h2>Skills & Technologies</h2>

    <div class="skills-grid">
      <!-- Skill Cards -->
      <div
        v-for="group in skillGroups"
        :key="group.category"
        class="skill-card"
      >
        <h3 class="skill-category-title">{{ group.category }}</h3>

        <div class="tags-container">
          <span
            v-for="skill in group.skills"
            :key="skill"
            class="badge skill-badge"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.skill-card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all var(--transition-speed) ease;
}

.skill-card:hover {
  border-color: var(--accent);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.skill-category-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  border-left: 3px solid var(--accent);
  padding-left: 0.75rem;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-badge {
  padding: 0.35rem 0.75rem;
  font-size: 0.8125rem;
}
</style>

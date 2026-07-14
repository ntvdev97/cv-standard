<!-- app/components/SectionExperience.vue -->
<script setup lang="ts">
import type { Experience } from "../types/profile";

defineProps<{
  experiences: Experience[];
}>();
</script>

<template>
  <section class="experience-section">
    <h2>Professional Experience</h2>

    <div class="timeline-container">
      <!-- Vertical line styled via CSS -->
      <div
        v-for="(exp, index) in experiences"
        :key="`${exp.company}-${index}`"
        class="timeline-item"
      >
        <!-- Timeline node bullet -->
        <div class="timeline-marker" aria-hidden="true"></div>

        <!-- Experience content card -->
        <div class="timeline-content">
          <div class="experience-header">
            <div class="role-company">
              <h3>{{ exp.role }}</h3>
              <span class="company-name">{{ exp.company }}</span>
            </div>
            <div class="experience-dates">
              <span class="date-badge"
                >{{ exp.startDate }} &ndash; {{ exp.endDate }}</span
              >
            </div>
          </div>

          <!-- Achievements List -->
          <ul class="achievements-list">
            <li v-for="(achievement, aIdx) in exp.achievements" :key="aIdx">
              {{ achievement }}
            </li>
          </ul>

          <!-- Project Tech Stack Badges -->
          <div class="tech-stack-container">
            <span
              v-for="tech in exp.techStack"
              :key="tech"
              class="badge tech-badge"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline-container {
  position: relative;
  margin-top: 2rem;
  padding-left: 2rem;
}

/* Vertical Timeline Line */
.timeline-container::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 5px;
  width: 2px;
  background-color: var(--border-color);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

/* Timeline marker node dot */
.timeline-marker {
  position: absolute;
  top: 6px;
  left: -20px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--bg-primary);
  border: 3px solid var(--accent);
  z-index: 10;
  transition: background-color var(--transition-speed) ease;
}

.timeline-item:hover .timeline-marker {
  background-color: var(--accent);
}

.timeline-content {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1.75rem;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-speed) ease;
}

.timeline-content:hover {
  border-color: var(--accent);
  box-shadow: var(--shadow-md);
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;
  border-bottom: 1px dashed var(--border-color);
  padding-bottom: 1rem;
}

.role-company h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.company-name {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--accent);
}

.experience-dates {
  flex-shrink: 0;
}

.date-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  background-color: var(--bg-primary);
  color: var(--text-secondary);
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  border: 1px solid var(--border-color);
}

/* Achievements details list */
.achievements-list {
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.achievements-list li {
  position: relative;
  padding-left: 1.25rem;
  font-size: 0.9375rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.achievements-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: bold;
}

/* Tags styles */
.tech-stack-container {
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

.timeline-item:hover .tech-badge {
  color: var(--text-secondary);
}

@media (max-width: 640px) {
  .timeline-container {
    padding-left: 1.25rem;
  }

  .timeline-marker {
    left: -16px;
  }

  .experience-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .timeline-content {
    padding: 1.25rem;
  }
}
</style>

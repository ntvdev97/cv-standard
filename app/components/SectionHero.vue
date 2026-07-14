<!-- app/components/SectionHero.vue -->
<script setup lang="ts">
import type { UiTranslations } from "../types/profile";

defineProps<{
  name: string;
  title: string;
  bio: string;
  availableForWork: boolean;
  translations: UiTranslations;
}>();
</script>

<template>
  <section class="hero-section">
    <!-- Tiny Developer Welcome -->
    <div class="hello-world-tag">
      <code
        >const {{ translations.helloWorldPrefix }} = {
        {{
          translations.helloWorldPrefix === "developer"
            ? "status"
            : "trangThai"
        }}: '{{ translations.helloWorldStatus }}' };</code
      >
    </div>

    <!-- Title & Identity Info -->
    <div class="hero-identity">
      <h1 class="hero-name">
        Hi, I'm <span class="gradient-text">{{ name }}</span>
      </h1>
      <h2 class="hero-title">{{ title }}</h2>
    </div>

    <p class="hero-bio">{{ bio }}</p>

    <!-- Call to Actions -->
    <div class="hero-actions">
      <a
        href="#experience"
        class="btn btn-primary"
        aria-label="View professional experience timeline"
      >
        {{ translations.viewExperience }}
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
            d="M19 13l-7 7-7-7m14-6l-7 7-7-7"
          />
        </svg>
      </a>
      <a
        href="#contact"
        class="btn btn-secondary"
        aria-label="Go to contact form section"
      >
        {{ translations.contactMe }}
      </a>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-top: 2rem;
}

.hello-world-tag {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  padding: 0.375rem 0.75rem;
  border-radius: 6px;
  margin-bottom: 1.5rem;
}

.hello-world-tag code {
  color: var(--accent);
  font-size: 0.8125rem;
  font-weight: 500;
}

.hero-name {
  font-size: 3.5rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.1;
  margin-bottom: 0.5rem;
}

.gradient-text {
  background: linear-gradient(135deg, var(--accent), #35495e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-title {
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.hero-title::after {
  display: none; /* Disable standard heading bottom border */
}

.hero-bio {
  font-size: 1.125rem;
  line-height: 1.7;
  max-width: 600px;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
}

.action-icon {
  width: 16px;
  height: 16px;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(3px);
  }
}

@media (max-width: 640px) {
  .hero-name {
    font-size: 2.5rem;
  }

  .hero-title {
    font-size: 1.35rem;
  }

  .hero-bio {
    font-size: 1rem;
  }

  .hero-actions {
    flex-direction: column;
    width: 100%;
  }

  .hero-actions .btn {
    width: 100%;
  }
}
</style>

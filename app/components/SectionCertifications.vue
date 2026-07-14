<!-- app/components/SectionCertifications.vue -->
<script setup lang="ts">
import type { Certification } from "../types/profile";

defineProps<{
  certifications: Certification[];
}>();
</script>

<template>
  <section class="certifications-section">
    <h2>Certifications</h2>

    <div class="certifications-grid">
      <!-- Certification Cards -->
      <div v-for="cert in certifications" :key="cert.name" class="cert-card">
        <div class="cert-icon-wrapper" aria-hidden="true">
          <!-- Cert Ribbon/Shield SVG Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="cert-svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>

        <div class="cert-info">
          <h3 class="cert-name">{{ cert.name }}</h3>
          <p class="cert-issuer-date">
            <span class="cert-issuer">{{ cert.issuer }}</span>
            <span class="divider">•</span>
            <span class="cert-date">{{ cert.date }}</span>
          </p>
          <p v-if="cert.credentialId" class="cert-id">
            Credential ID: <code>{{ cert.credentialId }}</code>
          </p>

          <a
            v-if="cert.verificationUrl"
            :href="cert.verificationUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="verify-link"
            :aria-label="`Verify ${cert.name} certification`"
          >
            Verify Credential
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="verify-arrow"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.cert-card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
  display: flex;
  gap: 1.25rem;
  transition: all var(--transition-speed) ease;
}

.cert-card:hover {
  border-color: var(--accent);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.cert-icon-wrapper {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background-color: rgba(var(--accent-rgb), 0.1);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.cert-svg {
  width: 24px;
  height: 24px;
}

.cert-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex-grow: 1;
}

.cert-name {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.3;
}

.cert-issuer-date {
  font-size: 0.8125rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.125rem;
}

.cert-issuer {
  font-weight: 600;
  color: var(--text-secondary);
}

.divider {
  color: var(--border-color);
}

.cert-id {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-top: 0.5rem;
}

.cert-id code {
  background-color: var(--bg-primary);
  padding: 0.125rem 0.375rem;
  border-radius: 4px;
  border: 1px solid var(--border-color);
}

.verify-link {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.8125rem;
  font-weight: 600;
  margin-top: 0.75rem;
  color: var(--accent);
  width: fit-content;
}

.verify-link:hover {
  color: var(--accent-hover);
}

.verify-arrow {
  width: 12px;
  height: 12px;
  transition: transform var(--transition-speed) ease;
}

.verify-link:hover .verify-arrow {
  transform: translateX(3px);
}

@media (max-width: 480px) {
  .cert-card {
    flex-direction: column;
    padding: 1.25rem;
  }

  .cert-icon-wrapper {
    width: 40px;
    height: 40px;
  }
}
</style>

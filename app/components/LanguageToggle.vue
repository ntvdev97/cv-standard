<!-- app/components/LanguageToggle.vue -->
<script setup lang="ts">
defineProps<{
  locale: string;
}>();

const emit = defineEmits<{
  (e: "change", locale: "en" | "vi"): void;
}>();

const selectLocale = (lang: "en" | "vi") => {
  emit("change", lang);
};
</script>

<template>
  <div class="language-toggle" role="group" aria-label="Language selection">
    <button
      class="lang-btn"
      :class="{ active: locale === 'en' }"
      @click="selectLocale('en')"
      :aria-label="
        locale === 'en'
          ? 'English language selected'
          : 'Switch language to English'
      "
      :aria-pressed="locale === 'en'"
    >
      EN
    </button>
    <span class="lang-divider" aria-hidden="true">|</span>
    <button
      class="lang-btn"
      :class="{ active: locale === 'vi' }"
      @click="selectLocale('vi')"
      :aria-label="
        locale === 'vi'
          ? 'Vietnamese language selected'
          : 'Switch language to Vietnamese'
      "
      :aria-pressed="locale === 'vi'"
    >
      VI
    </button>
  </div>
</template>

<style scoped>
.language-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 0 0.5rem;
  height: 40px;
  transition: all var(--transition-speed) ease;
}

.language-toggle:hover {
  border-color: var(--accent);
}

.lang-btn {
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: all var(--transition-speed) ease;
}

.lang-btn:hover {
  color: var(--accent);
}

.lang-btn.active {
  color: var(--accent);
  background-color: rgba(var(--accent-rgb), 0.08);
}

.lang-divider {
  color: var(--border-color);
  font-size: 0.75rem;
  user-select: none;
}
</style>

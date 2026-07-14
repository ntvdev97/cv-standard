<!-- app/components/ThemeToggle.vue -->
<script setup lang="ts">
import { ref, onMounted } from "vue";

const isDark = ref(false);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  const nextTheme = isDark.value ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", nextTheme);
  localStorage.setItem("theme", nextTheme);
};

onMounted(() => {
  // Sync state with what is already on documentElement (set by spa-loader or defaults)
  const currentTheme =
    document.documentElement.getAttribute("data-theme") ||
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");

  isDark.value = currentTheme === "dark";
  document.documentElement.setAttribute(
    "data-theme",
    isDark.value ? "dark" : "light",
  );
});
</script>

<template>
  <button
    class="theme-toggle"
    @click="toggleTheme"
    :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
    :title="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
  >
    <!-- Sun Icon (visible in Dark Mode) -->
    <svg
      v-if="isDark"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="icon icon-sun"
    >
      <circle cx="12" cy="12" r="4"></circle>
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
      ></path>
    </svg>

    <!-- Moon Icon (visible in Light Mode) -->
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="icon icon-moon"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
    </svg>
  </button>
</template>

<style scoped>
.theme-toggle {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-speed) ease;
  position: relative;
  overflow: hidden;
}

.theme-toggle:hover {
  background-color: rgba(var(--accent-rgb), 0.08);
  border-color: var(--accent);
  color: var(--accent);
}

.icon {
  width: 20px;
  height: 20px;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.theme-toggle:hover .icon {
  transform: rotate(30deg);
}
</style>

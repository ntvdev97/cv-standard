<!-- app/components/Sidebar.vue -->
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import type { SocialLink, NavMenuItem, UiTranslations } from "../types/profile";

const props = defineProps<{
  isOpen: boolean;
  activeSection: string;
  socialLinks: SocialLink[];
  navItems: NavMenuItem[];
  name: string;
  title: string;
  availableForWork: boolean;
  translations: UiTranslations;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();

const isDesktop = ref(true);
let mediaQueryList: MediaQueryList | null = null;
let mediaListener: ((e: MediaQueryListEvent) => void) | null = null;

const handleLinkClick = () => {
  emit("close");
};

// Handle Escape key to close mobile sidebar drawer
const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === "Escape" && props.isOpen) {
    emit("close");
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);

  // Setup media query listener for responsive keyboard accessibility
  mediaQueryList = window.matchMedia("(min-width: 1025px)");
  isDesktop.value = mediaQueryList.matches;

  mediaListener = (e: MediaQueryListEvent) => {
    isDesktop.value = e.matches;
  };
  mediaQueryList.addEventListener("change", mediaListener);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeyDown);

  if (mediaQueryList && mediaListener) {
    mediaQueryList.removeEventListener("change", mediaListener);
  }
});
</script>

<template>
  <div>
    <!-- Backdrop for Mobile Drawer -->
    <div
      class="sidebar-backdrop"
      :class="{ 'is-open': isOpen }"
      @click="emit('close')"
      aria-hidden="true"
    ></div>

    <!-- Sidebar Wrapper -->
    <aside
      class="app-sidebar"
      :class="{ 'is-open': isOpen }"
      aria-label="Sidebar Navigation"
    >
      <!-- Close Button for Mobile Drawer -->
      <button
        class="close-btn"
        @click="emit('close')"
        aria-label="Close menu"
        :tabindex="isOpen ? 0 : -1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="icon-close"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Avatar & Identity Section -->
      <div class="sidebar-header">
        <div class="avatar-container">
          <span class="avatar-text">AM</span>
          <div class="avatar-ring"></div>
        </div>
        <h2 class="developer-name">{{ name }}</h2>
        <p class="developer-title">{{ title }}</p>

        <!-- Available for Work Status -->
        <div
          v-if="availableForWork"
          class="status-badge"
          aria-label="Available for work status"
        >
          <span class="status-dot"></span>
          <span class="status-text">{{ translations.availableForWork }}</span>
        </div>
      </div>

      <!-- Navigation Menu -->
      <nav class="sidebar-nav">
        <ul>
          <li v-for="item in navItems" :key="item.href">
            <a
              :href="item.href"
              class="nav-link"
              :class="{ active: activeSection === item.href.slice(1) }"
              @click="handleLinkClick"
              :tabindex="isOpen || isDesktop ? 0 : -1"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>
      </nav>

      <!-- Sidebar Footer (Social & Download CV) -->
      <div class="sidebar-footer">
        <div class="social-links">
          <a
            v-for="link in socialLinks"
            :key="link.name"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="social-icon-btn"
            :aria-label="link.name"
            :title="link.name"
          >
            <!-- GitHub Icon -->
            <svg
              v-if="link.iconName === 'github'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="social-svg"
            >
              <path
                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
              ></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            <!-- LinkedIn Icon -->
            <svg
              v-else-if="link.iconName === 'linkedin'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="social-svg"
            >
              <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
              ></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <!-- Twitter Icon -->
            <svg
              v-else-if="link.iconName === 'twitter'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="social-svg"
            >
              <path
                d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
              ></path>
            </svg>
          </a>
        </div>

        <!-- Download CV Button -->
        <a
          href="/Nguyễn Thế Vinh_09052026.docx"
          download
          class="btn btn-primary btn-download"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="icon-download"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          {{ translations.downloadCv }}
        </a>
      </div>
    </aside>
  </div>
</template>

<style scoped>
.app-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: var(--sidebar-width);
  background-color: var(--bg-secondary);
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  padding: 2.5rem 1.75rem;
  z-index: 50;
  transition: transform var(--transition-speed) ease;
}

.sidebar-backdrop {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 40;
  opacity: 0;
  transition: opacity var(--transition-speed) ease;
  pointer-events: none;
}

.close-btn {
  display: none;
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  padding: 0.5rem;
}

.icon-close {
  width: 24px;
  height: 24px;
}

/* Header Identity Card */
.sidebar-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 2.5rem;
}

.avatar-container {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), #f43f5e);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 1.25rem;
  box-shadow: var(--shadow-md);
}

.avatar-text {
  font-size: 2rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.05em;
}

.avatar-ring {
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border-radius: 50%;
  border: 2px solid var(--accent);
  opacity: 0.3;
  animation: pulse-ring 3s linear infinite;
}

@keyframes pulse-ring {
  0% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.6;
  }
  100% {
    transform: scale(1);
    opacity: 0.3;
  }
}

.developer-name {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  letter-spacing: -0.02em;
}

.developer-name::after {
  display: none; /* Override global h2 line */
}

.developer-title {
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
}

/* Status Available Badge */
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: rgba(16, 185, 129, 0.1);
  color: #10b981;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.status-dot {
  width: 6px;
  height: 6px;
  background-color: #10b981;
  border-radius: 50%;
  position: relative;
}

.status-dot::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #10b981;
  border-radius: 50%;
  animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes ping {
  75%,
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
}

/* Navigation Links */
.sidebar-nav {
  flex: 1;
  margin-bottom: 2rem;
}

.sidebar-nav ul {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.nav-link {
  display: block;
  padding: 0.625rem 1rem;
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 0.875rem;
  border-radius: 6px;
  transition: all var(--transition-speed) ease;
}

.nav-link:hover {
  background-color: rgba(var(--accent-rgb), 0.05);
  color: var(--accent);
  transform: translateX(4px);
}

.nav-link.active {
  background-color: rgba(var(--accent-rgb), 0.08);
  color: var(--accent);
  font-weight: 600;
}

/* Footer & Actions */
.sidebar-footer {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  border-top: 1px solid var(--border-color);
  padding-top: 1.25rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
}

.social-icon-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-speed) ease;
}

.social-icon-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
  background-color: rgba(var(--accent-rgb), 0.05);
  transform: translateY(-2px);
}

.social-svg {
  width: 18px;
  height: 18px;
}

.btn-download {
  width: 100%;
}

.icon-download {
  width: 16px;
  height: 16px;
}

/* 7. Media Queries for Mobile/Tablet Drawer Behavior */
@media (max-width: 1024px) {
  .app-sidebar {
    transform: translateX(-100%);
  }

  .app-sidebar.is-open {
    transform: translateX(0);
    box-shadow: var(--shadow-lg);
  }

  .sidebar-backdrop.is-open {
    display: block;
    opacity: 1;
    pointer-events: auto;
  }

  .close-btn {
    display: block;
  }
}
</style>

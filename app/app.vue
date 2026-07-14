<!-- app/app.vue -->
<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { profileDataEn, profileDataVi } from "./data/profile";
import Sidebar from "./components/Sidebar.vue";
import ThemeToggle from "./components/ThemeToggle.vue";
import LanguageToggle from "./components/LanguageToggle.vue";
import SectionHero from "./components/SectionHero.vue";
import SectionAbout from "./components/SectionAbout.vue";
import SectionSkills from "./components/SectionSkills.vue";
import SectionExperience from "./components/SectionExperience.vue";
import SectionProjects from "./components/SectionProjects.vue";
import SectionEducation from "./components/SectionEducation.vue";
import SectionCertifications from "./components/SectionCertifications.vue";
import SectionContact from "./components/SectionContact.vue";

const activeSection = ref("hero");
const isMobileMenuOpen = ref(false);
const locale = ref("en");
let observer: IntersectionObserver | null = null;

// Determine active dataset based on selected language
const activeProfile = computed(() =>
  locale.value === "vi" ? profileDataVi : profileDataEn,
);

const setLocale = (lang: "en" | "vi") => {
  locale.value = lang;
  localStorage.setItem("lang", lang);
};

// Track active section as user scrolls
onMounted(() => {
  const sections = document.querySelectorAll("section[id]");

  const observerOptions = {
    root: null, // viewport
    rootMargin: "-20% 0px -60% 0px", // Trigger when section is in the middle of screen
    threshold: 0,
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        if (id) {
          activeSection.value = id;
          // Update URL hash without breaking history back-button behavior or causing page jumping
          window.history.replaceState(null, "", `#${id}`);
        }
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer?.observe(section);
  });

  // Handle hash route on direct deep-link load
  const hash = window.location.hash;
  if (hash) {
    const targetId = hash.slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: "smooth" });
        activeSection.value = targetId;
      }, 300);
    }
  }

  // Load language settings from localStorage or fallback to browser preferences
  const savedLang = localStorage.getItem("lang");
  if (savedLang === "en" || savedLang === "vi") {
    locale.value = savedLang;
  } else {
    const browserLang = navigator.language || "";
    locale.value = browserLang.startsWith("vi") ? "vi" : "en";
  }
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <div class="app-container">
    <!-- Accessibility Skip Link -->
    <a href="#main-content-area" class="skip-link">Skip to main content</a>

    <!-- Mobile Header -->
    <header class="mobile-header">
      <button
        class="hamburger-btn"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        aria-label="Open navigation menu"
        :aria-expanded="isMobileMenuOpen"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="hamburger-svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div class="mobile-logo">&lt;AM/&gt;</div>

      <div class="header-controls">
        <LanguageToggle :locale="locale" @change="setLocale" />
        <ThemeToggle />
      </div>
    </header>

    <!-- Desktop Floating Controls -->
    <div class="desktop-controls-container">
      <LanguageToggle :locale="locale" @change="setLocale" />
      <ThemeToggle />
    </div>

    <!-- Sidebar component -->
    <Sidebar
      :is-open="isMobileMenuOpen"
      :active-section="activeSection"
      :social-links="activeProfile.profile.socialLinks"
      :nav-items="activeProfile.profile.navItems"
      :name="activeProfile.profile.name"
      :title="activeProfile.profile.title"
      :available-for-work="activeProfile.profile.availableForWork"
      :translations="activeProfile.translations"
      @close="isMobileMenuOpen = false"
    />

    <!-- Main Content Area -->
    <main id="main-content-area" class="main-content" tabindex="-1">
      <SectionHero
        id="hero"
        :name="activeProfile.profile.name"
        :title="activeProfile.profile.title"
        :bio="activeProfile.profile.bio"
        :available-for-work="activeProfile.profile.availableForWork"
        :translations="activeProfile.translations"
      />

      <SectionAbout
        id="about"
        :about-text="activeProfile.profile.aboutText"
        :years-of-experience="activeProfile.profile.yearsOfExperience"
        :career-focus="activeProfile.profile.careerFocus"
        :translations="activeProfile.translations"
      />

      <SectionSkills
        id="skills"
        :skill-groups="activeProfile.profile.skillGroups"
        :translations="activeProfile.translations"
      />

      <SectionExperience
        id="experience"
        :experiences="activeProfile.profile.experiences"
        :translations="activeProfile.translations"
      />

      <SectionProjects
        id="projects"
        :projects="activeProfile.profile.projects"
        :translations="activeProfile.translations"
      />

      <SectionEducation
        id="education"
        :education-list="activeProfile.profile.education"
        :translations="activeProfile.translations"
      />

      <SectionCertifications
        id="certifications"
        :certifications="activeProfile.profile.certifications"
        :translations="activeProfile.translations"
      />

      <SectionContact
        id="contact"
        :email="activeProfile.profile.email"
        :location="activeProfile.profile.location"
        :social-links="activeProfile.profile.socialLinks"
        :translations="activeProfile.translations"
      />
    </main>
  </div>
</template>

<style>
/* Global rules for layout shell */
.desktop-controls-container {
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.mobile-header {
  display: none;
  align-items: center;
  justify-content: space-between;
  background-color: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
  padding: 0.75rem 1.5rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  z-index: 45;
}

.header-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.mobile-logo {
  font-weight: 800;
  font-size: 1.25rem;
  letter-spacing: -0.05em;
  color: var(--text-primary);
}

.hamburger-btn {
  background: transparent;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  padding: 0.25rem;
}

.hamburger-svg {
  width: 24px;
  height: 24px;
}

@media (max-width: 1024px) {
  .mobile-header {
    display: flex;
  }

  .desktop-controls-container {
    display: none;
  }

  .main-content {
    margin-top: 60px; /* Offset for mobile header */
  }
}
</style>

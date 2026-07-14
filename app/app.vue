<!-- app/app.vue -->
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { profileData } from "./data/profile";
import Sidebar from "./components/Sidebar.vue";
import ThemeToggle from "./components/ThemeToggle.vue";
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
let observer: IntersectionObserver | null = null;

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

      <ThemeToggle />
    </header>

    <!-- Desktop Floating Theme Toggle -->
    <div class="desktop-theme-toggle-container">
      <ThemeToggle />
    </div>

    <!-- Sidebar component -->
    <Sidebar
      :is-open="isMobileMenuOpen"
      :active-section="activeSection"
      :social-links="profileData.socialLinks"
      :nav-items="profileData.navItems"
      :name="profileData.name"
      :title="profileData.title"
      :available-for-work="profileData.availableForWork"
      @close="isMobileMenuOpen = false"
    />

    <!-- Main Content Area -->
    <main id="main-content-area" class="main-content" tabindex="-1">
      <SectionHero
        id="hero"
        :name="profileData.name"
        :title="profileData.title"
        :bio="profileData.bio"
        :available-for-work="profileData.availableForWork"
      />

      <SectionAbout
        id="about"
        :about-text="profileData.aboutText"
        :years-of-experience="profileData.yearsOfExperience"
        :career-focus="profileData.careerFocus"
      />

      <SectionSkills id="skills" :skill-groups="profileData.skillGroups" />

      <SectionExperience
        id="experience"
        :experiences="profileData.experiences"
      />

      <SectionProjects id="projects" :projects="profileData.projects" />

      <SectionEducation
        id="education"
        :education-list="profileData.education"
      />

      <SectionCertifications
        id="certifications"
        :certifications="profileData.certifications"
      />

      <SectionContact
        id="contact"
        :email="profileData.email"
        :location="profileData.location"
        :social-links="profileData.socialLinks"
      />
    </main>
  </div>
</template>

<style>
/* Global rules for layout shell */
.desktop-theme-toggle-container {
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 100;
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

  .desktop-theme-toggle-container {
    display: none;
  }

  .main-content {
    margin-top: 60px; /* Offset for mobile header */
  }
}
</style>

<!-- app/components/SectionContact.vue -->
<script setup lang="ts">
import { reactive, ref } from "vue";
import type { SocialLink, UiTranslations } from "../types/profile";

const props = defineProps<{
  email: string;
  location: string;
  socialLinks: SocialLink[];
  translations: UiTranslations;
}>();

const formData = reactive({
  name: "",
  email: "",
  message: "",
});

const errors = reactive({
  name: "",
  email: "",
  message: "",
});

const isSubmitting = ref(false);
const submitStatus = ref<"success" | "error" | null>(null);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateForm = (): boolean => {
  let isValid = true;

  // Reset errors
  errors.name = "";
  errors.email = "";
  errors.message = "";

  // Validate Name
  if (!formData.name.trim()) {
    errors.name = props.translations.nameRequired;
    isValid = false;
  } else if (formData.name.trim().length < 2) {
    errors.name = props.translations.nameMinLength;
    isValid = false;
  }

  // Validate Email
  if (!formData.email.trim()) {
    errors.email = props.translations.emailRequired;
    isValid = false;
  } else if (!emailRegex.test(formData.email.trim())) {
    errors.email = props.translations.emailInvalid;
    isValid = false;
  }

  // Validate Message
  if (!formData.message.trim()) {
    errors.message = props.translations.messageRequired;
    isValid = false;
  } else if (formData.message.trim().length < 10) {
    errors.message = props.translations.messageMinLength;
    isValid = false;
  }

  return isValid;
};

const handleSubmit = async () => {
  if (!validateForm()) {
    submitStatus.value = "error";
    return;
  }

  isSubmitting.value = true;
  submitStatus.value = null;

  try {
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Success State
    submitStatus.value = "success";
    // Reset Form
    formData.name = "";
    formData.email = "";
    formData.message = "";
  } catch (err) {
    submitStatus.value = "error";
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <section class="contact-section">
    <h2>{{ translations.contactTitle }}</h2>

    <div class="contact-grid">
      <!-- Direct Contact Details -->
      <div class="contact-info">
        <h3>{{ translations.getInTouch }}</h3>
        <p class="contact-sub">
          {{
            translations.helloWorldPrefix === "developer"
              ? "Have an exciting project, a role opening, or just want to chat? Send a message and let's discuss how we can work together."
              : "Bạn có dự án thú vị, cơ hội hợp tác hay chỉ muốn trò chuyện? Hãy gửi tin nhắn và thảo luận xem chúng ta có thể làm việc cùng nhau như thế nào."
          }}
        </p>

        <div class="info-list">
          <div class="info-item">
            <div class="info-icon" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="info-svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <span class="info-label">{{ translations.emailLabel }}</span>
              <a :href="`mailto:${email}`" class="info-value">{{ email }}</a>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="info-svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <span class="info-label">{{ translations.locationLabel }}</span>
              <span class="info-value">{{ location }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="contact-form-wrapper">
        <form @submit.prevent="handleSubmit" novalidate class="contact-form">
          <!-- Success Status Alert Banner -->
          <div
            v-if="submitStatus === 'success'"
            class="alert alert-success"
            role="alert"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="alert-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{{ translations.successMessage }}</span>
          </div>

          <!-- Error Status Alert Banner -->
          <div
            v-if="submitStatus === 'error'"
            class="alert alert-danger"
            role="alert"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="alert-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>{{ translations.errorMessage }}</span>
          </div>

          <!-- Name Input -->
          <div class="form-group">
            <label for="contact-name">{{ translations.fullName }}</label>
            <input
              type="text"
              id="contact-name"
              v-model="formData.name"
              class="form-control"
              :class="{ 'has-error': errors.name }"
              :placeholder="
                translations.helloWorldPrefix === 'developer'
                  ? 'e.g. John Doe'
                  : 'Ví dụ: Nguyễn Văn A'
              "
              :disabled="isSubmitting"
              required
            />
            <span v-if="errors.name" class="error-msg" id="name-error">{{
              errors.name
            }}</span>
          </div>

          <!-- Email Input -->
          <div class="form-group">
            <label for="contact-email">{{ translations.emailAddress }}</label>
            <input
              type="email"
              id="contact-email"
              v-model="formData.email"
              class="form-control"
              :class="{ 'has-error': errors.email }"
              :placeholder="
                translations.helloWorldPrefix === 'developer'
                  ? 'e.g. john@example.com'
                  : 'Ví dụ: nguyen@example.com'
              "
              :disabled="isSubmitting"
              required
            />
            <span v-if="errors.email" class="error-msg" id="email-error">{{
              errors.email
            }}</span>
          </div>

          <!-- Message Input -->
          <div class="form-group">
            <label for="contact-message">{{ translations.message }}</label>
            <textarea
              id="contact-message"
              v-model="formData.message"
              rows="5"
              class="form-control"
              :class="{ 'has-error': errors.message }"
              :placeholder="
                translations.helloWorldPrefix === 'developer'
                  ? 'Write your message here...'
                  : 'Viết tin nhắn của bạn ở đây...'
              "
              :disabled="isSubmitting"
              required
            ></textarea>
            <span v-if="errors.message" class="error-msg" id="message-error">{{
              errors.message
            }}</span>
          </div>

          <!-- Submit Action Button -->
          <button
            type="submit"
            class="btn btn-primary btn-submit"
            :disabled="isSubmitting"
          >
            <span
              v-if="isSubmitting"
              class="submit-spinner"
              aria-hidden="true"
            ></span>
            {{ isSubmitting ? translations.sending : translations.sendMessage }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 3rem;
  margin-top: 2rem;
}

.contact-sub {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.info-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: rgba(var(--accent-rgb), 0.08);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-svg {
  width: 20px;
  height: 20px;
}

.info-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.info-value {
  display: block;
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-top: 0.125rem;
  word-break: break-all;
}

/* Contact Form styling */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--text-secondary);
}

.form-control {
  font-family: inherit;
  font-size: 0.9375rem;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  border: 1px solid var(--border-color);
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  transition: all var(--transition-speed) ease;
}

.form-control:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.15);
}

.form-control.has-error {
  border-color: #ef4444;
}

.form-control.has-error:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);
}

.error-msg {
  font-size: 0.75rem;
  color: #ef4444;
  font-weight: 500;
}

/* Alert banners */
.alert {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1.25rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4;
  border: 1px solid transparent;
}

.alert-success {
  background-color: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.2);
  color: #10b981;
}

.alert-danger {
  background-color: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.2);
  color: #ef4444;
}

.alert-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

/* Submit Action Button Spinner */
.btn-submit {
  align-self: flex-start;
  padding: 0.75rem 1.5rem;
}

.submit-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #ffffff;
  animation: submit-spin 0.6s linear infinite;
  display: inline-block;
}

@keyframes submit-spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .btn-submit {
    width: 100%;
  }
}
</style>

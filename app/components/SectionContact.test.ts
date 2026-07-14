// app/components/SectionContact.test.ts
import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import SectionContact from "./SectionContact.vue";

describe("SectionContact Component", () => {
  const defaultProps = {
    email: "alex.mercer.dev@example.com",
    location: "San Francisco, CA",
    socialLinks: [],
  };

  it("renders contact details correctly", () => {
    const wrapper = mount(SectionContact, {
      props: defaultProps,
    });

    expect(wrapper.text()).toContain("alex.mercer.dev@example.com");
    expect(wrapper.text()).toContain("San Francisco, CA");
  });

  it("shows validation errors when submitting empty form", async () => {
    const wrapper = mount(SectionContact, {
      props: defaultProps,
    });

    const form = wrapper.find("form");
    await form.trigger("submit.prevent");

    // Verification alert and field errors should show up
    expect(wrapper.text()).toContain(
      "Please fix the form errors before submitting.",
    );

    const nameError = wrapper.find("#name-error");
    expect(nameError.exists()).toBe(true);
    expect(nameError.text()).toContain("Name is required");

    const emailError = wrapper.find("#email-error");
    expect(emailError.exists()).toBe(true);
    expect(emailError.text()).toContain("Email is required");

    const messageError = wrapper.find("#message-error");
    expect(messageError.exists()).toBe(true);
    expect(messageError.text()).toContain("Message is required");
  });

  it("shows validation errors for invalid email format and short message", async () => {
    const wrapper = mount(SectionContact, {
      props: defaultProps,
    });

    // Populate fields
    const nameInput = wrapper.find("#contact-name");
    const emailInput = wrapper.find("#contact-email");
    const messageTextarea = wrapper.find("#contact-message");

    await nameInput.setValue("A"); // short name
    await emailInput.setValue("invalid-email");
    await messageTextarea.setValue("short");

    const form = wrapper.find("form");
    await form.trigger("submit.prevent");

    expect(wrapper.find("#name-error").text()).toContain(
      "Name must be at least 2 characters",
    );
    expect(wrapper.find("#email-error").text()).toContain(
      "Please enter a valid email address",
    );
    expect(wrapper.find("#message-error").text()).toContain(
      "Message must be at least 10 characters",
    );
  });

  it("successfully submits when form data is valid", async () => {
    // Mock setTimeout logic
    vi.useFakeTimers();

    const wrapper = mount(SectionContact, {
      props: defaultProps,
    });

    await wrapper.find("#contact-name").setValue("Jane Doe");
    await wrapper.find("#contact-email").setValue("jane.doe@example.com");
    await wrapper
      .find("#contact-message")
      .setValue("This is a valid message that has more than 10 characters.");

    const form = wrapper.find("form");
    await form.trigger("submit.prevent");

    // Should start submitting
    expect(wrapper.text()).toContain("Sending...");

    // Fast-forward simulation
    await vi.runAllTimersAsync();

    expect(wrapper.text()).toContain("Message sent successfully!");

    // Timers teardown
    vi.useRealTimers();
  });
});

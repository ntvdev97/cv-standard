// app/components/Sidebar.test.ts
import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Sidebar from "./Sidebar.vue";
import { profileDataEn } from "../data/profile";

describe("Sidebar Component", () => {
  const defaultProps = {
    isOpen: true,
    activeSection: "hero",
    name: "Alex Mercer",
    title: "Senior Full-Stack Engineer",
    availableForWork: true,
    socialLinks: [
      { name: "GitHub", url: "https://github.com", iconName: "github" },
    ],
    navItems: [
      { name: "Hero", href: "#hero" },
      { name: "About", href: "#about" },
      { name: "Experience", href: "#experience" },
    ],
    translations: profileDataEn.translations,
  };

  it("renders profile data correctly", () => {
    const wrapper = mount(Sidebar, {
      props: defaultProps,
    });

    expect(wrapper.text()).toContain("Alex Mercer");
    expect(wrapper.text()).toContain("Senior Full-Stack Engineer");
    expect(wrapper.text()).toContain("Available for work");
  });

  it("renders navigation menu list", () => {
    const wrapper = mount(Sidebar, {
      props: defaultProps,
    });

    const links = wrapper.findAll(".nav-link");
    expect(links.length).toBe(3);
    expect(links[0]!.text()).toBe("Hero");
    expect(links[1]!.text()).toBe("About");
  });

  it("emits close event on link click", async () => {
    const wrapper = mount(Sidebar, {
      props: defaultProps,
    });

    const link = wrapper.find(".nav-link");
    await link.trigger("click");

    expect(wrapper.emitted("close")).toBeTruthy();
  });

  it("emits close event on close button click", async () => {
    const wrapper = mount(Sidebar, {
      props: defaultProps,
    });

    const closeBtn = wrapper.find(".close-btn");
    await closeBtn.trigger("click");

    expect(wrapper.emitted("close")).toBeTruthy();
  });
});

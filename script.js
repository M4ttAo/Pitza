import { animate, inView, stagger } from "https://cdn.jsdelivr.net/npm/motion@12.23.24/+esm";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const menuToggle = document.querySelector(".menu-toggle");
const navPanel = document.querySelector(".nav-panel");
const navLinks = document.querySelectorAll(".nav-panel a");
const magneticButtons = document.querySelectorAll(".magnetic");
const heroCards = document.querySelectorAll(".float-card");

if (menuToggle && navPanel) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navPanel.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navPanel.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (!prefersReducedMotion) {
  animate(".site-header", { y: [ -24, 0 ], opacity: [0, 1] }, { duration: 0.6, easing: "ease-out" });
  animate(".hero-copy > *", { y: [32, 0], opacity: [0, 1] }, { delay: stagger(0.08), duration: 0.7, easing: "ease-out" });
  animate(".hero-visual .hero-card", { scale: [0.96, 1], opacity: [0, 1] }, { delay: stagger(0.12), duration: 0.7, easing: "ease-out" });

  inView("[data-animate]", (element) => {
    animate(element, { opacity: [0, 1], y: [28, 0] }, { duration: 0.7, easing: "ease-out" });
  }, { margin: "0px 0px -12% 0px" });

  magneticButtons.forEach((button) => {
    button.addEventListener("pointerenter", () => {
      animate(button, { y: -3, scale: 1.02 }, { duration: 0.2, easing: "ease-out" });
    });
    button.addEventListener("pointerleave", () => {
      animate(button, { y: 0, scale: 1 }, { duration: 0.2, easing: "ease-out" });
    });
  });

  heroCards.forEach((card) => {
    animate(card, { y: [0, -10, 0] }, { duration: 4.2, repeat: Infinity, easing: "ease-in-out" });
  });
} else {
  document.querySelectorAll("[data-animate]").forEach((element) => {
    element.style.opacity = "1";
    element.style.transform = "none";
  });
}

document.querySelector(".contact-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const submitButton = event.currentTarget.querySelector("button[type='submit']");

  if (!submitButton) {
    return;
  }

  submitButton.textContent = "Richiesta pronta";
  submitButton.setAttribute("aria-live", "polite");

  if (!prefersReducedMotion) {
    animate(submitButton, { scale: [1, 1.04, 1] }, { duration: 0.35, easing: "ease-out" });
  }
});

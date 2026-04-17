import { animate, inView, stagger } from "https://cdn.jsdelivr.net/npm/motion@12.23.24/+esm";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const menuToggle = document.querySelector(".menu-toggle");
const navPanel = document.querySelector(".nav-panel");
const navLinks = document.querySelectorAll(".nav-panel a");
const magneticButtons = document.querySelectorAll(".magnetic");

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
  animate(".site-header", { y: [-18, 0], opacity: [0, 1] }, { duration: 0.55, easing: "ease-out" });
  animate(".hero-copy > *", { y: [26, 0], opacity: [0, 1] }, { delay: stagger(0.07), duration: 0.58, easing: "ease-out" });
  animate(".hero-photo-card", { scale: [0.98, 1], opacity: [0, 1] }, { duration: 0.7, delay: 0.15, easing: "ease-out" });
  animate(".hero-badge", { rotate: [-6, 0], opacity: [0, 1] }, { duration: 0.7, delay: 0.32, easing: "ease-out" });

  inView("[data-animate]", (element) => {
    animate(element, { opacity: [0, 1], y: [26, 0] }, { duration: 0.58, easing: "ease-out" });
  }, { margin: "0px 0px -10% 0px" });

  magneticButtons.forEach((button) => {
    button.addEventListener("pointerenter", () => {
      animate(button, { scale: 1.02, y: -2 }, { duration: 0.18, easing: "ease-out" });
    });
    button.addEventListener("pointerleave", () => {
      animate(button, { scale: 1, y: 0 }, { duration: 0.18, easing: "ease-out" });
    });
  });
} else {
  document.querySelectorAll("[data-animate]").forEach((element) => {
    element.style.opacity = "1";
    element.style.transform = "none";
  });
}

document.querySelector(".contact-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button[type='submit']");

  if (!button) {
    return;
  }

  button.textContent = "Richiesta pronta";

  if (!prefersReducedMotion) {
    animate(button, { scale: [1, 1.03, 1] }, { duration: 0.28, easing: "ease-out" });
  }
});

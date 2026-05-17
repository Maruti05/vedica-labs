import { getNavbarHTML, initNavbarScroll, setActiveNav, initNavbarEvents } from "./components/navbar.js";
import { getFooterHTML } from "./components/footer.js";
import { initTheme } from "./utils/theme.js";
import { buildMailtoLink, openMailClient, sanitizeInput, initScrollAnimations, initTOCScroll } from "./utils/helpers.js";

window.getNavbarHTML = getNavbarHTML;
window.getFooterHTML = getFooterHTML;
window.buildMailtoLink = buildMailtoLink;
window.openMailClient = openMailClient;
window.sanitizeInput = sanitizeInput;

document.addEventListener("DOMContentLoaded", () => {
  const navbarRoot = document.getElementById("navbar-root");
  const footerRoot = document.getElementById("footer-root");

  if (navbarRoot) {
    const active = window.location.pathname.split("/").pop() || "index.html";
    navbarRoot.innerHTML = getNavbarHTML(active);
  }
  if (footerRoot) {
    footerRoot.innerHTML = getFooterHTML();
  }

  setActiveNav();
  initNavbarScroll();
  initNavbarEvents();
  initScrollAnimations();
  initTOCScroll();
  initTheme();
});

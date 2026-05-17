import { APPS_DATA } from "../data/apps.js";

const NAV_PAGES = [
  { href: "index.html", label: "Home", icon: "\uD83C\uDFE0" },
  { href: "privacy.html", label: "Privacy Policy", icon: "\uD83D\uDD12" },
  { href: "report.html", label: "Report Issue", icon: "\uD83D\uDC1B" },
  { href: "about.html", label: "About Us", icon: "\uD83D\uDC65" },
  { href: "contact.html", label: "Contact", icon: "\u2709\uFE0F" }
];

export function getNavbarHTML(activePage) {
  return `
  <nav class="navbar" id="navbar">
    <div class="navbar-inner">
      <a href="index.html" class="navbar-logo">
        <div class="logo-icon">\u26A1</div>
        <span class="logo-text">Vedica<span>Labs</span></span>
      </a>

      <ul class="navbar-nav">
        ${NAV_PAGES.map(p => `
          <li><a href="${p.href}" class="${activePage === p.href ? "active" : ""}">${p.label}</a></li>
        `).join("")}
      </ul>

      <div class="navbar-actions">
        <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
          \u2600\uFE0F
        </button>
        <button class="apps-menu-btn" id="appsMenuBtn" aria-label="Our Apps">
          <span>\uD83D\uDE80</span>
          Our Apps
          <span class="dot"></span>
        </button>
        <button class="hamburger" id="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <div class="apps-dropdown" id="appsDropdown">
      <div class="apps-dropdown-header">
        <div>
          <div class="apps-dropdown-title">Our Applications</div>
          <h4>Tap a link to explore or download</h4>
        </div>
        <button class="close-dropdown" id="closeDropdown">\u2715</button>
      </div>
      <div class="apps-list">
        ${APPS_DATA.map(app => `
          <div class="app-item">
            <div class="app-icon-wrap" style="background: ${app.bg}">${app.icon}</div>
            <div class="app-info">
              <div class="app-name">${app.name}</div>
              <div class="app-desc">${app.desc}</div>
            </div>
            <div class="app-links">
              <a href="${app.website}" target="_blank" rel="noopener noreferrer" class="app-link-btn website">
                \uD83C\uDF10 Website
              </a>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  </nav>

  <div class="mobile-nav" id="mobileNav">
    <ul>
      ${NAV_PAGES.map(p => `
        <li><a href="${p.href}" class="${activePage === p.href ? "active" : ""}">${p.icon} ${p.label}</a></li>
      `).join("")}
    </ul>
    <button class="mobile-nav-apps-btn" id="mobileAppsBtn">
      \uD83D\uDE80 Our Applications
    </button>
  </div>
  `;
}

export function initNavbarScroll() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  });
}

export function setActiveNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar-nav a, .mobile-nav a").forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
}

export function initNavbarEvents() {
  const dropdown = document.getElementById("appsDropdown");
  const menuBtn = document.getElementById("appsMenuBtn");
  const closeBtn = document.getElementById("closeDropdown");
  const mobileNav = document.getElementById("mobileNav");
  const hamburger = document.getElementById("hamburger");
  const mobileAppsBtn = document.getElementById("mobileAppsBtn");

  function toggleDropdown() {
    dropdown?.classList.toggle("open");
    menuBtn?.classList.toggle("active");
  }

  function toggleMobileNav() {
    mobileNav?.classList.toggle("open");
    hamburger?.classList.toggle("open");
  }

  menuBtn?.addEventListener("click", toggleDropdown);
  closeBtn?.addEventListener("click", toggleDropdown);
  hamburger?.addEventListener("click", toggleMobileNav);

  mobileAppsBtn?.addEventListener("click", () => {
    toggleMobileNav();
    setTimeout(toggleDropdown, 300);
  });

  document.addEventListener("click", (e) => {
    if (dropdown?.classList.contains("open")) {
      if (!dropdown.contains(e.target) && menuBtn && !menuBtn.contains(e.target)) {
        dropdown.classList.remove("open");
        menuBtn.classList.remove("active");
      }
    }
  });
}

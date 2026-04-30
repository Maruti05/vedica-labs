// =============================================
// VEDICA LABS — Shared Components
// =============================================

const APPS_DATA = [
  {
    id: 1,
    name: "HireIQ",
    desc: "AI-powered voice interview platform",
    icon: "🎙️",
    color: "linear-gradient(135deg, #4F8EF7, #7C5CFC)",
    bg: "rgba(79,142,247,0.15)",
    category: "Productivity",
    rating: "4.8",
    ratingCount: "2.4k",
    tags: ["AI", "HR Tech", "Voice"],
    website: "https://hire-iq-gamma.vercel.app/",
    fullDesc: "AI-powered real-time voice interview tool that parses resumes and conducts smart interviews with Groq LLaMA-3."
  },
  {
    id: 2,
    name: "Veer Gym",
    desc: "Premium gym management & booking",
    icon: "💪",
    color: "linear-gradient(135deg, #22D07A, #00D4AA)",
    bg: "rgba(34,208,122,0.15)",
    category: "Health & Fitness",
    rating: "4.6",
    ratingCount: "1.1k",
    tags: ["Fitness", "Booking", "Health"],
    website: "https://veer-gym.vercel.app/",
    fullDesc: "Complete gym management platform with smooth booking, member tracking, WhatsApp integration, and Google Maps embed."
  },
];

function getNavbarHTML(activePage) {
  const pages = [
    { href: 'index.html', label: 'Home', icon: '🏠' },
    { href: 'privacy.html', label: 'Privacy Policy', icon: '🔒' },
    { href: 'report.html', label: 'Report Issue', icon: '🐛' },
    { href: 'about.html', label: 'About Us', icon: '👥' },
    { href: 'contact.html', label: 'Contact', icon: '✉️' },
  ];

  return `
  <nav class="navbar" id="navbar">
    <div class="navbar-inner">
      <a href="index.html" class="navbar-logo">
        <div class="logo-icon">⚡</div>
        <span class="logo-text">Vedica<span>Labs</span></span>
      </a>

      <ul class="navbar-nav">
        ${pages.map(p => `
          <li><a href="${p.href}" class="${activePage === p.href ? 'active' : ''}">${p.label}</a></li>
        `).join('')}
      </ul>

      <div class="navbar-actions">
        <button class="apps-menu-btn" id="appsMenuBtn" onclick="toggleAppsMenu()">
          <span>🚀</span>
          Our Apps
          <span class="dot"></span>
        </button>
        <button class="hamburger" id="hamburger" onclick="toggleMobileNav()" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <!-- Apps Dropdown -->
    <div class="apps-dropdown" id="appsDropdown">
      <div class="apps-dropdown-header">
        <div>
          <div class="apps-dropdown-title">Our Applications</div>
          <h4>Tap a link to explore or download</h4>
        </div>
        <button class="close-dropdown" onclick="toggleAppsMenu()">✕</button>
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
              ${app.playStore ? `
                <a href="${app.playStore}" target="_blank" class="app-link-btn play-store">
                  ▶ Play Store
                </a>
              ` : ''}
              <a href="${app.website}" target="_blank" class="app-link-btn website">
                🌐 Website
              </a>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </nav>

  <!-- Mobile Nav -->
  <div class="mobile-nav" id="mobileNav">
    <ul>
      ${pages.map(p => `
        <li><a href="${p.href}" class="${activePage === p.href ? 'active' : ''}">${p.icon} ${p.label}</a></li>
      `).join('')}
    </ul>
    <button class="mobile-nav-apps-btn" onclick="toggleMobileNav(); setTimeout(toggleAppsMenu, 300)">
      🚀 Our Applications
    </button>
  </div>
  `;
}

function getFooterHTML() {
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="logo-wrap">
            <div class="logo-icon">⚡</div>
            <span class="logo-text">Vedica<span>Labs</span></span>
          </a>
          <p class="footer-desc">Building beautiful, purposeful digital experiences — from AI-powered tools to consumer apps — crafted with care in India.</p>
          <div class="footer-socials">
            <a href="#" class="social-link" title="Twitter">𝕏</a>
            <a href="#" class="social-link" title="LinkedIn">in</a>
            <a href="#" class="social-link" title="GitHub">
              <img src="assets/icons8-github.gif" alt="GitHub" style="width:18px;height:18px;" />
            </a>
            <a href="#" class="social-link" title="Instagram">📸</a>
          </div>
        </div>

        <div class="footer-col">
          <h5>Company</h5>
          <ul class="footer-links">
            <li><a href="about.html"><i>→</i> About Us</a></li>
            <li><a href="index.html#apps"><i>→</i> Our Apps</a></li>
            <li><a href="index.html#features"><i>→</i> Features</a></li>
            <li><a href="contact.html"><i>→</i> Careers</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>Support</h5>
          <ul class="footer-links">
            <li><a href="report.html"><i>→</i> Report Issue</a></li>
            <li><a href="contact.html"><i>→</i> Contact Us</a></li>
            <li><a href="privacy.html"><i>→</i> Privacy Policy</a></li>
            <li><a href="privacy.html#terms"><i>→</i> Terms of Service</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>Apps</h5>
          <ul class="footer-links">
            ${APPS_DATA.map(app => `
              <li><a href="${app.website}" target="_blank"><i>→</i> ${app.name}</a></li>
            `).join('')}
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="footer-copy">© ${new Date().getFullYear()} <span>Vedica Labs</span>. All rights reserved. Made with ❤️ in India.</p>
        <div class="footer-legal">
          <a href="privacy.html">Privacy Policy</a>
          <a href="privacy.html#terms">Terms of Service</a>
          <a href="report.html">Report Issue</a>
        </div>
      </div>
    </div>
  </footer>
  `;
}

// ---- Navbar Scroll ----
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// ---- Apps Menu Toggle ----
function toggleAppsMenu() {
  const dropdown = document.getElementById('appsDropdown');
  const btn = document.getElementById('appsMenuBtn');
  if (!dropdown) return;
  dropdown.classList.toggle('open');
  if (btn) btn.classList.toggle('active');
}

// ---- Mobile Nav Toggle ----
function toggleMobileNav() {
  const nav = document.getElementById('mobileNav');
  const burger = document.getElementById('hamburger');
  if (!nav) return;
  nav.classList.toggle('open');
  if (burger) burger.classList.toggle('open');
}

// ---- Close dropdowns on outside click ----
document.addEventListener('click', (e) => {
  const dropdown = document.getElementById('appsDropdown');
  const btn = document.getElementById('appsMenuBtn');
  if (dropdown && dropdown.classList.contains('open')) {
    if (!dropdown.contains(e.target) && btn && !btn.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  }
});

// ---- Active nav link ----
function setActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-nav a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

const SITE_CONTACT_EMAIL = 'vedicalabs@gmail.com';

function buildMailtoLink(to, subject, body) {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  return `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`;
}

function openMailClient(mailto) {
  const anchor = document.createElement('a');
  anchor.href = mailto;
  anchor.style.display = 'none';
  anchor.rel = 'noreferrer noopener';
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}

// ---- Intersection Observer for animations ----
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-fadeInUp').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
}

// ---- TOC Active (Privacy page) ----
function initTOCScroll() {
  const tocLinks = document.querySelectorAll('.toc-links a');
  if (!tocLinks.length) return;
  const sections = document.querySelectorAll('.policy-section[id]');
  if (!sections.length) return;
  
  // Use a more reliable approach: track scroll position directly
  const updateActiveLink = () => {
    const scrollPos = window.scrollY + window.innerHeight / 3;
    let currentSection = null;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (sectionTop <= scrollPos && (sectionTop + sectionHeight) > scrollPos) {
        currentSection = section;
      }
    });
    
    if (currentSection) {
      tocLinks.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.toc-links a[href="#${currentSection.id}"]`);
      if (active) active.classList.add('active');
    }
  };
  
  // Initial check
  updateActiveLink();
  
  // Update on scroll with throttling
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveLink();
        ticking = false;
      });
      ticking = true;
    }
  });
  
  // Also keep observer as fallback for smooth transitions
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tocLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.toc-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });
  
  sections.forEach(s => observer.observe(s));
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  setActiveNav();
  initScrollAnimations();
  initTOCScroll();
});

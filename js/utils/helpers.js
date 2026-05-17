import { SITE_CONFIG } from "../data/site-config.js";

export function buildMailtoLink(to, subject, body) {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  return `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`;
}

export function openMailClient(mailto) {
  const anchor = document.createElement("a");
  anchor.href = mailto;
  anchor.style.display = "none";
  anchor.rel = "noreferrer noopener";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}

export function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".animate-fadeInUp").forEach(el => {
    el.style.animationPlayState = "paused";
    observer.observe(el);
  });
}

export function initTOCScroll() {
  const tocLinks = document.querySelectorAll(".toc-links a");
  if (!tocLinks.length) return;
  const sections = document.querySelectorAll(".policy-section[id]");
  if (!sections.length) return;

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
      tocLinks.forEach(l => l.classList.remove("active"));
      const active = document.querySelector(`.toc-links a[href="#${currentSection.id}"]`);
      if (active) active.classList.add("active");
    }
  };

  updateActiveLink();

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveLink();
        ticking = false;
      });
      ticking = true;
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tocLinks.forEach(l => l.classList.remove("active"));
        const active = document.querySelector(`.toc-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add("active");
      }
    });
  }, { rootMargin: "-20% 0px -70% 0px", threshold: 0 });

  sections.forEach(s => observer.observe(s));
}

export function getCurrentPage() {
  return window.location.pathname.split("/").pop() || "index.html";
}

export function getSiteConfig() {
  return SITE_CONFIG;
}

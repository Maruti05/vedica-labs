export const THEME_KEY = "vl-theme";
export const THEME_DARK = "dark";
export const THEME_LIGHT = "light";

export function getPreferredTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === THEME_LIGHT || stored === THEME_DARK) {
    return stored;
  }
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? THEME_LIGHT
    : THEME_DARK;
}

export function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_KEY, theme);
  updateThemeIcon(theme);
}

export function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || THEME_DARK;
  const next = current === THEME_DARK ? THEME_LIGHT : THEME_DARK;
  setTheme(next);
  return next;
}

export function updateThemeIcon(theme) {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;
  btn.innerHTML = theme === THEME_DARK ? "\u2600\uFE0F" : "\uD83C\uDF19";
  btn.setAttribute("aria-label", theme === THEME_DARK ? "Switch to light mode" : "Switch to dark mode");
}

export function initTheme() {
  const theme = getPreferredTheme();
  document.documentElement.setAttribute("data-theme", theme);

  const btn = document.getElementById("themeToggle");
  if (btn) {
    btn.addEventListener("click", toggleTheme);
    updateThemeIcon(theme);
  }
}

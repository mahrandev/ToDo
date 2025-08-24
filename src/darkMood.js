import { body, heroImg, heroSource, themeToggle } from "./element.js";

export const savedTheme = localStorage.getItem("theme") || "light";

export function applyTheme(theme) {
  const isDark = theme === "dark";

  body.classList.toggle("dark-theme", isDark);
  body.classList.toggle("light-theme", !isDark);

  themeToggle.src = isDark ? "images/icon-sun.svg" : "images/icon-moon.svg";
  themeToggle.alt = isDark ? "Sun Icon" : "Moon Icon";

  heroImg.src = isDark ? "images/bg-desktop-dark.jpg" : "images/bg-desktop-light.jpg";
  heroSource.srcset = isDark ? "images/bg-mobile-dark.jpg" : "images/bg-mobile-light.jpg";
}

export function toggleTheme() {
  const currentTheme = body.classList.contains("dark-theme") ? "dark" : "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
}


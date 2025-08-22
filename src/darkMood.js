import { body, heroImg, heroSource, themeToggle } from "./element";

export function applyTheme(theme) {
  const isDark = theme === "dark";

  // تغيير فئات الـ body
  body.classList.toggle("dark-theme", isDark);
  body.classList.toggle("light-theme", !isDark);

  // تغيير الأيقونة
  themeToggle.src = isDark ? "images/icon-sun.svg" : "images/icon-moon.svg";
  themeToggle.alt = isDark ? "Sun Icon" : "Moon Icon";

  // تغيير صورة الخلفية
  if (isDark) {
    heroImg.src = "images/bg-desktop-dark.jpg";
    heroSource.srcset = "images/bg-mobile-dark.jpg";
  } else {
    heroImg.src = "images/bg-desktop-light.jpg";
    heroSource.srcset = "images/bg-mobile-light.jpg";
  }
}

export function toggleThemeAndSave() {
  const isDark = body.classList.contains("dark-theme");
  const newTheme = isDark ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
}

// إضافة حدث Click لكل الأيقونات في مجموعة واحدة

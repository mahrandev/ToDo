import { backgroundImg, body, themeToggle } from "./element";



export function applyTheme(theme) {
  const isDark = theme === "dark";

  // تغيير فئات الـ body
  body.classList.toggle("dark-theme", isDark);
  body.classList.toggle("light-theme", !isDark);

  // تغيير الأيقونة
  themeToggle.src = isDark ? "images/icon-sun.svg" : "images/icon-moon.svg";
  themeToggle.alt = isDark ? "Sun Icon" : "Moon Icon";

  // تغيير صورة الخلفية
  backgroundImg.src = isDark
    ? "images/bg-desktop-dark.jpg"
    : "images/bg-desktop-light.jpg";
}


export function toggleThemeAndSave() {
  const isDark = body.classList.contains("dark-theme");
  const newTheme = isDark ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
}

// إضافة حدث Click لكل الأيقونات في مجموعة واحدة

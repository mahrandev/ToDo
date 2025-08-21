import { body, themeIcons } from "./element";

function showElement(element) {
  element.classList.remove("hidden");
}

function hideElement(element) {
  element.classList.add("hidden");
}

// دالة لتطبيق السمات
export function applyTheme(theme) {
  // استخدام toggle لتغيير الكلاسات على الـ body
  body.classList.toggle("dark-theme", theme === "dark");
  body.classList.toggle("light-theme", theme === "light");

  // إظهار وإخفاء الأيقونات والخلفيات
  if (theme === "dark") {
    hideElement(document.querySelector(".icon-moon"));
    showElement(document.querySelector(".icon-sun"));
    hideElement(document.querySelector(".bg-img-light"));
    showElement(document.querySelector(".bg-img-dark"));
  } else {
    showElement(document.querySelector(".icon-moon"));
    hideElement(document.querySelector(".icon-sun"));
    showElement(document.querySelector(".bg-img-light"));
    hideElement(document.querySelector(".bg-img-dark"));
  }
}

// دالة تبديل وحفظ الوضع
export function toggleThemeAndSave() {
  const isDark = body.classList.contains("dark-theme");
  const newTheme = isDark ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
}

// إضافة حدث Click لكل الأيقونات في مجموعة واحدة

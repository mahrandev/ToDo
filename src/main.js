import { applyTheme, toggleThemeAndSave } from "./darkMood";
import { themeToggle } from "./element";

themeToggle.addEventListener("click", toggleThemeAndSave);

const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

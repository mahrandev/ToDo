import { applyTheme, toggleThemeAndSave } from "./darkMood";
import { themeIcons } from "./element";

themeIcons.forEach((icon) => {
  icon.addEventListener("click", toggleThemeAndSave);
});

const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

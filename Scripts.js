
const button = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

const systemDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
).matches;

const initialTheme = savedTheme || (systemDark ? "dark" : "light");

document.documentElement.setAttribute("data-theme", initialTheme);

button.addEventListener("click", () => {
    const currentTheme =
        document.documentElement.getAttribute("data-theme");

    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);

    localStorage.setItem("theme", newTheme);
});

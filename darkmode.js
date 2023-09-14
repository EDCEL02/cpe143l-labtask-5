const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;
const boxes = document.querySelectorAll(".box"); // Select all .box elements

const isDarkMode = localStorage.getItem("darkMode") === "enabled";

function enableDarkMode() {
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");

    // Add dark mode styles to .box elements
    boxes.forEach(box => {
        box.classList.add("dark-mode");
    });

    // Change the button text to Light Mode
    darkModeToggle.textContent = "Light Mode";
}

function disableDarkMode() {
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");

    // Remove dark mode styles from .box elements
    boxes.forEach(box => {
        box.classList.remove("dark-mode");
    });

    // Change the button text to Dark Mode
    darkModeToggle.textContent = "Dark Mode";
}

if (isDarkMode) {
    enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});
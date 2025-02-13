document.addEventListener("DOMContentLoaded", function () {
    showSection("home"); // Show the home section by default
});

document.getElementById("menu-btn").addEventListener("click", function () {
    let navLinks = document.getElementById("nav-links");
    if (navLinks.style.display === "block") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "block";
    }
});

function showSection(sectionId) {
    document.querySelectorAll(".section").forEach((section) => {
        section.style.display = "none";
    });
    document.getElementById(sectionId).style.display = "block";
}

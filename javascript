// Responsive menu toggle
var menuBtn = document.getElementById("menu-icon");
var menu = document.querySelector("header nav ul");

menuBtn.addEventListener("click", function() {
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});

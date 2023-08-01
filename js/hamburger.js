// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // Get the hamburger menu element and the off-canvas menu element
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const offCanvasMenu = document.querySelector(".off-canvas-menu");

    // Add an event listener to the hamburger menu for a click event
    hamburgerMenu.addEventListener("click", function() {
        // When the hamburger menu is clicked, toggle the "active" class 
        // for both the off-canvas menu and the hamburger menu.
        // If they have the class, it gets removed; if they don't, it gets added.
        offCanvasMenu.classList.toggle("active");
        hamburgerMenu.classList.toggle("active");
    });

    // Add an event listener to the whole document for a click event
    document.addEventListener("click", function(event) {
        // If the click event's target is not within the off-canvas menu or the hamburger menu,
        // then remove the "active" class from both
        if (!offCanvasMenu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            offCanvasMenu.classList.remove("active");
            hamburgerMenu.classList.remove("active");
        }
    });

    // Get all the links inside the off-canvas menu
    const menuLinks = offCanvasMenu.querySelectorAll("a");

    // Add a click event listener to each link
    menuLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            // On mobile, when a link is clicked, remove the "active" class from both menus
            offCanvasMenu.classList.remove("active");
            hamburgerMenu.classList.remove("active");
        });
    });
});

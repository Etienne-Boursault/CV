// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // Get the hamburger menu element and the off-canvas menu element
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const offCanvasMenu = document.querySelector(".off-canvas-menu");
    if (!hamburgerMenu || !offCanvasMenu) {return}

    const setMenuState = (isOpen) => {
        hamburgerMenu.classList.toggle("active", isOpen);
        offCanvasMenu.classList.toggle("active", isOpen);
        hamburgerMenu.setAttribute("aria-expanded", String(isOpen));
        hamburgerMenu.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
        offCanvasMenu.setAttribute("aria-hidden", String(!isOpen));
    };

    // Add an event listener to the hamburger menu for a click event
    hamburgerMenu.addEventListener("click", function() {
        const isExpanded = hamburgerMenu.getAttribute("aria-expanded") === "true";
        setMenuState(!isExpanded);
    });

    // Add an event listener to the whole document for a click event
    document.addEventListener("click", function(event) {
        if (!offCanvasMenu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            setMenuState(false);
        }
    });

    // Get all the links inside the off-canvas menu
    const menuLinks = offCanvasMenu.querySelectorAll("a");

    // Add a click event listener to each link
    menuLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            setMenuState(false);
        });
    });
});

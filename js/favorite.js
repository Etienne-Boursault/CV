// Set the initial title of the document.
document.title = "Etienne's résumé"

// Get necessary elements from the DOM.
const addToFavoritesBtn = document.getElementById("addToFavorites");
const emptyStar = addToFavoritesBtn.querySelector(".empty-star");
const filledStar = addToFavoritesBtn.querySelector(".filled-star");
const dialogBubble = document.getElementById("dialog-bubble");
const dialogMessage = document.getElementById("dialog-message");
const dialogClose = document.getElementById("dialog-close");

// Check if the user's language starts with 'fr' (for French).
const isFrench = navigator.language.startsWith("fr");

// Get the current URL.
const url = window.location.href;

// Function to update the title and dialog message based on the given language.
function updateTitle(lang) {
    if (lang === 'fr') {
        document.title = "CV Etienne";
        dialogMessage.textContent = "Appuyez sur Ctrl+D pour ajouter cette page \u00E0 vos favoris."
    } else {
        document.title = "Etienne's R\u00E9sum\u00E9";
        dialogMessage.textContent = "Press Ctrl+D to add this page to your favorites."
    }
}

// Update the title and dialog message based on the user's language.
updateTitle(isFrench ? 'fr' : 'en');

// When the document has finished loading, add event listeners.
document.addEventListener("DOMContentLoaded", () => {
    // When the "Add to favorites" button is clicked,
    addToFavoritesBtn.addEventListener("click", () => {
        // If the page has already been added to favorites, don't do anything.
        if (addToFavoritesBtn.getAttribute("data-added") === "true") return;

        // If the browser is Internet Explorer, use its method to add to favorites.
        if (window.external && "AddFavorite" in window.external) {
            // For Internet Explorer
            let title = document.title
            window.external.AddFavorite(url, title);
        } else {
            // For other browsers, show the dialog bubble.
            dialogBubble.style.display = "flex";
        }
        // Mark the page as added to favorites.
        addToFavoritesBtn.setAttribute("data-added", "true");
    });

    // When the close button of the dialog is clicked,
    dialogClose.addEventListener("click", () => {
        // Hide the dialog and the empty star,
        // and show the filled star.
        dialogBubble.style.display = "none";
        emptyStar.style.display = "none";
        filledStar.style.display = "inline";
    });
});

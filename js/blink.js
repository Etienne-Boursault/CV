// Define variables.
let timeoutId;
let originalTitle = document.title;
let blinkTitle = "\u26A0 Come back!";
let blinkInterval;

// This function updates the blink title and interval based on the language passed as argument
function updateBlinkTitle(lang) {
    if (lang === 'fr') {
        blinkTitle = "Revient !";
    } else {
        blinkTitle = "\u26A0 Come back!";
    }
}

// This function handles the visibility change of the page.
function handleVisibilityChange() {
    // If the page is hidden,
    if (document.hidden) {
        // After 1 minute, start blinking the title.
        timeoutId = setTimeout(() => {
            startBlinkingTitle();
        }, 1*60*1000); // 1 minute
    } else {
        // If the page is visible, stop blinking the title.
        clearTimeout(timeoutId);
        stopBlinkingTitle();
    }
}

// This function starts blinking the title.
function startBlinkingTitle() {
    clearInterval(blinkInterval); // Clear any existing interval
    // Set the title to the blink title,
    document.title = blinkTitle;
    // then after 1 second, set it back to the original title.
    setTimeout(() => {
        document.title = originalTitle;
    }, 1000);

    // Then every 2 seconds, alternate between the original and the blink title.
    blinkInterval = setInterval(() => {
        document.title = document.title === originalTitle ? blinkTitle : originalTitle;
    }, 2000);
}

// This function stops blinking the title and sets it back to the original title.
function stopBlinkingTitle() {
    clearInterval(blinkInterval);
    document.title = originalTitle;
}

// When the visibility of the page changes (the page is hidden or shown),
// call the handleVisibilityChange function.
document.addEventListener("visibilitychange", handleVisibilityChange);

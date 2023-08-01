// Define a variable to hold the modal timeout id.
let modalTimeout;

// Get the modal, yes button, and no button elements from the DOM.
const stillHereModal = document.querySelector('#stillHereModal');
const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');

// This function shows the modal by setting its display property to flex.
function showModal() {
    stillHereModal.style.display = "flex";
}

// This function resets the modal timeout.
function resetModalTimeout() {
    // Clear any existing timeout.
    clearTimeout(modalTimeout);
    // Set a new timeout to show the modal after 3 minutes of inactivity.
    modalTimeout = setTimeout(showModal, 3 * 60 * 1000);
}

// When the document has finished loading, reset the modal timeout.
document.addEventListener("DOMContentLoaded", () => {
    resetModalTimeout();
});

// When the "yes" button is clicked, hide the modal and reset the timeout.
yesBtn.addEventListener("click", () => {
    stillHereModal.style.display = "none";
    resetModalTimeout();
});

// When the "no" button is clicked, show the leaving message,
// hide the still here message and the buttons, and close the window after 5 seconds.
noBtn.addEventListener("click", () => {
    const leavingMessage = document.getElementById("leavingMessage");
    const areYouStillThereMessage = document.querySelector(".are-you-still-there");
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    leavingMessage.hidden = false;
    areYouStillThereMessage.hidden = true;

    setTimeout(() => {
        stillHereModal.style.display = "none";
        window.close();
    }, 5 * 1000);
});

// Whenever there's any user activity (moving the mouse, touching the screen, or pressing a key),
// reset the modal timeout.
document.addEventListener("mousemove", resetModalTimeout);
document.addEventListener("touchstart", resetModalTimeout);
document.addEventListener("keydown", resetModalTimeout);

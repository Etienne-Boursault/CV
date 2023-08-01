// Language-related functions and event listeners
window.onload = setInitialLanguage;

/**
 * Get the user's browser language.
 * @returns {string} The two-letter language code (e.g., 'en' or 'fr').
 */
function getUserLanguage() {
    const language = navigator.language;
    return language.substring(0, 2).toLowerCase();
}

// Add this function to set the initial language of the website
function setInitialLanguage() {
    const userLanguage = getUserLanguage();
    switchLanguage(userLanguage === 'fr' ? 'fr' : 'en');
}

// Function to switch the language of the website's content
function switchLanguage(lang) {
    updateTextContent(lang);
    updateImageAltText(lang);
    createAndUpdateTooltips(lang);
    updateDownloadableResume(lang);
    updateBlinkTitle(lang);
    updateTitle(lang);
}

// Function to update the text content of the website based on the selected language
function updateTextContent(lang) {
    const textElements = document.querySelectorAll('[data-en], [data-fr]');

    textElements.forEach((element) => {
        element.textContent = element.getAttribute(`data-${lang}`);
    });
}

// Function to update the alt text of images on the website based on the selected language
function updateImageAltText(lang) {
    const imgElements = document.querySelectorAll('img[data-en], img[data-fr]');

    imgElements.forEach((img) => {
        img.alt = img.getAttribute(`data-${lang}`);
    });
}

// Function to update the downloadable resume based on the selected language
function updateDownloadableResume(lang) {
    const resumeEn = document.querySelector(".download-resume-en");
    const resumeFr = document.querySelector(".download-resume-fr");

    if (lang === 'en') {
        resumeEn.removeAttribute('hidden');
        resumeFr.setAttribute('hidden', 'hidden');
    } else if (lang === 'fr') {
        resumeEn.setAttribute('hidden', 'hidden');
        resumeFr.removeAttribute('hidden');
    }
}

// Function to create and update tooltips for each skill based on the selected language
function createAndUpdateTooltips(lang) {
    const skillElements = document.querySelectorAll(".skill");

    // Iterate through all skill elements
    skillElements.forEach((skill) => {
        const skillName = skill.dataset.skill;
        const tooltipData = tooltips[skillName];

        // Check if there's tooltip data for the current skill
        if (tooltipData) {
            const tooltipText = tooltipData[lang] || tooltipData.en; // Default to English if the selected language is not available

            // Find or create the tooltip element
            let tooltip = skill.querySelector(".tooltip");
            if (!tooltip) {
                tooltip = document.createElement("span");
                tooltip.classList.add("tooltip");
                skill.appendChild(tooltip);
            }
            tooltip.textContent = tooltipText;
        }
    });
}

// Event listener for the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    const initialLanguage = getUserLanguage();
    const languageSwitchEvent = new CustomEvent('languageSwitch', { detail: { language: initialLanguage } });
    document.dispatchEvent(languageSwitchEvent);

    // Add event listeners for navigation links
    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToAnchorWithOffset(link.getAttribute('href'), 110);
        });
    });
});

// Event listener for the custom languageSwitch event
document.addEventListener('languageSwitch', (event) => {
    const lang = event.detail.language;
    switchLanguage(lang);
});

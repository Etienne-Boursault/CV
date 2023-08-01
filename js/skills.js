// This code selects all elements with the class "skill" from the document (HTML page).
const skillElements = document.querySelectorAll(".skill");

let activeCategory = null;
let activeMainCategory = null;

// This forEach loop iterates through each of the selected "skill" elements
skillElements.forEach((skill) => {
    // An event listener for a click event is attached to each "skill" element.
    // The callback function (inside the event listener) toggles between an image and a text.
    skill.addEventListener("click", () => {
        // The code below finds an image element within the clicked "skill" element.
        const imgElement = skill.querySelector("img:not(.logo-hover)");
        // It also finds an element with the class "logo-hover-display".
        const logoHover = skill.querySelector(".logo-hover-display");
        // Find the tooltip element
        const tooltip = skill.querySelector(".tooltip");
        // Get the filetype attribute from the dataset object
        const fileType = skill.dataset.filetype;
        // If the fileType attribute is an empty string, exit the function early to prevent further execution.
        if (fileType === "") {return}
        // Create the path to the image based on the skill's name and filetype
        const newImgSrc = `img/logo/${skill.dataset.skill}.${fileType}`;

        // Hide the tooltip
        tooltip.style.visibility = 'hidden';

        // If imgElement exists and its src is not the current URL, then remove the logo
        if (imgElement && imgElement.src !== window.location.href) {
            skill.removeChild(imgElement);
            // Specific case of ajax
            if (skill.dataset.skill === "AJAX") {
                const imgHover = skill.querySelector("img.logo-hover")
                skill.removeChild(imgHover)
            }

            if (!logoHover) {
                // If not, create a new text element and add the necessary class
                const newLogoHover = document.createElement("span");
                newLogoHover.classList.add("logo-hover-display");
                newLogoHover.textContent = skill.dataset.text;
                skill.appendChild(newLogoHover);

                setTimeout(() => {
                    newLogoHover.style.left = "0"; // Start the reveal transition
                    tooltip.style.visibility = 'visible'; // Show the tooltip
                }, 50); // Let the DOM update before starting transition
            }
        } else if (logoHover) {
            // If the text is currently displayed, remove it
            logoHover.style.left = "100%"; // Start the reveal transition back

            setTimeout(() => {
                // Remove the logoHover after transition
                skill.removeChild(logoHover);

                // Create and add a new image element with the appropriate attributes
                const newImgElement = document.createElement("img");
                // If the imgElement's src is empty, there's no need to test, skip this iteration
                newImgElement.src = newImgSrc;
                newImgElement.alt = skill.dataset.text;
                newImgElement.width = 32;
                newImgElement.height = 32;
                if (skill.dataset.skill === "AJAX") {
                    newImgElement.classList.add("logo-default");
                }
                skill.appendChild(newImgElement);

                // If the skill is AJAX, create and add a new image element with the logo-hover class
                if (skill.dataset.skill === "AJAX") {
                    const newImgHoverElement = document.createElement("img");
                    newImgHoverElement.src = "img/logo/Ajax_Amsterdam.svg";
                    newImgHoverElement.alt = "AJAX";
                    newImgHoverElement.width = 32;
                    newImgHoverElement.height = 32;
                    newImgHoverElement.classList.add("logo-hover");
                    skill.appendChild(newImgHoverElement);
                }

                tooltip.style.visibility = 'visible'; // Show the tooltip
            }, 0); // Wait for transition to complete before removing logoHover
        }
    });
});

// The function toggleExperience() is defined. It takes a button as an argument.
// It toggles the visibility of the experience details related to the button clicked.
function toggleExperience(button) {
    const experienceDetails = button.nextElementSibling;
    experienceDetails.style.display = experienceDetails.style.display === 'block' ? 'none' : 'block';

    const details = button.nextElementSibling;
    const experienceItem = button.parentElement;

    details.classList.toggle("active");

    if (details.classList.contains("active")) {
        displaySkills(experienceItem.dataset.skills);
        highlightSkills(experienceItem.dataset.skills);
    } else {
        clearHighlightedSkills();
    }
}

// Similar to toggleExperience, toggleEducation() toggles the visibility of education details.
function toggleEducation(button) {
    const educationDetails = button.nextElementSibling;
    educationDetails.style.display = educationDetails.style.display === 'block' ? 'none' : 'block';
}

// highlightSkills() is defined to add the CSS class "highlighted-skill" to specific skills.
function highlightSkills(skills) {
    clearHighlightedSkills();
    const skillList = skills.split(",");

    skillList.forEach((skill) => {
        const skillElement = document.querySelector(`.skill[data-skill="${skill.trim()}"]`);
        if (skillElement) {
            skillElement.classList.add("highlighted-skill");
        }
    });
}

// clearHighlightedSkills() removes the "highlighted-skill" class from all elements that have it.
function clearHighlightedSkills() {
    const highlightedSkills = document.querySelectorAll(".highlighted-skill");

    highlightedSkills.forEach((skill) => {
        skill.classList.remove("highlighted-skill");
    });
}

// filterSkills() changes the visibility of skill elements based on a provided category.
function filterSkills(category) {
    const skillsDisplay = document.querySelector(".skills-list");
    const skills = skillsDisplay.querySelectorAll(".skill");
    const filterButtons = document.querySelectorAll(".filter-button");

    if (activeCategory === category) {
        skills.forEach((skill) => {
            skill.style.display = "inline-flex";
        });
        filterButtons.forEach((button) => {
            button.classList.remove("active");
        });
        activeCategory = null;
    } else {
        skills.forEach((skill) => {
            skill.style.display = skill.dataset.category === category ? "inline-flex" : "none";
        });
        filterButtons.forEach((button) => {
            button.classList.remove("active");
            if (button.getAttribute("data-category") === category) {
                button.classList.add("active");
            }
        });
        activeCategory = category;
        activeMainCategory = null; // Add this line
    }
}

// filterMainSkills() changes the visibility of skill elements based on whether they have the "main-skill" class.
function filterMainSkills() {
    const skillsDisplay = document.querySelector(".skills-list");
    const skills = skillsDisplay.querySelectorAll(".skill");
    const mainSkillsButton = document.querySelector('.main-skills-filter .filter-button');
    const filterButtons = document.querySelectorAll(".filter-button");

    if (activeMainCategory === "main") {
        skills.forEach((skill) => {
            skill.style.display = "inline-flex";
        });
        mainSkillsButton.classList.remove("active");
        activeMainCategory = null;
    } else {
        skills.forEach((skill) => {
            skill.style.display = skill.classList.contains("main-skill") ? "flex" : "none";
        });
        mainSkillsButton.classList.add("active");
        activeMainCategory = "main";
        activeCategory = null; // Keep this line
        filterButtons.forEach((button) => { // Modify this block
            if (button.getAttribute("data-category")) {
                button.classList.remove("active");
            }
        });
    }
}

// lerpColor() takes two colors and a level (0 to 1) and returns a color that is a blend of the two input colors.
function lerpColor(color1, color2, level) {
    const r1 = parseInt(color1.slice(1, 3), 16);
    const g1 = parseInt(color1.slice(3, 5), 16);
    const b1 = parseInt(color1.slice(5, 7), 16);

    const r2 = parseInt(color2.slice(1, 3), 16);
    const g2 = parseInt(color2.slice(3, 5), 16);
    const b2 = parseInt(color2.slice(5, 7), 16);

    const r = Math.round(r1 + (r2 - r1) * level).toString(16).padStart(2, '0');
    const g = Math.round(g1 + (g2 - g1) * level).toString(16).padStart(2, '0');
    const b = Math.round(b1 + (b2 - b1) * level).toString(16).padStart(2, '0');

    return `#${r}${g}${b}`;
}

// Once the document (HTML page) has been fully loaded,
// this code changes the background color of each "skill" element based on the skill's level and category.
document.addEventListener("DOMContentLoaded", function () {
    let skillElements = document.querySelectorAll(".skill");

    skillElements.forEach(function (skillElement) {
        let level = skillElement.getAttribute("data-level");

        let category = skillElement.getAttribute("data-category");
        let colorStart, colorEnd;
        if (category === "frontend") {
            colorStart = "#FFD700";
            colorEnd = "#FF8C00";
        } else if (category === "backend") {
            colorStart = "#ADD8E6";
            colorEnd = "#0000CD";
        } else if (category === "tools") {
            colorStart = "#90EE90";
            colorEnd = "#228B22";
        } else if (category === "design") {
            colorStart = "#FFB6C1";
            colorEnd = "#C71585";
        }
        if (colorStart && colorEnd) {
            let color = lerpColor(colorStart, colorEnd, level / 100);
            skillElement.style.backgroundColor = color;
        }
    });
});

// displaySkills() creates and adds a new div element for each skill.
function displaySkills(skills) {
    const skillList = skills.split(",");

    skillList.forEach((skill) => {
        const skillItem = document.createElement("div");
        console.log('skillItem: ', skillItem)
        skillItem.textContent = skill.trim();
    });
}
// Get references to various parts of the header and the about section
const headerTitle = document.getElementById('header-title');
const headerName = document.getElementById('header-name');
const headerContainer = document.getElementById('header-container');
const header = document.querySelector('header');
const aboutSection = document.querySelector('#about');
const aboutMeAnchor = '#about';

// Define a function to set the header state, compact or not
// When compact, the title is hidden, and the header has a smaller size
// When not compact, the title is shown, and the header has a larger size
function setHeaderState(compact) {
    if (compact) {
        headerTitle.style.display = 'none';
        headerName.style.fontSize = '1rem';
        headerName.style.padding = '';
        headerContainer.style.paddingTop = '0';
        headerContainer.style.paddingBottom = '0';
        header.style.padding = '0.5rem 1rem';
    } else {
        headerTitle.style.display = 'flex';
        headerName.style.fontSize = '1.8rem';
        headerName.style.padding = '1rem';
        headerContainer.style.paddingTop = '1rem';
        headerContainer.style.paddingBottom = '1rem';
        header.style.padding = '';
    }
}

// Define a flag to determine if a link was clicked
let linkClicked = false;

// Define the callback for the IntersectionObserver
// If the about section is intersecting the viewport (visible), and a link was not clicked,
// set the header to non-compact; if it's not visible, set it to compact
const intersectionCallback = (entries) => {
    entries.forEach((entry) => {
        if (!linkClicked) {
            if (entry.isIntersecting) {
                setHeaderState(false);
            } else {
                setHeaderState(true);
            }
        }
    });
};

// Initialize the IntersectionObserver with the defined callback and options
// The rootMargin option is set so that the callback is triggered 40px before the about section intersects the viewport
const observer = new IntersectionObserver(intersectionCallback, {
    rootMargin: '-40px 0px 0px 0px',
});

// Start observing the about section with the observer
observer.observe(aboutSection);

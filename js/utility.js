// Select all navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        linkClicked = true;
        const anchor = link.getAttribute('href');

        if (anchor === aboutMeAnchor) {
            // Scroll with an additional offset equal to the header height in full size minus the padding plus 30px
            scrollToAnchorWithOffset(anchor, 110 + headerContainer.clientHeight);
            // Set header state to full mode
            setHeaderState(false);
        } else {
            scrollToAnchorWithOffset(anchor, 110);
            // Set header state to compact mode
            setHeaderState(true);
        }

        // Reset linkClicked flag after the scroll animation is finished
        setTimeout(() => {
            let linkClicked = false;
        }, 1000);
    });
});

function scrollToAnchorWithOffset(anchor, offset) {
    const element = document.querySelector(anchor);
    let heightToAdjust = window.innerWidth < 768 ? 50 : 30;
    let y = element.getBoundingClientRect().top + window.scrollY - offset + heightToAdjust;
    if (anchor === aboutMeAnchor) {
        y = element.getBoundingClientRect().top + window.scrollY - offset - 100;
    }

    // Scroll smoothly to the calculated position
    window.scrollTo({ top: y, behavior: 'smooth' });
}
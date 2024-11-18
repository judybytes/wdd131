document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    // Toggle menu visibility
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('hidden');
        const isHidden = navMenu.classList.contains('hidden');
        navMenu.setAttribute('aria-hidden', isHidden);
        hamburger.textContent = isHidden ? '☰' : '✖';
    });

    // Update footer details
    const yearElement = document.getElementById('year');
    yearElement.textContent = new Date().getFullYear();

    const lastModifiedElement = document.getElementById('last-modified');
    lastModifiedElement.textContent = document.lastModified;
});



document.addEventListener('DOMContentLoaded', () => {  
    const hamburger = document.getElementById('hamburger');  
    const navMenu = document.getElementById('nav-menu');  

    // Toggle menu visibility  
    hamburger.addEventListener('click', () => {  
        navMenu.classList.toggle('hidden');  
        hamburger.textContent = navMenu.classList.contains('hidden') ? '☰' : '✖';  
    });  

    // Update footer details  
    const yearElement = document.getElementById('year');  
    yearElement.textContent = new Date().getFullYear();  

    const lastModifiedElement = document.getElementById('last-modified');  
    const lastModifiedDate = new Date(document.lastModified);  
    lastModifiedElement.textContent = `Last modified: ${lastModifiedDate.toLocaleString()}`;  
});


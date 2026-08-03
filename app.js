// app.js

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Smooth Scrolling for Navigation ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Dynamic Navigation Style (Optional Enhancement) ---
    // If you want the navigation bar to change on scroll:
    const nav = document.getElementById('main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.style.backgroundColor = 'var(--color-green-dark)'; // Solid dark color
        } else {
            nav.style.backgroundColor = 'rgba(30, 58, 47, 0.95)'; // Transparent/lighter
        }
    });

    // --- Volunteer Form Submission (Placeholder) ---
    const form = document.getElementById('volunteer-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // CRITICAL STEP: 
        // 1. Gather form data (e.g., using new FormData(form))
        // 2. Send data to the server-side endpoint (PHP, Node.js, etc.) 
        //    or an integrated service like a Google Sheet/Mailchimp.
        // 3. Display success/error message to the user.
        
        console.log("Form submission attempted. Needs backend handler.");
        alert("Application submitted! (Requires backend integration)");
    });
});
// Wait for the document to load
document.addEventListener('DOMContentLoaded', () => {
    
    const quoteBtn = document.getElementById('quoteBtn');

    // Simple interaction for the Quote Button
    quoteBtn.addEventListener('click', () => {
        alert("Thank you for choosing Grass Masters Turf LLC! Redirecting you to our contact form...");
        // In a real site, you could redirect: 
        // window.location.href = '#contact';
    });

    // Optional: Change header background on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.background = '#eeeeee';
        } else {
            header.style.background = '#ffffff';
        }
    });

});
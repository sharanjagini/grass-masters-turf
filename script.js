document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Slideshow Logic
    let slideIndex = 0;
    const slides = document.getElementsByClassName("slide");

    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        
        slides[slideIndex-1].style.display = "block";  
        setTimeout(showSlides, 5000); // Change every 5 seconds
    }

    if (slides.length > 0) {
        showSlides();
    }

    // 2. Quote Button Scroll
    const quoteBtn = document.getElementById('quoteBtn');
    if (quoteBtn) {
        quoteBtn.addEventListener('click', () => {
            alert("Thank you! Calling Anthony or Roger is the fastest way to get your quote.");
            window.location.href = 'tel:8434216275';
        });
    }
});

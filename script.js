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


})
    let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

// Optional: Auto-play every 5 seconds
setInterval(() => {
    plusSlides(1);
}, 5000);

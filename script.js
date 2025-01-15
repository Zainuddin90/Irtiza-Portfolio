// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight && rect.bottom >= 0
    );
}

// Typed.js Effect for .typedText
var typingEffect = new Typed(".typedText", {
    strings: ["Video Animator", "Visual Storyteller", "2D/3D Animator"],
    loop: true,
    typeSpeed: 100, 
    backSpeed: 80,
    backDelay: 2000
});

// ScrollReveal for .featured-name
sr.reveal('.featured-name', { delay: 100 });

// Add 'active' class to elements in viewport
function handleScroll() {
    const animElements = document.querySelectorAll('.animate');
    animElements.forEach((el) => {
        if (isInViewport(el)) {
            el.classList.add('active'); // Add animation class
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check for elements already in viewport
handleScroll();

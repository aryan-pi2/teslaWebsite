window.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");


    window.addEventListener("scroll", function() {
        const scrollY = window.scrollY;
        const childElement = document.querySelectorAll(".productBoardDescription div");
    });

    const addParallax = (element) => {
        // Get the distance from the top of the element to the top of the page
        const top = element.getBoundingClientRect().top;

        // Add an event listener for scroll
        window.addEventListener("scroll", function() {
            // Get the scroll position of the page
            const scrollTop = window.scrollY;

            // Update the transform of the element
            element.style.transform = `translateX(${scrollTop * 0.5}px)`;
        });
    }
    let count = 0;
    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }

        });
    };

    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.5
    });

    const elementsToAnimate = document.querySelectorAll('.fade-in');

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});
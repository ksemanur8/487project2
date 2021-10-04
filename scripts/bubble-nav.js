/* Intersection observer for changing bubble nav color! */
let options = {
    root: null,
    threshold: 0.8,
}

function intersectionHandler(entries, observer) {
    let bubbles = document.querySelectorAll('div.bubble');

    entries.forEach(entry => {
        if(entry.isIntersecting) {
           if(entry.target.classList.contains('light')) {
                for (let i = 0; i < bubbles.length; i++) {
                    bubbles[i].classList.remove('light-bubble');
                    bubbles[i].classList.add('dark-bubble');
                }
           } else if (entry.target.classList.contains('dark')) {
                for (let i = 0; i < bubbles.length; i++) {
                    bubbles[i].classList.remove('dark-bubble');
                    bubbles[i].classList.add('light-bubble');
                }
           }
        }
    });
}

/* Create observer */
let observer = new IntersectionObserver(intersectionHandler, options);

/* Get reference to all of our slides */
let slides = document.querySelectorAll('div.slide');

/* Loop through all slides and tell the observer to observe each one */
slides.forEach((slide) => {
    observer.observe(slide);
});

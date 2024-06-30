document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevents the default behavior of the link click (which is to navigate)
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Scrolls to the target element smoothly
        });
    });
});

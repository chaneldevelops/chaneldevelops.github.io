const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})


// Scroll up button

// This shows/hides the button based on the scrolling position
window.addEventListener('scroll', function() {
    var scrollupBtn = document.getElementById('scrollup-btn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // If the scroll position is greater than 20 pixels from the top, the button will show
        scrollupBtn.style.display = 'block';
    } else {
        // If not the button will be hidden
        scrollupBtn.style.display = 'none';
    }
});

// This allows it to scroll to the top when button is clicked
document.getElementById('scrollup-btn').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

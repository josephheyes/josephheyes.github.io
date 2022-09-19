const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenContent = document.querySelectorAll('.hidden');
hiddenContent.forEach((el) => observer.observe(el));

var navbar = document.querySelector('.navbar');
var sticky = navbar.offsetTop;

window.onscroll = function() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky') 
    } else {
        navbar.classList.remove('sticky');
    }
};




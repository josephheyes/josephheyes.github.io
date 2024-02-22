const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
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

const arrows = document.querySelectorAll('.arrow');
const slide = document.querySelector('.first');

arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
            if (arrow.className === 'arrow left') {
                const percentage = slide.style.marginLeft;
                if (percentage != "0%" && percentage != "") {
                    const num = percentage.replace('%', '');
                    var newVal = parseInt(num, 10) + 20;
                    newVal = newVal + '%';
                    slide.style.marginLeft = newVal;

                }
            } else {
                const percentage = slide.style.marginLeft;
                if (percentage === "") {
                    slide.style.marginLeft = "-20%";
                } else if (percentage != "-40%") {
                    const num = percentage.replace('%', '');
                    console.log("removed percentage: " + num);

                    var newVal = parseInt(num, 10) - 20;
                    newVal = newVal + '%';
                    slide.style.marginLeft = newVal;
                }
            }
        })
    });



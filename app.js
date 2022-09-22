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

const arrows = document.querySelectorAll('.arrow');
const slide = document.querySelector('.first');
const cssObj = window.getComputedStyle(slide, null);

arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
        console.log("here");
            if (arrow.className === 'arrow left') {
                const percentage = cssObj.getPropertyValue('margin-left');
                console.log(percentage);
                if (percentage != "0px" && percentage != "") {
                    const num = percentage.replace('%', '');

                    var newVal = parseInt(num, 10) + 20;
                    newVal = newVal + '%';
                    slide.style.marginLeft = newVal;
                    console.log(slide.style.marginLeft);
                }
            } else {
                const percentage = cssObj.getPropertyValue('margin-left');
                console.log("got value: " + percentage);
                if (percentage === "0px") {
                    slide.style.marginLeft = "-20%";
                } else if (percentage != "-40%") {
                    const num = percentage.replace('%', '');
                    console.log("removed percentage: " + num);

                    var newVal = parseInt(num, 10) - 20;
                    newVal = newVal + '%';
                    slide.style.marginLeft = newVal;
                    console.log(slide.style.marginLeft);
                }
            }
        })
    });



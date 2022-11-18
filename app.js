let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {

        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400)
        })

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {

                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50);
            })
        }, 2000);

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2350)

    })
});

var type = new Typed(".job", {
    strings: ["Web Designer", "Front-End Designer", "Back-End Developer", "Full-Stack Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById('sidemenu');

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbySzMT_SBUeQmKcuNbaihESwMO09VHo3j4PVaJdpDACHK5o__IYmA7bUpvmPu-Li7XT/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
var myText = "Message sent successfully"


form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = alert(myText)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})

// * USED TO FIND SVG PATH LENGTH
// const logo = document.querySelectorAll(".name-logo path");
// for (let i = 0; i < logo.length; i++) {
//   console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
// }

// * SCROLL INTO VIEW - ANCHOR TAGS
function redirect(name) {
    var element = document.querySelector(name);
    element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center"
    });
}

// * NAVIGATION BAR - STICKY
window.onscroll = function () {
    stickyAdd();
};

const navbar = document.querySelector(".nav__container");
const content = document.querySelector(".about-page");
let sticky = navbar.offsetTop;

function stickyAdd() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
        content.style = "margin-top: 5rem;";
    } else {
        navbar.classList.remove("sticky");
        content.style = "margin-top: 0px;";
    }
}

//* NAVIGATION BAR - ACTIVE
let mainNavLinks = document.querySelectorAll(".page-link");
let mainSections = document.querySelectorAll("main section");

window.addEventListener("scroll", event => {
    let fromTop = window.scrollY - 50;

    mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop + 55 &&
            section.offsetTop + section.offsetHeight > fromTop + 55
        ) {
            link.classList.add("current");
        } else {
            link.classList.remove("current");
        }
    });
});

//* NAVIGATION BAR - HAMBURGER MENU
const levOne = document.querySelector(".lev-one");
const LevTwo = document.querySelector(".lev-two");
const levThree = document.querySelector(".lev-three");
const overlay = document.querySelector(".overlay");
const pageLinks = document.querySelectorAll(".page-link");

function toggleMenu() {
    levOne.classList.toggle("lev-one--close");
    LevTwo.classList.toggle("lev-two--close");
    levThree.classList.toggle("lev-three--close");
    overlay.classList.toggle("visible");
    if (overlay.classList.contains("visible")) {
        pageLinks.forEach(link => {
            link.addEventListener("click", () => {
                levOne.classList.remove("lev-one--close");
                LevTwo.classList.remove("lev-two--close");
                levThree.classList.remove("lev-three--close");
                overlay.classList.remove("visible");
            });
        });
    }
}

window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
        overlay.classList.remove("visible");
    }
});

//* SUBMIT BUTTON
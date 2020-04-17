import {
    scroll,
    animationOut
} from "./main"
let triggerMenuMobile = (() => {
    var navigation = document.getElementsByClassName("nav_mobile")[0].querySelector("div");
    var burger = document.getElementById("burger");
    burger.addEventListener("click", () => {
        burger.classList.toggle("change");
        var wrapper = document.getElementsByClassName("header_wrapper_overlay")[0];
        wrapper.classList.toggle("overlay_on");
        navigation.classList.toggle("position_static");
    })
})();

let displayAnimationBody = {
    init() {
        displayAnimationBody.coverPic();
    },
    coverPic() {
        let coverImage = [...document.getElementsByClassName("img_container")];
        let pic = "";
        let container = "";
        coverImage.forEach(elem => {
            if (scroll(elem, "opacity_container", 3.5)) {
                pic = elem.querySelector("img");
                displayAnimationBody.pics(pic);
                container = elem.parentElement;
                displayAnimationBody.paragraph(container);
                displayAnimationBody.title(container);
            }
        })
    },
    pics(pic) {
        animationOut(pic, "opacity_on", 500)
    },
    paragraph(container) {
        if (container) {
            let mainContainer = container.getElementsByClassName("presentation");
            let containerParagraph = mainContainer[0].querySelector("div");
            let paragraphs = [...containerParagraph.getElementsByTagName("p")];
            paragraphs.forEach(text => {
                text.classList.add("paragraph_effect");
            })
        }

    },
    title(container) {
        if (container) {
            let mainContainer = container.getElementsByClassName("presentation");
            let containerParagraph = mainContainer[0].querySelector("div");
            let title = containerParagraph.querySelector("h1");
            title.classList.add("title_effect")

        }
    }

};


window.addEventListener('scroll', () => {
    displayAnimationBody.init();
});
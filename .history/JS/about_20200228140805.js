import {
    scroll,
    animationOut,
    triggerMenuMobile
  } from "./Functions.mjs"
  triggerMenuMobile

  console.log(scroll)
let displayAnimationBody = {
    init() {
        displayAnimationBody.coverPic();
    },
    coverPic() {
        let coverImage = [...document.getElementsByClassName("img_container")];
        let pic = "";
        let container = "";
        console.log("salam")
        coverImage.forEach(elem => {
            console.log("salam")
            if (scroll(elem, "opacity_container", 3.5)) {
                console.log("1")
                pic = elem.querySelector("img");
                displayAnimationBody.pics(pic);
                container = elem.parentElement;
                displayAnimationBody.paragraph(container);
                displayAnimationBody.title(container);
            }
        })
    },
    pics(pic) {
      console.log("one")
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
import {
    scroll,
    animationOut,
    triggerMenuMobile
  } from "./Functions.mjs"
  
  triggerMenuMobile

  var sectionAnimationBody = {
  init() {
        sectionAnimationBody.displayPics();
        sectionAnimationBody.displayFeatures();
        sectionAnimationBody.displayTitle();
    },
   displayPics() {
        var containerPicture = document.getElementsByClassName("pic_website");
        console.log(containerPicture)
        var hoverEffect = "";
        var pic = "";
        containerPicture.forEach(container => {
            hoverEffect = container.querySelector("div");
            pic = hoverEffect.querySelector("div");
            scroll(hoverEffect, "opacity_on", 1);
            scroll(pic, "presentation_pics", 1);
        });
    },
     displayFeatures() {
        var paragraph = document.getElementsByClassName("sub_description");

        paragraph.forEach( (para) => {
            return scroll(para, "opacity_effect_cart", 1);
        });
    },
  displayTitle() {
        var titles = document.getElementsByClassName("description");

        var title = "";
        titles.forEach( (element) => {
            element.querySelector("h2");
            title = element.querySelector("h2");
            scroll(title, "display_f2", 1);
        });
    }
};
document.addEventListener('DOMContentLoaded', function () {
    var getFirstDiv = document.getElementsByClassName("pic_website")[0].querySelector("div");
    var pic = getFirstDiv.querySelector("div");
    getFirstDiv.classList.add("opacity_on");
    animationOut(pic, "presentation_pics", 1);
});
window.addEventListener('scroll', function () {
    sectionAnimationBody.init();
});

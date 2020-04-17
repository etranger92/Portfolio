import {
    scroll,
    animationOut,
    triggerMenuMobile
  } from "./Functions.mjs"
  
  triggerMenuMobile

  var sectionAnimationBody = {
    init: function init() {
        sectionAnimationBody.displayPics();
        sectionAnimationBody.displayFeatures();
        sectionAnimationBody.displayTitle();
    },
    displayPics: function displayPics() {
        var containerPicture = document.getElementsByClassName("pic_website");

        var hoverEffect = [];
        var pic = "";
        containerPicture.forEach(function (container) {
            hoverEffect = container.querySelector("div");
            pic = hoverEffect.querySelector("div");
            scroll(hoverEffect, "opacity_on", 1);
            scroll(pic, "presentation_pics", 1);
        });
    },
    displayFeatures: function displayFeatures() {
        var paragraph = document.getElementsByClassName("sub_description");

        paragraph.forEach(function (para) {
            return scroll(para, "opacity_effect_cart", 1);
        });
    },
    displayTitle: function displayTitle() {
        var titles = document.getElementsByClassName("description");

        var title = "";
        titles.forEach(function (element) {
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

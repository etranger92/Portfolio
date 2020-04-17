"use strict";

function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
        }
        return arr2;
    }
}

function scroll(element, className, indice) {
    var screenPosition = window.innerHeight / indice;

    if (element != undefined) {
        var positionSection = element.getBoundingClientRect().top;

        if (positionSection < screenPosition) {
            element.classList.add(className);
        }
    }
}

function animationOut(element, Class, Time) {
    return setTimeout(function () {
        element.classList.add(Class);
    }, Time);
}

var triggerMenuMobile = function () {
    var navigation = document.getElementsByClassName("nav_mobile")[0].querySelector("div");
    var burger = document.getElementById("burger");
    burger.addEventListener("click", function () {
        burger.classList.toggle("change");
        var wrapper = document.getElementsByClassName("header_wrapper_overlay")[0];
        wrapper.classList.toggle("overlay_on");
        navigation.classList.toggle("position_static");
    });
}();

var sectionAnimationBody = {
    init: function init() {
        sectionAnimationBody.displayPics();
        sectionAnimationBody.displayFeatures();
        sectionAnimationBody.displayTitle();
    },
    displayPics: function displayPics() {
        var containerPicture = _toConsumableArray(document.getElementsByClassName("pic_website"));

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
        var paragraph = _toConsumableArray(document.getElementsByClassName("sub_description"));

        paragraph.forEach(function (para) {
            return scroll(para, "opacity_effect_cart", 1);
        });
    },
    displayTitle: function displayTitle() {
        var titles = _toConsumableArray(document.getElementsByClassName("description"));

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
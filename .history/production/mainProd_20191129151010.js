"use strict";

function _toConsumableArray(e) {
    return _arrayWithoutHoles(e) || _iterableToArray(e) || _nonIterableSpread()
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance")
}

function _iterableToArray(e) {
    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
}

function _arrayWithoutHoles(e) {
    if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
    }
}

function scroll(e, t, n) {
    var o = window.innerHeight / n;
    null != e && (e.getBoundingClientRect().top < o && e.classList.add(t))
}

function animationOut(e, t, n) {
    return setTimeout(function () {
        e.classList.add(t)
    }, n)
}

function throwErrorMessage(e, t) {
    t.innerText = e, t.style.display = "block", t.classList.add(".border_error")
}

function deleteErrorMessageOnFocus() {
    var e = this.nextElementSibling;
    e.innerText && (e.style.display = "none", this.classList.contains("border_error") ? this.classList.remove("border_error") : this.style.border = "")
}
var REGEX = {
        defaultFormat: /^[a-zA-Z0-9.-\/@ ]+$/,
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi
    },
    ERROR_MESSAGE = {
        defaultFormat: "Oups, something was wrong. Try to use only characters such: letters and numbers",
        email: "The email provided does not match the standart format"
    },
    LOCATION_FIELDS = {
        firstName: document.getElementById("name"),
        lastName: document.getElementById("last-name"),
        email: document.getElementById("email"),
        about: document.getElementById("subject")
    },
    checkEntry = {
        formatEntry: function () {
            var e = event.target,
                t = e.value,
                n = REGEX.defaultFormat.test(t);
            t && !n && (e.classList.add("border_error"), throwErrorMessage(ERROR_MESSAGE.defaultFormat, e.nextElementSibling))
        },
        email: function () {
            var e = event.target,
                t = e.value,
                n = REGEX.email.test(t);
            t && !n && (e.classList.add("border_error"), throwErrorMessage(ERROR_MESSAGE.email, e.nextElementSibling))
        }
    },
    eventFields = (LOCATION_FIELDS.email.addEventListener("blur", function () {
        return checkEntry.email(event)
    }), LOCATION_FIELDS.email.addEventListener("focus", deleteErrorMessageOnFocus), LOCATION_FIELDS.firstName.addEventListener("blur", function () {
        return checkEntry.formatEntry(event)
    }), LOCATION_FIELDS.firstName.addEventListener("focus", deleteErrorMessageOnFocus), LOCATION_FIELDS.lastName.addEventListener("blur", function () {
        return checkEntry.formatEntry(event)
    }), LOCATION_FIELDS.lastName.addEventListener("focus", deleteErrorMessageOnFocus), LOCATION_FIELDS.about.addEventListener("blur", function () {
        return checkEntry.formatEntry(event)
    }), void LOCATION_FIELDS.about.addEventListener("focus", deleteErrorMessageOnFocus)),
    triggerMenuMobile = function () {
        var e = document.getElementsByClassName("nav_mobile")[0].querySelector("div"),
            t = document.getElementById("burger");
        t.addEventListener("click", function () {
            t.classList.toggle("change"), document.getElementsByClassName("header_wrapper_overlay")[0].classList.toggle("overlay_on"), e.classList.toggle("position_static")
        })
    }(),
    coverAnimation = {
        init: function () {
            coverAnimation.border(), coverAnimation.liftCover()
        },
        border: function () {
            document.getElementById("load-page").classList.add("border_effect")
        },
        liftCover: function () {
            var e = document.getElementById("cover");
            setTimeout(function () {
                e.classList.add("cover_lift")
            }, 4e3)
        }
    },
    headerAnimations = {
        init: function () {
            headerAnimations.displayHeaderContainer(), headerAnimations.displayParagraph(), headerAnimations.noticeWebsiteConstruction(), headerAnimations.displayDirection(), headerAnimations.typingWelcomePortfolio(), headerAnimations.displayMobileNav()
        },
        typingWelcomePortfolio: function () {
            var e = document.getElementById("load-page").querySelector("span");
            var t = 0,
                n = 70,
                o = "Welcome to my portfolio.";
            ! function r() {
                t < o.length && (e.innerHTML += o.charAt(t), e.style.display = "inline-block", t++, setTimeout(r, n))
            }()
        },
        displayHeaderContainer: function () {
            animationOut(document.getElementsByClassName("header")[0], "effect_header", 5225)
        },
        displayMobileNav: function () {
            animationOut(document.getElementsByClassName("nav_mobile")[0], "opacity_effect", 5500)
        },
        displayParagraph: function () {
            animationOut(document.getElementsByClassName("paragraph_presentation")[0], "opacity_effect", 6e3)
        },
        noticeWebsiteConstruction: function () {
            animationOut(document.getElementsByClassName("progression_website_notice")[0], "blink_construction", 6200)
        },
        displayDirection: function () {
            animationOut(document.getElementsByClassName("direction")[0], "sign_direction", 6800)
        }
    },
    sectionProjectsAnimation = {
        indicePics: 1,
        init: function () {
            sectionProjectsAnimation.maskAndHands(), sectionProjectsAnimation.presentationDeveloperJunior(), sectionProjectsAnimation.titleSomePics(), sectionProjectsAnimation.picsWebsite(), sectionProjectsAnimation.paragraphWebSite(), sectionProjectsAnimation.mainDiv()
        },
        mainDiv: function () {
            scroll(document.getElementsByClassName("main_div")[0], "opacity_on_two", 0)
        },
        maskAndHands: function () {
            _toConsumableArray(document.getElementsByClassName("anonyme_pics")).forEach(function (e) {
                return scroll(e, "mask_effect", 1.3)
            })
        },
        presentationDeveloperJunior: function () {
            scroll(document.getElementsByClassName("home_about_text")[0], "home_dev_junior_pre", 1.3)
        },
        titleSomePics: function () {
            var e = document.getElementsByClassName("titles");
            scroll(e[0], "home_title_effect", 1.6)
        },
        picsWebsite: function () {
            _toConsumableArray(document.getElementsByClassName("home_webpics_presentation")).forEach(function (e) {
                var t = e.querySelector("img");
                scroll(e, "home_pics_presentation", 1.3), scroll(t, "opacity_on", 1.3)
            })
        },
        paragraphWebSite: function () {
            _toConsumableArray(document.getElementsByClassName("home_webpics_paragraph")).forEach(function (e) {
                return scroll(e, "home_pics_paragraph", 1.3)
            })
        },
        sliderPicsWeb: function () {
            var e = 1,
                t = _toConsumableArray(document.getElementsByClassName("home_webpics_presentation")).map(function (e) {
                    return e.querySelector("img")
                });
            setInterval(function () {
                ++e > 3 && (e = 1);
                var n = "../Pictures/home_work_pic/ecommerce" + [e] + ".png",
                    o = "../Pictures/home_work_pic/resto" + [e] + ".png";
                t[0].setAttribute("src", n), t[1].setAttribute("src", o)
            }, 4e3)
        }
    };
document.addEventListener("DOMContentLoaded", function () {
    coverAnimation.init(), headerAnimations.init(), sectionProjectsAnimation.sliderPicsWeb()
}), window.addEventListener("scroll", function () {
    sectionProjectsAnimation.init()
});
import {
    scroll,
    animationOut,
    triggerMenuMobile
} from "./Functions.mjs";

//Burger
triggerMenuMobile;

const REGEX = {
    defaultFormat: /^[a-zA-Z0-9.-\/@ ]+$/,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi
};
let throwErrorMessage = (message, location) => {
    location.innerText = message;
    location.style.display = "block";
    location.classList.add(".border_error");
};
let removeErrorMessage = location => {
    let field = location;
    let locationErrorDisplayed = field.nextElementSibling;
    let isErrorDisplayed = locationErrorDisplayed.innerText;
    if (isErrorDisplayed) {
        locationErrorDisplayed.style.display = "none";
        if (field.classList.contains("border_error")) {
            field.classList.remove("border_error");
        } else {
            field.style.border = "";
        }
    }
};
const ERROR_MESSAGE = {
    defaultFormat: "Oups, something was wrong. Try to use only characters such: letters and numbers",
    email: "The email provided does not match the standart format"
};

const LOCATION_FIELDS = {
    firstName: document.getElementById("first-name"),
    lastName: document.getElementById("last-name"),
    email: document.getElementById("email"),
    about: document.getElementById("subject")
};

let checkEntry = {
    formatEntry() {
        let field = event.target;
        let entry = field.value;
        let doesItMatchRegex = REGEX.defaultFormat.test(entry);
        if (entry && !doesItMatchRegex) {
            field.classList.add("border_error");
            throwErrorMessage(ERROR_MESSAGE.defaultFormat, field.nextElementSibling);
        } else {
            removeErrorMessage(field);
        }
    },
    email() {
        let field = event.target;
        let entry = field.value;
        let doesItMatchRegex = REGEX.email.test(entry);
        if (entry && !doesItMatchRegex) {
            field.classList.add("border_error");
            throwErrorMessage(ERROR_MESSAGE.email, field.nextElementSibling);
        } else {
            removeErrorMessage(field);
        }
    }
};

let eventFields = (() => {
    LOCATION_FIELDS.email.addEventListener("blur", event => checkEntry.email(event));

    LOCATION_FIELDS.firstName.addEventListener("blur", event =>
        checkEntry.formatEntry(event)
    );

    LOCATION_FIELDS.lastName.addEventListener("blur", event =>
        checkEntry.formatEntry(event)
    );

    LOCATION_FIELDS.about.addEventListener("blur", event =>
        checkEntry.formatEntry(event)
    );
})();

let headerAnimations = {
    init() {
        headerAnimations.displayHeaderContainer();
    },
    displayHeaderContainer: function () {
        animationOut(
            document.getElementsByClassName("content_header")[0],
            "effect_header",
            900
        );
    }
};
let sectionProjectsAnimation = {
    indicePics: 1,
    init() {
        sectionProjectsAnimation.formEffect();
        sectionProjectsAnimation.displayTitleForm();
        sectionProjectsAnimation.aboutMeEffect();
    },
    displayTitleForm() {
        let titleGetInTouch = document
            .getElementsByClassName("container_form")[0]
            .querySelector("h1");
        scroll(titleGetInTouch, "fadeRightEffect", 2);
    },
    formEffect() {
        let formGetInTouch = document
            .getElementsByClassName("contact_me")[0]
            .querySelector("form");
        scroll(formGetInTouch, "form_effect", 2);
    },
    aboutMeEffect() {
        let diveOne = document.getElementsByClassName("div_one")[0];
        let divTwo = document.getElementsByClassName("div_two")[0];
        scroll(diveOne, "fadeLeftEffect", 2);
        scroll(divTwo, "fadeRightEffect", 2);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // coverAnimation.init(),
    headerAnimations.init();
});
window.addEventListener("scroll", () => {
    sectionProjectsAnimation.init();
});
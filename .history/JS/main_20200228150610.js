import {
    scroll,
    animationOut,
    triggerMenuMobile
  } from "./Functions.mjs"
  
  triggerMenuMobile

let throwErrorMessage = (message, location) => {
    location.innerText = message;
    location.style.display = "block";
    location.classList.add(".border_error");
}

let deleteErrorMessageOnFocus = () => {
    var field = this;
    var displayError = this.nextElementSibling;
    var errorMessage = displayError.innerText;

    if (errorMessage) {
        displayError.style.display = "none";

        if (field.classList.contains("border_error")) {
            field.classList.remove("border_error");
        } else {
            field.style.border = "";
        }
    }
}
const REGEX = {
    defaultFormat: /^[a-zA-Z0-9.-\/@ ]+$/,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi
};
const ERROR_MESSAGE = {
    defaultFormat: "Oups, something was wrong. Try to use only characters such: letters and numbers",
    email: "The email provided does not match the standart format"
};
const LOCATION_FIELDS = {
    firstName: document.getElementById("name"),
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
        }
    },
    email() {
        let field = event.target;
        let entry = field.value;
        let doesItMatchRegex = REGEX.email.test(entry);
        if (entry && !doesItMatchRegex) {
            field.classList.add("border_error");
            throwErrorMessage(ERROR_MESSAGE.email, field.nextElementSibling);
        }
    }
};

let eventFields = (() => {
    LOCATION_FIELDS.email.addEventListener("blur", () => checkEntry.email(event));
    LOCATION_FIELDS.email.addEventListener("focus", deleteErrorMessageOnFocus);

    LOCATION_FIELDS.firstName.addEventListener("blur", () =>
        checkEntry.formatEntry(event)
    );
    LOCATION_FIELDS.firstName.addEventListener(
        "focus",
        deleteErrorMessageOnFocus
    );

    LOCATION_FIELDS.lastName.addEventListener("blur", () =>
        checkEntry.formatEntry(event)
    );
    LOCATION_FIELDS.lastName.addEventListener("focus", deleteErrorMessageOnFocus);

    LOCATION_FIELDS.about.addEventListener("blur", () =>
        checkEntry.formatEntry(event)
    );
    LOCATION_FIELDS.about.addEventListener("focus", deleteErrorMessageOnFocus);
})();

let headerAnimations = {
    init() {
        headerAnimations.displayHeaderContainer()
      
    },

    displayHeaderContainer: function () {
        animationOut(
            document.getElementsByClassName("content_header")[0],
            "effect_header", 1000

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
        let titleGetInTouch = document.getElementsByClassName("container_form")[0].querySelector("h1");
        scroll(titleGetInTouch, "fadeRightEffect", 2)
    },
    formEffect() {
        let formGetInTouch = document.getElementsByClassName("contact_me")[0].querySelector("form");
        scroll(formGetInTouch, "form_effect", 2)
    },
    aboutMeEffect() {
        let diveOne = document.getElementsByClassName("div_one")[0];
        let divTwo = document.getElementsByClassName("div_two")[0];
        scroll(diveOne, "fadeLeftEffect", 2)
        scroll(divTwo, "fadeRightEffect", 2)

    }



};

document.addEventListener("DOMContentLoaded", () => {
    // coverAnimation.init(),
    headerAnimations.init()
});
window.addEventListener("scroll", () => {
    sectionProjectsAnimation.init();
});

/*let coverAnimation = {
    init() {
        coverAnimation.border();
        coverAnimation.liftCover();
    },
    border() {
        document.getElementById("load-page").classList.add("border_effect");
    },
    liftCover() {
        var e = document.getElementById("cover");
        setTimeout(() => {
            e.classList.add("cover_lift");
        }, 4000);
    }
};*/
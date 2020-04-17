function scroll(element, className, indice) {
    let screenPosition = window.innerHeight / indice;
    if (element != undefined) {
        let positionSection = element.getBoundingClientRect().top;

        if (positionSection < screenPosition) {
            element.classList.add(className);
        }
    }
}

function animationOut(element, Class, Time) {
    return setTimeout(() => {
        element.classList.add(Class);
    }, Time);
}

function throwErrorMessage(message, location) {
    location.innerText = message;
    location.style.display = "block";
    location.classList.add(".border_error");
}

function deleteErrorMessageOnFocus() {
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

let triggerMenuMobile = (() => {
    let e = document.getElementsByClassName("nav_mobile")[0].querySelector("div"),
        t = document.getElementById("burger");
    t.addEventListener("click", () => {
        t.classList.toggle("change"),
            document
            .getElementsByClassName("header_wrapper_overlay")[0]
            .classList.toggle("overlay_on"),
            e.classList.toggle("position_static");
    });
})();

//first Page that is lifted when the user first goes on the website.
let coverAnimation = {
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
};
let headerAnimations = {
    init() {
        headerAnimations.displayHeaderContainer(),
            //  headerAnimations.displayParagraph(),
            // headerAnimations.noticeWebsiteConstruction()
            // headerAnimations.displayDirection();
            headerAnimations.typingWelcomePortfolio();
        headerAnimations.displayIcon();
        headerAnimations.displayMobileNav();
    },
    typingWelcomePortfolio() {
        let typeText = document.getElementById("load-page").querySelector("span");
        let i = 0;
        let speed = 70;
        let txt = "Welcome to my portfolio.";
        typeWriter();

        function typeWriter() {
            if (i < txt.length) {
                typeText.innerHTML += txt.charAt(i);
                typeText.style.display = "inline-block";
                i++;

                setTimeout(typeWriter, speed);
            }
        }
    },
    displayHeaderContainer: function () {
        animationOut(
            document.getElementsByClassName("content_header")[0],
            "effect_header", 2000
            //5225
        );
    },
    displayMobileNav() {
        animationOut(
            document.getElementsByClassName("nav_mobile")[0],
            "opacity_effect",
            5500
        );
    },
    displayParagraph: function () {
        animationOut(
            document.getElementsByClassName("paragraph_presentation")[0],
            "opacity_effect",
            6e3
        );
    },
    displayIcon: function () {
        animationOut(
            document.getElementsByClassName("icone")[0],
            "opacity_effect",
            6e3
        );
    },
    noticeWebsiteConstruction: function () {
        animationOut(
            document.getElementsByClassName("progression_website_notice")[0],
            "blink_construction",
            6200
        );
    },
    displayDirection: function () {
        animationOut(
            document.getElementsByClassName("direction")[0],
            "sign_direction",
            6800
        );
    }
};
let sectionProjectsAnimation = {
    indicePics: 1,
    init() {

        sectionProjectsAnimation.presentationDeveloperJunior();
        sectionProjectsAnimation.titleSomePics();
        sectionProjectsAnimation.picsWebsite();
        sectionProjectsAnimation.paragraphWebSite();
        sectionProjectsAnimation.mainDiv();
        sectionProjectsAnimation.formEffect();
        sectionProjectsAnimation.displayTitleForm();

    },

    formEffect() {
        let formGetInTouch = document.getElementsByClassName("contact_me")[0].querySelector("form");
        scroll(formGetInTouch, "form_effect", 3)
    },
    displayTitleForm() {
        let titleGetInTouch = document.getElementsByClassName("container_form")[0].querySelector("h1");
        scroll(titleGetInTouch, "fadeRightEffect", 3.2)
    },

    mainDiv() {
        let getDiv = document.getElementsByClassName("main_div")[0];
        scroll(getDiv, "opacity_on_two", 0);
    },
    maskAndHands() {
        let maskHands = [...document.getElementsByClassName("anonyme_pics")];
        maskHands.forEach(item => scroll(item, "mask_effect", 1.3));
    },
    presentationDeveloperJunior() {
        let preDevJun = document.getElementsByClassName("home_about_text");
        scroll(preDevJun[0], "home_dev_junior_pre", 1.3);
    },
    titleSomePics() {
        let titleSomePics = document.getElementsByClassName("titles");
        scroll(titleSomePics[0], "home_title_effect", 1.6);
    },
    picsWebsite() {
        var picsWeb = [
            ...document.getElementsByClassName("home_webpics_presentation")
        ];
        picsWeb.forEach(element => {
            var pic = element.querySelector("img");
            scroll(element, "home_pics_presentation", 1.3);
            scroll(pic, "opacity_on", 1.3);
        });
    },
    paragraphWebSite() {
        var paraWeb = [
            ...document.getElementsByClassName("home_webpics_paragraph")
        ];
        paraWeb.forEach(element => scroll(element, "home_pics_paragraph", 1.3));
    },
    sliderPicsWeb() {
        var countIndice = 1;
        var picsWeb = [
            ...document.getElementsByClassName("home_webpics_presentation")
        ];
        var pics = picsWeb.map(element => element.querySelector("img"));

        function incrementPics() {
            var increment = () => {
                countIndice++;
                if (countIndice > 3) {
                    countIndice = 1;
                }
                var src =
                    "../Pictures/home_work_pic/ecommerce" + [countIndice] + ".png";
                var src2 = "../Pictures/home_work_pic/resto" + [countIndice] + ".png";
                pics[0].setAttribute("src", src);
                pics[1].setAttribute("src", src2);
            };
            setInterval(increment, 4000);
        }
        return incrementPics();
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // coverAnimation.init(),
    headerAnimations.init(), sectionProjectsAnimation.sliderPicsWeb();
});
window.addEventListener("scroll", () => {
    sectionProjectsAnimation.init();
});

//DID: coverAnimation uncomment, change timing header, 
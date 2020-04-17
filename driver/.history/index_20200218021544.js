const scroll = (element, className, indice) => {

    var screenPosition = window.innerHeight / indice;
    if (element != undefined) {
        var positionSection = element.getBoundingClientRect().top;

        if (positionSection < screenPosition) {

            element.classList.add(className);
            return true;
        }
    }

}
const animationOut = (element, Class, Time) => {
    return setTimeout(() => {
        element.classList.add(Class);
    }, Time);
}
//Only those that will be used in different places.
let targetElements = {
    dots: [...document.getElementsByClassName("slider-pagi__elem")]
}
/*Menu*/
let triggerMenuMobile = (() => {
    var navigation = document.getElementsByClassName("nav_mobile")[0].querySelector("div");
    var burger = document.getElementById("burger");
    burger.addEventListener("click", () => {
        burger.classList.toggle("cross");
        var wrapper = document.getElementsByClassName("submenu_mobile_header")[0];
        wrapper.classList.toggle("overlay_on");
    })
})();


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
let throwErrorMessage = (message, location) => {
    location.innerText = message;
    location.style.display = "block";
    location.classList.add(".border_error");
}
let deleteErrorMessageOnFocus = event => {
    var field = event.target;
    var displayError = field.nextElementSibling;
    console.log(displayError)
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
    LOCATION_FIELDS.email.addEventListener("blur", () => checkEntry.email());
    LOCATION_FIELDS.email.addEventListener("focus", deleteErrorMessageOnFocus);
    LOCATION_FIELDS.firstName.addEventListener("blur", () =>
        checkEntry.formatEntry()
    );
    LOCATION_FIELDS.firstName.addEventListener(
        "focus", () =>
        () => deleteErrorMessageOnFocus()
    );

    LOCATION_FIELDS.lastName.addEventListener("blur", () =>
        checkEntry.formatEntry()
    );
    LOCATION_FIELDS.lastName.addEventListener("focus", deleteErrorMessageOnFocus);

    LOCATION_FIELDS.about.addEventListener("blur", () =>
        checkEntry.formatEntry()
    );
    LOCATION_FIELDS.about.addEventListener("focus", deleteErrorMessageOnFocus);
})();

/*Body*/
//
let intervalSlider;
let displayAnimationBody = {
    init() {
        displayAnimationBody.insertArticles();
        displayAnimationBody.dotsSliderSelected();
        displayAnimationBody.placeToVisitEffect();
    },
    insertArticles(isDotClicked) {
        // let intervalSlider; => It won't work here.
        const detailsArticle = {
            paragraphs: ["sojdlkjds lskjdlksd skjdklsjd wiuew weiouwie nsdlnlksnd weiu"],
            srcImages: ["./imgs/picsone.jpg", "./imgs/picstwo.jpg", "./imgs/picsthree.jpg"]
        }
        const markupSlidersArticle = [`
 <article class="slider_article_1"> 
     <div style="padding-left: 1rem" class="slider_top_details"> 
<h1 class="fade_right_article1_1">HELLO
</h1>
<p class="fade_right_article1_2">${detailsArticle.paragraphs[0]}</p>
<div class="button_content"> 
<button class="btn fade_right_article1_3"> 
   DISCOVER
</button>
</div>
</div>
<img src=${detailsArticle.srcImages[0]}> </img> 
 </article> 
`, `<article class="slider_article_2 ">
                <div class="slider_top_details">
                    <h3 class="appear_h3_slider">You will find it</h3>
                    <h2 class="appear_h2_slider"> Here</h2>
                    <h1 class="appear_h1_slider">MIAMI
                    </h1>
                </div>
                <img src=${detailsArticle.srcImages[1]}> </img>
            </article>`, ` <article class="slider_article_3">
                        <div class="slider_top_details">
                            <h3 class="appear_h3_slider">Let's go for a ride</h3>
                            <h2 class="appear_h2_slider"> Here</h2>
                            <h1 class="appear_h1_slider">MIAMI
                            </h1>
                        </div>
                        <img src=${detailsArticle.srcImages[2]}> </img>
                    </article>`];
        let indice = (isDotClicked) ? isDotClicked : 0;
        let locations = {
            parent: document.getElementsByClassName("slider_top_section")[0],
            sibiling: document.getElementsByClassName("dots")[0],

        }

        let newDiv = document.createElement("div");
        newDiv.classList.add("section_contenant");


        let sliderArticles = () => {

            newDiv.innerHTML = markupSlidersArticle[indice];
            displayAnimationBody.dotStyle(indice);
            locations.parent.insertBefore(newDiv, locations.sibiling);
            indice++
            if (indice >= markupSlidersArticle.length) {
                indice = 0;
            }

        }

        if (isDotClicked >= 0) {
            let child = document.getElementsByClassName("section_contenant")[0];
            child.innerHTML = markupSlidersArticle[indice];
            displayAnimationBody.dotStyle(indice);
            intervalSlider = clearInterval(intervalSlider)
            intervalSlider = 0; // To make sure it stops.
            return;
        } else {
            sliderArticles();
            intervalSlider = setInterval(sliderArticles, 3000)
        }
    },
    dotStyle(indice) {
        targetElements.dots = targetElements.dots.map((element, index) => {
            if (index != indice) {
                element.style.backgroundColor = "#f7f2f200";
            }
            return element
        });
        targetElements.dots[indice].style.backgroundColor = "white";
    },
    dotsSliderSelected() {
        targetElements.dots.forEach((item, index) => {
            item.addEventListener("click", () => {
                displayAnimationBody.insertArticles(index)
            })
        })
    },
    placeToVisitEffect() {
        let places = [...document.getElementsByClassName("place")];
        places = places.map(place => {
            let getReadMore = place.querySelector(".place_read_more");
            let getImagePlace = place.querySelector("img");
            place.addEventListener('mouseover', () => {
                getReadMore.classList.add("fade_bottom");
                getImagePlace.style.transform = "scale(1.1)";
            })
            place.addEventListener('mouseout', () => {
                getReadMore.classList.remove('fade_bottom');
                getImagePlace.style.transform = "scale(1)";
            })

        })
    }
};


window.addEventListener('scroll', () => {});

document.addEventListener("DOMContentLoaded", () => {
    displayAnimationBody.init();

})
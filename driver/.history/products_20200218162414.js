const scroll = (element, className, indice) => {
    let screenPosition = window.innerHeight / indice;
    if (element != undefined) {
        let positionSection = element.getBoundingClientRect().top;
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

/*Animations*/
let displayAnimationBody = {
    init() {
        displayAnimationBody.placeToVisitEffect();
        displayAnimationBody.sliderPics();
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
    },
    sliderPics() {
        let imgs = [...document.getElementsByClassName("li_imgs")];
        let imgSelected = document.getElementsByClassName("pics_product")[0].querySelector("img");
        let imgSelectedSrc;
        let srcImgClicked;
        imgs = imgs.map(img => {
            img.addEventListener("click", () => {
                imgSelectedSrc = imgSelected.getAttribute("src");
                srcImgClicked = img.getAttribute("src");
                console.log(srcImgClicked)
                imgSelected.setAttribute("src", srcImgClicked);
                img.setAttribute("src", imgSelectedSrc);
            })
        })

    }
};


window.addEventListener('scroll', () => {});
document.addEventListener("DOMContentLoaded", () => {
    displayAnimationBody.init();

})
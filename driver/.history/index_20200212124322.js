function scroll(element, className, indice) {

    var screenPosition = window.innerHeight / indice;
    if (element != undefined) {
        var positionSection = element.getBoundingClientRect().top;

        if (positionSection < screenPosition) {

            element.classList.add(className);
            return true;
        }
    }

}

function animationOut(element, Class, Time) {
    return setTimeout(() => {
        element.classList.add(Class);
    }, Time);
}

let triggerMenuMobile = (() => {
    var navigation = document.getElementsByClassName("nav_mobile")[0].querySelector("div");
    var burger = document.getElementById("burger");
    burger.addEventListener("click", () => {
        burger.classList.toggle("change");
        var wrapper = document.getElementsByClassName("submenu_mobile_header")[0];
        wrapper.classList.toggle("overlay_on");
        navigation.classList.toggle("position_static");
    })
})();

let displayAnimationBody = {
    init() {
        displayAnimationBody.coverPic();
    },
    coverPic() {
        let coverImage = [...document.getElementsByClassName("img_container")];

    },
};

window.addEventListener('scroll', () => {
    displayAnimationBody.init();
});
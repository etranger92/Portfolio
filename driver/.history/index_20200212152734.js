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

//Menu
let triggerMenuMobile = (() => {
    var navigation = document.getElementsByClassName("nav_mobile")[0].querySelector("div");
    var burger = document.getElementById("burger");
    let menu = document.querySelector(".nav_desktop");
    menu.classList.toggle("visible");
    burger.addEventListener("click", () => {
        burger.classList.toggle("change");
        var wrapper = document.getElementsByClassName("menu_mobile")[0];
        var liFamily = [...wrapper.querySelector("ul").querySelectorAll("li")];
        liFamily.forEach(item => item.classList.toggle("overlay_on"));
        //wrapper.classList.toggle("overlay_on");
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
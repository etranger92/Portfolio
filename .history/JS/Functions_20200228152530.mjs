let scroll = (element, className, indice) => {
    let screenPosition = window.innerHeight / indice;
    if (element != undefined) {
        let positionSection = element.getBoundingClientRect().top;

        if (positionSection < screenPosition) {
            element.classList.add(className);
        }
    }
}

let animationOut = (element, Class, Time) => {
    return setTimeout(() => {
        element.classList.add(Class);
    }, Time);
}
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

export {
    scroll,
    animationOut,
    triggerMenuMobile
}

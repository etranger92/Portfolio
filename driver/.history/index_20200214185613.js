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


/*Body*/
//
const paragraphs = ["sojdlkjds lskjdlksd skjdklsjd wiuew weiouwie nsdlnlksnd weiu"];
const sourceImage = ["./imgs/picsone.jpg"];
const markupSlidersTop = [`
 <article class="slider_article_1"> 
     <div class="slider_top_details1"> 
<h1>HELLO
</h1>
<p>${paragraphs[0]}</p>
<div> 
<button class="btn"> 
   DISCOVER
</button>
</div>
</div>
<img src=${sourceImage[0]}> </img> 
 </article> 
`];


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
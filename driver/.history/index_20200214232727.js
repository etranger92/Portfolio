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
const markupSlidersArticle = [`
 <article class="slider_article_1"> 
     <div class="slider_top_details"> 
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
`, `     <article class="slider_article_2 ">
                <div class="slider_top_details">
                    <h3 class="appear_h3_slider">You will find it</h3>
                    <h2 class="appear_h2_slider"> Here</h2>
                    <h1 class="appear_h1_slider">MIAMI
                    </h1>
                </div>
                <img src="./imgs/picstwo.jpg"> </img>
            </article>`, `    <article class="slider_article_3">
                        <div class="slider_top_details">
                            <h3 class="appear_h3_slider">Let's go for a ride</h3>
                            <h2 class="appear_h2_slider"> Here</h2>
                            <h1 class="appear_h1_slider">MIAMI
                            </h1>
                        </div>
                        <img src="./imgs/picsthree.jpg"> </img>
                    </article>`];

let displayAnimationBody = {
    init() {
        displayAnimationBody.insertArticles();
    },

    insertArticles() {
        let parent = document.getElementsByClassName("slider_top_section")[0];
        let sibiling = document.getElementsByClassName("dots")[0];
        let newDiv = document.createElement("div");
        newDiv.classList.add("section_contenant");

        newBang.innerHTML = markupSlidersArticle[0];

        parent.insertBefore(newDiv, sibiling);
    }
};

window.addEventListener('scroll', () => {

});

document.addEventListener("DOMContentLoaded", () => {
    displayAnimationBody.init();
})
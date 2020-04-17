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

/*Body*/
//

let displayAnimationBody = {
    indice: 0,
    init() {
        displayAnimationBody.insertArticles();
        displayAnimationBody.dotsSliderSelected();
    },

    insertArticles(isDotClicked) {
        const detailsArticle = {
            paragraphs: ["sojdlkjds lskjdlksd skjdklsjd wiuew weiouwie nsdlnlksnd weiu"],
            srcImages = ["./imgs/picsone.jpg", "./imgs/picstwo.jpg", "./imgs/picsthree.jpg"];
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
<img src=${sourceImage[0]}> </img> 
 </article> 
`, `<article class="slider_article_2 ">
                <div class="slider_top_details">
                    <h3 class="appear_h3_slider">You will find it</h3>
                    <h2 class="appear_h2_slider"> Here</h2>
                    <h1 class="appear_h1_slider">MIAMI
                    </h1>
                </div>
                <img src=${sourceImage[1]}> </img>
            </article>`, ` <article class="slider_article_3">
                        <div class="slider_top_details">
                            <h3 class="appear_h3_slider">Let's go for a ride</h3>
                            <h2 class="appear_h2_slider"> Here</h2>
                            <h1 class="appear_h1_slider">MIAMI
                            </h1>
                        </div>
                        <img src=${sourceImage[2]}> </img>
                    </article>`];
        let parent = document.getElementsByClassName("slider_top_section")[0];
        let indice = (isDotClicked) ? isDotClicked : 0;

        let sibiling = document.getElementsByClassName("dots")[0];
        let newDiv = document.createElement("div");
        newDiv.classList.add("section_contenant");
        if (isDotClicked) {
            newDiv.innerHTML = markupSlidersArticle[indice];
            parent.insertBefore(newDiv, sibiling);
            return;
        }
        let sliderImgSubMenu = () => {
            newDiv.innerHTML = markupSlidersArticle[displayAnimationBody.indice];
            parent.insertBefore(newDiv, sibiling);
            displayAnimationBody.dotStyle();
            displayAnimationBody.indice++
            if (displayAnimationBody.indice >= markupSlidersArticle.length) {
                displayAnimationBody.indice = 0;
            }
        }
        sliderImgSubMenu();
        setInterval(sliderImgSubMenu, 3000);
    },
    dotStyle() {
        targetElements.dots = targetElements.dots.map((element, index) => {
            if (index != displayAnimationBody.indice) {
                element.style.backgroundColor = "#f7f2f200";
            }
            return element
        });
        targetElements.dots[displayAnimationBody.indice].style.backgroundColor = "white";
    },
    dotsSliderSelected() {
        targetElements.dots.forEach((item, index) => {
            item.addEventListener("click", () => console.log(index))
        })
    }
};




window.addEventListener('scroll', () => {});

document.addEventListener("DOMContentLoaded", () => {
    displayAnimationBody.init();
    //  setInterval(displayAnimationBody.insertArticles, 5000)
})
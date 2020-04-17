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

let productsDetail = [{
        src: ["./imgs/product pics/architecture-bridge-building-city-220769.jpg", "./imgs/product pics/landscape-photography-of-green-and-brown-palace-1059078.jpg", "./imgs/MONT ST MICHEL.jpg"]
    },
    {

    },
    {

    },


]

let displayPage = indice => {
    return `

  < div class = "pics_product" >
      <
      p > < img src=${productsDetail[indice].src[0]} > < /img></p >
      <
      ul >
      <
      li > < img class = "li_imgs"
  src = ${productsDetail[indice].src[1]} >
      <
      /li> <
      li > < img class = "li_imgs"
  src = ${productsDetail[indice].src[2]} > < /li> <
      /ul> <
      /div> <
      div class = "product" >
      <
      h2 > MONT ST MICHEL < /h2> <
      span > Excursions < /span> <
      ul >
      <
      li > < a href = "#description" > DESCRIPTION < /a></li >
      <
      li href = "#information" > < a > INFORMATIONS < /a></li >
      <
      /ul> <
      div >
      <
      p id = "text" > Mont St Michel is a place of sheer enchantment in the middle of the bay.Marvel of the
  western
  world,
  the granite island almost 80 meters high forms a picturesque and monumental sight.Ringed by
  treacherous quick sands and accessible only by a seawall.Mont St Michel is the symbol of
      Normandy
  and a Unesco World Heritage site.
  Pick up at your hotel at 7.00 am you will arrive around 11.00 am.
  The tour cross the Normandy countryside called“ le Bocage Normand” which is one of the most
  beautiful
      in France with its small typical villages, farms and cattle which are producing the famous
  Camembert, Livarot and Pont l’ Eveque cheeses.
  You will have plenty of time to visit the site, its monumental halls, the cloister, the state
  chambers called“ La Merveille” and the lace staircase.You will stroll on the covered way of
      the
  ramparts and inside the village’ s alleys.Lunch on your own.There are many nice small
  restaurants
      in the village of which the famous“ Mère Poulard” restaurant and shops.
  You will leave the Mont St Michel around 4.00 / 4.30 pm.Return to Paris around 8.30 pm. < /p> <
      p > & nbsp; < /p> <
  p > < a href = "" > < /a></p >
      <
      blockquote class = "blockquote_shortcode" >
      <
      p class = "blockquote_text" > < span > click here to order <
      /span></p >
      <
      /blockquote>

      <
      /div> <
      /div>

`

}




//Only those that will be used in different places.
let targetElements = {
    imgsChild: [...document.getElementsByClassName("li_imgs")]
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


let displayElements = {

}

let displayAnimationBody = {
    init() {
        displayAnimationBody.placeToVisitEffect();
        displayAnimationBody.sliderPicsProduct();
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
    sliderPicsProduct() {
        let imgs = [...document.getElementsByClassName("li_imgs")];
        let imgSelected = document.getElementsByClassName("pics_product")[0].querySelector("img");
        let imgSelectedSrc;
        let srcImgClicked;
        imgs = imgs.map(img => {
            img.addEventListener("click", () => {

                imgSelectedSrc = imgSelected.getAttribute("src");
                srcImgClicked = img.getAttribute("src");
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
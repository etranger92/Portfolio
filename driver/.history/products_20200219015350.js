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

/*Display content html*/
let productSelectedName = (() => {
    let sourceClicked = document.location.href;
    let regex = /\=.+$/i;
    let itemSelected = sourceClicked.match(regex)[0].substr(1);
    return itemSelected;
})();
let productsDetail = {

    stmichael: {
        src: ["./imgs/product pics/stmichael/stmichael0.jpg", "./imgs/product pics/stmichael/stmichael1.jpg", "./imgs/product pics/stmichael/stmichael2.jpg"],
        title: "MONT ST MICHEL",
        description: "Mont St Michel is a place of sheer enchantment in the middle of the bay. Marvel of the western world,the granite island almost 80 meters high forms a picturesque and monumental sight. Ringed by treacherous quick sands and accessible only by a seawall.Mont St Michel is the symbol of Normandy and a Unesco World Heritage site. Pick up at your hotel at 7.00 am you will arrive around 11.00 am. The tour cross the Normandy countryside called“ le Bocage Normand” which is one of the most beautiful in France with its small typical villages, farms and cattle which are producing the famous Camembert, Livarot and Pont l’ Eveque cheeses.You will have plenty of time to visit the site, its monumental halls, the cloister, the state chambers called“ La Merveille” and the lace staircase.You will stroll on the covered way of the ramparts and inside the village’s alleys. Lunch on your own. There are many nice small restaurants in the village of which the famous“ Mère Poulard” restaurant and shops. You will leave the Mont St Michel around 4.00 / 4.30 pm.Return to Paris around 8.30 pm."
    },
    versaille: {
        src: ["./imgs/product pics/versailles/versaille0.jpg", "./imgs/product pics/versailles/versaille1.jpg", "./imgs/product pics/versailles/versaille2.jpg"],
        title: "VERSAILLE",
        description: "Chartres is situated in the heart of the Beauce valley, corn attic of the Ile de France region. The region holds a very important place in the French history. The monument built in the early 12 th century is famous for its three portals of which the royal portal with its incomparable architectural masterpiece of the roman art.The other gorgeous specific characteristic of the monument is the wonderful stained glass windows from the 12 th & 13 th centuries with its unique blue colour called“ the blue of Chartres”.This is the most important collection in France our guide will describe.Radiantly colourful, exceptionally expressive, there are 172 stained glass windows covering a total of 2600 sq meters. Inside you will discover a mysterious circle labyrinth inserted in the pavement.This is a witness of the medieval time. The monument is a symbol of the gothic architecture recognised as a Unesco World Heritage but the city of Chartres is a charming small city with its old narrow paths and museums.There are also some nice craft shops, shops and markets maintaining the lively and picturesque charm of the medieval past. In the afternoon, you will visit Versailles Palace. With its three chateaux, gardens and parks, Versailles is an immense estate.Louis XIV the Sun King is the creative force of Versailles.He turned Versailles into a sumptuous estate and the symbol of absolute monarchy in the 17 th century. Louis Le Vau and then Jules Hardouin - Mansart and Charles Lebrun are the main architects both Versailles and the Grand Trianon and André Le Notre for the gardens. You will visit the State Apartments with its 8 rooms, the Hall of Mirrors, the King and Queens’ apartments and since July 2006 some new rooms recently renovated, the Royal Chapel and the Royal Opera Opera. Beyond the chateau, stretch the gardens and the park.At the foot of the chateau, Le Nôtre created the parterres, designed to be viewed from the terraces.You will see the Grand Perspective which draws the eye to the horizon with its Latona and Apollo fountains.You will stroll to the north and south parterres full of flowers.You will see the various groves in the gardens: the Baldroom and the Colonnade, the Enceladus…"
    },
    paris: {
        src: ["./imgs/product pics/paris/effeil0.jpg", "./imgs/product pics/paris/effeil1.jpg", "./imgs/product pics/paris/effeil2.jpg"],
        title: "PARIS",
        description: "From your hotel the driver will pick you up Place de la Concorde with its Egyptian obelisk, fountains, statues and columns the Madeleine church looking like a Greek temple. Then the Opera Garnier gorgeous architecture from the 19 th century rue de la Paix with its luxurious jewelleries. Place Vendome with its column dedicated to Napoleon.Then take the Rivoli street before joining the Champs Elysées Avenue designed by Le Notre in the 17 th century. On the top is the Arc de Triomphe 50 meters high celebrating the Napoleon victoriesYou will take the Kebler Avenue to see the Eiffel Tower built for the Universal Exhibition in 1889. You will follow the Seine river bank where are located most of the major historical buildings of the city: Le Grand and le Petit Palais, the Louvre Museum with its glass pyramid, the Tuileries gardens, the Place des Vosges in the Marais district with its narrow medieval streets, the Bastille square and its columns celebrating the French revolution. You will cross the river Seine to join the left bank.You will stay 20 minutes to visit Notre Dame Cathedral.You will continue with to Le Pantheon, The Luxembourg gardens, Les Invalides built in the 18 th century where is Napoleon’ s tomb. You will cross some of the most prestigious bridges during this trip: Alexandre III, Pont Neuf, the oldest bridge of the City.You will finish this visit with the“ village” of Montmartre * where you will have another 20 minutes to stroll around the Sacre Coeur Basilica and to the Place du Tertre where all the artists and painters used to show their works. After this astonished panorama of the city, you will be taken back to your hotel."
    },
    loire: {
        src: ["./imgs/product pics/chartres/chartre0.jpg", "./imgs/product pics/chartres/chartre1.jpg", "./imgs/product pics/chartres/chartre2.jpg"],
        title: "VALLÉ DE LA LOIRE",
        description: "The most visited castles: Chenonceaux, Cheverny, Chambord, Chinon, Villandry and Amboise. Orleans: Visit of the historical center, beaux - arts museum, and Jeanne d’ Arc’ s house. A quick stop at Beaugency, before heading to Blois. Visit of the first Castle: Cheverny Visit of one of the famous Loire Valley’ s castles: Chambord Nice walk through the georgous vineyards of the touraine region, to visit Villandry’ s castle, and its beautiful gardens. You will discover Tours and its historical center. Two of the biggest Loire Valley’ s castles: Chenonceaux, not far from Tours, emblematic piece of the architectural richess of the Val de Loire. Then straight to the other bank of la loire, to discover other architectural wonders(Chateau Chinon…), then finish the day at Saumure, with its castle and its beautiful vineyards."
    }

}
let displayPageHtml = (product = productSelectedName) => {
    return `
  <div class = "pics_product">
      <p> <img src = "${productsDetail[product].src[0]}"> </p>
      <ul>
      <li> <img class = "li_imgs" src = "${productsDetail[product].src[1]}"> </li> 
      <li> <img class="li_imgs" src= "${productsDetail[product].src[2]}"></li> </ul> </div> <div class = "product">
      <h2> ${productsDetail[product].title} </h2> <span> Excursions </span> <ul>
      <li> <a href = "#description"> DESCRIPTION </a></li>
      <li href = "#information"> <a> INFORMATIONS </a></li>
      </ul> <div>
      <p id = "text"> ${productsDetail[product].description} </p>
       <p> & nbsp; </p> <p> <a href= "" > </a></p >
      <blockquote class = "blockquote_shortcode" >
      <p class = "blockquote_text" > <span> click here to order </span></p >
      </blockquote>
      </div>
       </div>
`
};
let targetElements = {
    parentProduct: document.getElementsByClassName("presentation_product")[0],
    sibiling: document.getElementsByClassName("product")[0],
    articleSelected: document.getElementById(productSelectedName)
}
targetElements.parentProduct.innerHTML = displayPageHtml();
targetElements.articleSelected.innerHTML = "";

/*Animations*/
let displayAnimationBody = {
    init() {
        displayAnimationBody.sliderPicsProduct();
    },
    sliderPicsProduct() {
        let imgs = [...document.getElementsByClassName("li_imgs")];
        console.log(imgs)
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

    },
};


window.addEventListener('scroll', () => {});
document.addEventListener("DOMContentLoaded", () => {
    displayAnimationBody.init();
})
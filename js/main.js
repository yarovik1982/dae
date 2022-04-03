import { getPageLocation } from "./Location.js";
import Product from "./Product.js"
// import {getArrayGoods} from "./Cart.js"


document.addEventListener("click", function(event){
   const el = event.target;
   if(el.closest("[data-burger]")){
      showMobileMenu();
      document.querySelectorAll("[data-burger]").forEach(item=>{
         item.classList.toggle("toggle");
      })
   }
   if(el == "button" && el.dataset.id){
      console.log(el);
   }
}, true)

const mobileMenu = document.querySelector(".nav__mobile-menu");

// console.log(storageGoods);
console.log(cart.dataset.cart);

function showMobileMenu () {
   mobileMenu.classList.toggle('active');
}


getPageLocation();
Product();
// getArrayGoods(storageGoods);
// createArrayCart();
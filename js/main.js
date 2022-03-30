document.addEventListener("click", function(event){
   const el = event.target;
   if(el.closest("[data-burger]")){
      showMobileMenu();
      document.querySelectorAll("[data-burger]").forEach(item=>{
         item.classList.toggle("toggle");
      })
   }
}, true)

const mobileMenu = document.querySelector(".nav__mobile-menu");

function showMobileMenu () {
   mobileMenu.classList.toggle('active');
}

import { getPageLocation } from "./Location.js";

getPageLocation();
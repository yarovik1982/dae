
function Cart (){
   const cart = document.getElementById("cart");
   const storageGoods = JSON.parse(localStorage.getItem("goods"));
   const buttonsAdd = document.querySelectorAll("button[data-id]");
   // const createArrayCartStorage = localStorage.setItem("cart", JSON.stringify([]));
   
   buttonsAdd.forEach(button => {

      button.addEventListener("click", function(){
         for(let i = 0; i < storageGoods.length; i++){
            let index = i + 1;
            
            if(index == this.dataset.id){
               localStorage.setItem("cart", JSON.stringify([]));
               const getArrayCartStorage = JSON.parse(localStorage.getItem("cart"))|| [];
               getArrayCartStorage.push(storageGoods[i]);
               localStorage.setItem("cart", JSON.stringify(getArrayCartStorage));
               cart.dataset.cart = "";
               cart.dataset.cart = getArrayCartStorage.length;
         }
      }

   });
});
}
Cart()
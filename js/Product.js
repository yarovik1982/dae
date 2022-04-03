function Product(){
   const goods = [
      {
         id: 1,
         title: "The Daedreamer Set",
         descript: "We`re a haircare line based in sunny Arizona. Our products are made up of the many things that make our home special, including the scent of orange blossoms in the air, colors of majestic sunsets and nourishing ingredients derived from desert  botanicals. We believe haircare doesn`t have to be complicated and aimed to make a line that is simple and effective. We hope that dae  plays a special role in your everyday hair routine from sunrise to sunset and allows you to feel the warmth of the desert wherever you  are.",
         price: "$49.00",
         image: "images/image-product-1.png",
      },
      {
         id: 2,
         title: "Shampoo",
         descript: "We`re a haircare line based in sunny Arizona. Our products are made up of the many things that make our home special, including the scent of orange blossoms in the air, colors of majestic sunsets and nourishing ingredients derived from desert  botanicals. We believe haircare doesn`t have to be complicated and aimed to make a line that is simple and effective. We hope that dae  plays a special role in your everyday hair routine from sunrise to sunset and allows you to feel the warmth of the desert wherever you  are.",
         price: "$24.00 to $64.00",
         image: "images/image-product-2.png",
      },
      {
         id: 3,
         title: "Conditioner",
         descript: "We`re a haircare line based in sunny Arizona. Our products are made up of the many things that make our home special, including the scent of orange blossoms in the air, colors of majestic sunsets and nourishing ingredients derived from desert  botanicals. We believe haircare doesn`t have to be complicated and aimed to make a line that is simple and effective. We hope that dae  plays a special role in your everyday hair routine from sunrise to sunset and allows you to feel the warmth of the desert wherever you  are.",
         price: "$24.00 to $64.00",
         image: "images/image-product-3.png",
      },
   ]

   const slideImages = document.querySelectorAll(".slide__img");
   // const currentLocation = window.location.pathname;
   
   slideImages.forEach(item => {
      item.addEventListener("click", function(){
         const attrDataId = this.dataset.id;
         console.log(window.location.pathname);
         if(window.location.pathname == "/dae/#"){
            
            window.location.pathname = `/dae/product-${attrDataId}`;
         }else{
            return false;
         }
      })
   })
   

   const writeData = (str)=>{
      return localStorage.setItem(str,JSON.stringify( goods))
   }

   // const createCartStorage = (str) => {
   //    return localStorage.setItem(str, JSON.stringify([...]));
   // }
     
   window.onload = function(){
      // createCartStorage("cart")
      writeData("goods");
   }
   
   
}
export default Product

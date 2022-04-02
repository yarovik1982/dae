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

   const slider = document.querySelector(".slider__swiper");

   
   slider.addEventListener("click", event => {
      const currentTarget = event.target;
      const attrDataId = currentTarget.closest(".slide__img").dataset.id;
   })
   
   
}
export default Product
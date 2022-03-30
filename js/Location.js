export const getPageLocation = () => {
   const currentLocation = window.location.pathname;
   const str = currentLocation.split(".").splice(0,1).join().slice(1);
   
   const links = document.querySelectorAll(".breadcrumbs__link");

   links.forEach(item => {
      if(item.textContent == str){
         item.classList.add("active");
      }else {
         item.classList.remove("active");
      }
   })
}
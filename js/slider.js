const swiper = new Swiper('.swiper', {
   // Optional parameters
   // direction: 'vertical',
   slidesPerView: 1,
   spaceBetween:80,
   loop: true,
   // centeredSlides:true,
 
   // If we need pagination
   // pagination: {
   //   el: '.swiper-pagination',
   // },
 
   // Navigation arrows
   navigation: {
     nextEl: '.slider__swiper-button-next',
     prevEl: '.slider__swiper-button-prev',
     clicable:true,
   },
   // when window width is >= 480px
   breakpoints: {
   560: {
      slidesPerView: 2,
      // spaceBetween: 120,
   },
      // when window width is >= 320px
      1100: {
        slidesPerView: 3,
      //   spaceBetween: 80,
      },
      // // when window width is >= 640px
      // 640: {
      //   slidesPerView: 4,
      //   spaceBetween: 40
      // }
    }
 
   // And if we need scrollbar
   // scrollbar: {
   //   el: '.swiper-scrollbar',
   // },
 });
const swiperPopular = new Swiper('.swiper-container-popular', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 5,
    spaceBetween: 60,
    centeredSlides: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      dynamicBullets: 'true',
      dynamicMainBullets: 4,
    },

    breakpoints: {

        700: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        900: { 
          slidesPerView: 3,
          spaceBetween: 10,
        },

        1120: {
          slidesPerView: 3,
          spaceBetween: 10,
        },

        1240: {
          slidesPerView: 3,
        },

        1399: {
          slidesPerView: 4,
          spaceBetween: 60,
        },
        1601: {
          slidesPerView: 5,
          spaceBetween: 60,
        },
    }
  
  });
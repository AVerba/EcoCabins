const materialsSw = document.querySelector('.materials__gallery');

const swiper = new Swiper(materialsSw, {
  speed: 500,
  loop: true,
  autoplay:true,
  spaceBetween: 30,
  pagination: {
    el: '.materials__pagination',
  },
});
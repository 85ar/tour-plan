const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,

  // Keyboard control
  keyboard: {
    enabled: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },
  effect: "fade",
});

ymaps.ready(function init() {
  var myMap = new ymaps.Map("yaMap", {
    center: [7.89074, 98.294774],
    zoom: 16,
  });
});

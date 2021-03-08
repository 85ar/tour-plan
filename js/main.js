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

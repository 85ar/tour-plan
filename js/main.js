const swiper = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,

  // Keyboard control
  keyboard: {
    enabled: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
  effect: "fade",
});

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [7.89074, 98.294774],
    zoom: 16,
  });
var myPlacemark = new ymaps.Placemark([7.89074, 98.294774], {
  hintContent: "Grand Hilton Hotel",
});
myMap.geoObjects.add(myPlacemark);
}
$(document).ready(function () {
  var hotelSlider = new Swiper(".hotel-slider", {
    loop: true,

    keyboard: {
      enabled: true,
    },

    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
    effect: "fade",
  });
  var reviewsSlider = new Swiper(".reviews-slider", {
    loop: true,

    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
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

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on('click', openModal)
  closeModalButton.on('click', closeModal)

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }
   function closeModal(event) {
     event.preventDefault();
     var modalOverlay = $(".modal__overlay");
     var modalDialog = $(".modal__dialog");
     modalOverlay.removeClass("modal__overlay--visible");
     modalDialog.removeClass("modal__dialog--visible");
   }
});

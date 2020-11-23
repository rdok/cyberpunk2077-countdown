(function ($) {

  "use strict";

  $(window).load(function () {
    $('.preloader').fadeOut(2000);
  });


  $('body').vegas({
    slides: [
      { src: 'images/mercenary.jpg' },
      { src: 'images/city-hero-car-road.jpg' }
    ],
    timer: false,
    transition: ['zoomOut',]
  });

})(jQuery);

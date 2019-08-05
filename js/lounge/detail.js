$(function(){
  $('.js-slider').slick({
      dots: true,
      arrows: true,
      centerMode: true,
      infinite: false,
      responsive: [
          {
            breakpoint: 786,
            settings: "unslick"
          }
      ]
  });
});


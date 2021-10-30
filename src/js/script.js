$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="carousel__slick carousel__slick_left"><img src="icons/chevron-left-solid.png"></button>',
        nextArrow: '<button type="button" class="carousel__slick carousel__slick_right"><img src="icons/chevron-right-solid.png"></button>',
        responsive: [
          {
            breakpoint: 800,
            settings: {
              dots: true,
              arrows: false,
            }
          }
        ]
      });
});
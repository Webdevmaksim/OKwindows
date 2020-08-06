$(document).ready(function () {
    //Sticky navbar
    window.onscroll = function() {myFunction()};

    // Get the navbar
    var navbar = document.getElementById("navbar");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll     position
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }
     //slider
     var swiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 40,
        navigation: {
          nextEl: '.hero__slider-control-next',
          prevEl: '.hero__slider-control-prev',
        },
      });
});
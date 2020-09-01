$(document).ready(function () {
    //Sticky navbar
    window.onscroll = function() {myFunction();};

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
        // loop: true,
        slidesPerView: 2,
        spaceBetween: 40,
        navigation: {
          nextEl: '.hero__slider-control-next',
          prevEl: '.hero__slider-control-prev',
        },
      });
    // Set the date we're counting down to
    var countDownDate = new Date("sep 29, 2020 15:37:25").getTime();
    var cabinDownDate = new Date("nov 29, 2020 18:38:20").getTime();
    var windowDownDate = new Date("oct 8, 2020 10:44:13").getTime();
    
    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
    var cabinNow = new Date().getTime();
    var windowNow = new Date().getTime();
        
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    var cabinDistance = cabinDownDate - cabinNow;
    var windowDistance = windowDownDate - windowNow;
        
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var cabinDays = Math.floor(cabinDistance / (1000 * 60 * 60 * 24));
    var cabinHours = Math.floor((cabinDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var cabinMinutes = Math.floor((cabinDistance % (1000 * 60 * 60)) / (1000 * 60));
    var cabinSeconds = Math.floor((cabinDistance % (1000 * 60)) / 1000);

    var windowDays = Math.floor(windowDistance / (1000 * 60 * 60 * 24));
    var windowHours = Math.floor((windowDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var windowMinutes = Math.floor((windowDistance % (1000 * 60 * 60)) / (1000 * 60));
    var windowSeconds = Math.floor((windowDistance % (1000 * 60)) / 1000);
        
    // Output the result in an element with id="demo"
    document.getElementById("heat__days").innerHTML = days;
    document.getElementById("heat__hours").innerHTML = hours;
    document.getElementById("heat__minutes").innerHTML = minutes;
    document.getElementById("heat__seconds").innerHTML = seconds;

    document.getElementById("cabin__days").innerHTML = cabinDays;
    document.getElementById("cabin__hours").innerHTML = cabinHours;
    document.getElementById("cabin__minutes").innerHTML = cabinMinutes;
    document.getElementById("cabin__seconds").innerHTML = cabinSeconds;

    document.getElementById("window__days").innerHTML = windowDays;
    document.getElementById("window__hours").innerHTML = windowHours;
    document.getElementById("window__minutes").innerHTML = windowMinutes;
    document.getElementById("window__seconds").innerHTML = windowSeconds;
        
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
    }, 1000);
    //tabs
    var tab = $('.q-a__item');
    var content = $('.q-a__description');

    tab.on('click', function(event){
        $('.q-a__item').removeClass('q-a__item--active');
        $(this).toggleClass('q-a__item--active');

        $('.q-a__description').removeClass('q-a__description--active');
        $('.q-a__description[data-tab='+$(this).attr('data-tab')+']')
        .toggleClass('q-a__description--active');
    });

});
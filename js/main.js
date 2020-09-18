$(document).ready(function () {
    //mobile burger
    $('.mobile__burger').click(function(event){
        $('.mobile__burger,.mobile__nav').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.mobile__list').click(function(event){
        $('.mobile__burger,.mobile__nav').removeClass('active');
        $('body').removeClass('lock');
    });
    //form-arrow 
    $('.m-q__select').click(function(event){
        $('.m-q__select-wrapper').toggleClass('active');
    });
    //popup
    var mainModal = $('.pop-up'),
        link = $('button[data-popup="true"]'),
        close = $('.pop-up__close'),
        popupName = $('.pop-up__title');
    
    link.on('click', function(){
        popupName.text ($(this).attr('data-heading'));
        mainModal.fadeIn();
    });
    close.on('click', function(){
        mainModal.fadeOut();
    });
    $(document).keydown(function(event) { 
        if (event.keyCode == 27) { 
        mainModal.fadeOut();
        }
    });
    //Закрытие на клик за пределами поля!!!
    mainModal.click(function(e) {
        if ($(e.target).closest('.pop-up__dialog').length == 0){
            $(this).fadeOut();					
        }
    });
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
    //popup
    
    //slider
     var swiper = new Swiper('.swiper-container', {
        // loop: true,
        navigation: {
          nextEl: '.hero__slider-control-next',
          prevEl: '.hero__slider-control-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
                spaceBetween: 0
              },
            1200: {
                slidesPerView: 2,
                spaceBetween: 40
              }
        }
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
    //form validate
    //popup-form
    $('.pop-up__form').validate({
        errorElement: "div",
        errorClass: "invalid",
        rules: {
            // Строчное правило
            // Правило-объект(Блок)
            popupTel: {
              required: true,
              minlength: 18
            },
            popupName: {
                required: true,
                minlength: 2
            },
           
            popupMail: {
                required: true,
                email: true
            },
            popupCheck: {
                required: true
            },
            
            
          },  //Сообщения
          messages: {
            popupName:{
              required: "Имя обязательно",
              minlength: "Минимум две буквы",
            },
            
            popupCheck:{
                required: "Требуется ваше согласие на обработку",
            },
            popupTel: {
              required: "Телефон обязателен",
              minlength: "Телефон не короче 10 цифр",
            }, 
            
            popupMail:{
                required: "Введите почту",
                email: "почта в формате domain@mail.com",
            },
          },
    });
    //main-form
    $('.main-form').validate({
        errorElement: "div",
        errorClass: "invalid",
        rules: {
            windowName:{
                required: true,
                minlength: 2
            },
            windowPhone:{
                required: true,
                minlength: 18
            },
            
        },
        messages: {
            windowName:{
                required: "Имя обязательно",
                minlength: "Минимум две буквы",
            },
            windowPhone: {
                required: "Телефон обязателен",
                minlength: "Телефон не короче 10 цифр",
            },
        },

    });
    //question-form
    $('.question__form').validate({
        errorElement: "div",
        errorClass: "invalid",
        rules:{
            questionName: {
                required: true,
                minlength: 2
            },
            questionPhone:{
                required: true,
                minlength: 18
            },
            questionArea: {
                required: true
            }
        },
        messages: {
            questionName:{
                required: "Имя обязательно",
                minlength: "Минимум две буквы",
              },
              questionPhone: {
                required: "Телефон обязателен",
                minlength: "Телефон не короче 10 цифр",
              },
              questionArea:{
                  required: "Не забудьте задать свой вопрос.",
              }
        },

    });
    //more-form
    $('.more__form').validate({
        errorElement: "div",
        errorClass: "invalid",
        rules: {
            moreName: {
                required: true,
                minlength: 2
            },
            morePhone:{
                required: true,
                minlength: 18
            },
        },
        messages: {
            moreName:{
                required: "Имя обязательно",
                minlength: "Минимум две буквы"
              },
            morePhone: {
                required: "Телефон обязателен",
                minlength: "Телефон не короче 10 цифр"
            }
        },
    });
    //select-form
    $('.m-q__form').validate({
        errorElement: "div",
        errorClass: "invalid",
        rules: {
            mqName:{
                required: true,
                minlength: 2
            },
            mqPhone: {
                required: true,
                minlength: 18
            },
            mQmore: {
                required: true
            }
        },
        messages:{
            mqName: {
                required: "Имя обязательно",
                minlength: "Минимум две буквы"
            },
            mqPhone: {
                required: "Телефон обязателен",
                minlength: "Телефон не короче 10 цифр"
            },
            mQmore: {
                required: "Пожалуйста выберите услугу."
            }
        },
    });

});
(function($) {
    
    "use strict";

        //Hide Loading Box (Preloader)
        function handlePreloader() {
            if($('.preloader').length){
                $('.preloader').delay(200).fadeOut(500);
            }
        }   

        //Update Scroll to Top
        function headerStyle() {
          if($('.main-header').length){
            var mainHeader = $('.main-header').height();
            var windowpos = $(window).scrollTop();
            if (windowpos >= 200) {
              $('.bounce-in-header').addClass('now-visible');
              $('.scroll-to-top').fadeIn(300);
            } else {
              $('.bounce-in-header').removeClass('now-visible');
              $('.scroll-to-top').fadeOut(300);
            }
          }
        }
        
        headerStyle();
        
        //Submenu Dropdown Toggle
        if($('.main-header li.dropdown ul').length){
          $('.main-header li.dropdown').append('<div class="dropdown-btn"></div>');
          
          //Dropdown Button
          $('.main-header li.dropdown .dropdown-btn').on('click', function() {
            $(this).prev('ul').slideToggle(500);
          });
        } 

        /* ---------------------------------------------
         * Progress Bar / Levels
         *--------------------------------------------- */

        if($('.progress-levels .progress-box .bar-fill').length){
          $(".progress-box .bar-fill").each(function() {
            var progressWidth = $(this).attr('data-percent');
            $(this).css('width',progressWidth+'%');
            $(this).children('.percent').html(progressWidth+'%');
          });
        }

        /* ---------------------------------------------
         * Testimonials one Column
         *--------------------------------------------- */
        if ($('.testimonial-1').length) {
            $('.testimonial-1').owlCarousel({
                loop:true,
                margin:50,
                nav:false,
                dots:false,
                smartSpeed: 500,
                autoplay: 5000,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1024:{
                        items:1
                    },
                    1200:{
                        items:1
                    }
                }
            });         
        }

        /* ---------------------------------------------
         * Testimonials one Column
         *--------------------------------------------- */
        if ($('.testimonial-2').length) {
            $('.testimonial-2').owlCarousel({
                loop:true,
                margin:50,
                nav:false,
                dots:true,
                smartSpeed: 500,
                autoplay: 5000,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1024:{
                        items:1
                    },
                    1200:{
                        items:1
                    }
                }
            });         
        }

        /* ---------------------------------------------
         * Blog slider one Column
         *--------------------------------------------- */
        if ($('#blog-slider').length) {
            $('#blog-slider').owlCarousel({
                loop:true,
                margin:50,
                nav:true,
                navText: [
                  '<i class="fa fa-angle-left"></i>',
                  '<i class="fa fa-angle-right"></i>'
                ],
                dots:false,
                smartSpeed: 500,
                autoplay: 5000,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1024:{
                        items:1
                    },
                    1200:{
                        items:1
                    }
                }
            });         
        }

        /* ---------------------------------------------
         portfolio filter set active class
         --------------------------------------------- */

        $('.portfolio-filter li').on("click",function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });


        /* ---------------------------------------------
         isotope | init Isotope
         --------------------------------------------- */

        var $container = $(".portfolio:not(.portfolio-masonry)");
        if ($.fn.imagesLoaded && $container.length > 0) {
            imagesLoaded($container, function () {
                setTimeout(function(){
                    $container.isotope({
                        itemSelector: '.portfolio-item',
                        layoutMode: 'fitRows',
                        filter: '*'
                    });

                    $(window).trigger("resize");
                    // filter items on button click
                },500);

            });
        }


        /* ---------------------------------------------
         portfolio gallery
         --------------------------------------------- */


        $('.portfolio-gallery').each(function () { // the containers for all your galleries
            $(this).find(".popup-gallery").magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
            $(this).find(".popup-gallery2").magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        });


        /* ---------------------------------------------
         portfolio filtering
         --------------------------------------------- */

        $('.portfolio-filter').on('click', 'a', function () {
            $('#filters button').removeClass('current');
            $(this).addClass('current');
            var filterValue = $(this).attr('data-filter');
            $(this).parents(".portfolio-filter-item").next().isotope({filter: filterValue});
        });

        /* ---------------------------------------------
            * popup link
        *--------------------------------------------- */

         if($('.popup-link').length) {
            $('.popup-link').magnificPopup({
                type: 'image'
            });
        }

        /* ---------------------------------------------
         * flex slider
         *--------------------------------------------- */

        if($('.flexslider').length) {
            $('.flexslider').flexslider({
                controlsContainer: $(".custom-controls-container"),
                customDirectionNav: $(".custom-navigation a"),
                controlNav: true,
            });
        }


        /* ---------------------------------------------
         * LightBox / Fancybox start
         *--------------------------------------------- */
        if($('.lightbox-image').length) {
            $('.lightbox-image').fancybox({
                openEffect  : 'elastic',
                closeEffect : 'elastic',
                helpers : {
                    media : {}
                }
            });
        }
             
        /* ---------------------------------------------
         * Scroll to Top
         *--------------------------------------------- */
        if($('.scroll-to-target').length){
            $(".scroll-to-target").on('click', function() {
              var target = $(this).attr('data-target');
               // animate
               $('html, body').animate({
                 scrollTop: $(target).offset().top
               }, 1000);

            });
        }

        /*------------------------------------------
            = FUNFACT
        -------------------------------------------*/
        
        if ($(".fun-fact").length) {

         $('.counter').appear();

            $(document.body).on('appear', '.counter', function(e) {
                var $this = $(this),
                countTo = $this.attr('data-count');

                $({ countNum: $this.text()}).animate({
                    countNum: countTo
                }, {
                    duration: 3000,
                    easing:'linear',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                });
            });
        }     
         

        /* ---------------------------------------------------------------------------
         * Paralex Backgrounds
        * --------------------------------------------------------------------------- */
        var ua = navigator.userAgent,
              isMobileWebkit = /WebKit/.test(ua) && /Mobile/.test(ua);
              if( ! isMobileWebkit && jQuery(window).width() >= 768 ){
                $.stellar({
                    horizontalScrolling : false,
                    responsive          : true
                });
        }

        // Parallax background
        function bgParallax() {
            if ($(".parallax").length) {
                $(".parallax").each(function() {
                    var height = $(this).position().top;
                    var resize     = height - $(window).scrollTop();
                    var doParallax = -(resize/5);
                    var positionValue   = doParallax + "px";
                    var img = $(this).data("bg-image");

                    $(this).css({
                        backgroundImage: "url(" + img + ")",
                        backgroundPosition: "50%" + positionValue,
                        backgroundSize: "cover"
                    });
                });
            }
        }



        /* ---------------------------------------------
          * Hide Loading Box (Preloader)
        *--------------------------------------------- */
        function handlePreloader() {
                if($('.preloader').length){
                    $('.preloader').delay(200).fadeOut(500);
                }
        }   


        /* -------------------------------------------
            * When document is Scrollig, do
        * --------------------------------------------*/
        $(window).on('scroll', function() {
            headerStyle();
        });
        /* -------------------------------------------
            *  When document is loading, do
        * --------------------------------------------*/
        $(window).load(function() {
            handlePreloader();
            bgParallax();
        });


})(window.jQuery);


/* =====================================
Template Name: bizman
Author Name: Shakil Hossain
Author URI: http://codeglim.com
Description: bizman is a modern responsive business and personal tempalte, you can use this template for your business,corporate,agency and personal purpouse.
Version:	1.2
=========================================*/     
/*================================================
[Start Activation Code]
================================================
	+ Mobile Nav
	+ Search Jquery
	+ Wow Js
	+ Main Slider
	+ Service hover
	+ Testimonial Carousel
	+ Blog Carousel
	+ Onepage Nav
	+ Clients Carousel
	+ Scrool Sticky
	+ Parallax Js
	+ Typed Js
	+ Magnific Popup
	+ Counter JS
	+ ScrollUp jquery
	+ Google Map
	+ Extra JS
	+ Preloader JS
======================================
[End Activation Code]
======================================*/ 
(function ($) {
	"use strict";
    $(document).ready(function(){
	
	/*====================================
	// 	Mobile Nav
	======================================*/ 	
	$('.nav').slicknav({
		prependTo:".mobile-nav",
	});
	
	/*====================================
	// 	Search Jquery
	======================================*/ 	
	$('.search li a').on( "click", function(){
            $('.search-form').toggleClass('active');
        });
    $('.search-form i').on( "click", function(){
            $('.search-form').toggleClass('active');
     });   
	
	/*======================================
	//  Wow JS
	======================================*/ 		
	var window_width = $(window).width();   
      if(window_width > 767){
            new WOW().init();
		}
		
	/*======================================
	// Main Slider
	======================================*/ 
	$(".slide-main").owlCarousel({
		loop:true,
		autoplay:true,
		smartSpeed: 700,
		autoplayTimeout:5000,
		center:false,
		items:1,
		nav:true,
		dots:true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	});
	var owl = $('.slide-main');
    owl.owlCarousel();
    owl.on('translate.owl.carousel', function (event) {
        $('.slide-text h1').removeClass('fadeInLeft animated').hide();
        $('.slide-text p').removeClass('fadeInLeft animated').hide();
        $('.slide-text .button').removeClass('fadeInLeft animated').hide();
    })
    owl.on('translated.owl.carousel', function (event) {
        $('.slide-text h1').addClass('fadeInLeft animated').show();
        $('.slide-text p').addClass('fadeInLeft animated').show();
        $('.slide-text .button').addClass('fadeInLeft animated').show();
    });
	
	/*======================================
	// Service Hover
	======================================*/ 
	$('.single-service').on('mouseenter', function(){
    $(' .single-service').removeClass('active');
    $(this).addClass('active');
    });
	
	$('.social li').on('mouseenter', function(){
        $(' .social li').removeClass('active');
        $(this).addClass('active');
    });

	/*======================================
	// Testimonial Carousel
	======================================*/ 
	$(".testimonial-carousel").owlCarousel({
		loop:true,
		autoplay:true,
		smartSpeed: 700,
		autoplayTimeout:5000,
		center:true,
		margin:15,
		nav:false,
		dots:true,
		responsive:{
			300: {
                items: 1,
				center:false,
            },
            480: {
                items: 1,
				center:false,
            },
            768: {
                items: 2,
				center:false,
            },
            1170: {
                items: 3,
            },
		}
	});	
	
	/*======================================
	// Blog Carousel
	======================================*/	
	$(".blog-main").owlCarousel({
		loop:true,
		autoplay:false,
		smartSpeed: 600,
		margin:15,
		nav:false,
		dots:true,
		responsive:{
			300: {
                items: 1,
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1170: {
                items: 3,
            },
		}
	});	
	
	/*======================================
	//  Onepage Nav & Smooth Scroll
	======================================*/ 
	if ($.fn.onePageNav) {
        $('.nav').onePageNav({
            currentClass: 'active',
            scrollSpeed: 600,
        });     
		$('.slicknav_nav').onePageNav({
            currentClass: 'active',
            scrollSpeed: 600,
        });
    }

	/*======================================
	//  Clients Carousel
	======================================*/ 	
	$(".clients-main").owlCarousel({
		loop:true,
		autoplay:true,
		smartSpeed: 1000,
		items:6,
		margin:10,
		nav:true,
		navText: ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
		dots:false,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:3
			},
			600:{
				items:2
			},
			1000:{
				items:6
			},
			
		}
	});
	
	/*======================================
	// Scrool Sticky
	======================================*/ 
	jQuery(window).on('scroll', function() {
        if ($(this).scrollTop() > 1) {
            $('#header').addClass("sticky");
        } else {
            $('#header').removeClass("sticky");
        }
    });
		
	/*======================================
	// Parallax Js
	======================================*/ 
	$(window).stellar({
		horizontalOffset: 40,
		verticalOffset: 150
	});
	
	/*======================================
	// Typed JS
	======================================*/ 
	$(".info").typed({
		strings: ["Business", "Acting", "Dancing"],
		typeSpeed: 150,
		loop: false
	});
	
	/*======================================
	// Magnific Popup
	======================================*/ 
	$('.video-play').magnificPopup({
        type: 'video',	
    });
	
	/*======================================
	// Counter JS
	======================================*/  
	$('.counter').counterUp({
		time: 1000
	});

	/*======================================
	// Scrool Up
	======================================*/  	
	$.scrollUp({
        scrollName: 'scrollUp',      // Element ID
        scrollDistance: 300,         // Distance from top/bottom before showing element (px)
        scrollFrom: 'top',           // 'top' or 'bottom'
        scrollSpeed: 1000,            // Speed back to top (ms)
        easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
        animation: 'fade',           // Fade, slide, none
        animationSpeed: 200,         // Animation speed (ms)
        scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
        scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
        scrollText: ["<i class='fa fa-angle-up'></i>"], // Text for element, can contain HTML
        scrollTitle: false,          // Set a custom <a> title if required.
        scrollImg: false,            // Set true to use image
        activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 2147483647           // Z-Index for the overlay
    });
	
	/*======================================
	// Google Map
	======================================*/ 
	var map = new GMaps({
			el: '.map',
			lat: 23.810332,
			lng: 90.412518,
			scrollwheel: false,
		});
		map.addMarker({
			lat: 23.810332,
			lng: 90.412518,
			title: 'Marker with InfoWindow',
			infoWindow: {
			content: '<p>Welcome to Codeglim</p>'
		}
	});
	
    });
	
	/*======================================
	// Extra JS
	======================================*/ 	
	$('.button').on("click", function (e) {
		var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 70
		}, 1000);
		e.preventDefault();
	});
		
		
	/*======================================
	// Preloader
	======================================*/ 	
	$(window).load(function(){
			$('.loader').fadeOut('slow', function(){
			$(this).remove();
		});
	});
})(jQuery);	
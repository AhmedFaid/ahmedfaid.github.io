(function ($) {

  "use strict";

    // COLOR MODE
    // // Toggle dark mode
    // $('.color-mode').click(function(){
    //     $('.color-mode-icon').toggleClass('active')
    //     $('body').toggleClass('dark-mode')
    // })

    // Function to apply theme classes
    function applyTheme(theme) {
        if (theme === 'light') {
            $('html, body').removeClass('dark-mode');
            $('.color-mode-icon').removeClass('active');
        } else {
            // Default is dark
            $('html, body').addClass('dark-mode');
            $('.color-mode-icon').addClass('active');
        }
    }

    // 1. Initial theme load (runs when DOM is ready)
    var currentTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(currentTheme);

    // 2. Toggle button handler
    $('.color-mode').off('click').on('click', function(e) {
        e.preventDefault();
        var isDark = $('body').hasClass('dark-mode');
        var newTheme = isDark ? 'light' : 'dark';
        
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // HEADER
    // Headroom.js - give the header a hide/reveal effect when scrolling
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    // Owl Carousel - project carousel
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
      autoplay:true,
      autoplayTimeout:4000,
      autoplayHoverPause:true,
	    nav:true
	});

    // SMOOTHSCROLL
    // Smooth scrolling for links with hashes
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });

    // TOOLTIP
    $('.social-links a').tooltip();

    // BACK TO TOP BUTTON LOGIC
    var $btnTop = $('#buttontop');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            $btnTop.addClass('button-top-visible');
        } else {
            $btnTop.removeClass('button-top-visible');
        }
    });

    $btnTop.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 600);
    });

})(jQuery);

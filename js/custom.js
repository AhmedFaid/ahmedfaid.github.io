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
            $('body').removeClass('dark-mode');
            $('.color-mode-icon').removeClass('active');
        } else {
            // Default is dark
            $('body').addClass('dark-mode');
            $('.color-mode-icon').addClass('active');
        }
    }

    // 1. Check preference on page load (Default to 'dark')
    var currentTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(currentTheme);

    // 2. Toggle button click event
    $('.color-mode').click(function(){
        var isDark = $('body').hasClass('dark-mode');
        
        if (isDark) {
            // Switch to light
            applyTheme('light');
            localStorage.setItem('theme', 'light');
        } else {
            // Switch to dark
            applyTheme('dark');
            localStorage.setItem('theme', 'dark');
        }
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

})(jQuery);

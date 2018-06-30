$(document).ready(function() {
    //superslides code
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    //typed code
    var typed = new Typed(".typed", {
        strings: ["Web Developer", "Web Designer", "Software Programmer"],
        typeSpeed: 90,
        loop: true,
        startDelay: 1200,
        showCursor: false
    });

    //owl carousel code
    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });

    var skillsTopOffset = $(".skillsSection").offset().top;
    
    $(window).scroll(function() {
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
                //easy pie chart
         $('.chart').easyPieChart({
            easing: 'easeInOut',
            barColor: '#fff',
            trackColor: false,
            scaleColor: false,
            lineWidth: 4,
            size: 152,
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
        }
    });

});









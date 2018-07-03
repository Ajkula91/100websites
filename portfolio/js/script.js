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
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false;
    
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

        if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
            //$(".counter").countup(200);
            $(".counter").each(function() {
                var element = $(this);
                var endVal = parseInt(element.text());

                element.countup(endVal);
            });

            countUpFinished = true;
        }

    });

    //fancy js
    $("[data-fancybox]").fancybox({
        arrows: true,
        animationEffect: "zoom",
        clickContent: false
    });

    //call isotope
    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

    $("#filters a").click(function() {

        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;

    });

});









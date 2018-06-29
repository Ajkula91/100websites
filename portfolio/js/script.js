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
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    //easy pie chart
    $('.chart').easyPieChart({
        //your options goes here
    });

});
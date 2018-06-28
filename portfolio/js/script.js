$(document).ready(function() {

    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Web Developer", "Web Designer", "Software Programmer"],
        typeSpeed: 90,
        loop: true,
        startDelay: 1200,
        showCursor: false
    });

});
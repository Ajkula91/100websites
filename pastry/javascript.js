$(function () {

	"use strict";

var topoffset = 350; //var for scrolling on time
var slideqty = $('#featured .item').length;
var wheight = $(window).height(); 
var randSlide = Math.floor(Math.random()*slideqty);


$('#featured .item').eq(randSlide).addClass('active');



$('.fullheight').css('height', wheight);


// replace IMG carousels

$('#featured .item img').each(function() {
    var imgSrc = $(this).attr('src');
    $(this).parent().css({'background-image': 'url('+imgSrc+')'})
    $(this).remove();
});

//adjust height

$(window).resize(function() {
    wheight = $(window).height();
    $('.fullheight').css('height', wheight);
});


//activate scrollspy
$('body').scrollspy({
	target: 'header .navbar',
	offset: topoffset
});


//add inbody class
	var hash = $(this).find('li.active a').attr('href');
	if(hash !== '#featured') {
		$('header nav').addClass('inbody');
	} else {
		$('header nav').removeClass('inbody');
	}

// add an inbody scrollspy fires
$('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
	var hash = $(this).find('li.active a').attr('href');
	if(hash !== '#featured') {
		$('header nav').addClass('inbody');
	} else {
		$('header nav').removeClass('inbody');
	}
});



  $('.navbar a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
});

    //Automatically generate carousel indicators
    for (var i=0; i < slideqty; i++) {
        var insertText = '<li data-target="#featured" data-slide-to="' + i + '"';
            if(i === randSlide) {
                insertText += 'class="active"'; 
            }
        insertText += '></li>';
        $('#featured ol').append(insertText);
    }

  $('.carousel').carousel({
    interval: '5000',
  	pause: false
  });

});



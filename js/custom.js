$(function(){

	// Slider
	$('.owner-slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: true,
	  arrows: false,
	  // autoplay: true,
	  // autoplaySpeed: 3000,
	});
	$(".navbar-toggler").on('click', function() {
        $(this).toggleClass("active");
    });
	var subMenu = $('.navigation .navbar-nav .sub-menu');
});
$(function(){
	$('.m-slider').slick({
		infinite: true,
		autoplay: true,
  		slidesToShow: 3,
  		slidesToScroll: 3,
  		arrows: false,
  		dots: true,
  		dotsClass: ('m-slider__dots')
	});
});
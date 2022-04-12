$(function(){
	$('.c-slider').slick({
		// prevArrow: '<button type="button" class="c-slider__btn c-slider__btn-prev"></button>',
		// nextArrow: '<button type="button" class="c-slider__btn c-slider__btn-next"></button>',
		arrows: false,
		dots: true,
		// dots:'<ul class="c-slider__dots"></ul>',
		autoplay: true

	});

	$('.r-slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		infinite:true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
		    {
		      breakpoint: 1199,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 875,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});

	$('.nav__btn').on('click', function(){
		$('.nav__list').toggleClass('nav__list--active');
	});
});
$(function(){

	// вызов фенсибокса
	$('.fancybox').fancybox();

	// //якорь вверх
	// $(function() {
	// 	$.fn.scrollToTop = function() {
	// 		if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
	// 		var scrollDiv = $(this);
	// 		$(window).scroll(function() {
	// 			if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
	// 			else $(scrollDiv).fadeIn("slow")
	// 		});
	// 		$(this).click(function() {
	// 			$("html, body").animate({
	// 				scrollTop: 0
	// 			}, "slow")
	// 		})
	// 	}
	// });
	// // вызов функции якоря
	// $(function() {
	// 	$(".btn-up").scrollToTop();
	// });

	$('.slider__block').bxSlider({
		// auto: true,
		pause: 5000,
		pager: false
	});

});
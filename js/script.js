$(function(){

	// вызов фенсибокса
	$('.fancybox').fancybox();

	//якорь вверх
    $(function() {
        $.fn.scrollToTop = function() {
            $(this).hide().removeAttr("href");
            if ($(window).scrollTop() >= 400) $(this).fadeIn("fast")
            var scrollDiv = $(this);
            $(window).scroll(function() {
                if ($(window).scrollTop() <= 400) $(scrollDiv).fadeOut("fast")
                else $(scrollDiv).fadeIn("fast")
            });
            $(this).click(function() {
                $("html, body").animate({
                    scrollTop: 0
                }, "fast")
            })
        }
    });
    
    // вызов функции якоря
    $(function() {
        $(".btn-up").scrollToTop();
    });

	$('.slider__block').bxSlider({
		auto: true,
		pause: 5000,
		pager: false
	});

	// маска 
	$('.mask').mask('+7 (999) 999-99-99');

	// вызов календаря
	$('#datepicker').datepicker({
		closeText: 'Закрыть',
		prevText: '&#x3c;Пред',
		nextText: 'След&#x3e;',
		currentText: 'Сегодня',
		monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
			'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
		],
		monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
			'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'
		],
		dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
		dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
		dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
		dateFormat: 'dd M',
		showAnim: "slideDown",
		firstDay: 1,
		isRTL: false,
		numberOfMonths: 1
	});
	

});
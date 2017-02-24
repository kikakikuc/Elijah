$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

$('.grid').isotope({
	itemSelector:'.item',
	layoutM0de: 'fitRows'
});

$('.iso-nav ul li').click(function(){
	$('.iso-nav ul li').removeClass('active');
	$(this).addClass('active');

	var selector = $(this).attr('data-filter');
	$('.grid').isotope({
		filter:selector,
	});
	return false;
});

$("nav ul li").click(function() {
	var selectedTab = $(this).attr('tab');
	$(this).addClass('active').siblings().removeClass('active');
});

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 825) {
        $('.menu').addClass('navbar-fixed-top');
    } else {
        $('.menu').removeClass('navbar-fixed-top');
    }
});

$('.counter').each(function() {
	var $this = $(this),
	  countTo = $this.attr('data-count');

	$({ countNum: $this.text()}).animate({
		countNum: countTo
		},
  		{
	    duration: 20000,
	    easing:'linear',
	    step: function() {
	      $this.text(Math.floor(this.countNum));
	    },
	    complete: function() {
	      $this.text(this.countNum);
	      //alert('finished');
	    }

  });
});


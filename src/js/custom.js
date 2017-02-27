$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 825) {
        $('.navbar').addClass('navbar-fixed-top');
    } else {
        $('.navbar').removeClass('navbar-fixed-top');
    }
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

//isotope

$(".grid").isotope({
	itemSelector: '.grid-item',
	layoutMode: 'fitRows'
});
$('.iso-nav ul li').click(function(){
    $('.iso-nav ul li').removeClass('active');
    $(this).addClass('active');
    
    var selector =$(this).attr('data-filter');
    $(".grid").isotope({
        filter: selector,
        animationOption: {
	         duration: 750,
	         easing: 'linear',
	         queue: false,
        }
    });
    return false;
});

$("nav ul li").click(function() {
	var selectedTab = $(this).attr('tab');
	$(this).addClass('active').siblings().removeClass('active');
});

$('.counter').each(function() {
	var $this = $(this),
	  countTo = $this.attr('data-count');

	$({ countNum: $this.text()}).animate({
		countNum: countTo
		},
  		{
	    duration: 10000,
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


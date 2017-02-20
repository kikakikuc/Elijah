$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

$('.grid').isotope({
	itemSelector:'.item',
	layoutM0de: 'fitRows'
});
//Isotope click function

$('.iso-nav ul li').click(function(){
	$('.iso-nav ul li').removeClass('active');
	$(this).addClass('active');

	var selector = $(this).attr('data-filter');
	$('.grid').isotope({
		filter:selector,
		itemSelector: '.item',
		percentPosition: true,
		masonry: {
		columnWidth: '.grid-sizer'
		}
	});
	return false;
});



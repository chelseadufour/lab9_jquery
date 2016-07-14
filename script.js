$('.listItem').mouseenter(function(){
	$( this ).fadeTo('slow', 0.25);
});
$('.listItem').mouseout(function(){
	$( this ).fadeTo('slow', 1.00);
});

$('.listItem').click(function(){
	$( this ).css('background-color', '#028dbe');
});

$('.listItem').click(function(){
	$( this ).html('<a href="http//www.google.com">Clicked</a>');
});


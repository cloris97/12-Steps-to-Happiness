var step = Math.floor(Math.random()*13) + 1;
$('#roll, #XMLID_654_').on('click', function(event) {
	step = Math.floor(Math.random()*13);
});
console.log('showing step ' + step);
switch (step) {
	case 1:
	$('.thank').removeClass('hidden').addClass('animated fadeIn');
	break;
	case 2:
	$('.experience').removeClass('hidden').addClass('animated fadeIn');
	break;
	case 3:
	$('.give').removeClass('hidden').addClass('animated fadeIn');
	break;
	case 4:
	$('.hike').removeClass('hidden').addClass('animated fadeIn');
	break;
	case 5:
	$('.help').removeClass('hidden').addClass('animated fadeIn');
	break;
	case 6:
	$('.meditate').removeClass('hidden').addClass('animated fadeIn');
	break;
	case 7:
	$('.eat').removeClass('hidden').addClass('animated fadeIn');
	break;
	case 8:
	$('.socialize').removeClass('hidden').addClass('animated fadeIn');
	break;
	case 9:
	$('.exercise').removeClass('hidden').addClass('animated fadeIn');
	break;
	case 10:
	$('.aim').removeClass('hidden').addClass('animated fadeIn');
	break;
	case 11:
	$('.rest').removeClass('hidden').addClass('animated fadeIn');
	break;
	default:
	$('.smile').removeClass('hidden').addClass('animated fadeIn');
}
$('section h1').addClass('animated pulse');
$('section i, section div img').mouseover(function() {
	$(this).addClass('animated rubberBand');
}).mouseleave(function(){
	$(this).removeClass('animated rubberBand');
});
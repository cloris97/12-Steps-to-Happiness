function roll() {
	// return a number from 1 to 12.
	return Math.floor(Math.random()*12) + 1;
}
// var step = parseInt(sessionStorage.getItem("rolled"));
function switchShow(n) {
	switch (n) {
		case 1:
		$('.thank').removeClass('hidden').addClass('animated fadeIn');
		$('section').not('.thank, .hidden').addClass('hidden').removeClass('animated fadeIn');
		break;
		case 2:
		$('.experience').removeClass('hidden').addClass('animated fadeIn');
		$('section').not('.experience, .hidden').addClass('hidden').removeClass('animated fadeIn');
		break;
		case 3:
		$('.give').removeClass('hidden').addClass('animated fadeIn');
		$('section').not('.give, .hidden').addClass('hidden').removeClass('animated fadeIn');
		break;
		case 4:
		$('.hike').removeClass('hidden').addClass('animated fadeIn');
		$('section').not('.hike, .hidden').addClass('hidden').removeClass('animated fadeIn');
		break;
		case 5:
		$('.help').removeClass('hidden').addClass('animated fadeIn');
		$('section').not('.help, .hidden').addClass('hidden').removeClass('animated fadeIn');
		break;
		case 6:
		$('.meditate').removeClass('hidden').addClass('animated fadeIn');
		$('section').not('.meditate, .hidden').addClass('hidden').removeClass('animated fadeIn');
		break;
		case 7:
		$('.eat').removeClass('hidden').addClass('animated fadeIn');
		$('section').not('.eat, .hidden').addClass('hidden').removeClass('animated fadeIn');
		break;
		case 8:
		$('.socialize').removeClass('hidden').addClass('animated fadeIn');
		$('section').not('.socialize, .hidden').addClass('hidden').removeClass('animated fadeIn');
		break;
		case 9:
		$('.exercise').removeClass('hidden').addClass('animated fadeIn');
		$('section').not('.exercise, .hidden').addClass('hidden').removeClass('animated fadeIn');
		break;
		case 10:
		$('.aim').removeClass('hidden').addClass('animated fadeIn');
		$('section').not('.aim, .hidden').addClass('hidden').removeClass('animated fadeIn');
		break;
		case 11:
		$('.rest').removeClass('hidden').addClass('animated fadeIn');
		$('section').not('.rest, .hidden').addClass('hidden').removeClass('animated fadeIn');
		break;
		default:
		$('.smile').removeClass('hidden').addClass('animated fadeIn');
		$('section').not('.smile, .hidden').addClass('hidden').removeClass('animated fadeIn');
	}
}
switchShow(parseInt(sessionStorage.getItem("rolled")));
$('#shuffle').on('click', function() {
	var step = roll();
	sessionStorage.setItem("rolled", step);
	window.location.replace("steps.html");
	switchShow(step);
	console.log(step);
})
// animation
$('nav i').mouseover(function() {
	$(this).css('opacity', '1').addClass('animated tada');
}).mouseleave(function(){
	$(this).css('opacity', '0.7').removeClass('animated tada');
});
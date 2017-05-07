$(document).ready(function(){





// Adds order and goes to quantity screen
$('.show').click(function(){
		$('.comfirmation').show(200);

	});
// Closes quantity screen
$('.close').click(function(){
		$('.comfirmation').hide();

	});
// Hides the page eg. list of sweets items page
$('.show').click(function(){
		$('#order_sections').hide();

	});

// shows items page again
$('.close').click(function(){
$('#order_sections').show();
	});







});
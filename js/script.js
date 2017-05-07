$(document).ready(function(){





// Adds order and goes to quantity screen
$('#show').click(function(){
		$('.box2').show(1000);

	});
// Closes quantity screen
$('#close').click(function(){
		$('.box2').hide();

	});
// Hides the page eg. list of sweets items page
$('#show').click(function(){
		$('#sections').hide();

	});

// shows items page again
$('#close').click(function(){
$('#sections').show();
	});





});
// creating the count
$("#yourWins").html(wins);
$("#yourLosses").html(losses);



// create global variables for the game
var wins=0;
var losses=0;
var userTotal=0;

// total (random number generation for the game)
var total= Math.floor((Math.random()*120) +1);
$("#randomNumber").html(total);

// crystal values (random numbers for each click of the crystal)
var cross= Math.floor((Math.random()*12) +1);
var crystalSkull= Math.floor((Math.random()*12) +1);
var diamond= Math.floor((Math.random()*12) +1);
var blue= Math.floor((Math.random()*12) +1);



// restart and reset the game
function reset (){
	total= Math.floor((Math.random()*120) +1);
	console.log(total);

	
	cross= Math.floor((Math.random()*12) +1);
	crystalSkull= Math.floor((Math.random()*12) +1);
	diamond= Math.floor((Math.random()*12) +1);
	blue= Math.floor((Math.random()*12) +1);
	userTotal=0;

	$(".finalTotal").html(userTotal);
	$("#randomNumber").html(total);  // not resetting correctly (debug)
}


// function for winning that adds to the userTotal
function winningTime(){
	alert("You Win!");
	wins++;
	$("#yourWins").html(wins);
	reset();
}


// function for losing that also adds to the userTotal
function losingTime(){
	alert("You lose. Would you like to try again?")
	losses++;
	$("#yourLosses").html(losses);
	reset();
}


// clicks for each jewel so the user receives a score
$("#cross").on ("click", function() {
	userTotal= userTotal + cross;
	console.log("New Total= " + userTotal);
	$(".finalTotal").html(userTotal);

	if (userTotal == total) {
		winningTime();
	}

	else if (userTotal > total) {
		losingTime(); 					// might have to put the reset in for the count with the else if 
	}

})


// on click events for the gems

// on click
$("#cross").on ("click", function() {
	userTotal= userTotal + cross;
	console.log("New Total= " + userTotal);
	$(".finalTotal").html(userTotal);

	// win
	if (userTotal == total) {
		winningTime();
	}

	// loss
	else if (userTotal > total) {
		losingTime();
	}

})

$("#crystalSkull").on ("click", function() {
	userTotal= userTotal + crystalSkull;
	console.log("New Total= " + userTotal);
	$(".finalTotal").html(userTotal);

	if (userTotal == total) {
		winningTime();
	}

	else if (userTotal > total) {
		losingTime();
	}

})

$("#diamond").on ("click", function() {
	userTotal= userTotal + diamond;
	console.log("New Total= " + userTotal);
	$(".finalTotal").html(userTotal);

	if (userTotal == total) {
		winningTime();
	}

	else if (userTotal > total) {
		losingTime();
	}

})

$("#blue").on ("click", function() {
	userTotal= userTotal + blue;
	console.log("New Total= " + userTotal);
	$(".finalTotal").html(userTotal);

	if (userTotal == total) {
		winningTime();
	}

	else if (userTotal > total) {
		losingTime();
	}

});

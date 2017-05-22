// creating the count
$("#yourWins").text(wins);
$("#yourLosses").text(losses);

// create global variables for the game
var wins=0;
var losses=0;
var userTotal=0;

// total (random number generation for the game)
var total= Math.floor((Math.random()*100) +19);

// crystal values (random numbers for each click of the crystal)
var cross= Math.floor((Math.random()*10) +1);
var crystalSkull= Math.floor((Math.random()*10) +1);
var diamond= Math.floor((Math.random()*10) +1);
var blue= Math.floor((Math.random()*10) +1);



// restart and reset the game
function reset (){
	total= Math.floor((Math.random()*100) +19);
	console.log(total);

	$("randomNumber").append(total);
	cross= Math.floor((Math.random()*10) +1);
	crystalSkull= Math.floor((Math.random()*10) +1);
	diamond= Math.floor((Math.random()*10) +1);
	blue= Math.floor((Math.random()*10) +1);
	userTotal=0;

	$("#finalTotal").text(userTotal);
}


// function for winning that adds to the userTotal
function winningTime(){
	alert("You Win!");
	wins++;
	$("#yourWins").text(wins);
	reset();
}


// function for losing that also adds to the userTotal
function losingTime(){
	alert("You lose. Would you like to try again?")
	losses++;
	$("#yourLosses").text(losses);
	reset();
}


// clicks for each jewel so the user receives a score
$("#cross").on ("click", function() {
	userTotal= userTotal + cross;
	console.log("New Total= " + userTotal);
	$("#finalTotal").text(userTotal);

	if (userTotal == total) {
		winningTime();
	}

	else if (userTotal > total) {
		losingTime();
	}

})

$("#cross").on ("click", function() {
	userTotal= userTotal + cross;
	console.log("New Total= " + userTotal);
	$("#finalTotal").text(userTotal);

	if (userTotal == total) {
		winningTime();
	}

	else if (userTotal > total) {
		losingTime();
	}

})

$("#crystalSkull").on ("click", function() {
	userTotal= userTotal + crystalSkull;
	console.log("New Total= " + userTotal);
	$("#finalTotal").text(userTotal);

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
	$("#finalTotal").text(userTotal);

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
	$("#finalTotal").text(userTotal);

	if (userTotal == total) {
		winningTime();
	}

	else if (userTotal > total) {
		losingTime();
	}

});

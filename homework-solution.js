// GA: JS ALien Space Battle Game
// January 18, 2016
// Christine Yi

// ASSIGNMENT: Build a game of battling alien spaceships using Javascript
// -- Begin battle with 100 hit points
// -- If your hit points go down to zero, the game is over
// -- If you destroy all the alien ships, the game is over
// -- Start out with six alien ships

// BONUS FEATURES ADDED
// [X] When game is over prompt user if they would like to play again with default settings
// [X] You can hit any alien you want, in any order
// [X] You can go back to base at the beginning of your turn to regenerate health points
// [ ] Start with one giant missile you can launch to deal 100% chance damage
// [ ] Alien ship has mega pods that must defeated before main ship can be defeated
//    (future notes for MEGA PODS: var alienShip = [
				// {alien: true, points: 50},
				// {alien: true, points: 50},
				// {alien: true, points: 50},
				// {alien: true, points: 50},
				// {alien: true, points: 50},
				// {alien: true, points: 50}]

// KNOWN BUGS
// updated 1/18/16
// getInput will register values other than specified "1" or "2"
// Even if player defeats all 6 aliens, alienTurn fires 1x again before victory screen

console.log("hello i work");


//player ship starts at 100 points
//to access playerShip points: playerShip.ship
//game ends when playerPoints <= 0
var playerShip = {ship: 100};
var playerPoints = playerShip.ship;

//alienShip has 6 living aliens (===true)
//to see if an alien is dead or alive: alienShip[i].alien1
var alienShip = [
				{alien: true},
				{alien: true},
				{alien: true},
				{alien: true},
				{alien: true},
				{alien: true}]


//Random Number Generator: returns TRUE or FALSE
//this is used multiple times in this game
var randomWeapon = function () {

	//create empty variable
	var weaponOne = null;
  var randomNumber = Math.random();

  //any number under 0.5 will make weapon true and land a hit
  if (randomNumber < 0.5) {
    var weaponOne = true;

  } else {

  	//any number over 0.5 will make weapon miss, set weapon to false
  	var weaponOne = false;
  }

    //returns new value of weaponOne (either true or false)
    return weaponOne;
}

//Player Turn
var playerTurn = function () {

	//at the beginning of each turn, prompt Base questions
	backToBase();

	//prompts for userInput
	var getInput = prompt("QUICK, fire a laser: Type '1' for Blaster-Laser or '2' Launch Rockets");
	//getInput = 1 or 2
	//Once we have an input, I want it to randomly generate 2 options: hit or miss

		//if player enters in proper 1 or 2, run randomNum generator to see outcome
		if (getInput === "1" || "2") {

		//activate randomWeapon to see if weapon is TRUE or FALSE
		randomWeapon();

		//store this TRUE/FALSE value into test
		var test = randomWeapon();

			//if weapon is true, destory alien ship
			if (test == true) {
				alert("Weapon Initiated!")

				//FUNCTION: DESTORYALIENSHIP
				destroyAlienShip();

			//if weapon generated as false, no weapons, it's a miss, turn ends
			} else {
				alert("Weapon launched! You MISSED!");

				// //FUNCTION:  START ALIEN TURN
				// alienTurn();

			}
	} else if (getInput !== "1" || "2") {
		//if player did not enter in a valid key, rerun the prompt to choose weapon
		getInput;
	}
}

/////ALIEN TURN

var alienTurn = function () {

	//run randomWeapon generator
	randomWeapon();

	//store this TRUE/FALSE value into test
	var test = randomWeapon();

	//if weapon is true, player loses 10 points
	if (test == true) {
		alert("Oh no, aliens hit you and caused -10 damage!");

		//FUNCTION PLAYER LOSES 10 POINTS
		playerDamaged();

		//run AlienRandomAttack to see if Alien attacks again
		alienRandomAttack();

	//if weapon is false, nothing happens end turn
	} else {
		alert("Aliens fired at you and you dodged it! Nice job!");
	}
}

	//new function that sets off Random Attack
	//if random number = true, Alien Turn runs again
	var alienRandomAttack = function () {

			randomWeapon();

			var test = randomWeapon();

			if (test == true) {
				alert("ALERT! Aliens have gained emotions and are attacking again!");
				alienTurn();
			}
}


//if aliens fire, PLAYER GETS DAMAGED by 10 points
//turn it so that the damage amount is customizeable???
var playerDamaged = function() {
	playerPoints -= 10;
	alert("You're at " + playerPoints + " health points now!");
	return playerPoints;
}


//functions kills alien if available (turns alienShup[i].alien = false)
var destroyAlienShip = function () {

	//ask user to choose which Alien to Kill
	var whichAlien = prompt("Which Alien do you want to target? 1, 2, 3, 4, 5, 6?");

	//match userInput to array index
	var i = whichAlien - 1;

	// input validation: if whichAlien is empty
	if (whichAlien === "") {
		alert ("That didn't work.");
		var whichAlien = prompt("Which Alien?");

		destroyAlienShip();

	//if the number of alien actually exists
	} if (i < alienShip.length) {

		//if the alien is true, make it false
		if (alienShip[i].alien === true) {
			alert("Nice! Alien #" + whichAlien + " is space dust!");

			 alienShip[i].alien = false;

		} else {

		//if the alien is already false, re-prompt used
		alert("Alien #" + whichAlien + " is already dead. HURRY choose another!");
		destroyAlienShip();
		}

	//input validation, if nothing is entered, re-prompt
	} else {

		alert("That didn't work.");
		destroyAlienShip();
	}// ends first if loop
} //ends function



//FUNCTION: check if Aliens are alive. If any of them are true, func will return false
//if it does NOT return false, then there are aliens alive
var checkAliens = function () {
	var result = true;

	//for every alien that is true, return false
	for (var i in alienShip) {
		if (alienShip[i].alien === true) {
			result = false;
		}
	//returns true or false
	} return result;
}


//Prompted if you want to go back to base
//if yes, playerPoint =+ 20
var backToBase = function () {

	//if player is not at Max Health
	if (playerPoints < 100) {
		var recharge = confirm("Do you want to go back to base and recharge?");
		if (recharge == true) {
			playerPoints += 20;
			alert("RECHARGED 20 points: you are now at " + playerPoints + " health");
		}
	}
}

//run game until playerPoints <= 0, or if checkAlines() == true
// var player = 1 as counter

var takeTurns = function() {
	while ((playerPoints > 0) && (checkAliens() == false)) {

		player = 1;

		if (player = 1) {
			playerTurn();
			player = 2;

		} if (player = 2) {
			alienTurn();
			player = 1;
		}
	}
}//ends function


//reload the page if player wants to play another battle
var playAgain = function () {

		var replay = confirm("Do you want to fight the next battle? (Y / N )");
		if (replay == true) {
			console.log("replay == true");
			//reload page, resets Player and Alien to default
			location.reload();

		} else {
			//final words from game over
			alert("Hang up your guns, soldier! You fought a good fight!");
		}
}


//runs game by alternating turns between player and computer
//game ends once either 1. player points is <1 2. alienShip is all dead
var playGame = function () {

	alert("Earth has been attacked by a horde of aliens! You are the captain of the USS Schwarzenegger, on a mission to destroy every last alien ship.")

	//initiate turn sequence
	takeTurns();

	//game stops if playerPoints has 0 or less points
	if (playerPoints <= 0) {
		alert("Oh no!!! YOU HAVE BEEN DEFEATED!!");
		//ask if Player wants to play again
		playAgain();

	//game stops if all aliens are dead
	} if (checkAliens() === true) {
		alert("VICTORY IS YOURS. You've defeated every alien! You've won the battle. But not the war!!");
		//ask if Player wants to play again
		playAgain();
	}
}//ends function


//initiate ALIEN SPACE BATTLE GAME
playGame();

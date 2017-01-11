console.log("JS file is connected to HTML! Woo!")
// var cardOne = "queen";
// var cardTwo = "king";
// var cardThree = "queen"
// var cardFour = "king"
// cardOne == cardFour;

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var createCards = function() {
	var gameBoard = document.getElementById('game-board');
		for (var i=0; i<6; i++) {
		  var newCard = document.createElement('div');
		  newCard.innerHTML = '<div class="card"></div>';
		  gameBoard.appendChild(newCard);
		}
}

createCards();


// Requirements

// Replace all of your card variables with an array of cards. 
// Once that is complete, organize all your code into functions. 
// Then, create two more functions; one should check if two cards 
// are in play, and the other should check if two cards are a match.

// 1) Declare a variable, cards, and set it equal to an array of four string elements: 'queen', 'queen', 'king', 'king'.
// 2) Declare a variable, cardsInPlay, whose value is an empty array.
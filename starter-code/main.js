console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen"
var cardFour = "king"
cardOne == cardFour;

// if (cardTwo === cardFour){
// 	alert('You found a match!');
// }

// if (cardOne === cardThree){
// 	alert('You found a match!');
// } 

var createCards = function() {
	var gameBoard = document.getElementById('game-board');
		for (var i=0; i<4; i++) {
		  var newCard = document.createElement('div');
		  newCard.innerHTML = '<div class="card"></div>';
		  gameBoard.appendChild(newCard);
		}
}

createCards();
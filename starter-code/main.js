console.log("JS file is connected to HTML! Woo!")

var cards = ['queen', 'queen', 'king', 'king', 'Guv', 'Nya'];
var cardsInPlay = [];

var createBoard = function() 
{
	var gameBoard = document.getElementById('game-board');
		for (var i=0; i<cards.length; i++) 
		{
		  var cardElement = document.createElement('div');
		  cardElement.innerHTML = '<div class="card"></div>';
		  // this will set the card's 'data-card' to be the element of the array
		  cardElement.setAttribute('data-card', cards[i]);
		  cardElement.addEventListener('click', isTwoCards);
		  gameBoard.appendChild(cardElement);
		 }
}

// checks to see if there are cards in play
var isTwoCards = function() 
{
	cardsInPlay.push(this.getAttribute('data-card'));
	window.alert(cardsInPlay);

	if (cardsInPlay.length === 2)
	{
		window.alert("you have 2 cards in play");
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

var isMatch = function(cIP)
{
	if (cIP[0] === cIP[1])
	{
		window.alert("You found a match...!");
	} else 
	{
		window.alert("Sorry, try again...");
	}
}

createBoard();



// //checks to see if there are cards in play
// function isTwoCards() {

//   // add card to array of cards in play
//   // 'this' hasn't been covered in this pre-work, but
//   // for now, just know it gives you access to the card the user clicked on
//   cardsInPlay.push(this.getAttribute('data-card'));

//   // if you have two cards in play, check for a match
//   if (cardsInPlay.length === 2) {

//     // pass the cardsInPlay as an argument to the isMatch function
//     isMatch(cardsInPlay);

//     // clear cards in play array for your next try
//     cardsInPlay = [];

//   }

// }
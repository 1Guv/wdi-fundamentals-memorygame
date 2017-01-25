console.log("JS file is connected to HTML! Woo!")

var cards = ['queen', 'queen', 'king', 'king', 'joker', 'joker'];
cards.sort(function(a, b){return 0.5 - Math.random()}); // Shuffle the array cards
var cardsInPlay = [];

var createBoard = function() // creates the Board from the cards array so with 6 cards
{
	var gameBoard = document.getElementById('game-board'); // stores the HTML DIV id for the starting location for the game board

		for (var i=0; i<cards.length; i++) // goes through the array to append them to the board
		{
		  var cardElement = document.createElement('div'); // creating a div code and stored as a variable
		  cardElement.innerHTML = '<div class="card"></div>'; // the actual HTML to be appended to the HTML
		  cardElement.setAttribute('data-card', cards[i]); // this will set the card's 'data-card' to be the element of the array
		  cardElement.addEventListener('click', isTwoCards); // on click the isTwoCards function is invoked
		  gameBoard.appendChild(cardElement); // appending the HTML to the game board
		 }
}

var isTwoCards = function() // checks to see if there are cards in play
{
	var dataCard = this.getAttribute('data-card');
	cardsInPlay.push(dataCard);
	// window.alert(cardsInPlay); // used for testing the output

	// show card pictures
	if (dataCard === 'king') 
	{
		this.innerHTML = '<div class="card"><img src="https://goo.gl/OO1EPP" alt="King" /></div>'; // King
	} else if (dataCard === 'queen')
	{
		this.innerHTML = '<div class="card"><img src="https://goo.gl/n0HA9D" alt="Queen" /></div>'; // Queen
	} else
	{
		this.innerHTML = '<div class="card"><img src="https://goo.gl/nC9rji" alt="Queen" /></div>'; // Joker
	}


	if (cardsInPlay.length === 2)
	{
		// window.alert("you have 2 cards in play"); // used for testing the output
		isMatch(cardsInPlay);
		cardsInPlay = [];

	}
}

var isMatch = function(cIP) // CIP is short for cards in play
{
	if (cIP[0] === cIP[1]) // comparing the cards in the array to see if they match
	{
		window.alert("You found a match...!");
	} else 
	{
		window.alert("Sorry, try again...");
		clearBoard(); // invokes a function to clear the board
	}
}

var clearBoard = function() // function to clear the board when there is a match
{
	// window.alert("clearBoard 1"); // used this for testing code
	var x = document.getElementsByClassName('card'); // array of all elements using the Class name so the HTML can be cleared
	for (var i = 0; i < x.length; i++) 
	{
    	x[i].innerHTML = ""; // clear the HTML so the board starts over
	}
}

createBoard();
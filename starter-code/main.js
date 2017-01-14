console.log("JS file is connected to HTML! Woo!")

var cards = ['queen', 'queen', 'king', 'king', 'joker', 'joker'];
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
	var dataCard = this.getAttribute('data-card');
	cardsInPlay.push(dataCard);
	// used the below for testing the output
	// window.alert(cardsInPlay);

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
		// used the below for testing the output
		// window.alert("you have 2 cards in play");
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
		clearBoard();
	}
}

var clearBoard = function()
{
	// window.alert("clearBoard 1"); // used this for testing code
	var x = document.getElementsByClassName('card');
	for (var i = 0; i < x.length; i++) 
	{
    	x[i].innerHTML = "";
	}
	// window.alert("clearBoard 2"); // used this for testing
}

createBoard();
'use strict';
battleship.board = {};


/* creates empty ship squares*/
battleship.board.boardSquare = function () {

	var that = {};
	that.squareShip = false;
	that.squareShipHit = false;
	that.squareHit = false;
	that.squareEmpty = true;

	return that;
};
/* returns a board with empty shipsquares, with size number of squares */
battleship.board.createBoard = function (size) {
	var board = [];
	for (var r = 0; r < size; r = r + 1) {
		board[r] = [];
		for (var c = 0; c < size; c = c + 1) {
			board[r][c] = battleship.board.boardSquare();
		}
	}
	return board;
};
// returns array with ships coordinates
battleship.board.makeShips = function (ships, boardSize) {

	var shipsArr = [];


	for (var i = 0; i < ships; i++) {
		var newString = '';

		for (var j = 0; j < 2; j++) {

			var n = Math.floor(Math.random() * boardSize);

			newString = newString + n;
		}

		shipsArr.push(newString);
	}
	return shipsArr;

};
//adds ships to the gameboard, returns gameboard with ships
battleship.board.addShips = function (gameBoard, shipArr) {


	for (var i = 0; i < shipArr.length; i++) {
		var shipStr = shipArr[i];
		var x = Number(shipStr[0]);
		var y = Number(shipStr[1]);
		gameBoard[x][y].squareShip = true;

	}

};
//updates the gameboard 
battleship.board.updateBoard = function (gameBoard, guessStr) {

	var x = Number(guessStr[0]) - 1;
	var y = Number(guessStr[1]) - 1;

	if (gameBoard[x][y].squareShip === true) {
		gameBoard[x][y].squareShipHit = true;
		gameBoard[x][y].squareEmpty = false;
		alert('true');

	} else {
		gameBoard[x][y].squareHit = true;
		gameBoard[x][y].squareEmpty = false;

		alert('false');
	}

};
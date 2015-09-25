'use strict';
console.log('battleship.ui');

battleship.ui = {};
/* sckickar med bordet i (board)*/
battleship.ui.showBoard = function (board, shipsCo) {
	var textBoard = '';
	for (var r = 0; r < board.length; r = r + 1) {

		for (var c = 0; c < board.length + 1; c = c + 1) {

			if (c < board.length + 1) {
				textBoard = textBoard + '|';
			}
			if (c < board.length) {

				if (board[r][c].squareShipHit === true) {

					textBoard = textBoard + 'X';

				}
				if (board[r][c].squareHit === true) {

					textBoard = textBoard + 'O';

				}
				if (board[r][c].squareEmpty === true) {

					textBoard = textBoard + '__'; // \n newline in an alert 
				}
			}
		}
		textBoard = textBoard + '\n';
	}
	alert(textBoard);
};

battleship.ui.getInput = function (boardSize) {

	var strCoord;
	while (true) {

		strCoord = prompt('enter new coordinates');
		if (battleship.logic.correct(strCoord, boardSize) === true) {
			break;
		}


	}

	return strCoord;

};
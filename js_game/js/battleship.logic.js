'use strict';
battleship.logic = {};

battleship.logic.correct = function (strCoord, boardSize) {
	var value = false;

	if (strCoord[0] < boardSize + 1) {

		if (strCoord[1] < boardSize + 1) {

			if (strCoord.length < 3) {

				if (strCoord.length > 1) {

					value = true;
				}
			}


		}

	}

	return value;
};
battleship.logic.gameOver = function (guessNR, boardSize, guessTimes) {
	var str = 'loose';

	if (guessNR > guessTimes - 1) {
		str = 'loose';


		return str;
	}

};
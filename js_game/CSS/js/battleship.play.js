'use strict';
battleship.play = function () {
	var boardSize = Number(prompt('size?')),
		ships = 20,
		//antal skepp
		guessNR = 0,
		guessTimes = 5,
		// gissningar
		gameBoard = battleship.board.createBoard(boardSize),
		// tom 2dim array med object i varje ruta
		shipArr = battleship.board.makeShips(ships, boardSize),
		// array med coordianter för varje skepp
		guessCoord = '';
	// gissningen som användaren skrivit i rutan som poppar upp 



	battleship.board.addShips(gameBoard, shipArr); //lägger till skeppen i spelplanen ( true, false)

	while (true) {
		// loopar hur många gånger du får gissa 
		guessNR += 1;

		// håller koll på hur många gånger du gissat
		battleship.ui.showBoard(gameBoard, ships);
		// ritar ut spelplanen
		guessCoord = battleship.ui.getInput(boardSize);
		battleship.board.updateBoard(gameBoard, guessCoord);


		if (battleship.logic.gameOver(guessNR, boardSize, guessTimes) === 'loose') {
			alert('you lost!!');
			break;
		}
	}
	battleship.ui.showBoard(gameBoard, ships);
};
import Player = require('../src/Player');
import Deck = require('../src/Deck');
import Inventory = require('../src/Inventory');
import Pack = require('../src/Pack');
import Card = require('../src/Card');

class Game {
	player:Player;

	constructor() {
		this.player = new Player('tehaaron', new Deck(), new Inventory(), 100, 50, 0, 0 );

		this.player.deck.addCard(new Card('TestGuy', 1, 1, 1, 10, 10, 0));

		console.log(this.player);
	}
} export = Game;
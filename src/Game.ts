import Player = require('../src/Player');
import Deck = require('../src/Deck');
import Inventory = require('../src/Inventory');
import Pack = require('../src/Pack');

class Game {
	player:Player;

	constructor() {
		this.player = new Player('tehaaron', new Deck(), new Inventory(), 100, 50, 0, 0 );

		this.player.buyPack(1);

		console.log(this.player);
	}
} export = Game;
import Player = require('../src/Player');
import Deck = require('../src/Deck');
import Inventory = require('../src/Inventory');
import Pack = require('../src/Pack');
import Card = require('../src/Card');

class Game {
	player:Player;

	constructor() {
		this.player = new Player('tehaaron', new Deck(), new Inventory(), 100, 50, 0, 0 );

		this.player.deck.addCard(new Card('TestGuy', 1, 1, 1, 10, 10, 0)); //This works!
		/* These wont work:
		this.player.deck.addCard(new Card('TestGuy', Ground, Human, Common, 10, 10, 0));
		this.player.deck.addCard(new Card('TestGuy', Card.type.Ground, Card.race.Human, Card.rarity.Common, 10, 10, 0));
		this.player.deck.addCard(new Card('TestGuy', Card.CardType.Ground, Card.CardRace.Human, Card.CardRarity.Common, 10, 10, 0));
		plus a few more attempts. Why?
		*/
		console.log(this.player);
	}
} export = Game;
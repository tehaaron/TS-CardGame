import Player = require('../src/Player');
import CommanderLlama = require('../src/enemies/CommanderLlama');
import Deck = require('../src/Deck');
import Inventory = require('../src/Inventory');
import Pack = require('../src/Pack');
import Card = require('../src/Card');
import Marine = require('../src/cards/Marine');

class Game {
	player:Player;
	enemy:CommanderLlama;

	constructor() {
		this.player = new Player('tehaaron', new Deck(), new Inventory(), 100, 50, 0, 0 );

		this.player.deck.addCard2Deck(new Card('TestGuy', 1, 1, 1, 10, 10, 0)); //This works!
		this.player.deck.addCard2Deck(new Marine());//This works!
		/* These wont work:
		this.player.deck.addCard(new Card('TestGuy', Ground, Human, Common, 10, 10, 0));
		this.player.deck.addCard(new Card('TestGuy', Card.type.Ground, Card.race.Human, Card.rarity.Common, 10, 10, 0));
		this.player.deck.addCard(new Card('TestGuy', Card.CardType.Ground, Card.CardRace.Human, Card.CardRarity.Common, 10, 10, 0));
		plus a few more attempts. Why?
		*/
		console.log(this.player);

		this.enemy = new CommanderLlama();

		console.log(this.enemy);
	}
} export = Game;
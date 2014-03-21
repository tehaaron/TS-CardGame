import Player = require('../src/Player');
import CommanderLlama = require('../src/enemies/CommanderLlama');
import Pack = require('../src/Pack');
import Card = require('../src/Card');
import NoviceSniper = require('../src/cards/NoviceSniper');
import Marine = require('../src/cards/Marine');
import Battle = require('../src/Battle');
import Sectoid = require('../src/cards/Sectoid');
import A1Bot = require('../src/cards/A1Bot');

class Game {

	player:Player;
	enemy:CommanderLlama;
	battle:Battle;
	$scope:ng.IScope;
	$sce:ng.ISCEService;

	constructor($scope:ng.IScope, $sce:ng.ISCEService) {
		this.player = new Player('tehaaron', [], [], 100, 50, 0, 0 );

		//this.player.addCard2Deck(new Card('TestGuy', 1, 1, 1, 10, 10, 0)); //This works!
		this.player.addCard2Deck(new Marine());
		this.player.addCard2Deck(new NoviceSniper());
		this.player.addCard2Deck(new Sectoid());
		this.player.addCard2Deck(new A1Bot());
		this.player.addCard2Deck(new NoviceSniper());
		this.player.addCard2Deck(new Marine());
		/* These wont work:
		this.player.addCard(new Card('TestGuy', Ground, Human, Common, 10, 10, 0));
		this.player.addCard(new Card('TestGuy', Card.type.Ground, Card.race.Human, Card.rarity.Common, 10, 10, 0));
		this.player.addCard(new Card('TestGuy', Card.CardType.Ground, Card.CardRace.Human, Card.CardRarity.Common, 10, 10, 0));
		plus a few more attempts. Why?
		*/
		console.log(this.player);

		this.enemy = new CommanderLlama();

		console.log(this.enemy);

		this.battle = new Battle($scope, $sce, this.player, this.enemy, 100, []);

		console.log(this.battle);
	}
} export = Game;
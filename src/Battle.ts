import Player = require('../src/Player');
import Enemy = require('../src/Enemy');
import Reward = require('../src/Reward');

class Battle {
	player:Player;
	enemy:Enemy;
	money:number;
	reward:Reward.Reward;

	constructor(player:Player, enemy:Enemy, money:number, reward?:Reward.Reward) {
		this.player = player;
		this.enemy = enemy;
		this.money = money;
		this.reward = reward;

		this.enemy.deck.shuffle();
		this.player.deck.shuffle();
		this.fight();
	}

	fight() {
		//1. call playerTurn to select card
		this.playerTurn();
		//2. once card is placed on the table, commence fighting - use a promise??
		//3. if there is an adjacent card, attack it, if not attack commander
		//4. if commander hp reaches 0 then victory and award money and possibly reward
	}

	enemyTurn() {
		//1. Automatically play splice(0,0) card and remove it from the deck
	}

	playerTurn() {
		//1. paint card select window - 3 cards from deck
		this.player.deck.keepThree(); //remove cards from deck and add them to the playable cards array (active)
		$.when($("#game").append("<div id='playableCards'></div>")).done($("#playableCards").append(this.player.deck.active[0].image, this.player.deck.active[1].image, this.player.deck.active[2].image));
		//$("")
		//2. player picks the card they want to play by clicking it
		//3. Card is removed from the select window/deck (splice) and placed one the table
	}
} export = Battle;
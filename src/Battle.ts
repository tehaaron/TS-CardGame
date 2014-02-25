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

		this.fight();
	}

	fight() {
		//1. call playerTurn to select card
		$.when(this.playerTurn()).done($("#playableCards").append(this.player.deck.deck[0].image, this.player.deck.deck[1].image, this.player.deck.deck[2].image));
		//2. once card is placed on the table, commence fighting - use a promise??
		//3. if there is an adjacent card, attack it, if not attack commander
		//4. if commander hp reaches 0 then victory and award money and possibly reward
	}

	enemyTurn() {
		//1. Automatically play splice(0,0) card and remove it from the deck
	}

	playerTurn() {
		//1. paint card select window - 3 cards from deck
		$("#game").append("<div id='playableCards'></div>");
		//2. player picks the card they want to play by clicking it
		//3. Card is removed from the select window/deck (splice) and placed one the table
	}
} export = Battle;
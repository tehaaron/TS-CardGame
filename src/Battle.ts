import Player = require('../src/Player');
import Enemy = require('../src/Enemy');
import Reward = require('../src/Reward');

class Battle {
	player:Player;
	enemy:Enemy;
	reward:Reward.Reward;
	money:number;

	constructor(player:Player, enemy:Enemy, reward:Reward.Reward, money:number) {
		this.player = player;
		this.enemy = enemy;
		this.reward = reward;
		this.money = money;
	}

	fight() {
		//1. call playerTurn to select card
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
}
import Player = require('../src/Player');
import Enemy = require('../src/Enemy');
import Reward = require('../src/Reward');
import Card = require('../src/Card');

class Battle {
	player:Player;
	enemy:Enemy;
	money:number;
	inPlay:Card[];
	reward:Reward.Reward;

	constructor(player:Player, enemy:Enemy, money:number, inPlay:Card[], reward?:Reward.Reward) {
		this.player = player;
		this.enemy = enemy;
		this.money = money;
		this.inPlay = [];
		this.reward = reward;

		this.enemy.deck.shuffle();
		this.player.deck.shuffle();
		this.fight();
	}

	fight() {
		//1. call playerTurn to select card
		$.when(this.playerTurn()).done(console.log("Round1")); //this doesnt work...done fires on page load...I am going it wrong
		//2. once card is placed on the table, commence fighting - use a promise??
		//3. if there is an adjacent card, attack it, if not attack commander
		//4. if commander hp reaches 0 then victory and award money and possibly reward
	}

	enemyTurn() {
		//1. Automatically play splice(0,0) card and remove it from the deck
		console.log("Enemy's turn");
	}

	playerTurn() {
		//1. paint card select window - 3 cards from deck
//		this.player.deck.keepThree(); //remove cards from deck and add them to the playable cards array (active)
		$("#game").append("<div id='playableCards'></div>");
		$("#playableCards").append(this.player.deck.deck[0].getHTML("0"), this.player.deck.deck[1].getHTML("1"), this.player.deck.deck[2].getHTML("2"));
		$("div.playable").on("click", (event:any) => {
			var play = this.player.deck.deck.splice(+event.target.id, 1);
			console.log(play);
			this.inPlay.concat(play);
			console.log(this.inPlay);
			console.log(this.player.deck.deck);
			$(event.target).removeClass("playable");
			$(event.target).remove();
			$("#playableCards").remove();
			//call function that splices clicked card from array and pushes into inPlay array
		});

		//2. player picks the card they want to play by clicking it
		//3. Card is removed from the select window/deck (splice) and placed one the table
	}

} export = Battle;
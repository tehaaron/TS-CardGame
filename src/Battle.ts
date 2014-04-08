import Player = require('../src/Player');
import Enemy = require('../src/Enemy');
import Reward = require('../src/Reward');
import Card = require('../src/Card');

class Battle {
	player:Player;
	enemy:Enemy;
	money:number;
	inPlayPlayer1:Card[];
	inPlayPlayer2:Card[];
	playerTurn:boolean;
	reward:Reward.Reward;
	$scope:ng.IScope;
	$sce:ng.ISCEService;

	constructor($scope:ng.IScope, $sce:ng.ISCEService, player:Player, enemy:Enemy, money:number, inPlayPlayer1:Card[], inPlayPlayer2:Card[], playerTurn:boolean, reward?:Reward.Reward) {
		this.$scope = $scope;
		this.$sce = $sce;
		this.player = player;
		this.enemy = enemy;
		this.money = money;
		this.inPlayPlayer1 = [];
		this.inPlayPlayer2 = [];
		this.playerTurn = playerTurn;
		this.reward = reward;

		this.enemy.shuffle();
		this.player.shuffle();
//		this.fight();
	}

	cardManager() {
		console.log("initiated");
	}

	getPlayedCard($index) {
		var start:number = 0;
		var end:number = 1;
			if (this.playerTurn == true) {
				var nextCard:Card[] = this.player.playCard($index);
				this.inPlayPlayer1 = this.inPlayPlayer1.concat(nextCard);
				console.log(this.inPlayPlayer1);
				this.playerTurn = false;
			} else if (this.playerTurn == false) {
				console.log(start+","+end);
				var nextCard:Card[] = this.enemy.deck.slice(start,end);
				this.inPlayPlayer2 = this.inPlayPlayer2.concat(nextCard);
				console.log(this.inPlayPlayer2);
				this.playerTurn = true;
				start+=1;
				end+=1;
			}
	}
/*
	fight() {
		//1. call playerTurn to select card
		this.playerTurn(); //this doesnt work...done fires on page load...I am going it wrong
		//2. once card is placed on the table, commence fighting - use a promise??
		//3. if there is an adjacent card, attack it, if not attack commander
		//4. if commander hp reaches 0 then victory and award money and possibly reward
	}

	enemyTurn() {
		//1. Automatically play splice(0,0) card and remove it from the deck
		console.log("Enemy's turn");
	}

	playerTurn() {
		$("#game").append("<div id='playableCards'></div>");
		$("#playableCards").append(this.player.deck[0].getHTML(this.$sce,"0"), this.player.deck[1].getHTML(this.$sce,"1"), this.player.deck[2].getHTML(this.$sce,"2"));
		$("div.playable").on("click", (event:any) => {
			var play = this.player.deck.splice(+event.target.id, 1);
			this.inPlayPlayer1.push(play[0]);
			$(event.target).removeClass("playable");
			$(event.target).remove();
			$("#playableCards").remove();
		});
	}
*/
} export = Battle;

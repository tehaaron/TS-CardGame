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
	$scope:ng.IScope;
	$sce:ng.ISCEService;

	constructor($scope:ng.IScope, $sce:ng.ISCEService, player:Player, enemy:Enemy, money:number, inPlay:Card[], reward?:Reward.Reward) {
		this.$scope = $scope;
		this.$sce = $sce;
		this.player = player;
		this.enemy = enemy;
		this.money = money;
		this.inPlay = inPlay;
		this.reward = reward;

		this.enemy.shuffle();
		this.player.shuffle();
		this.fight();
	}

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
			this.inPlay.push(play[0]);
			$(event.target).removeClass("playable");
			$(event.target).remove();
			$("#playableCards").remove();
		});
	}

} export = Battle;

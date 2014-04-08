import Pack = require('../src/Pack');
import Card = require('../src/Card');
import Battle = require('../src/Battle');

class Player {
	card:Card;

	name:string;
	deck:Card[];
	inventory:Card[];
	money:number;
	actionPoints:number;
	organicMaterial:number;
	mechanicalParts:number;

	constructor(name:string, deck:Card[], inventory:Card[], money:number, actionPoints:number, organicMaterial:number, mechanicalParts:number) {
		this.name = name;
		this.deck = [];
		this.inventory = [];
		this.money = money;
		this.actionPoints = actionPoints;
		this.organicMaterial = organicMaterial;
		this.mechanicalParts = mechanicalParts;

//		this.perpetualActionPoints();
	}

	perpetualActionPoints() {
		var n = this.actionPoints
			, timer = setInterval(this.perpetualActionPoints.bind(this), 60000);
		if (n < 100) {
			n += 1;
			this.addActionPoints(1);

			console.log(this.actionPoints); //testing log
		} else if (n === 100) { //for testing to stop memory leak
			timer = null;

			console.log("Done"); 
		}
	}

	playCard($index) {
		return this.deck.splice($index, 1);
	}

	shuffle() {
		var n = 8;
		var i, j, k;
		var temp;
		for (i = 0; i < n; i += 1 ) {
			for (j = 0; j < this.deck.length; j += 1) {
				k = Math.floor(Math.random() * this.deck.length);
				temp = this.deck[j];
				this.deck[j] = this.deck[k];
				this.deck[k] = temp; 
			}
		}
	}
/*
	keepThree() {
		var n = 3;
		if (this.active.length === 0) {
			var draw = this.deck.splice(0,3);
			this.active = this.active.concat(draw);
			//testing logs
			console.log('keepThree drew 3: '+draw);
			//
		} else if (this.active.length <= 2) {
			var drawOne = this.deck.splice(0,1);
			this.active = this.active.concat(drawOne);
			//testing logs
			console.log('keepThree drew 1: '+drawOne);
			//
		}
	}
*/
	addCard2Inventory(card:Card) {
		this.inventory.push(card);
	}

	addCard2Deck(card:Card) {
		this.deck.push(card);
	}

	addMoney(n:number) {
		this.money += n;
	}

	addActionPoints(n:number) {
		this.actionPoints += n;
	}

	addOrganiceMaterial(n:number) {
		this.organicMaterial += n;
	}

	addMechanicalParts(n:number) {
		this.mechanicalParts += n;
	}

	removeMoney(n:number) {
		this.money -= n;
	}

	removeActionPoints(n:number) {
		this.actionPoints -= n;
	}

	removeOrganiceMaterial(n:number) {
		this.organicMaterial -= n;
	}

	removeMechanicalParts(n:number) {
		this.mechanicalParts -= n;
	}

	buyPack(n:number) {
		var x = n * 4;
		if (this.inventory.length <= (50 - x) && this.money >= (100 * n)) {
			this.money = this.money - (100 * n);
			var tempPack = new Pack();
			var draw = tempPack.pack.splice(0,3);
			this.inventory = this.inventory.concat(draw);
			//testing logs
			console.log(tempPack);
			console.log(draw);
			//
			console.log('You purchased '+ n +' pack(s)');
		} else { console.log('Error, nothing purchased'); }
	}
} export = Player;
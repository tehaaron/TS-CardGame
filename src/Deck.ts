import Card = require('../src/Card');

class Deck {
	card:Card;
	deck: Card[];
//	active: Card[];

	constructor() {
		this.deck = [];
//		this.active = [];

		this.shuffle();
//		this.keepThree();
	}

	addCard2Deck(card:Card) {
		this.deck.push(card);
	}
/*
	addCard2Active(card:Card) {
		this.active.push(card);
	}

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
} export = Deck;
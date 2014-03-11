import Card = require('../src/Card');

class Enemy {
	name: string;
	deck: Card[];

	constructor(name:string, deck:Card[]) {
	    this.name = name;
	    this.deck = [];

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

	addCard2Deck(card:Card) {
		this.deck.push(card);
	}


} export = Enemy;

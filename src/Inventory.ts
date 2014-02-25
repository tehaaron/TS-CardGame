import Card = require('../src/Card');

class Inventory {
	card:Card;
	inventory: Card[];

	constructor() {
		this.inventory = [];
	
	}

	addCard(card:Card) {
		this.inventory.push(card);
	}
} export = Inventory;
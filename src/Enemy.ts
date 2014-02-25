import Deck = require('../src/Deck');
import Card = require('../src/Card');

class Enemy {
	name: string;
	deck: Deck;

	constructor(name:string, deck:Deck) {
	    this.name = name;
	    this.deck = deck;
	}

} export = Enemy;

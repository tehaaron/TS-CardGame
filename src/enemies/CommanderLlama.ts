import Enemy = require('../Enemy');
import Deck = require('../Deck');
import Marine = require('../cards/Marine');

class CommanderLlama extends Enemy {
	constructor() { //need some easy way to add predetermined cards to the deck, they can be hard coded
		super(
			'Commander Llama'
			, new Deck() //I dont want to have to call new card, I just want an empty array
			);
		this.deck.addCard2Deck(new Marine());
	}
} export = CommanderLlama;
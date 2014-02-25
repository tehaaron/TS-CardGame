import Enemy = require('../Enemy');
import Deck = require('../Deck');
import NoviceSniper = require('../cards/NoviceSniper');

class CommanderLlama extends Enemy {
	constructor() { 
		super(
			'Commander Llama'
			, new Deck()
			);
		this.deck.addCard2Deck(new NoviceSniper());
	}
} export = CommanderLlama;
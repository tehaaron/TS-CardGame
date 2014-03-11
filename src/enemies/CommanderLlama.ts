import Enemy = require('../Enemy');
import NoviceSniper = require('../cards/NoviceSniper');

class CommanderLlama extends Enemy {
	constructor() { 
		super(
			'Commander Llama'
			, []
			);
		this.addCard2Deck(new NoviceSniper());
	}
} export = CommanderLlama;
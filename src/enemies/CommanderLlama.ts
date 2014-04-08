import Enemy = require('../Enemy');
import NoviceSniper = require('../cards/NoviceSniper');
import Marine = require('../cards/Marine');
import Sectoid = require('../cards/Sectoid');
import A1Bot = require('../cards/A1Bot');

class CommanderLlama extends Enemy {
	constructor() { 
		super(
			'Commander Llama'
			, []
			);
		this.addCard2Deck(new NoviceSniper());
		this.addCard2Deck(new NoviceSniper());
		this.addCard2Deck(new Marine());
		this.addCard2Deck(new Sectoid());
		this.addCard2Deck(new A1Bot());
		this.addCard2Deck(new Sectoid());
	}
} export = CommanderLlama;
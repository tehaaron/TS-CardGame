import Card = require('../src/Card');
import Marine = require('../src/cards/Marine');
import A1Bot = require('../src/cards/A1Bot');
import Sectoid = require('../src/cards/Sectoid');
import NoviceSniper = require('../src/cards/NoviceSniper');

class Pack {
	pack: Card[];

	constructor() {
		this.pack = [];

		this.createPack();	
	}

	createPack() {
		for (var i = 0; i < 5; i += 1) {
			this.pack.push(new Marine());
			this.pack.push(new A1Bot());
			this.pack.push(new Sectoid());
		};

		for (var i = 0; i < 5; i += 1) {
			this.pack.push(new NoviceSniper());
		};

		return this.pack;
	}
} export = Pack;
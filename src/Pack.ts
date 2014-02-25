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
		this.shuffle();
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

	}

	shuffle() {
		var n = 8;
		var i, j, k;
		var temp;
		for (i = 0; i < n; i += 1 ) {
			for (j = 0; j < this.pack.length; j += 1) {
				k = Math.floor(Math.random() * this.pack.length);
				temp = this.pack[j];
				this.pack[j] = this.pack[k];
				this.pack[k] = temp; 
			}
		}
	}

} export = Pack;
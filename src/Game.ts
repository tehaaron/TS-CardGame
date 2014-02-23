import Player = require('../src/Player');
import Deck = require('../src/Deck');
import Inventory = require('../src/Inventory');
import Pack = require('../src/Pack');


		var test = new Player('tehaaron', new Deck(), new Inventory(), 100, 50, 0, 0 );

		test.buyPack(1);

		console.log(test);

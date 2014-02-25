import TestArray = require('../src/TESTArray');
import Stuff = require('../src/TESTStuff');

class Game {

	constructor() {
		var test  = new TestArray();

		test.addStuff(new Stuff('MyName'));
		test.addStuff(new Stuff('AnotherName'));

		console.log(test);
	}
} export = Game;
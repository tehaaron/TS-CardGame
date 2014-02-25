import Stuff = require('TESTStuff');

class TestArray {
	array:Stuff[];
	newStuff:Stuff;
	constructor() {
		this.array = [];
	}

	addStuff(newStuff:Stuff) {
		this.array.push(newStuff);
	}
} export  = TestArray;
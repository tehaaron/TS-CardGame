import Card = require('../src/Card');
import CardRace = require('../src/CardRace');
import CardRarity = require('../src/CardRarity');
import CardType = require('../src/CardType');

class Marine extends Card {
	constructor() {
	    super(
	    	'Marine'
	    	, CardType.Ground
	    	, CardRace.Human
	    	, CardRarity.Common
	    	, 3
	    	, 1
	    	, 0
		);
	}
}
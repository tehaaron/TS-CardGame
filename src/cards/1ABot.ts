import Card = require('../src/Card');
import CardRace = require('../src/CardRace');
import CardRarity = require('../src/CardRarity');
import CardType = require('../src/CardType');

class 1ABot extends Card {
	constructor() {
	    super(
	    	'1A Bot'
	    	, CardType.Ground
	    	, CardRace.Robot
	    	, CardRarity.Common
	    	, 2
	    	, 2
	    	, 0
		);
	
	     // Content
	}
}
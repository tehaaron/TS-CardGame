import Card = require('../src/Card');
import CardRace = require('../src/CardRace');
import CardRarity = require('../src/CardRarity');
import CardType = require('../src/CardType');

class Sectoid extends Card {
	constructor() {
	    super(
	    	'Sectoid'
	    	, CardType.Ground
	    	, CardRace.Alien
	    	, CardRarity.Common
	    	, 1
	    	, 3
	    	, 1
		);
	
	     // Content
	}
}
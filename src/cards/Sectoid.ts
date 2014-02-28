import Card = require('../Card');
import Race = require('../CardRace');
import Rarity = require('../CardRarity');
import Type = require('../CardType');

class Sectoid extends Card {
	constructor() {
	    super(
	    	'Sectoid'
	    	, Type.CardType.Ground
	    	, Race.CardRace.Alien
	    	, Rarity.CardRarity.Common
	    	, 1
	    	, 3
	    	, 1
	    	, "sectoid"
		);
	
	     // Content
	}
} export = Sectoid;
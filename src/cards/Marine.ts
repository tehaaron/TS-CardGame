import Card = require('../Card');
import Race = require('../CardRace');
import Rarity = require('../CardRarity');
import Type = require('../CardType');

class Marine extends Card {
	constructor() {
	    super(
	    	'Marine'
	    	, Type.CardType.Ground
	    	, Race.CardRace.Human
	    	, Rarity.CardRarity.Common
	    	, 3
	    	, 1
	    	, 0
	    	, "marine"
		);
	}
} export = Marine;
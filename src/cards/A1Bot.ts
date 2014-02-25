import Card = require('../Card');
import Race = require('../CardRace');
import Rarity = require('../CardRarity');
import Type = require('../CardType');

class A1Bot extends Card {
	constructor() {
	    super(
	    	'1A Bot'
	    	, Type.CardType.Ground
	    	, Race.CardRace.Robot
	    	, Rarity.CardRarity.Common
	    	, 2
	    	, 2
	    	, 0
		);
	}
} export = A1Bot;
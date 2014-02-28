import Card = require('../Card');
import Race = require('../CardRace');
import Rarity = require('../CardRarity');
import Type = require('../CardType');
import Ability = require('../Ability');
import Snipe = require('../abilities/Snipe');

class NoviceSniper extends Card {
	constructor() {
	    super(
	    	'Novice Sniper'
	    	, Type.CardType.Ground
	    	, Race.CardRace.Human
	    	, Rarity.CardRarity.Common
	    	, 1
	    	, 1
	    	, 0
	    	, "noviceSniper"
	    	, []
		);

		this.addAbility(new Snipe(1));
	}
} export = NoviceSniper;
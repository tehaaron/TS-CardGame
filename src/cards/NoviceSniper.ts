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
	    	, "<div class='noviceSniper'><h3>Novice Sniper</h3><p>Snipe 1</p></div>"
	    	, []
		);

		this.addAbility(new Snipe(1));
	}
} export = NoviceSniper;
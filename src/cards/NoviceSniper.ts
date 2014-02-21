import Card = require('../src/Card');
import CardRace = require('../src/CardRace');
import CardRarity = require('../src/CardRarity');
import CardType = require('../src/CardType');
import Ability = require('../src/Ability');
import Snipe = require('../src/abilities/Snipe');

class NoviceSniper extends Card {
	constructor() {
	    super(
	    	'Novice Sniper'
	    	, CardType.Ground
	    	, CardRace.Human
	    	, CardRarity.Common
	    	, 1
	    	, 1
	    	, 0
	    	, [Snipe]
		);
	}
}
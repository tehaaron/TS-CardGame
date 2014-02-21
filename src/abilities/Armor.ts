import Ability = require('../Ability');

class Armor extends Ability {
	armorValue: number;
	
	constructor(armorValue:number) {
		this.armorValue = 1;
	    super(
	    	'Armor '+this.armorValue
	    	, true
	    );
	
/*	    action() {
	    	//defense animation, the application of armor should probably be checked for during opponent's attack
	    }*/
	}
}
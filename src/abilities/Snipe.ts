import Ability = require('../Ability');

class Snipe extends Ability {
	damage: number;
	
	constructor(damage:number) {
		this.damage = 1;
	    super(
	    	'Snipe '+this.damage
	    	, true //disabled until card wait is over
	    );
	
/*	    action() {
	    	//attack animation including targetting logic
	    } */
	}
}
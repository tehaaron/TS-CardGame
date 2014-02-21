import Ability = require('../src/Ability');

class Snipe extends Ability {
	Damage: number;
	
	constructor(damage:number) {
		this.damage = 1;
	    super(
	    	'Snipe '+this.damage
	    	, true //disabled until card wait is over
	    );
	
	    action() {
	    	//attack animation including targetting logic
	    };
	}
}
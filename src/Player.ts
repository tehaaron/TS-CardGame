import Deck = require('../src/Deck');
import Inventory = require('../src/Inventory');

class Player {
	name:string;
	deck:Deck[];
	inventory:Inventory[];
	money:number;
	actionPoints:number;
	organicMaterial:number;
	mechanicalParts:number;

	constructor(name:string, deck:Deck[], inventory:Inventory[], money:number, actionPoints:number, organicMaterial:number, mechanicalParts:number) {
		this.name = name;
		this.deck = deck;
		this.inventory = inventory;
		this.money = money;
		this.actionPoints = actionPoints;
		this.organicMaterial = organicMaterial;
		this.mechanicalParts = mechanicalParts;

		this.perpetualActionPoints();
	}

	perpetualActionPoints() {
		var n = this.actionPoints
			, timer = setInterval(this.perpetualActionPoints, 60000);
		 if (n < 100) {
			n += 1;
			clearInterval(timer);

			this.addActionPoints(1);
		}
	}

	addMoney(n:number) {
		this.money += n;
	}

	addActionPoints(n:number) {
		this.actionPoints += n;
	}

	addOrganiceMaterial(n:number) {
		this.organicMaterial += n;
	}

	addMechanicalParts(n:number) {
		this.mechanicalParts += n;
	}

	removeMoney(n:number) {
		this.money -= n;
	}

	removeActionPoints(n:number) {
		this.actionPoints -= n;
	}

	removeOrganiceMaterial(n:number) {
		this.organicMaterial -= n;
	}

	removeMechanicalParts(n:number) {
		this.mechanicalParts -= n;
	}

} export = Player;
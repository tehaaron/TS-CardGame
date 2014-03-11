import Race = require('../src/CardRace');
import Rarity = require('../src/CardRarity');
import Type = require('../src/CardType');
import Ability = require('../src/Ability');

class Card {
	name: string;
	type: Type.CardType;
	race: Race.CardRace;
	rarity: Rarity.CardRarity;
	health: number;
	damage: number;
	wait: number;
	image: string;
	abilities: Ability[];
	ability:Ability;

	$sce:ng.ISCEService;

	constructor(name:string, type:Type.CardType, race:Race.CardRace, rarity:Rarity.CardRarity, health:number, damage:number, wait:number, image?:string, abilities?:Ability[]) {
		this.name = name;
		this.type = type;
		this.race = race;
		this.rarity = rarity;
		this.health = health;
		this.damage = damage;
		this.wait = wait;
		this.image = image;
		this.abilities = [];
	}

	getHTML($sce:ng.ISCEService, cssID:string) {
		return $sce.trustAsHtml("<div id='"+cssID+"' class='card playable "+this.image+"'><h3>"+this.name+"</h3></div>");
	}

	addAbility(ability:Ability) {
		this.abilities.push(ability);
	}

	isDead() {
		if(this.health < 1) {
			this.remove();
		} return false;
	}

	remove() {
		//remove the card from the table
	}

	attack() {
		//attack animation
	}
} export = Card;
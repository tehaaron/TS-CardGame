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

	constructor(name:string, type:Type.CardType, race:Race.CardRace, rarity:Rarity.CardRarity, health:number, damage:number, wait:number, abilities?:Ability[], image?:string) {
		this.name = name;
		this.type = type;
		this.race = race;
		this.rarity = rarity;
		this.health = health;
		this.damage = damage;
		this.wait = wait;
		this.abilities = abilities;
		this.image = image;
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
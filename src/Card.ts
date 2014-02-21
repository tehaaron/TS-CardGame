import CardRace = require('../src/CardRace');
import CardRarity = require('../src/CardRarity');
import CardType = require('../src/CardType');
import Ability = require('../src/Ability');

class Card {
	Name: string;
	Type: CardType;
	Race: CardRace;
	Rarity: CardRarity;
	Health: number;
	Damage: number;
	Wait: number;
	Image: string;
	Abilities: Ability[];

	constructor(name: string, type: CardType, race:CardRace, rarity:CardRarity, health:number, damage:number, wait:number, abilities?:Ability[], image?:string) {
		this.Name = name;
		this.Type = cardType;
		this.Race = cardRace;
		this.Rarity = cardRarity;
		this.Health = hp;
		this.Damage = damage;
		this.Wait = wait;
		this.Abilities = abilities;
		this.Image = imageLocation;
	}

	isDead() {
		if(health < 1) {
			this.dispose();
		} return false;
	};

	remove() {
		//remove the card from the table
	};

	attack() {
		//attack animation
	};
} export = Card;
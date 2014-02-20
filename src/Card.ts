import CardRace = require('../src/CardRace');
import CardRarity = require('../src/CardRarity');
import CardType = require('../src/CardType');

class Card {
	Name: string;
	Type: CardType;
	Race: CardRace;
	Rarity: CardRarity;
	Health: number;
	Damage: number;
	Wait: number;
	Image: string;
	//Abilities: Abilities[] = null;  ??
	//I want to add abilities which is an array that I will push ability functions into for each card. I want to define all the abilities in separate file(s).

	constructor(name: string, type: CardType, race:CardRace, rarity:CardRarity, health:number, damage:number, wait:number, image?:string) {
		this.Name = name;
		this.Type = cardType;
		this.Race = cardRace;
		this.Rarity = cardRarity;
		this.Health = hp;
		this.Damage = damage;
		this.Wait = wait;
		this.Image = imageLocation;
		//this.Abilities = [] ??
	}

	isDead() {
		if(health < 1) {
			dispose();
		} return false;
	};

	remove() {
		//remove the card from the table
	};
} export = Card;
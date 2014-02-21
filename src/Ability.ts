class Ability {
	Name: string;
	IsDisabled: boolean;

	constructor(name:string, isDisabled:boolean) {
		this.Name = name;
		this.IsDisabled = isDisabled;
	}

	action();

} export = Ability;
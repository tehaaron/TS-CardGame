define(["require", "exports", '../src/Ability'], function(require, exports, Ability) {
    var Card = (function () {
        function Card(name, type, race, rarity, health, damage, wait, abilities, image) {
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
        Card.prototype.isDead = function () {
            if (this.health < 1) {
                this.remove();
            }
            return false;
        };

        Card.prototype.remove = function () {
        };

        Card.prototype.attack = function () {
        };
        return Card;
    })();
    
    return Card;
});
//# sourceMappingURL=Card.js.map

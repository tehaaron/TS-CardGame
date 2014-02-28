define(["require", "exports", '../src/Ability'], function(require, exports, Ability) {
    var Card = (function () {
        function Card(name, type, race, rarity, health, damage, wait, image, abilities) {
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
        Card.prototype.getHTML = function (id) {
            return "<div id='" + id + "' class='card playable " + this.image + "'><h3>" + this.name + "</h3></div>";
        };

        Card.prototype.addAbility = function (ability) {
            this.abilities.push(ability);
        };

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

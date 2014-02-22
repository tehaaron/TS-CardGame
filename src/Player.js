define(["require", "exports", '../src/Deck', '../src/Inventory', '../src/Pack', '../src/Card'], function(require, exports, Deck, Inventory, Pack, Card) {
    var Player = (function () {
        function Player(name, deck, inventory, money, actionPoints, organicMaterial, mechanicalParts) {
            this.name = name;
            this.deck = deck;
            this.inventory = inventory;
            this.money = money;
            this.actionPoints = actionPoints;
            this.organicMaterial = organicMaterial;
            this.mechanicalParts = mechanicalParts;

            this.perpetualActionPoints();
        }
        Player.prototype.perpetualActionPoints = function () {
            var n = this.actionPoints, timer = setInterval(this.perpetualActionPoints, 60000);
            if (n < 100) {
                n += 1;
                clearInterval(timer);

                this.addActionPoints(1);
                console.log(this.actionPoints);
            }
        };

        Player.prototype.addMoney = function (n) {
            this.money += n;
        };

        Player.prototype.addActionPoints = function (n) {
            this.actionPoints += n;
        };

        Player.prototype.addOrganiceMaterial = function (n) {
            this.organicMaterial += n;
        };

        Player.prototype.addMechanicalParts = function (n) {
            this.mechanicalParts += n;
        };

        Player.prototype.removeMoney = function (n) {
            this.money -= n;
        };

        Player.prototype.removeActionPoints = function (n) {
            this.actionPoints -= n;
        };

        Player.prototype.removeOrganiceMaterial = function (n) {
            this.organicMaterial -= n;
        };

        Player.prototype.removeMechanicalParts = function (n) {
            this.mechanicalParts -= n;
        };

        Player.prototype.buyPack = function (n) {
            var x = n * 4;
            if (this.inventory.length <= (50 - x) && this.money >= (100 * n)) {
                var tempPack = new Pack;
                var draw = tempPack.pack.splice(0, 3);
                this.inventory.push(draw);
            }
        };
        return Player;
    })();
    
    return Player;
});
//# sourceMappingURL=Player.js.map

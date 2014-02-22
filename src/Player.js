define(["require", "exports", '../src/Deck', '../src/Inventory'], function(require, exports, Deck, Inventory) {
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
        return Player;
    })();
    
    return Player;
});
//# sourceMappingURL=Player.js.map

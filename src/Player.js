define(["require", "exports", '../src/Pack', '../src/Card'], function(require, exports, Pack, Card) {
    var Player = (function () {
        function Player(name, deck, inventory, money, actionPoints, organicMaterial, mechanicalParts) {
            this.name = name;
            this.deck = [];
            this.inventory = [];
            this.money = money;
            this.actionPoints = actionPoints;
            this.organicMaterial = organicMaterial;
            this.mechanicalParts = mechanicalParts;
        }
        Player.prototype.perpetualActionPoints = function () {
            var n = this.actionPoints, timer = setInterval(this.perpetualActionPoints.bind(this), 60000);
            if (n < 100) {
                n += 1;
                this.addActionPoints(1);

                console.log(this.actionPoints);
            } else if (n === 100) {
                timer = null;

                console.log("Done");
            }
        };

        Player.prototype.playCard = function ($index) {
            return this.deck.splice($index, 1);
        };

        Player.prototype.shuffle = function () {
            var n = 8;
            var i, j, k;
            var temp;
            for (i = 0; i < n; i += 1) {
                for (j = 0; j < this.deck.length; j += 1) {
                    k = Math.floor(Math.random() * this.deck.length);
                    temp = this.deck[j];
                    this.deck[j] = this.deck[k];
                    this.deck[k] = temp;
                }
            }
        };

        Player.prototype.addCard2Inventory = function (card) {
            this.inventory.push(card);
        };

        Player.prototype.addCard2Deck = function (card) {
            this.deck.push(card);
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
                this.money = this.money - (100 * n);
                var tempPack = new Pack();
                var draw = tempPack.pack.splice(0, 3);
                this.inventory = this.inventory.concat(draw);

                console.log(tempPack);
                console.log(draw);

                console.log('You purchased ' + n + ' pack(s)');
            } else {
                console.log('Error, nothing purchased');
            }
        };
        return Player;
    })();
    
    return Player;
});
//# sourceMappingURL=Player.js.map

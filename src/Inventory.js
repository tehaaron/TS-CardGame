define(["require", "exports", '../src/Card'], function(require, exports, Card) {
    var Inventory = (function () {
        function Inventory() {
            this.inventory = [];
        }
        Inventory.prototype.addCard = function (card) {
            this.inventory.push(card);
        };
        return Inventory;
    })();
    
    return Inventory;
});
//# sourceMappingURL=Inventory.js.map

define(["require", "exports", '../src/Deck', '../src/Card'], function(require, exports, Deck, Card) {
    var Enemy = (function () {
        function Enemy(name, deck) {
            this.name = name;
            this.deck = deck;
        }
        return Enemy;
    })();
    
    return Enemy;
});
//# sourceMappingURL=Enemy.js.map

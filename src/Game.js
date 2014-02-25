define(["require", "exports", '../src/Player', '../src/Deck', '../src/Inventory', '../src/Pack', '../src/Card'], function(require, exports, Player, Deck, Inventory, Pack, Card) {
    var Game = (function () {
        function Game() {
            this.player = new Player('tehaaron', new Deck(), new Inventory(), 100, 50, 0, 0);

            this.player.deck.addCard(new Card('TestGuy', 1, 1, 1, 10, 10, 0));

            console.log(this.player);
        }
        return Game;
    })();
    
    return Game;
});
//# sourceMappingURL=Game.js.map

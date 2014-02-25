define(["require", "exports", '../src/Player', '../src/enemies/CommanderLlama', '../src/Deck', '../src/Inventory', '../src/Pack', '../src/Card', '../src/cards/Marine'], function(require, exports, Player, CommanderLlama, Deck, Inventory, Pack, Card, Marine) {
    var Game = (function () {
        function Game() {
            this.player = new Player('tehaaron', new Deck(), new Inventory(), 100, 50, 0, 0);

            this.player.deck.addCard2Deck(new Card('TestGuy', 1, 1, 1, 10, 10, 0));
            this.player.deck.addCard2Deck(new Marine());

            console.log(this.player);

            this.enemy = new CommanderLlama();

            console.log(this.enemy);
        }
        return Game;
    })();
    
    return Game;
});
//# sourceMappingURL=Game.js.map

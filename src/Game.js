define(["require", "exports", '../src/Player', '../src/enemies/CommanderLlama', '../src/Deck', '../src/Inventory', '../src/Pack', '../src/Card', '../src/cards/NoviceSniper', '../src/cards/Marine', '../src/Battle'], function(require, exports, Player, CommanderLlama, Deck, Inventory, Pack, Card, NoviceSniper, Marine, Battle) {
    var Game = (function () {
        function Game() {
            this.player = new Player('tehaaron', new Deck(), new Inventory(), 100, 50, 0, 0);

            this.player.deck.addCard2Deck(new Marine());
            this.player.deck.addCard2Deck(new NoviceSniper());
            this.player.deck.addCard2Deck(new Marine());

            console.log(this.player);

            this.enemy = new CommanderLlama();

            console.log(this.enemy);

            var newBattle = new Battle(this.player, this.enemy, 100);

            console.log(newBattle);
        }
        return Game;
    })();
    
    return Game;
});
//# sourceMappingURL=Game.js.map

define(["require", "exports", '../src/Player', '../src/enemies/CommanderLlama', '../src/Pack', '../src/Card', '../src/cards/NoviceSniper', '../src/cards/Marine', '../src/Battle', '../src/cards/Sectoid', '../src/cards/A1Bot'], function(require, exports, Player, CommanderLlama, Pack, Card, NoviceSniper, Marine, Battle, Sectoid, A1Bot) {
    var Game = (function () {
        function Game($scope) {
            this.player = new Player('tehaaron', [], [], 100, 50, 0, 0);

            this.player.addCard2Deck(new Marine());
            this.player.addCard2Deck(new NoviceSniper());
            this.player.addCard2Deck(new Sectoid());
            this.player.addCard2Deck(new A1Bot());
            this.player.addCard2Deck(new NoviceSniper());
            this.player.addCard2Deck(new Marine());

            console.log(this.player);

            this.enemy = new CommanderLlama();

            console.log(this.enemy);

            var newBattle = new Battle($scope, this.player, this.enemy, 100, []);

            console.log(newBattle);
        }
        return Game;
    })();
    
    return Game;
});
//# sourceMappingURL=Game.js.map

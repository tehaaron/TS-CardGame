define(["require", "exports", '../src/Player', '../src/Deck', '../src/Inventory', '../src/Pack'], function(require, exports, Player, Deck, Inventory, Pack) {
    var Game = (function () {
        function Game() {
            this.player = new Player('tehaaron', new Deck(), new Inventory(), 100, 50, 0, 0);

            this.player.buyPack(1);

            console.log(this.player);
        }
        return Game;
    })();
    
    return Game;
});
//# sourceMappingURL=Game.js.map

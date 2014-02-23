define(["require", "exports", '../src/Player', '../src/Deck', '../src/Inventory', '../src/Pack'], function(require, exports, Player, Deck, Inventory, Pack) {
    var test = new Player('tehaaron', new Deck(), new Inventory(), 100, 50, 0, 0);

    test.buyPack(1);

    console.log(test);
});
//# sourceMappingURL=Game.js.map

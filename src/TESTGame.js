define(["require", "exports", '../src/TESTArray', '../src/TESTStuff'], function(require, exports, TestArray, Stuff) {
    var Game = (function () {
        function Game() {
            var test = new TestArray();

            test.addStuff(new Stuff('MyName'));
            test.addStuff(new Stuff('AnotherName'));

            console.log(test);
        }
        return Game;
    })();
    
    return Game;
});
//# sourceMappingURL=TESTGame.js.map

define(["require", "exports", '../src/Card', '../src/cards/Marine', '../src/cards/A1Bot', '../src/cards/Sectoid', '../src/cards/NoviceSniper'], function(require, exports, Card, Marine, A1Bot, Sectoid, NoviceSniper) {
    var Pack = (function () {
        function Pack() {
            this.pack = [];

            this.createPack();
        }
        Pack.prototype.createPack = function () {
            for (var i = 0; i < 5; i += 1) {
                this.pack.push(new Marine());
                this.pack.push(new A1Bot());
                this.pack.push(new Sectoid());
            }
            ;

            for (var i = 0; i < 5; i += 1) {
                this.pack.push(new NoviceSniper());
            }
            ;
        };
        return Pack;
    })();
    
    return Pack;
});
//# sourceMappingURL=Pack.js.map

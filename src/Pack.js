define(["require", "exports", '../src/Card', '../src/cards/Marine', '../src/cards/A1Bot', '../src/cards/Sectoid', '../src/cards/NoviceSniper'], function(require, exports, Card, Marine, A1Bot, Sectoid, NoviceSniper) {
    var Pack = (function () {
        function Pack() {
            this.pack = [];

            this.createPack();
            this.shuffle();
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

        Pack.prototype.shuffle = function () {
            var n = 8;
            var i, j, k;
            var temp;
            for (i = 0; i < n; i += 1) {
                for (j = 0; j < this.pack.length; j += 1) {
                    k = Math.floor(Math.random() * this.pack.length);
                    temp = this.pack[j];
                    this.pack[j] = this.pack[k];
                    this.pack[k] = temp;
                }
            }
        };
        return Pack;
    })();
    
    return Pack;
});
//# sourceMappingURL=Pack.js.map

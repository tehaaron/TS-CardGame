define(["require", "exports", '../src/Card'], function(require, exports, Card) {
    var Deck = (function () {
        function Deck() {
            this.deck = [];
            this.active = [];

            this.shuffle();
        }
        Deck.prototype.addCard = function (card) {
            this.deck.push(card);
        };

        Deck.prototype.keepThree = function () {
            var n = 3;
            if (this.active.length === 0) {
                var draw = this.deck.splice(0, 2);
                this.active = this.active.concat(draw);

                console.log(draw);
            } else if (this.active.length <= 2) {
                var drawOne = this.deck.splice(0, 0);
                this.active = this.active.concat(drawOne);

                console.log(drawOne);
            }
        };

        Deck.prototype.shuffle = function () {
            var n = 8;
            var i, j, k;
            var temp;
            for (i = 0; i < n; i += 1) {
                for (j = 0; j < this.deck.length; j += 1) {
                    k = Math.floor(Math.random() * this.deck.length);
                    temp = this.deck[j];
                    this.deck[j] = this.deck[k];
                    this.deck[k] = temp;
                }
            }
        };
        return Deck;
    })();
    
    return Deck;
});
//# sourceMappingURL=Deck.js.map

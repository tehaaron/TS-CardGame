define(["require", "exports", '../src/Card'], function(require, exports, Card) {
    var Deck = (function () {
        function Deck() {
            this.deck = [];

            this.shuffle();
        }
        Deck.prototype.addCard2Deck = function (card) {
            this.deck.push(card);
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

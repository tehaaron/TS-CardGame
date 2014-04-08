define(["require", "exports", '../src/Player', '../src/Card'], function(require, exports, Player, Card) {
    var Battle = (function () {
        function Battle($scope, $sce, player, enemy, money, inPlayPlayer1, inPlayPlayer2, playerTurn, reward) {
            this.$scope = $scope;
            this.$sce = $sce;
            this.player = player;
            this.enemy = enemy;
            this.money = money;
            this.inPlayPlayer1 = [];
            this.inPlayPlayer2 = [];
            this.playerTurn = playerTurn;
            this.reward = reward;

            this.enemy.shuffle();
            this.player.shuffle();
        }
        Battle.prototype.cardManager = function () {
            console.log("initiated");
        };

        Battle.prototype.getPlayedCard = function ($index) {
            var start = 0;
            var end = 1;
            if (this.playerTurn == true) {
                var nextCard = this.player.playCard($index);
                this.inPlayPlayer1 = this.inPlayPlayer1.concat(nextCard);
                console.log(this.inPlayPlayer1);
                this.playerTurn = false;
            } else if (this.playerTurn == false) {
                console.log(start + "," + end);
                var nextCard = this.enemy.deck.slice(start, end);
                this.inPlayPlayer2 = this.inPlayPlayer2.concat(nextCard);
                console.log(this.inPlayPlayer2);
                this.playerTurn = true;
                start += 1;
                end += 1;
            }
        };
        return Battle;
    })();
    
    return Battle;
});
//# sourceMappingURL=Battle.js.map

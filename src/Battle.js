define(["require", "exports", '../src/Player', '../src/Enemy', '../src/Card'], function(require, exports, Player, Enemy, Card) {
    var Battle = (function () {
        function Battle($scope, $sce, player, enemy, money, inPlay, reward) {
            this.$scope = $scope;
            this.$sce = $sce;
            this.player = player;
            this.enemy = enemy;
            this.money = money;
            this.inPlay = inPlay;
            this.reward = reward;

            this.enemy.shuffle();
            this.player.shuffle();
            this.fight();
        }
        Battle.prototype.fight = function () {
            this.playerTurn();
        };

        Battle.prototype.enemyTurn = function () {
            console.log("Enemy's turn");
        };

        Battle.prototype.playerTurn = function () {
            var _this = this;
            $("#game").append("<div id='playableCards'></div>");
            $("#playableCards").append(this.player.deck[0].getHTML(this.$sce, "0"), this.player.deck[1].getHTML(this.$sce, "1"), this.player.deck[2].getHTML(this.$sce, "2"));
            $("div.playable").on("click", function (event) {
                var play = _this.player.deck.splice(+event.target.id, 1);
                _this.inPlay.push(play[0]);
                $(event.target).removeClass("playable");
                $(event.target).remove();
                $("#playableCards").remove();
            });
        };
        return Battle;
    })();
    
    return Battle;
});
//# sourceMappingURL=Battle.js.map

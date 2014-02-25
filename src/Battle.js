define(["require", "exports", '../src/Player', '../src/Enemy'], function(require, exports, Player, Enemy) {
    var Battle = (function () {
        function Battle(player, enemy, money, reward) {
            this.player = player;
            this.enemy = enemy;
            this.money = money;
            this.reward = reward;

            this.fight();
        }
        Battle.prototype.fight = function () {
            $.when(this.playerTurn()).done($("#playableCards").append(this.player.deck.deck[0].image, this.player.deck.deck[1].image, this.player.deck.deck[2].image));
        };

        Battle.prototype.enemyTurn = function () {
        };

        Battle.prototype.playerTurn = function () {
            $("#game").append("<div id='playableCards'></div>");
        };
        return Battle;
    })();
    
    return Battle;
});
//# sourceMappingURL=Battle.js.map

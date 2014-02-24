define(["require", "exports", '../src/Player', '../src/Enemy'], function(require, exports, Player, Enemy) {
    var Battle = (function () {
        function Battle(element, player, enemy, reward, money) {
            this.player = player;
            this.enemy = enemy;
            this.reward = reward;
            this.money = money;
        }
        Battle.prototype.fight = function () {
        };

        Battle.prototype.enemyTurn = function () {
        };

        Battle.prototype.playerTurn = function () {
            $("#game").append("<div id='playableCards'></div>");
        };
        return Battle;
    })();
});
//# sourceMappingURL=Battle.js.map

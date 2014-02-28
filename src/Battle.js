define(["require", "exports", '../src/Player', '../src/Enemy', '../src/Card'], function(require, exports, Player, Enemy, Card) {
    var Battle = (function () {
        function Battle(player, enemy, money, reward) {
            this.player = player;
            this.enemy = enemy;
            this.money = money;
            this.reward = reward;

            var inPlay = new Array();

            this.enemy.deck.shuffle();
            this.player.deck.shuffle();
            this.fight();
        }
        Battle.prototype.fight = function () {
            this.playerTurn();
        };

        Battle.prototype.enemyTurn = function () {
        };

        Battle.prototype.playerTurn = function () {
            this.player.deck.keepThree();
            $.when($("#game").append("<div id='playableCards'></div>")).done($("#playableCards").append(this.player.deck.active[0].image, this.player.deck.active[1].image, this.player.deck.active[2].image));
            $(".playable").click(function () {
                $(this).removeClass("playable");
                $("#playableCards").remove();
            });
        };
        return Battle;
    })();
    
    return Battle;
});
//# sourceMappingURL=Battle.js.map

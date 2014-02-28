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
            $.when($("#game").append("<div id='playableCards'></div>")).done($("#playableCards").append(this.player.deck.deck[0].getHTML("0"), this.player.deck.deck[1].getHTML("1"), this.player.deck.deck[2].getHTML("2")));
            $("div.playable").click(function () {
                var clickedID = parseInt(this.id);
                this.player.deck.deck.splice(clickedID, clickedID + 1);
                $(this).removeClass("playable");
            });
        };

        Battle.prototype.playCard = function (id) {
        };
        return Battle;
    })();
    
    return Battle;
});
//# sourceMappingURL=Battle.js.map

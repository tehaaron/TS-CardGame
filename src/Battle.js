define(["require", "exports", '../src/Player', '../src/Card'], function(require, exports, Player, Card) {
    var Battle = (function () {
        function Battle($scope, $sce, player, enemy, money, inPlay, reward) {
            this.$scope = $scope;
            this.$sce = $sce;
            this.player = player;
            this.enemy = enemy;
            this.money = money;
            this.inPlay = [];
            this.reward = reward;

            this.enemy.shuffle();
            this.player.shuffle();
        }
        return Battle;
    })();
    
    return Battle;
});
//# sourceMappingURL=Battle.js.map

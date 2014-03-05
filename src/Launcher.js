define(["require", "exports", '../src/Game'], function(require, exports, Game) {
    var Launcher = (function () {
        function Launcher($window, $route) {
            this.launcher = angular.module('launcher', ['ngRoute'], function ($routeProvider, $locationProvider) {
                $routeProvider.when('/', {
                    templateUrl: 'game.html',
                    controller: Game,
                    controllerAs: 'Game'
                });

                $locationProvider.html5Mode(true);
            });
            angular.bootstrap(document, ['launcher']);
        }
        return Launcher;
    })();
    exports.Launcher = Launcher;
});
//# sourceMappingURL=Launcher.js.map

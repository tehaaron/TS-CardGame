define(["require", "exports", '../src/Game'], function(require, exports, Game) {
    var Launcher = (function () {
        function Launcher($window, $route) {
            this.launcher = angular.module('launcher', ['ngRoute'], function ($routeProvider, $locationProvider) {
                $locationProvider.html5Mode(true);
                $routeProvider.when('/src', {
                    templateUrl: '/src/game.html',
                    controller: Game,
                    controllerAs: 'Game'
                });
            });
            angular.bootstrap(document, ['launcher']);
        }
        return Launcher;
    })();
    exports.Launcher = Launcher;
});
//# sourceMappingURL=Launcher.js.map

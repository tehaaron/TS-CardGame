define(["require", "exports", '../src/CardManagerDirectives', '../src/Game'], function(require, exports, Manager, Game) {
    var Launcher = (function () {
        function Launcher($window, $route) {
            this.launcher = angular.module('launcher', ['ngRoute'], function ($routeProvider, $locationProvider) {
                $locationProvider.html5Mode(true);
                $routeProvider.when('/src', {
                    templateUrl: '/src/battle.html',
                    controller: Game,
                    controllerAs: 'game'
                });
                Manager.init(this.launcher);
            });
            angular.bootstrap(document, ['launcher']);
        }
        return Launcher;
    })();
    exports.Launcher = Launcher;
});
//# sourceMappingURL=Launcher.js.map

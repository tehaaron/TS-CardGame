import Game = require('../src/Game');

export class Launcher {
	launcher: ng.IModule;

    constructor($window, $route:ng.route.IRouteService) {

        this.launcher = angular.module('launcher', ['ngRoute'],
            function ($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider) {
                $routeProvider.when('/', {
                    templateUrl: 'game.html',
                    controller: Game,
                    controllerAs: 'Game'
                });
                
                $locationProvider.html5Mode(true);
            }); 
        angular.bootstrap(document, ['launcher'])    
    }
}
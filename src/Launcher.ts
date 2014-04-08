//this view setup works when I run http-server from the TS-CardGame server which means manually 
//going to /src via the link. Easy fix to serve up /src by default but then I would need to change all the relative links
//will make the change sometime in the future
import Manager = require('../src/CardManagerDirectives');
import Game = require('../src/Game');

export class Launcher {
	launcher: ng.IModule;

    constructor($window, $route:ng.route.IRouteService) {
        this.launcher = angular.module('launcher', ['ngRoute'],
            function ($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider) {
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
}
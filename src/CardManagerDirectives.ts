class Manager{
	static init(ngmodule:ng.IModule) {
		ngmodule.module('cardManager', [])
			.controller('Controller', ['$scope', function($scope) {
				$scope.test = {
					name: 'Test Card',
					health: '20'
				};
			}])
			.directive('myCard', function() {
				return {
					restrict: 'AEC',
					templateUrl: '/src/directive-test.html'
				};
			});
	}
} export = Manager;
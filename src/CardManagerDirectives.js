define(["require", "exports"], function(require, exports) {
    var Manager = (function () {
        function Manager() {
        }
        Manager.init = function (ngmodule) {
            ngmodule.module('cardManager', []).controller('Controller', [
                '$scope', function ($scope) {
                    $scope.test = {
                        name: 'Test Card',
                        health: '20'
                    };
                }]).directive('myCard', function () {
                return {
                    restrict: 'AEC',
                    templateUrl: '/src/directive-test.html'
                };
            });
        };
        return Manager;
    })();
    
    return Manager;
});
//# sourceMappingURL=CardManagerDirectives.js.map

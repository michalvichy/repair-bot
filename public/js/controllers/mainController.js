angular.module('MainCtrl', []).controller('MainController', function($scope) {
    $scope.name = 'Mainasdf ';

    $scope.items = [];

    $scope.addItem = function(item) {
        $scope.items.push(item);
        $scope.item = '';
    };
});

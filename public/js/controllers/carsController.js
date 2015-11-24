angular.module('CarsCtrl', []).controller('CarsController', function($scope) {
    $scope.cars = [];

    $scope.addCar = function(car) {
        $scope.cars.push(car);
        $scope.car = '';
    };
});

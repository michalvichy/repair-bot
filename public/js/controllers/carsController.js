angular.module('CarsCtrl', []).controller('CarsController', ['$scope', 'Car', function($scope, CarService) {
    $scope.cars = CarService.get();

    $scope.addCar = function(car) {
        $scope.cars.push(car);
        $scope.car = '';
    };
}]);

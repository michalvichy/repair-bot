angular.module('CarsCtrl', []).controller('CarsController', ['$scope', 'Car', function($scope, CarService) {
    getAllCars();

    function getAllCars() {
        CarService.get().then(function(res) {
            $scope.cars = res.data;
        });
    };

    $scope.addCar = function(car) {
        // $scope.cars.push(car);

        console.log(car);

        CarService.create(car).then(function(res) {
            console.log(res.data.message);
        });
        $scope.car = '';

        getAllCars();
    };

    $scope.removeCar = function(carId) {
        CarService.remove(carId).then(function(res) {
            console.log(res.data.message);
        });
        getAllCars();
    }
}]);

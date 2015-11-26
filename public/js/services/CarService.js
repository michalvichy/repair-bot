angular.module('CarService', []).factory('Car', ['$http', function($http) {
    return {
        get: function() {
            return $http.get('/api/cars');
        },

        create: function(car) {
            return $http.post('/api/cars', car);
        },

        remove: function(carId) {
            return $http.delete('/api/cars/' + carId);
        }

    }
}]);

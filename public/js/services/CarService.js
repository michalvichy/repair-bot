angular.module('CarService', []).factory('Car', ['$http', function($http) {
    var cars = [
        {
            name: 'foobar',
            model: 'kia'
        },
        {
            name: 'Mazda',
            model: '323f'
        }
    ];

    return {
        get: function() {
            return cars;
        }
    }
}]);

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/cars', {
            templateUrl: 'views/templates/cars.html',
            controller: 'CarsController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

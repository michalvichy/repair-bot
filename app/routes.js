var Car = require('./models/car.js');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    // All cars
    app.get('/api/cars', function(request, response) {
        Car.find(function(error, cars) {
            if (error) {
                response.send(error);
            }

            response.json(cars);
        });
    });

    // Create cars


    // Edit car


    // Update car

    // Delete car

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });
};

var Car = require('./models/car.js');

console.log(Car);

module.exports = function(app, express) {
    var router = express.Router();

    router.get('/', function(req, res) {
        res.json({message: "Hooray!"});
    });

    // Get all cars
    router.get('/cars', function(req, res) {
        Car.find(function(error, cars) {
            if (error)
                res.send(error);

            res.json(cars);
        })

    });

    // Create car
    router.post('/cars', function(req, res) {
        var car = new Car();

        car.name = req.body.name;
        car.model = req.body.model;

        car.save(function(error, car) {
            if (error)
                res.send(error);

            res.json({message: 'Car ' + car.name + ' created successfully'});
        });
    });

    // Delete car
    router.delete('/cars/:car_id', function(req, res) {
        Car.remove({ _id: req.params.car_id }, function(error, car) {
            if (error)
                res.send(error);

            res.json({message: 'Car deleted'});
        });
    });

    app.use('/api', router);

    // Create cars


    // Edit car
    router.put('');

    // Update car

    // Delete car

    // frontend routes =========================================================
    // route to handle all angular requests
    app.use('/*', function(req, res) {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });
};

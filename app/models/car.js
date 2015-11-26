var mongoose = require('mongoose');

var carSchema = mongoose.Schema({
    model: String,
    name: String,
    year: Number,
    type: String
});

module.exports = mongoose.model('Car', carSchema);

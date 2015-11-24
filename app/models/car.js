var mongoose = require('mongoose');

module.exports = mongoose.model('Car', {
    model: { type: String, default: ''},
    brand: { type: String, default: ''},
    year: { type: Number, default: ''},
    type: { type: String, default: 'Hatchback'}
});

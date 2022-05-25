const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CarSchema = new Schema({
    licensePlateNumber: { type: String, required: true },
    brand: { type: String, required: true },
    type: { type: String, required: true },
    horsepower: { type: Number, required: true },
    price: { type: Number, required: true }
});

module.exports = mongoose.model('car', CarSchema);
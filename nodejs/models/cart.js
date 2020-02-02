const mongoose = require('mongoose');

var Cart = mongoose.model('Cart',{
    productName: {type: String},
    price: { type: Number },
    imageUrl: { type: String },
    quantity: { type: Number }
});

module.exports = { Cart };
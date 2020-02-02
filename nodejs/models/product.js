const mongoose = require('mongoose');

var Product = mongoose.model('Product',{
    productName: {type: String},
    price: { type: Number },
    imageUrl: { type: String},
});

module.exports = { Product };
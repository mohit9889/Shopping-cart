const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Product } = require('../models/product');

// => localhost:3000/products/
router.get('/', (req, res) => {
    Product.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Erroe in getting Procuts: ' + JSON.stringify(err, undefined, 2)); }
    });
});

// => localhost:3000/products/id
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No prodtc found with id:' $(req.params.id)`);
    }

    Product.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc) }
        else { console.log('Error in getting Product: '+ JSON.stringify(err, undefined, 2)); }
    });
});

//post request
router.post('/', (req, res) => {
    var prod = new Product({
        productName: req.body.productName,
        price: req.body.price,
        imageUrl: req.body.imageUrl,
    });
    prod.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Product Save: '+ JSON.stringify(err, undefined, 2)); }
    });
});


//updating product
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No product found with id:' $(req.params.id)`);
    }

    var prod = {
        productName: req.body.productName,
        price: req.body.price,
        imageUrl: req.body.imageUrl,
    };

    Product.findByIdAndUpdate(req.params.id, { $set: prod }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Product Update' + JSON.stringify(err, undefined, 2)); }
    });
});

//delete product
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No prodtc found with id:' $(req.params.id)`);
    }

    Product.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Product Delete' + JSON.stringify(err, undefined, 2)); }
    });
})

module.exports = router;
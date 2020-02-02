const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Cart } = require('../models/cart');

// => localhost:3000/cart/
router.get('/', (req, res) => {
    Cart.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Erroe in getting Procuts in Cart: ' + JSON.stringify(err, undefined, 2)); }
    });
});

//post request
router.post('/', (req, res) => {
    var cartprod = new Cart({
        productName: req.body.productName,
        price: req.body.price,
        imageUrl: req.body.imageUrl,
        quantity: req.body.quantity,
    });
    cartprod.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Product Save in Cart: '+ JSON.stringify(err, undefined, 2)); }
    });
});

// => localhost:3000/cart/id
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No prodtc found with id:' $(req.params.id)`);
    }

    Product.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc) }
        else { console.log('Error in getting  Cart Product: '+ JSON.stringify(err, undefined, 2)); }
    });
});

//updating product
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No product found with id:' $(req.params.id)`);
    }

    var cartprod = {
        productName: req.body.productName,
        price: req.body.price,
        imageUrl: req.body.imageUrl,
        quantity: req.body.quantity,
    };

    Cart.findByIdAndUpdate(req.params.id, { $set: cartprod }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Cart Product Update' + JSON.stringify(err, undefined, 2)); }
    });
});

//delete product
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No prodtc found with id:' $(req.params.id)`);
    }

    Cart.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Product Delete' + JSON.stringify(err, undefined, 2)); }
    });
})

module.exports = router;
const express = require('express');
const mongoose = require('../node_modules/mongoose'); 
const shortid = require('shortid');

//Importing the library here
const response = require('./../libs/responseLib');
const time = require('./../libs/timeLib')
const check = require('./../libs/checkLib')
const logger = require('./../libs/loggerLib');

//Importing the model here 
const CartModel = mongoose.model('Cart');


// function to get all product in cart
let viewCart = (req, res) => {
    CartModel.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Failed to find cart details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Cart Found','cartController:viewCart',5)
                let apiResponse = response.generate(true, 'No cart found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info('Cart Found Successfully!', 'cartController: viewCart', 10)
                let apiResponse = response.generate(false, 'All cart found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get all Products

/**
 * function to delete the product from cart.
 */
let deleteFromCart = (req, res) => {
    if (check.isEmpty(req.params.cartId)) {

        console.log('Cart Id should be passed')
        let apiResponse = response.generate(true, 'CartId is missing', 403, null)
        res.send(apiResponse);
    }
    else {
        CartModel.remove({ 'cartId': req.params.cartId }, (err, result) => {
            if (err) {
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                let apiResponse = response.generate(true, 'No cart found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info('Cart Deleted successfully','cartController:deleteCart',5)
                let apiResponse = response.generate(false, 'cart deleted successfully', 200, result)
                res.send(apiResponse)

            }
        })
    }
}

/**
 * function to add the product in cart.
 */
let addToCart = (req, res) => {
    let addingProductFunction = () => {
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.body.productId)) {

                console.log("403, forbidden request");
                logger.error(`Error Occured : Required Parameters are missing`, 'productController: addToProduct', 10);
                let apiResponse = response.generate(true, 'Required parameters are missing', 403, null)
                reject(apiResponse);
            }
            else {
                var today = time.now()
                let cartId = shortid.generate()

                let newProduct = new CartModel({

                    cartId: cartId,
                    productId: req.body.productId,
                    created: today,
                    lastModified: today
                }) // end new product model

                newProduct.save((err, result) => {
                    if (err) {
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    } else {
                        console.log('Success in Product addition to cart')
                        resolve(result)

                    }
                })
            }
        });
    }
    // making promise call.
    addingProductFunction().then((result) => {
            let apiResponse = response.generate(false, 'Product added successfully', 200, result)
            res.send(apiResponse)
        })
        .catch((error) => {
            res.send(error);
        });
}


module.exports = {
    viewCart : viewCart,
    addToCart : addToCart,
    deleteFromCart : deleteFromCart
}
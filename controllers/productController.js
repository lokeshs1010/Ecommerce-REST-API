const express = require('express');
const mongoose = require('../node_modules/mongoose');
const shortid = require('shortid');

//Importing the library here 
const response = require('./../libs/responseLib')
const time = require('./../libs/timeLib')
const check = require('./../libs/checkLib')
const logger = require('./../libs/loggerLib');

//Importing the model here 
const ProductModel = mongoose.model('Product');


// function to get all product
let getAllProduct = (req, res) => {
    ProductModel.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message,'ProductController:getAllProduct',10)
                let apiResponse = response.generate(true, 'Failed to find product details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Product Found','productController:getAllProduct',5)
                let apiResponse = response.generate(true, 'No product found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'All products found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get all Products


/**
 * function to get one product.
 */
let getOneProduct = (req, res) => {
    if (check.isEmpty(req.params.productId)) {
        console.log('Product id should be passed')
        let apiResponse = response.generate(true, 'ProductId is missing', 403, null)
        res.send(apiResponse);
    }
    else {
        ProductModel.findOne({ 'productId': req.params.productId }, (err, result) => {

            if (err) {
                console.log(err)
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No product Found', 'productController: getOneProduct', 5)
                let apiResponse = response.generate(true, 'No product found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info('Product Found Successfully!', 'productController: getOneProduct', 10)
                let apiResponse = response.generate(false, 'Product found successfully', 200, result)
                res.send(apiResponse)

            }
        })
    }
}

/**
 * function to get products by category.
 */
let getProductByCategory = (req, res) => {
    if (check.isEmpty(req.params.categoryId)) {

        console.log('Category id should be passed')
        let apiResponse = response.generate(true, 'CategoryId is missing', 403, null);
        res.send(apiResponse);
    }
    else {
        ProductModel.find({ 'categoryId': req.params.categoryId }, (err, result) => {

            if (err) {
                console.log(err)
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                let apiResponse = response.generate(true, 'No product found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info("Product of category found successfully","productController:getProductByCategory",10)
                let apiResponse = response.generate(false, 'Product found successfully', 200, result)
                res.send(apiResponse)

            }
        })
    }
}

/**
 * function to edit product by admin.
 */
let editProduct = (req, res) => {
    if (check.isEmpty(req.params.productId)) {

        console.log('Product id should be passed')
        let apiResponse = response.generate(true, 'ProductId is missing', 403, null)
        res.send(apiResponse);
    }
    else {
        let options = req.body;
        console.log(options);
        ProductModel.update({ 'productId': req.params.productId }, options, { multi: true }).exec((err, result) => {

            if (err) {
                console.log(err)
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                let apiResponse = response.generate(true, 'No product found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info('Product Edited successfully','productController:editProduct',5)
                let apiResponse = response.generate(false, 'Product edited successfully', 200, result)
                res.send(apiResponse)

            }
        })
    }
}



/**
 * function to delete the product.
 */
let deleteProduct = (req, res) => {
    if (check.isEmpty(req.params.productId)) {

        console.log('product Id should be passed')
        let apiResponse = response.generate(true, 'ProductId is missing', 403, null)
        res.send(apiResponse);
    }
    else {
        ProductModel.remove({ 'productId': req.params.productId }, (err, result) => {
            if (err) {
                console.log(err)
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                let apiResponse = response.generate(true, 'No product found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info('Product Deleted successfully','productController:deleteProduct',5)
                let apiResponse = response.generate(false, 'Product deleted successfully', 200, result)
                res.send(apiResponse)

            }
        })
    }
}

/**
 * function to create the product.
 */
let createProduct = (req, res) => {
    let productCreationFunction = () => {
        return new Promise((resolve, reject) => {
            console.log(req.body)
            if (check.isEmpty(req.body.productName) || 
                check.isEmpty(req.body.productDescription) || 
                check.isEmpty(req.body.productPrice) ||
                check.isEmpty(req.body.productAvailability) || 
                check.isEmpty(req.body.productCondition) ||
                check.isEmpty(req.body.freeDelivery)) {

                console.log("403, forbidden request");
                logger.error(`Error Occured : Required Parameters are missing!`, 'productController: createProduct', 10);
                let apiResponse = response.generate(true, 'required parameters are missing', 403, null)
                reject(apiResponse)

            }
            else {
                var today = time.now()
                let productId = shortid.generate()

                let newProduct = new ProductModel({

                    productId: productId,
                    categoryId: req.params.categoryId,
                    productName: req.body.productName,
                    productDescription: req.body.productDescription,
                    productPrice: req.body.productPrice,
                    productAvailability: req.body.productAvailability,
                    productCondition: req.body.productCondition,
                    freeDelivery: req.body.freeDelivery,
                    ratings: req.body.ratings,
                    created: today,
                    lastModified: today
                }) // end new product model

                let reviews = (req.body.reviews != undefined && req.body.reviews != null && req.body.reviews != '') ? req.body.reviews.split(',') : []
                newProduct.reviews = reviews

                newProduct.save((err, result) => {
                    if (err) {
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    } else {
                        console.log('Success in Product creation')
                        resolve(result)

                    }
                }) // end new product save
            }
        })
    }//end create product function
    // making promise call.
    productCreationFunction().then((result) => {
            let apiResponse = response.generate(false, 'Product Created successfully', 200, result)
            res.send(apiResponse)
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })
}



module.exports = {
    getAllProduct: getAllProduct,
    getOneProduct: getOneProduct,
    getProductByCategory: getProductByCategory,
    createProduct: createProduct,
    editProduct: editProduct,
    deleteProduct: deleteProduct
}
const express = require('express');
const productController = require('./../controllers/productController');
const appConfig = require("../config/appconfig")
const auth = require("./../middlewares/auth")

module.exports.setRouter = function(app) {
    let baseUrl = appConfig.apiVersion + '/superbazar';

    // Get all product
    app.get(baseUrl + '/product/all', auth.isAuthenticated, productController.getAllProduct);
    /**
	 * @api {get} /api/v1/superbazar/product/all Get all products
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "All Product found",
            "status": 200,
            "data": [
                {
                    "categoryId": "String",
                    "productName": "String",
                    "productDescription": "String",
                    "productPrice": Number,
                    "productAvailability": "String",
                    "productCondition": "String",
                    "freeDelivery": "String",
                    "ratings": Number,
                    "reviews": object(type = array),
                    "productId": "String",
                    "created": "date",
                    "lastModified": "date"
                }
            ]
    }

        @apiErrorExample {json} Error-Response:
        *
        *   {
                "error": true,
                "message": "Failed to find product details",
                "status": 500,
                "data": null
            }
    */

    // View single product
    app.get(baseUrl + '/product/view/:productId', auth.isAuthenticated, productController.getOneProduct);
    /**
    * @api {get} /api/v1/superbazar/product/view/:productId  Single Product View
    * @apiVersion 0.0.1
    * @apiGroup read
    *
    * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
    * @apiParam {String} productId The productId should be passed as the URL parameter.
    *
    *  @apiSuccessExample {json} Success-Response:
    *  {
            "error": false,
            "message": "Product Found successfully!",
            "status": 200,
            "data": {
                "categoryId": "String",
                "productName": "String",
                "productDescription": "String",
                "productPrice": Number,
                "productAvailability": "String",
                "productCondition": "String",
                "freeDelivery": "String",
                "ratings": Number,
                "reviews": object(type = array),
                "_id": "String",
                "productId": "String",
                "created": "date",
                "lastModified": "date",
                "__v": Number
            }   
    }

        @apiErrorExample {json} Error-Response:
        *
        * 
        {
            "error": true,
            "message": "Error Occured.",
            "status": 500,
            "data": null
        }

    */

    // View single product by Category
    app.get(baseUrl + '/product/view/by/category/:categoryId', auth.isAuthenticated, productController.getProductByCategory);
    /**
	 * @api {get} /api/v1/superbazar/product/view/by/category/:categoryId Get all Products of specific Category
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
     * @apiParam {String} CategoryId The Id of the category passed as the URL parameter.
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Product of category found successfully",
            "status": 200,
            "data": [
                {
                    "categoryId": "String",
                    "productName": "String",
                    "productDescription": "String",
                    "productPrice": Number,
                    "productAvailability": "String",
                    "productCondition": "String",
                    "freeDelivery": "String",
                    "ratings": Number,
                    "reviews": object(type = array),
                    "_id": "String",
                    "productId": "String",
                    "created": "date",
                    "lastModified": "date",
                    "__v": Number
                }
            ]
    }

	    @apiErrorExample {json} Error-Response:
	*
    *   {
            "error": true,
            "message": "No product Found!",
            "status": 404,
            "data": null
        }

	*/

    // Create a product
    app.post(baseUrl + '/product/category/:categoryId/create', auth.isAuthenticated, productController.createProduct);
    /**
    * @api {post} /api/v1/superbazar/product/category/:categoryId/create Create Product
    * @apiVersion 0.0.1
    * @apiGroup create
    *
    * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
    * @apiParam {String} categoryId The id of Category passed as a Url parameter.
    * @apiParam {String} productName Name of the Product passed as a body parameter(Required).
    * @apiParam {String} productDescription Description of the Product passed as a body parameter(Required).
    * @apiParam {Number} productPrice Price of the Product passed as a body parameter(Required).
    * @apiParam {String} productAvailability Availability of the Product(In stock/out of stock) passed as a body parameter(Required).
    * @apiParam {String} productCondition condition of the Product passed as a body parameter(Required).
    * @apiParam {String} freeDelivery Delivery of the Product(free or online payment) passed as a body parameter(Required).
    * @apiParam {Number} ratings Rating of the Product passed as a body parameter(Optional).
    * @apiParam {Array} reviews Reviews of the Product passed as a body parameter(Optional).
    *
    *
    *  @apiSuccessExample {json} Success-Response:
    *  {
            "error": false,
            "message": "Product created successfully!",
            "status": 200,
            "data": {
                "categoryId": "String",
                "productName": "String",
                "productDescription": "String",
                "productPrice": Number,
                "productAvailability": "String",
                "productCondition": "String",
                "freeDelivery": "String",
                "ratings": Number,
                "reviews": object(type = array),
                "_id": "String",
                "productId": "String",
                "created": "date",
                "lastModified": "date",
                "__v": Number
            }
    }


        @apiErrorExample {json} Error-Response:
    *
    * {
            "error": true,
            "message": "Error Occured",
            "status": 500,
            "data": null
      }


    */

    
    // Edit a product
    app.put(baseUrl + '/product/:productId/edit', auth.isAuthenticated, productController.editProduct);
    /**
	 * @api {put} /api/v1/superbazar/product/:productId/edit Edit Product by productId
	 * @apiVersion 0.0.1
	 * @apiGroup edit
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
	 * @apiParam {String} ProductId The Id of the product passed as the URL parameter.
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Product Edited successfully!",
            "status": 200,
            "data":  {
                "n": 1,
                "nModified": 1,
                "ok": 1
            }
        }


	    @apiErrorExample {json} Error-Response:
	 *
	 * {
            "error": true,
            "message": "Error Occured",
            "status": 500,
            "data": null
       }
	*/

    
    // Delete a product
    app.post(baseUrl + '/product/:productId/delete', auth.isAuthenticated, productController.deleteProduct);
    /**
	 * @api {post} /api/v1/superbazar/product/:productId/delete Delete Product by productId
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
	 * @apiParam {String} productId The Id of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Product Deleted successfully!",
            "status": 200,
            "data": {
                "n": 1,
                "ok": 1
            }
        }

	    @apiErrorExample {json} Error-Response:
	 *
	 * {
            "error": true,
            "message": "Error Occured",
            "status": 500,
            "data": null
       }

    */

}
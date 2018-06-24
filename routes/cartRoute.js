const express = require('express');

const cartController = require('./../controllers/cartController');
const appConfig = require("../config/appconfig")
const auth = require("./../middlewares/auth")

module.exports.setRouter = function(app) {
    let baseUrl = appConfig.apiVersion + '/superbazar';

    // View Cart
    app.get(baseUrl + '/cart/view', auth.isAuthenticated, cartController.viewCart);
    /**
	 * @api {get} /api/v1/superbazar/cart/view View product in cart
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "All cart found",
            "status": 200,
            "data": [
                {
                    "productId": "String",
                    "cartId": "String",
                    "created": "Date",
                    "lastModified": "Date"
                }
            ]
    }

        @apiErrorExample {json} Error-Response:
        *
        *   {
                "error": true,
                "message": "Error Occured",
                "status": 500,
                "data": null
            }
    */

    // Add to cart
    app.post(baseUrl + '/cart/add', auth.isAuthenticated, cartController.addToCart);
    /**
    * @api {post} /api/v1/superbazar/cart/add Add to cart
    * @apiVersion 0.0.1
    * @apiGroup create
    *
    * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
    * @apiParam {String} productId The id of Product passed as a body parameter(Required).
    *
    *
    *  @apiSuccessExample {json} Success-Response:
    *  {
            "error": false,
            "message": "Product added successfully!",
            "status": 200,
            "data": {
                "productId": "String",
                "_id": "String",
                "cartId": "String",
                "created": "Date",
                "lastModified": "Date",
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

    // Delete from cart
    app.post(baseUrl + '/cart/:cartId/delete', auth.isAuthenticated, cartController.deleteFromCart);
    /**
	 * @api {post} /api/v1/superbazar/cart/:cartId/delete Delete Product from cart
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
	 * @apiParam {String} cartId The Id of the cart passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Cart Deleted successfully!",
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
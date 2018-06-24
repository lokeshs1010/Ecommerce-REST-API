const express = require('express');

const categoryController = require('./../controllers/categoryController');
const appConfig = require("../config/appconfig")
const auth = require("./../middlewares/auth")

module.exports.setRouter = function(app) {
    let baseUrl = appConfig.apiVersion + '/superbazar';

    // Create a product
    app.post(baseUrl + '/category/create', auth.isAuthenticated, categoryController.createCategory);
    /**
    * @api {post} /api/v1/superbazar/category/create Create Category
    * @apiVersion 0.0.1
    * @apiGroup create
    *
    * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
    * @apiParam {String} categoryName Name of the Category passed as a body parameter(Required).
    *
    *
    *  @apiSuccessExample {json} Success-Response:
    *  {
            "error": false,
            "message": "Category created successfully",
            "status": 200,
            "data": {
                "categoryName": "String",
                "_id": "String",
                "categoryId": "String",
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

    // Get all Category
    app.get(baseUrl + '/category/all', auth.isAuthenticated, categoryController.getAllCategory);
     /**
	 * @api {get} /api/v1/superbazar/category/all Get all Category
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "All Category found",
            "status": 200,
            "data": [
                {
                    "categoryName": "String",
                    "categoryId": "String",
                    "created": "Date",
                    "lastModified": "Date",
                }
            ]
    }

        @apiErrorExample {json} Error-Response:
        *
        *   {
                "error": true,
                "message": "Failed to find Category details",
                "status": 500,
                "data": null
            }
    */

    // View single Category
    app.get(baseUrl + '/category/view/:categoryId', auth.isAuthenticated, categoryController.getCategoryById);
    /**
    * @api {get} /api/v1/superbazar/category/view/:categoryId  Single Category View
    * @apiVersion 0.0.1
    * @apiGroup read
    *
    * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
    * @apiParam {String} CategoryId The categoryId should be passed as the URL parameter.
    *
    *  @apiSuccessExample {json} Success-Response:
    *  {
            "error": false,
            "message": "Category Found successfully!",
            "status": 200,
            "data": {
                "categoryName": "String",
                "_id": "String",
                "categoryId": "String",
                "created": "Date",
                "lastModified": "Date",
                "__v": Number
            }   
    }

        @apiErrorExample {json} Error-Response:
        *
        * 
        {
            "error": true,
            "message": "Error Occured",
            "status": 500,
            "data": null
        }

    */
    
    // Edit a Category
    app.put(baseUrl + '/category/:categoryId/edit', auth.isAuthenticated, categoryController.editCategory);
    /**
	 * @api {put} /api/v1/superbazar/category/:categoryId/edit Edit Category by categorytId
	 * @apiVersion 0.0.1
	 * @apiGroup edit
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
	 * @apiParam {String} categoryId The Id of the category passed as the URL parameter.
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Category Edited successfully!",
            "status": 200,
            "data": {
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
    
    // Delete a Category
    app.post(baseUrl + '/category/:categoryId/delete', auth.isAuthenticated, categoryController.deleteCategory);
    /**
	 * @api {post} /api/v1/superbazar/category/:categoryId/delete Delete Category by categoryId
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
	 * @apiParam {String} categoryId The Id of the category passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Category Deleted successfully!",
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
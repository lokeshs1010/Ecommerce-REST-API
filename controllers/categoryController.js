const express = require('express');
const mongoose = require('../node_modules/mongoose'); 
const shortid = require('shortid');

//Importing the library here
const response = require('./../libs/responseLib');
const time = require('./../libs/timeLib')
const check = require('./../libs/checkLib')
const logger = require('./../libs/loggerLib');

//Importing the model here 
const CategoryModel = mongoose.model('Category');


// function to get all category
let getAllCategory = (req, res) => {
    CategoryModel.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Failed to find category details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Category Found','categoryController:getAllCategory',5)
                let apiResponse = response.generate(true, 'No category found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'All category found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get all Categorys


/**
 * function to get one category.
 */
let getCategoryById = (req, res) => {
    if (check.isEmpty(req.params.categoryId)) {
        console.log('Category id should be passed')
        let apiResponse = response.generate(true, 'CategoryId is missing', 403, null)
        res.send(apiResponse);
    } else {
        CategoryModel.findOne({ 'categoryId': req.params.categoryId }, (err, result) => {

            if (err) {
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No category Found', 'categoryController: getCategoryById', 5)
                let apiResponse = response.generate(true, 'No category found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info('Product Found Successfully!', 'categoryController: getcategoryById', 10)
                let apiResponse = response.generate(false, 'Category found successfully', 200, result)
                res.send(apiResponse)

            }
        })
    }
}


/**
 * function to edit category by admin.
 */
let editCategory = (req, res) => {
    if (check.isEmpty(req.params.categoryId)) {

        console.log('Category id should be passed')
        let apiResponse = response.generate(true, 'CategoryId is missing', 403, null)
        res.send(apiResponse);
    } else {
        let options = req.body;
        console.log(options);
        CategoryModel.update({ 'categoryId': req.params.categoryId }, options, { multi: true }).exec((err, result) => {

            if (err) {
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                let apiResponse = response.generate(true, 'No category found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info('Category Edited successfully','categoryController:editcategory',5)
                let apiResponse = response.generate(false, 'Category edited successfully', 200, result)
                res.send(apiResponse)

            }
        })
    }
}



/**
 * function to delete the category.
 */
let deleteCategory = (req, res) => {
    if (check.isEmpty(req.params.categoryId)) {

        console.log('Category Id should be passed')
        let apiResponse = response.generate(true, 'CategoryId is missing', 403, null)
        res.send(apiResponse);
    }
    else {
        CategoryModel.remove({ 'categoryId': req.params.categoryId }, (err, result) => {
            if (err) {
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                let apiResponse = response.generate(true, 'No category found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info('Category Deleted successfully','categoryController:deleteCategory',5)
                let apiResponse = response.generate(false, 'Category deleted successfully', 200, result)
                res.send(apiResponse)

            }
        })
    }
}

/**
 * function to create the category.
 */
let createCategory = (req, res) => {
    let addingCategoryFunction = () => {
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.body.categoryName)) {

                console.log("403, forbidden request");
                logger.error(`Error Occured : Required Parameters are missing`, 'categoryController: createCategory', 10);
                let apiResponse = response.generate(true, 'Required parameters are missing', 403, null)
                reject(apiResponse);
            }
            else {
                var today = time.now()
                let categoryId = shortid.generate()

                let newCategory = new CategoryModel({

                    categoryId: categoryId,
                    categoryName: req.body.categoryName,
                    created: today,
                    lastModified: today
                }) // end new category model


                newCategory.save((err, result) => {
                    if (err) {
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    } else {
                        console.log('Success in Category creation')
                        resolve(result)

                    }
                }) // end new category save
            }
        });
    }
    // making promise call.
    addingCategoryFunction().then((result) => {
        let apiResponse = response.generate(false, 'Category created successfully', 200, result)
        res.send(apiResponse)
    })
        .catch((error) => {
            res.send(error);
        });
}



module.exports = {
    getAllCategory : getAllCategory,
    getCategoryById : getCategoryById,
    createCategory : createCategory,
    editCategory : editCategory,
    deleteCategory : deleteCategory
}
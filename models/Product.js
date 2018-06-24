// importing mongoose module.
const mongoose = require('mongoose')

const time = require('./../libs/timeLib')

// import schema.
const Schema = mongoose.Schema;


let productSchema = new Schema(
    {
        productId: {
            type: String,
            unique: true
        },
        categoryId: {
            type: String,
            default: ''
        },
        productName: {
            type: String,
            default: ''
        },
        productDescription: {
            type: String,
            default: ''
        },
        productPrice: {
            type: Number,
            default: '0'
        },
        productAvailability: {
            type: String,
            default: ''
        },
        productCondition: {
            type: String,
            default: ''
        },
        freeDelivery: {
            type: String,
            default: ''
        },
        ratings: {
            type: Number,
            default: 0
        },
        reviews: {
            type: [],
            default: []
        },
        created: {
            type: time,
            default: time.now
        },
        lastModified: {
            type: time,
            default: time.now
        }
    }
); // end product schema

mongoose.model('Product', productSchema);
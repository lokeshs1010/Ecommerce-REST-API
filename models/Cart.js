// importing mongoose module.
const mongoose = require('mongoose')

const time = require('./../libs/timeLib')

// import schema.
const Schema = mongoose.Schema;


let cartSchema = new Schema(
    {
        cartId: {
            type: String,
            unique: true
        },
        productId: {
            type: String,
            default: ''
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
); // end cart schema

mongoose.model('Cart', cartSchema);
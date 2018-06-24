// importing mongoose module.
const mongoose = require('mongoose')


const time = require('./../libs/timeLib')

// import schema.
const Schema = mongoose.Schema;


let categorySchema = new Schema(
    {
     categoryId:{
         type:String,
         unique:true
     },
     categoryName:{
         type:String,
         default:''
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
); // end category schema

mongoose.model('Category', categorySchema);
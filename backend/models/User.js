const mongoose = require('mongoose');

const {Schema} = mongoose

const userSchema = new Schema({
    
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    images:{
        name:String,
        data:Buffer,
        contentType:String
    },
    pass:{
        type:String,
        required:true
    },
    cpass:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('User',userSchema)
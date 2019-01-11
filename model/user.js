
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    createTime: {
        type: Date,
        default:Date.now
    }

})
const user = mongoose.model('user',userSchema);
module.exports = user;




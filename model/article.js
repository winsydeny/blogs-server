
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const UserSchema = new Schema({
    title:String,
    content:String,
    categories:Array,
    author:String
});
const Artical = mongoose.model('Artical',UserSchema);

module.exports = Artical;
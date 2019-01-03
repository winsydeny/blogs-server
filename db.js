const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let db = mongoose.connection;
mongoose.connect('mongodb://localhost/blogs');

db.on('error',console.error.bind(console,'connection error'));
db.once('open',() => { 
    console.log('DataBase has been connected!'); 
});
const UserSchema = new Schema({
    username:String,
    password:Number
})
const User = mongoose.model('User',UserSchema)
let user = new User({
    username:'sydeny',
    password:1233123131
})
// //保存
user.save((err,res)=>{
    if(err){
         return console.track(err)
    }else{
        console.log("插入完成");
    }
    console.log(res)
})
// User.find({'username':'Tony'},(err,doc)=>{
//     console.log(doc);
// })






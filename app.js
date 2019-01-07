const express = require('express')
const fs = require('fs')
const url = require('url')
let app = express();

// connect database
// const mongoose = require('mongoose');
// let Schema = mongoose.Schema;
// let db = mongoose.connection;
// mongoose.connect('mongodb://localhost/blogs');

const db = require("./database/db");
const UserSchema = require('./model/article');
// monitor datbase 
// db.on('error',console.error.bind(console,'connection error'));
// db.once('open',() => { 
//     console.log('DataBase has been connected!'); 
// });


// create Schema
// const UserSchema = new Schema({
//     title:String,
//     content:String,
//     categories:Array,
//     author:String
// });

const total_list = require('./route/api/total_list');
const login = require("./route/api/login");
const comment = require('./route/api/comment');
const detail = require('./route/api/detail');
const add = require('./route/api/add');
// const UserSchema1 = new Schema({
//     username:String,
//     password:Number
// })
// const User = mongoose.model('User',UserSchema1)

// const Artical = mongoose.model('Artical',UserSchema);
const Artical = require('./model/article');


// let domain = (req,res)=>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// }

// cross domain
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});
// router
app.use('/api/total_list',total_list);
app.use('/api/login',login);
app.use('/api/comment',comment);
app.use('/api/detail',detail);
app.use('/api/add',add);

app.listen(3000,()=>{
    console.log('is running');
});
// app.get('/',(req,res)=>{
//     res.header("Access-Control-Allow-Origin", "*");
//     Artical.find({},(err,doc)=>{
//         if(err){
//             throw err;
//         }else{
//             res.send(doc);
//         }
// })   
// });
// app.get('/detail',(req,res)=>{
//     console.log(url.parse(req.url));
//     let id = url.parse(req.url).query;
//     Artical.find({'_id':id},(err,doc)=>{
//         if(err){ throw err; }
//         else{ res.send(doc); }
//     })
// });

// app.delete('/detail',(req,res)=>{
//     let id = url.parse(req.url).query;
    
//     Artical.deleteOne({'_id':id},(err,doc) => {
//         res.send("success");
//     })
// });

// app.post('/comment',(req,res) => {
//     let formdata = '';
//     req.on('data',(chunk)=>{
//         formdata += chunk;
//     });
//     req.on('end',()=>{
//         let obj = JSON.parse(formdata);
//         console.log(obj);
//     })
//     res.send("success comment");
// });

// app.post('/add',(req,res)=>{
//     let fromdata = '';
//     req.on('data',(chunk)=>{
//         fromdata += chunk;
//     });
//     req.on('end',()=>{
//         let obj = JSON.parse(fromdata);
//         let user = new Artical({
//             title:obj.title,
//             content:obj.content,
//             categories:obj.categories,
//             author:obj.author
//         })
//         // //保存
//         user.save((err,res)=>{
//             if(err){
//                  return console.track(err)
//             }else{
//                 console.log("插入完成");
//             }
            
//         })
//     })
//     res.send("完成提交!");
// })






// let user = new User({
//     title:'MONGOOSE',
//     content:'KAN JSAN',
//     categories:['vue.js'],
//     author:'JACK JONSH'
// })
// // //保存
// user.save((err,res)=>{
//     if(err){
//          return console.track(err)
//     }else{
//         console.log("插入完成");
//     }
//     console.log(res)
// })
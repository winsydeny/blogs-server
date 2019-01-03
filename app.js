const express = require('express')
const fs = require('fs')
const url = require('url')
let app = express();

// connect database
const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let db = mongoose.connection;
mongoose.connect('mongodb://localhost/blogs');

// monitor datbase 
db.on('error',console.error.bind(console,'connection error'));
db.once('open',() => { 
    console.log('DataBase has been connected!'); 
});


// create Schema
const UserSchema = new Schema({
    title:String,
    content:String,
    categories:Array,
    author:String
});


// const UserSchema1 = new Schema({
//     username:String,
//     password:Number
// })
// const User = mongoose.model('User',UserSchema1)

const Artical = mongoose.model('Artical',UserSchema);


// let domain = (req,res)=>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// }
// app.use(domain);
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});

app.get('/',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    // fs.readFile('./info.json',(err,data)=>{
    //     if(err){
    //         throw err;
    //     }else{
    //         res.end(data);
    //     }
    // }) 
    Artical.find({},(err,doc)=>{
        if(err){
            throw err;
        }else{
            res.send(doc);
        }
})   
});
app.get('/detail',(req,res)=>{
    console.log(url.parse(req.url));
    let id = url.parse(req.url).query;
    Artical.find({'_id':id},(err,doc)=>{
        if(err){ throw err; }
        else{ res.send(doc); }
    })
    // res.send(id);
});

app.delete('/detail',(req,res)=>{
    let id = url.parse(req.url).query;
    
    Artical.deleteOne({'_id':id},(err,doc) => {
        res.send("success");
    })
});



app.post('/add',(req,res)=>{
    let fromdata = '';
    req.on('data',(chunk)=>{
        fromdata += chunk;
    });
    req.on('end',()=>{
        let obj = JSON.parse(fromdata);
        let user = new Artical({
            title:obj.title,
            content:obj.content,
            categories:obj.categories,
            author:obj.author
        })
        // //保存
        user.save((err,res)=>{
            if(err){
                 return console.track(err)
            }else{
                console.log("插入完成");
            }
            // console.log(res)
        })
        // fs.writeFile('info.json',obj);
        // console.log(fromdata);
    })
    res.send("完成提交!");


})
app.listen(3000,()=>{
    console.log('is running');
});





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
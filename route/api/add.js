const express = require('express');
const route = express.Router();
const Artical = require('../../model/article');
route.post('/',(req,res)=>{
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
            
        })
    })
    res.send("完成提交!");
})

module.exports = route;
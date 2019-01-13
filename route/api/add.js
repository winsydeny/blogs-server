const express = require('express');
const route = express.Router();
const Artical = require('../../model/article');
route.post('/',(req,res)=>{
    const obj = req.body;
    const article = new Artical({
        title:obj.title,
        content:obj.content,
        categories:obj.categories,
        author:obj.author
    });
    article.save((err,res)=>{
                if(err){
                     return console.track(err)
                }else{
                    console.log("插入完成");
                }
                
            })
    res.send("完成提交!");
})

module.exports = route;
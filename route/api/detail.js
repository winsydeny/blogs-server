const express = require('express');
const route = express.Router();
const url = require('url');
const Artical = require('../../model/article');


route.get('/',(req,res)=>{
    console.log(url.parse(req.url));
    let id = url.parse(req.url).query;
    Artical.find({'_id':id},(err,doc)=>{
        if(err){ throw err; }
        else{ res.send(doc); }
    })
});


route.delete('/',(req,res)=>{
    let id = url.parse(req.url).query;
    Artical.deleteOne({'_id':id},(err,doc) => {
        res.send("success");
    })
});
module.exports = route;
const express = require('express');
const route = express.Router();
const url = require('url');
const Artical = require('../../model/article');

route.get('/',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    Artical.find({},(err,doc)=>{
        if(err){
            throw err;
        }else{
            res.send(doc);
        }
})   
});

module.exports = route;
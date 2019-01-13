const express = require('express');
const route = express.Router();
const url = require('url');
const jwt = require('jsonwebtoken');
const cert = require('../../cert/cert');
const Artical = require('../../model/article');
// const url = require('url');

route.get('/',(req,res)=>{
    // console.log(url.parse(req.url));
    let id = url.parse(req.url).query;
    // let token = req.body.token;
    // console.log(token);
    // res.send('detaio;'+token)
    // console.log(token);
    // jwt.verify(token,'wtjckfuck',(err,decoded)  =>{
            
    //         if(err) return res.send('token invalid');

    // })


    Artical.find({'_id':id},(err,doc)=>{
        if(err){ throw err; }
        else{ res.send(doc); }
    })
});


route.delete('/',(req,res)=>{
    let id = url.parse(req.url).query;
    console.log(req.headers.authorization);

    let token = req.headers.authorization;
    // console.log(token);
    jwt.verify(token,cert,(err,decoded)  =>{
            
        if(err) return res.send("未授权，请登录");
        // res.send(decoded);
        if(id){
            Artical.deleteOne({'_id':id},(err,doc) => {
                if(err) return res.send("error");
                res.send("success");
            })
        }else{
            res.send("no id")
        }
        
    })
    
});
module.exports = route;
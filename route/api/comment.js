const express = require('express');
const route = express.Router();

route.get('/',(req,res)=>{
    res.send("comment success");
})

module.exports = route;
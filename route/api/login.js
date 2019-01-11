const app = require("express");
const router = app.Router();
const User = require('../../model/user');
const jwt = require('jsonwebtoken');
router.post('/',(req,res)=>{
    // User.find({})
    // console.log(req.body);
    User.find({'username':req.body.username},(err,data)=>{
        if(data.length){
            if(data[0].password === req.body.password){
                const token = jwt.sign({'username':data[0].username},'wtjckfuck',{'expiresIn':10});
                console.log(token);
                res.send("login successful");
            }else{
                res.send("password error");
            }
        }else{
            res.send("no user");
        }
    })
})


router.get('/signout',(req,res)=>{
    res.send("注销成功");
})



module.exports = router;
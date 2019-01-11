const app = require("express");
const router = app.Router();
const User = require('../../model/user');
router.post('/',(req,res)=>{
    // User.find({})
    console.log(req.body);
    User.find({'username':req.body.username},(err,data)=>{
        if(data.length){
            if(data[0].password === req.body.password){
                res.send("登录成功");
            }else{
                res.send("密码错误");
            }
        }else{
            res.send("无此用户");
        }
    })
})


router.get('/signout',(req,res)=>{
    res.send("注销成功");
})



module.exports = router;
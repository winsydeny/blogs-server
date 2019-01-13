const app = require("express");
const router = app.Router();
const User = require('../../model/user');
const jwt = require('jsonwebtoken');
const cert = require('../../cert/cert');
const bcrypt = require('bcryptjs');
router.post('/',(req,res)=>{
    
    User.find({'username':req.body.username},(err,data)=>{
        if(data.length){
            if(bcrypt.compareSync(req.body.password,data[0].password)){
                // generate token 
                const t = jwt.sign({'username':data[0].username},cert,{'expiresIn':'10h'});
                // console.log(token);
                const token = {token:t};
                res.json(token);
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
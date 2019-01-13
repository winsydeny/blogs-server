const app = require("express");
const router = app.Router();
const User = require('../../model/user');
const url = require('url');
const bcrypt = require('bcryptjs');

router.post('/',(req,res)=>{
    // let fromdata = '';
    const fromdata = req.body;
    const hashpassword = bcrypt.hashSync(fromdata.password, 8);
    console.log(fromdata);
    if(fromdata.username != null && fromdata.password != null){
        User.find({'username':fromdata.username},(err,data)=>{
                    // res.send(data);
                    if(data.length){
                        res.send('用户名重复');
                    }else{
                        let userinfo = new User({
                            username: fromdata.username,
                            password: hashpassword
                        })
                        userinfo.save((err,res)=>{
                            if(err) throw err;
                            // console.log('finished register');
                            
                        })
                        res.send('reigister success');
                    }
                });
    }else{
        res.send('username or password is required,please enter them');
    }
    // req.on('data',(chunk)=>{
    //     fromdata += chunk;
    // })
    // req.on('end',()=>{
    //     let obj = JSON.parse(fromdata);
    //     User.find({'username':obj.user},(err,data)=>{
    //         // res.send(data);
    //         if(data.length){
    //             res.send('用户名重复');
    //         }else{
    //             let userinfo = new User({
    //                 username: obj.user,
    //                 password: obj.password
    //             })
    //             userinfo.save((err,res)=>{
    //                 if(err) throw err;
    //                 // console.log('finished register');
                    
    //             })
    //             res.send('reigister success');
    //         }
    //     });
    
    
    
    
        // let userinfo = new User({
        //     username: obj.user,
        //     password: obj.password
        // })
        // userinfo.save((err,res)=>{
        //     if(err) throw err;
        //     console.log('finished register');
            
        // })
    
    
    
    
    
    
        // res.send('finished reigster');
    
    
    
    
    
    // })
   
})

module.exports = router;
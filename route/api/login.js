const app = require("express");
const router = app.Router();

router.get('/',(req,res)=>{
    res.send("登录成功");
})
router.get('/signout',(req,res)=>{
    res.send("注销成功");
})

module.exports = router;
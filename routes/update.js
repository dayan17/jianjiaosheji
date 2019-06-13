var express = require('express');
var router = express.Router();
var UserModel = require("../model/user");
router.post('/update',function(req,res){
    UserModel.update({
        name:req.body.name
    },{$set:{name:req.body.name}}).then(result=>{
        if(result.length===0){
            res.send({ok:0});
        }else{
            res.send({ok:1});
        }
    })
})

module.exports = router;
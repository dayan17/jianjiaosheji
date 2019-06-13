var express = require('express');
var router = express.Router();
var UserModel = require("../model/user");
/* GET home page. */
router.post('/validates', function(req, res, next) {
  UserModel.create({
      username:req.body.username,
      password:req.body.password,
      name:req.body.name
  }).then(result=>{

      res.send({ok:1});
  }).catch(error=>{
      res.send({ok:0});
  })

});

router.post("/checkename",function(req,res){
    UserModel.find({
        username:req.body.username
    }).then((result)=>{
        if(result.length===0){
            res.send({
                allowregister:true
            });
        }else{
            res.send({
                allowregister:false
            });
        }
    })
})

module.exports = router;

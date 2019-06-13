var express = require('express');
var router = express.Router();
var UserModel = require("../model/user");
/* GET home page. */
router.post("/validate",function(req,res){
	UserModel.find({
		username:req.body.username,
		password:req.body.password
	}).then(result=>{
		if(result.length===0){
			res.send({
				ok:0
			});
		}else{
			var payload ={
				"name": result[0].name
			};
			var token = payload;
			res.send({ok:1,token:token});
		}
	})
})

module.exports = router;

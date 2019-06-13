var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/checktoken',function(req,res){
	var token = req.headers.authorization;
	if(token===''){
		res.send({ok:0});
		return;
  }else{
		res.send({ok:1});
	}

})
module.exports = router;
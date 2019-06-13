var mongoose = require("mongoose");
var Schema = mongoose.Schema

var obj = {
	username:String,
	password:String,
	name:String
}


var model = mongoose.model("user",new Schema(obj));//概要
// 自动会创建一个users 这个集合  操作user模型 就是操作users这个集合
module.exports = model;//
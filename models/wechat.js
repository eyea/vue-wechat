const mongoose = require('mongoose')

const weChatSchema = mongoose.Schema({
  title : { type:String, required : true },
  poster : String,
  rating : String,
  introduction : String,
  created_at : { type : Date, default : Date.now },
  update_at : { type : Date, default : Date.now }
})

const weChat = module.exports = mongoose.model('weChat',weChatSchema)

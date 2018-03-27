const mongoose = require('mongoose')

const weChatSchema = mongoose.Schema({
  title : { type:String, required : true },
  createdTime : { type : Date, default : Date.now },
  lastUpdateTime : { type : Date, default : Date.now },
  imgUrl: String,
  hasMute: Boolean,
  chatType: String,
  infoCount: Number,
  submitInfo: { type: String, default: '摘要信息'}
})

const weChat = module.exports = mongoose.model('weChat',weChatSchema)

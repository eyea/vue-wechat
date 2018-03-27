const express = require('express')
const router = express.Router()
const weChat = require('../models/wechat')

// 查询WeChat所有list
router.get('/weChat', (req, res) => {
  weChat.find({})
      //  .sort({ update_at : -1})
       .then(weChats => {
         console.log('weChats', weChats)
         res.json(weChats)
       })
       .catch(err => {
         res.json(err)
       })
})
// 通过ObjectId查询单个list
router.get('/weChat/:id', (req, res) => {
  weChat.findById(req.params.id)
    .then(weChat => {
      res.json(weChat)
    })
    .catch(err => {
      res.json(err)
    })
})
// 添加一条list
router.post('/weChat', (req, res) => {
  //使用weChat model上的create方法储存数据
  weChat.create(req.body, (err, weChat) => {
    if (err) {
      res.json(err)
    } else {
      res.json(weChat)
    }
  })
  //使用实例的save方法存储数据
  // let movie = new weChat({
  //   title : req.body.title,
  //   year : req.body.year,
  //   poster : req.body.poster,
  //   introduction : req.body.introduction
  // })
  // movie.save( (err,movie) => {
  //   if (err) {
  //     res.json(err)
  //   } else {
  //     res.json(movie)
  //   }
  // })
})
//更新一条数据
router.put('/weChat/:id',(req,res) => {
  weChat.findOneAndUpdate({ _id : req.params.id}
       ,{ $set : { title: req.body.title,
         rating : req.body.rating,
         poster : req.body.poster,
         introduction : req.body.introduction }
         },{
           new : true
         })
       .then(weChat => res.json(weChat))
       .catch(err => res.json(err))
})
//删除一条数据
router.delete('/weChat/:id',(req,res) => {
  weChat.findOneAndRemove({
        _id : req.params.id
        })
       .then(weChat => res.send(`${weChat.title}删除成功`))
       .catch(err => res.json(err))
})

module.exports = router

const pkg = require('./package')
const config = require('./config/db')
const express = require('express')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const index = require('./router/index')
// const movie = require('./router/movie')
const weChat = require('./router/weChat')

mongoose.connect(config.mongodb, (err)=>{
  if (err) {
    console.log('数据库链接失败')
  } else {
    console.log('数据库链接成功！')
  }
})
mongoose.Promise = global.Promise

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(favicon(__dirname + '/src/assets/favicon.ico'))
app.use(express.static('dist'))
app.use('/',index)
app.use('/api',weChat)

app.listen(port, () => {
  console.log(`${pkg.name} listening on port: ${port}`)
})

module.exports = app

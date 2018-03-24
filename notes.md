### note1
为了能够方便的通过预览，由于个人网站最近是 `hexo` 搭建，将单独的 wechat demo兼容进来不是很方便，故在 `coding.net` 上存放 `dist` 下的文件。
同时也在 `coding` 上配置了 `pages` ，方便在线访问。

### steps
1. 本项目的配置，在 `config/index.js` 简单配置下路由。如下：
  `build` 下的 `assetsPublicPath: /wechat` WeChat 是 `coding` 上的项目名

2. 在本项目 `yarn build`， 将 `dist`的文件 `copy` 到 `coding` 下的 `WeChat`

3. 因为之前在`coding`上已经进行了`pages`的配置，将打包后的文件替换上去后，页面自动刷新，当前项目的预览地址是 [wechat](https://eyea.coding.me/wechat/)

4. 使用 __websocket__ 对话机制

5. 使用 __vuex__ 进行状态管理

6. 使用 __mongodb__ 进行数据库相关的操作
```js
brew install mongodb
```
查看mongod： 打开finder 按下 shift + command + g ,输入 /usr/local/Cellar/ Cellar下可以看到mongodb的执行文件
从终端进入 cd /usr/local/Cellar/mongodb/3.2.11/bin/
然后执行 ./mongod --dbpath /Users/yourusername/me/mongodbData/   ／／配置数据库存放的位置
### some other
按照设计稿是 `640 * n`
适配方案:采用rem单位,安装`px2rem-loader`,在`build/utils.js`下添加 `cssLoader: px2remLoader`,并配置。具体可参本项目的文件。

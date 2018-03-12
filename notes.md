### note1
为了能够方便的通过预览，由于个人网站最近是 `hexo` 搭建，将单独的 wechat demo兼容进来不是很方便，故在 `coding.net` 上存放 `dist` 下的文件。
同时也在 `coding` 上配置了 `pages` ，方便在线访问。

### steps
1. 本项目的配置，在 `config/index.js` 简单配置下路由。如下：
  `build` 下的 `assetsPublicPath: /wechat` WeChat 是 `coding` 上的项目名



2. 在本项目 `yarn build`， 将 `dist`的文件 `copy` 到 `coding` 下的 `WeChat` 
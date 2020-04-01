# vue-cli2中图片路径问题

1. 本地调试时，可以使用绝对路径，但是打包之后，资源路径需要相对路径，所以，config.index中的build字段下assetsPublicPath由'/'改为'./‘。

2. 可以使用webpack压缩成base64位字符串的小格式图片（图片体积小于options.limit），用背景图片来做，放在src/assets/img下面

3. 大格式图片，用img标签引入页面，放在static/img下面（打包时不会改变状态）

4. 当有大格式图片需要做背景图片时，需要放在static/img下面，同时，在utils.js中，添加publicPath: '../../‘。

![An image](../asset/image/p107.png)
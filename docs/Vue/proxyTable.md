# 使用webpack解决开发过程中的跨域问题
:::tip
Vue-cli 可以webpack在本地打开项目，但是获取后台数据的时候会遇到域的限制，这时需要使用webpack来进行代理，解决跨域问题
:::

具体方法：
在config文件夹下的index.js中，有proxyTable属性，在其中配置代理,例如：
```json
'/api': {
    target: 'http://localhost:3000',
    changeOrigin: true
},
```

这段代码的作用是：当请求的ur是以/api开头的时候，在前面加上target的域名（如：http://localhost:3000），这样的请求就没有跨域问题了。
:::warning
注意：每次配置代理后，都必须手动重启才能生效
:::


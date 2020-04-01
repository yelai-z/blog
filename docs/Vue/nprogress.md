# vue进度条插件vue-nprogress

## 安装:
```shell
npm i -—save-dev vue-nprogress
```


绑定到vue实例上：
在根目录下main.js中：

```javascript
import NProgress from 'vue-nprogress’


Vue.use(NProgress)

const nprogress = new NProgress({ parent: '.nprogress-container' })

new Vue({
    el: '#app',
    router,
    store,
    nprogress,
    template: '<App/>',
    components: { App }
})
```


页面挂载组件：
在主页面app.vue文件中：
```js
<template
>
    <div id="app">
        <nprogress-container></nprogress-container>
        <router-view></router-view>
    </div>
</template>

<script>
    import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
    export default {
        components: {
            NprogressContainer
        },
        name: 'app'
    }
</script>
<style lang="less">
.nprogress-container {
    position: fixed !important;
    width: 100%;
    height: 50px;
    z-index: 2048;
    pointer-events: none;

    #nprogress {
        @color: #48e79a;

        .bar {
            background: @color;
        }
        .peg {
            box-shadow: 0 0 10px @color, 0 0 5px @color;
        }

        .spinner-icon {
            border-top-color: @color;
            border-left-color: @color;
        }
    }
}
</style>
```



## 使用方法：

1. 必须在组件挂在后(mounted函数中)使用
this.$nprogress.start()开始进度
this.$nprogress.done()结束进度
this.$nprogress.inc(0.2)走到指定进度

2. 默认在路由跳转时自动触发，如果没有挂载在全局中，需要手动配置参数关闭。详见https://github.com/vue-bulma/nprogress

```javascript
const options = {
  latencyThreshold: 200, // Number of ms before progressbar starts showing, default: 100,
  router: true, // Show progressbar when navigating routes, default: true
  http: false // Show progressbar when doing Vue.http, default: true
};
Vue.use(NProgress, options)
```




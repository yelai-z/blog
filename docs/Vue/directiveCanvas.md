# vue自定义指令用canvas渲染图片和文字

1. 准备数据

 
```javascript
data () {
    return {
      params: {
        url: '../static/logo.png',
        text: '文案'
      }
    }
  }
```



2. 准备directives.js文件


```javascript
const canvasText = {
  inserted: (el, binding) => {
    console.log(el, binding)
    let cvs = el.getContext('2d')
    let img = new Image()
    img.src = binding.value.url
    console.log(cvs, img)
    img.onload = function () {
      console.log(1)
      cvs.drawImage(img, 0, 0)
      cvs.fillStyle = 'blue'
      cvs.font = '33px Adobe Ming Std'
      cvs.fillText(binding.value.text, 80, 80)
    }
  }
}

export default {
  'canvas-text': canvasText
}
```


3. 在main.js中引入自定义指令文件


```javascript
import Vue from 'vue'
import App from './App'
import router from './router'
import directives from './assets/directives'

Vue.config.productionTip = false

Object.keys(directives).map(ele => {
  Vue.directive(ele, directives[ele])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
```

4. 在页面中准备canvas元素，添加指令


```html
<canvas" width="200" height="200" v-canvas-text="params"></canvas>
```





















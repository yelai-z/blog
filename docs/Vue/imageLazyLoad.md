# 使用自定义指令完成图片缓冲加载

::: tip
自定义指令的优点在于可以复用，而且虽然大部分是数据驱动，但是有些需要操作dom的地方自定义指令很方便
图片在加载过程中,未加载完成时,使用一个随机的颜色占位,图片加载完后直接显示,可以使用自定义指令来完成
:::

html部分

```html
<img v-imgUrl="url"></img> // 参数不可以直接填写url地址
```

Js部分

```js
data () {
    return {
        url:'src/assets/logo.png'
    } 
}

directive:{
    ‘imgUrl':function(el,binding){ //el是绑定的dom元素
        var color=Math.floor(Math.random()*1000000); //设置随机颜色
        el.style.backgroundColor='#'+color;

        var img=new Image();
        img.src=binding.value;// -->binding.value指的是指令后的参数
        img.onload=function(){
          el.style.backgroundColor='';
          el.src=binding.value;      
        }
      }
}
```

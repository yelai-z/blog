# IOS10以上禁止页面缩放
一般使用meta标签viewport来设置页面缩放比例以及禁止缩放

```html
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;" name="viewport" />
```


**但是ios10以上Safari中没有效果。**

处理方法：在页面加载中禁用双击和手势事件

```js
'stopScala': function () {
    // 阻止双击缩放事件
    document.addEventListener('touchstart',function (event) {
        if(event.touches.length>1){
            event.preventDefault();
        }
    })
    var lastTouchEnd=0;
    document.addEventListener('touchend',function (event) {
        var now=(new Date()).getTime();
        if(now-lastTouchEnd<=300){
            event.preventDefault();
        }
        lastTouchEnd=now;
    },false)
    // 阻止双指缩放
    document.addEventListener('gesturestart', function (event) {
        event.preventDefault();
    });
}
```

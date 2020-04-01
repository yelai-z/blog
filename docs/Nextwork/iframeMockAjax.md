# iframe标签代替ajax，实现不刷新页面提交表单

因为ajax默认的application/x-www-form-urlencoded（在发送前编码所有字符），但是发送带文件的表单时，必须设置multipart/form-data（不对字符进行编码），所以后台无法识别ajax传送的带文件的request

即ajax提交form表单无法把文件类型数据提交到后台，

不刷新页面就提交表单不止ajax一种方法，也可以使用隐藏的iframe标签实现

这个功能的实现，主要依赖于form标签的target属性，target属性规定在何处打开action URL

所以当form标签的target属性和iframe标签的name属性相同时，那么就会在iframe标签中提交表单，然后就可以在iframe表单中获取到后台返回的数据，刷新的知识iframe标签，不是整个页面；


html代码
```html
    //如果提交的时候，这个input标签中的添加内容不变，说明没有刷新
    <input type="text">
    

    

    <form action="form.php" method="post" target="form_iframe" id="form">
        <input type="text" name="name">
        

        

        <input type="password" name="password">
        

        

        <input type="submit" value="提交">
    </form>
     
    //这里为了展示效果没有把iframe标签隐藏，实际中应该用display：none隐藏起来
    <iframe name="form_iframe" id="if"></iframe>
```
php代码


```php
<?php

$p = $_POST['name'];

// echo '<h3 id="h">'.$p.'</h3>';
echo "<script>alert(".$p.");</script>";

?>
```


表单提交后，如何获取iframe标签的内容呢？

给iframe定义一个onload事件，处理其contentWindow属性就能获取其中的内容了，当然，还要排除页面第一次渲染的时候，所以iframe标签的innerHTML属性不能为空


script代码

        
```JavaScript
var iframe = document.getElementById('if');

iframe.onload = function(){
    if (!this.innerHTML) {
            console.dir(document.getElementById('if'))
            var val = document.getElementById('if').contentWindow.document.getElementById('h3');
            console.log(val);
    }
}
```



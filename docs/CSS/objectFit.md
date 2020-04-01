# img元素适应css设定的宽高

``object-fit`` CSS 属性指定可替换元素的内容应该如何适应到其使用的高度和宽度确定的框。
您可以通过使用 `object-position` 属性来切换被替换元素的内容对象在元素框内的对齐方式。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit)

> 将一个竖长方形的头像img只展示一个圆形部分

```css
width: 40px;
height: 40px;
border-radius: 50%;
object-fit: cover;
object-position: left top;
```
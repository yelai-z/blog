# taro组件内部state和props混用错误

## case:

A页面里面引用B组件，并传入字段agent。agent直接用于组件视图层渲染

```html
<view>agent...</view>
```
在点击事件中使用```this.state.agent```并没有问题。
后将agent赋值给其他字段
```jsx
const info = flag > 1 ? agent : {}
<view>info...</view>
```
然后在视图层使用```this.state.agent```就会报错

## 原因

因为小程序原生在自定义组件内部不区分data和props，所以导致data和props可以混用

在taro里面，自定义组件的视图层使用的字段，无论是state上的、还是props传进来的，都会被注入到state里面

```js
Object.assign(this.__state, {
    anonymousState__temp: anonymousState__temp,
    anonymousState__temp2: anonymousState__temp2,
    anonymousState__temp3: anonymousState__temp3,
    anonymousState__temp4: anonymousState__temp4,
    $compid__3327: $compid__3327,
    $compid__3328: $compid__3328,
    $compid__3329: $compid__3329,
    $compid__3330: $compid__3330,
    $compid__3331: $compid__3331,
    $compid__3332: $compid__3332,
    brandInfo: brandInfo,
    brandTags: brandTags,
    houseInfo: houseInfo,
    agent: agent,
    invisible: invisible,
    isAgent: isAgent,
    specialShare: specialShare,
    moreInfoList: moreInfoList,
    arrowRight: arrowRight,
    xqData: xqData,
    parentPopState: parentPopState,
    houseData: houseData
  });
  return this.__state;
```
所以使用```this.state.agent```没有问题。但是一旦将props的字段赋值给其他字段，那么这个字段就不会被注入到state上，那么从state使用，就会报错了。
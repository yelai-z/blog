# 形如(0, fn)(arg)原理

在阅读一些源码的时候，发现打包出的代码经常带有(0, fn)(arg)这种语法，所以研究了一下其中原理

以下面代码为例，可以看出，经过处理的代码，其中会返回纯净的函数体，可以使函数和实例解绑
```js
const obj ={
    a:3,
    b () {
     console.log(this); 
    }
};
obj.b(); // {a: 3, b: ƒ}
(0,obj.b)(); // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
```
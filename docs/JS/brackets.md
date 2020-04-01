# {} + [] 与 console.log({} + [])

在chrome中分别执行下列代码
```js
{} + []; // 0
 console.log({} + []); // [object Object]
 ```
> 看起来很奇妙的表现，主要源于js引擎对于``{}``的解释。
``{}``既可以被解释成块级作用域又可以被解释成对象时，会被优先解释成块级作用域。


那你会不会想说，试试 ``{a:1} + [] ???``
```js
{a:1} + [] // 0
console.log({a:1} + []) // [object Object]
```
难道这里也可以被理解成块级作用域吗？

没错，这里也可以被理解成块级作用域。因为js中，冒号，除了常见的用法外，也是一种声明方法。

这个也可以通过以下的方式来证明： 在控制台直接输出{a:1}：
```js
{a:1} // chrome:{a:1} firefox:1
```
在控制台直接输出{a:1, b:2}：
```js
{a:1, b:2} // chrome: {a:1, b:2} firefox:unexpected token: ':'
```
冒号的这种用法被称为[label](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/label)，和 break 或 continue 语句一起使用，作用就是就是在一条语句前面加个可以引用的标识符（identifier）。
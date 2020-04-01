# Array.reduce方法与数组扁平化

Array的reduce方法，是ES5的新方法，其与map，forEach等方法有一些相似之处，又有一些不同：

reduce方法：

```JavaScript
sum = array.reduce ( callback , function ( accumulator ,  currentValue ,  currentIndex，array) {
  ...
} , initialValue );
```


- 回调函数callback
  - 执行数组中每个值的函数，包含四个参数

- 初始值accumulator
  - 上一次调用回调返回的值，或者是提供的初始值（initialValue）

- 当前值currentValue
  - 数组中正在处理的元素

- 当前索引currentIndex
  - 数据中正在处理的元素索引，如果提供了 initialValue ，从0开始；否则从1开始

- array
  - 调用 reduce 的数组

- initialValue
  - 可选项，其值用于第一次调用 callback 的第一个参数accumulator 。

- sum
  - 累计处理的返回结果

[更详细的解释MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#概述)


利用reduce实现数组扁平化

```JavaScript
let arr = [1,[2,[3,4,[5,6]]]];

const flattened = (arr) => {
    const newArr = arr.reduce(
        function(s,v,i){
            return s.concat(Array.isArray(v) ?flattened(v) : v );
        },[]
    )

    return newArr;
}
console.log(flattened(arr));
```

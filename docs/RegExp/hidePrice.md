# 价格掩码

使用正则表达式掩盖掉指定部分的数字，例如765万=>7**万

```js
let price = '765万';
function hidePrice(str) {
   return str.replace(/(\d{1})(\S+)([\u4e00-\u9fa5])/, replacer) 
}
function replacer(match, p1, p2, p3, offset, string) {
    p2 = p2.replace(/([0-9]{1})/g, '*')
    return p1 + p2 + p3
}
let newPrice = hidePrice(price)
console.log(newPrice)
```
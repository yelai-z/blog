# node.js模块卸载和重新加载
``require.cache``对象，代表所有被加载的模块的缓存区
``require.resolve``使用内部的``require()``机制查询模块的位置, 此操作只返回解析后的文件名，不会加载该模块。

```js
function requireUncached(module){
  delete require.cache[require.resolve(module)]
  return require(module)
}
```
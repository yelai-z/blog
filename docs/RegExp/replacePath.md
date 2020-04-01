# 批量替换正则匹配到的路径

**举例：**
替换形如require('lookagain.tmpl')这样以require开头，没有相对或绝对路径，以tmpl结尾的字符串

**正则：**
```js
require\('([^\.])(\S*)tmpl'\)
```


**替换表达式:**
```js
require\('$1$2tmpl'\)
```

::: warning
其中，$1代表第1个括号内匹配到的内容，$n代表第n个括号匹配到的内容
:::
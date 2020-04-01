# 获取QueryString中的某一项

```js
function GetQueryString(name) {
    var str = '';
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    console.log(r)
    if (r != null) {
        str = r[2];
    }
    return str;
}
```
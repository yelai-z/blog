# cors跨域携带cookies问题

cors跨域（Cross-origin resource sharing）
```json
Access-Control-Allow-Origin: "http://www.ke.com" // 允许跨域白名单，只支持*或者单一域名
```

Acc
```json
ess-Control-Allow-Credentials: true // 允许携带cookies，但是只有在单一域名可以携带
```

解决多域名cors携带cookies的方法：服务端准备一套白名单（数组或者正则等），判断请求来源是否是白名单。如果来源于白名单域名，那么将Access-Control-Allow-Origin的值设为请求来源域名
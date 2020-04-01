# fetch封装

## fetch 请求
```js
import 'whatwg-fetch'
import 'es6-promise'
import * as queryString from 'query-string'
import * as _ from 'lodash'
import {header} from './config'

export const get = (url, params) => new Promise((resolve, reject) => {
    if (params) {
        url += '?' + queryString.stringify(params)
    }
    return fetch(url).then((response) =>
        resolve(response.json())
    ).catch((err) => {
        reject(err)
    })
})

export const post = (url, params) => new Promise((resolve, reject) => {
    const options = _.extend(header, {
        body: JSON.stringify(params)
    });
    return fetch(url, options).then((response) =>
        resolve(response.json())
    ).catch((err) => {
        reject(err)
    })
})
```

## fetch 上传文件

```js
const formDataRequest = (url, formData) => new Promise((resolve, reject) => {
    
    let headers = new Headers()
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'multipart/form-data')
    
    var request = new Request(url, {header: headers, method: 'POST', body: formData});
    
    fetch(request).then(response => {
        resolve(response.json())
    }).catch(error => {
        reject(error)
    });
})
export default formDataRequest
```
# 利用keep-alive缓存优化

::: tip
最近写了一个抢票系统，遇到一个问题，车次列表进入下单页需要刷新，但是返回下单页后不希望刷新，再次请求大量的车次数据对后端接口压力太大；同样的，用户填写了很多订单信息之后，一旦从下单页离开，会丢失填写的数据。为了解决这两个问题，利用keep-alive和vue-router实现围绕订下单页的前进刷新，后退不刷新功能。
:::

1.  首先，在app.vue中修改router-view

```html
<keep-alive v-if="$route.meta.keepAlive">
    <router-view></router-view>
    <!—被缓存的路由用keep-alive标签包裹 -->
</keep-alive>
<router-view v-if="!$route.meta.keepAlive"></router-view>
<!—不被缓存的路由 -->
```


2.然后，给每个路由加上meta属性，meta属性里面的keepAlive控制路由是否缓存,需要缓存的路由设置成keepAlive：true,不需要缓存的路由设置成keepAlive: false

```json
{
  path: '/index',
  name: ‘Index',
  component: Index,
  meta: {
      keepAlive: false, // 是否缓存
  }
}, // 首页
{
    path: '/trainList',
    name: 'TrainList',
    component: TrainList,
    meta: {
        keepAlive: true, // 是否缓存
    }
}, // 车次列表
{
    path: '/orderFilling',
    name: 'OrderFilling',
    component: OrderFilling,
    meta: {
        keepAlive: true, // 是否缓存
    }
}, // 下单页
```



3. 添加isBack字段，判断是否是上一页返回

keep-alive对钩子函数的影响：

- 不使用keep-alive:   
```
beforeRouteEnter --> created --> mounted --> destroyed
```
- 使用keep-alive: 
```
首次：beforeRouteEnter --> created --> mounted --> activated --> deactivated
以后：beforeRouteEnter —> activated —> deactivated（此时，mounted和created不会触发）
```

::: tip
每次进入页面的时候，我们都需要知道从哪个页面(路由)过来的，以此来判断是否需要刷新数据。以车次列表页为例，从首页(Index)进入时，需要刷新，从下单页(OrderFilling)返回时，不需要刷新。
router对象有个beforeEach方法，每次跳转路由前都会触发，这个函数的参数from是从哪个页面(路由)来，to是到哪个页面(路由)去。因此，我们给meta属性添加isBack字段，判断是否是上一页返回
:::

```json
{
    path: '/index',
    name: ‘Index',
    component: Index,
    meta: {
        keepAlive: false, // 是否缓存
        isBack:false, // 判断是否是上一页返回
    }
}, // 首页
{
    path: '/trainList',
    name: 'TrainList',
    component: TrainList,
    meta: {
        keepAlive: true, // 是否缓存
        isBack:false, // 判断是否是上一页返回
    }
}, // 车次列表
{
    path: '/orderFilling',
    name: 'OrderFilling',
    component: OrderFilling,
    meta: {
        keepAlive: true, // 是否缓存
        isBack:false, // 判断是否是上一页返回
    }
}, // 下单页
```


4. 同时，在beforeEach方法中动态修改isBack属性

```js
router.beforeEach((to, from, next) => {
    if (from.name) {
        if (from.name === 'Timetable' || from.name === 'AlternativeTrains' || from.name === 'OrderFilling') {
            to.meta.isBack = true
        } // 如果从时刻表页（返回下单页）、备选车次页（返回下单页）、下单页（返回车次列表页）,那么说明是上一页返回
    }
    next()
})
```


5. 然后，在需要缓存的组件中，执行初始化方法的钩子函数，从created和mounted变成actived
```js
activated() {
  if(!this.$route.meta.isBack){
    // 如果isBack是false，表明需要获取新数据，否则就不再请求，直接使用缓存的数据
    this.init();
  }
  // 恢复成默认的false，避免isBack一直是true，导致下次无法获取数据
  this.$route.meta.isBack=false
},
```
6. 处理手动刷新问题
::: tip
这样，还有一个问题，比如用户进入了下单页，返回车次列表页是不刷新的。但是，如果用户在下单页手动刷新了页面，那么车次列表页的数据消失了，点击返回又不获取新数据，就出现了问题。所以，当用户手动刷新的时候，再次进入所有缓存的页面都要重新获取数据
:::


```javascript
data() {
    return {
        isFirstEnter: false // 是否第一次进入，默认false
    }
}
created() {
  this.isFirstEnter=true;
  // 缓存的页面，只有第一次进入或者刷新页面后才会执行此钩子函数
},

activated() {
  if(!this.$route.meta.isBack || this.isFirstEnter){
    // 如果isBack是false，且isFirstEnter为true，表明是后退，且不是第一次进入或者刷新，需要获取新数据，否则就不再请求，直接使用缓存的数据
    this.init();
  }
  // 恢复成默认的false，避免isBack一直是true，导致下次无法获取数据
  this.$route.meta.isBack=false
  // 恢复成默认的false，避免isFirstEnter一直是true，导致下次无法获取数据
  this.isFirstEnter=false
},
```











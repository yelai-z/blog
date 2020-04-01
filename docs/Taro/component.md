# taro如何处理组件间传值

通过查看打包出来的dist文件夹发现，taro统一把自定义组件的props收拢到一个固定字段```compid```上

```html
<block>
    <house-card compid="{{item.$compid__48}}"></house-card>
</block>
```

然后在**house-card**组件中打印组件实例对象

```js
let being = require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(HouseCard)
console.log('being: ', being);
Component(being);
```

发现实例对象上确实只有compid 和 extraProps两个字段。

在**npm/@tarojs/taro-weapp/index.js**中查看compid


```javascript
<!--创建组件-->
function createComponent(ComponentClass, isPage) {
    ···
    var weappComponentConf = {
        data: ···,
        reated: function created() {···
        },
        attached: function attached() {···
        },
        ready: function ready() {···
        },
        detached: function detached() {···
        }
    }
    <!--后续补充-->
    if (isPage){···
    } else {···
    }
    bindProperties(weappComponentConf, ComponentClass, isPage);
    ···
}
<!--绑定props-->
function bindProperties(weappComponentConf, ComponentClass, isPage) {
    ···
    weappComponentConf.properties.compid = {
        type: null,
        value: null,
        observer: function observer() {
            <!--每次更新的时候，重新初始化组件-->
            initComponent.apply(this, [ComponentClass, isPage]);
        }
    };
    weappComponentConf.properties.extraProps = {
        type: null,
        value: null,
        observer: function observer() {
              var _this = this;
        
              // update Component
              if (!this.$component || !this.$component.__isReady) return;
              var nextProps = filterProps(ComponentClass.defaultProps, {}, this.$component.props, this.data.extraProps);
              this.$component.props = nextProps;
              nextTick(function () {
                    _this.$component._unsafeCallUpdate = true;
                    updateComponent(_this.$component);
                    _this.$component._unsafeCallUpdate = false;
              });
        }
    };
}
```
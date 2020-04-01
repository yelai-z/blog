# jQuery 源码分析 回溯方法 end()和pushStack()

每个jQuery对象都有三个属性：``context、selector和prevObject``，其中的``prevObject``属性就指向这个对象栈中的前一个对象，而通过这个属性可以回溯到最初的DOM元素集。（最新的jQuery已经没有context、selector了）

了解end()方法有助于了解链式编程结构。

大多数jQuery的DOM遍历方法，来操作jQuery对象实例，并创建一个新的jQuery对象（伪数组）。当发生这种情况的时候，实际上是新的元素集合被依次添加到一个对象内部维护的栈中。当我们需要返回到前一个状态是，我们可以使用end()进行出栈操作，来返回栈中的前一个状态。

> 链式的原理就是要返回当前操作的上下文。

end方法：回到最近的一个"破坏性"操作之前。即，将匹配的元素列表变为前一次的状态。如果之前没有破坏性操作，那么返回一个空集

```javascript
end: function() {
  return this.prevObject || this.constructor(null);
}
```


在破坏性构建jQuery对象的时候（即操作的返回值不是调用者，函数内部不是return this的时候），通过pushStack方法构建prevObject属性：例如find方法

```javascript
jQuery.fn.extend( {
    find: function( selector ) {
        var i, ret,
            len = this.length,
            self = this;
        //如果不是字符串类型
        if ( typeof selector !== "string" ) {
            //filter方法：筛选出与指定表达式匹配的元素集合
            //filter方法筛选出包含在this里面的jQuery( selector )，也就是符合过滤器的dom元素，然后加入jQuery栈中
            return this.pushStack( jQuery( selector ).filter( function() {
                for ( i = 0; i < len; i++ ) {
                    //contains：一个DOM节点A是否包含另一个DOM节点B。
                    if ( jQuery.contains( self[ i ], this ) ) {
                        return true;
                    }
                }
            } ) );
        }

        ret = this.pushStack( [] );

        for ( i = 0; i < len; i++ ) {
            jQuery.find( selector, self[ i ], ret );
        }

        return len > 1 ? jQuery.uniqueSort( ret ) : ret;
    },
```


pushStack方法：将一个DOM元素集合加入到jQuery栈。

```javascript
pushStack: function( elems ) {

            // Build a new jQuery matched element set
            var ret = jQuery.merge( this.constructor(), elems );

            // Add the old object onto the stack (as a reference)
            //添加preObject属性，指向前一个元素
            ret.prevObject = this;
            //添加context属性，指向前一个元素的context属性
            ret.context = this.context;

            // Return the newly-formed element set
            return ret;
        },
```


merge方法：将second伪数组追加到first伪数组中（在jQuery内部就是将一个DOM元素集合加入到jQuery栈中）

```javascript
merge: function( first, second ) {
        var len = +second.length,
            j = 0,
            i = first.length;

        for ( ; j < len; j++ ) {
            first[ i++ ] = second[ j ];
        }

        first.length = i;

        return first;
    },
```


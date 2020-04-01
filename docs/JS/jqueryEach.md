# jQuery使用each批量绑定方法

使用jQuery.each方法，第一个参数传入一个对象，结构是``{ jQuery原型方法名：函数 }`` 或者 ``{ jQuery原型方法名 ： jQuery静态方法名 }``；第二个参数是回调函数，回调函数的两个参数就是第一个对象的键和值

对于第一个参数的两种情况：

第一种情况是配合map方法处理：``var matched = jQuery.map( this, fn, until )``;以及一系列细节处理；

第二种情况是在内部使用静态方法来实现实例方法：
```
jQuery( insert[ i ] )[original]( elems );
```

以及一系列细节处理；

第一种情况：


```JavaScript
jQuery.each( {
    parent: function( elem ) {
        var parent = elem.parentNode;
        return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function( elem ) {
        return dir( elem, "parentNode" );
    },
    parentsUntil: function( elem, i, until ) {
        return dir( elem, "parentNode", until );
    },
    next: function( elem ) {
        return sibling( elem, "nextSibling" );
    },
    prev: function( elem ) {
        return sibling( elem, "previousSibling" );
    },
    nextAll: function( elem ) {
        return dir( elem, "nextSibling" );
    },
    prevAll: function( elem ) {
        return dir( elem, "previousSibling" );
    },
    nextUntil: function( elem, i, until ) {
        return dir( elem, "nextSibling", until );
    },
    prevUntil: function( elem, i, until ) {
        return dir( elem, "previousSibling", until );
    },
    siblings: function( elem ) {
        return siblings( ( elem.parentNode || {} ).firstChild, elem );
    },
    children: function( elem ) {
        return siblings( elem.firstChild );
    },
    contents: function( elem ) {
        return elem.contentDocument || jQuery.merge( [], elem.childNodes );
    }
}, function( name, fn ) {
    jQuery.fn[ name ] = function( until, selector ) {
        var matched = jQuery.map( this, fn, until );

        if ( name.slice( -5 ) !== "Until" ) {
            selector = until;
        }

        if ( selector && typeof selector === "string" ) {
            matched = jQuery.filter( selector, matched );
        }

        if ( this.length > 1 ) {

            // Remove duplicates
            if ( !guaranteedUnique[ name ] ) {
                jQuery.uniqueSort( matched );
            }

            // Reverse order for parents* and prev-derivatives
            if ( rparentsprev.test( name ) ) {
                matched.reverse();
            }
        }

        return this.pushStack( matched );
    };
} );
```



第二种情况：


```JavaScript
jQuery.each( {
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
}, function( name, original ) {
    jQuery.fn[ name ] = function( selector ) {
        var elems,
            ret = [],
            insert = jQuery( selector ),
            last = insert.length - 1,
            i = 0;

        for ( ; i <= last; i++ ) {
            elems = i === last ? this : this.clone( true );
            jQuery( insert[ i ] )[ original ]( elems );

            // Support: Android <=4.0 only, PhantomJS 1 only
            // .get() because push.apply(_, arraylike) throws on ancient WebKit
            push.apply( ret, elems.get() );
        }

        return this.pushStack( ret );
    };
} );
```


# 处理移动端后台运行计时器问题

> 移动端为了节省性能，当浏览器在后台运行时，并不会执行浏览器中的脚本，所以计时器等在切换出去的时候会暂停。

如果不希望暂停，可以使用时间戳代替time--这种计时方式：
这种方法每秒都会计算当前时间和初始时间的秒数之差，用计时器总数-秒数差，得到的就是当前的倒计时数。

```js
timerBegin = function ($box) {
        let initial_time = parseInt(new Date().getTime()/1000) //初始时间
        var timer = exp.timer = window.setInterval(function () {
            var value = parseInt(new Date().getTime()/1000) - initial_time //计算时间差
            if (ui.max_num - value > 0) {
                $box.val(ui.max_num - value + "秒"); // 显示倒计时
                $box.addClass("disable-btn");
            } else if (ui.max_num - value <= 0) { //当时间差大于等于计数器（有可能切出去很长时间）
                ui.max_num = 120;
                clearInterval(timer); //清除定时器
                $box.removeClass("disable-btn");
                $box.val("重新获取");
            }
        }, 1000);
    };
```

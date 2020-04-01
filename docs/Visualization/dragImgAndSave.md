# 生成一个可以拖拽内部元素的图片

需求：绘制一个图片，图片上的元素可以拖拽，并且可以将图片下载到本地

实现：

1. 实现拖拽功能
 
```js
let d3 = window.d3
let height = 400 // svg宽度
let width = 400  // svg高度
function dragmove (d) { // 拖拽函数 将圆重新绘制在鼠标的位置 （这里不能用箭头函数）
  d3.select(this).attr('cx', d.cx = d3.event.x).attr('cy', d.cy = d3.event.y)
}
let drag = d3.behavior.drag().on('drag', dragmove) // drag是拖拽事件，drag事件后立刻执行dragmove函数
let circles = [{cx: 150, cy: 200, r: 30}, {cx: 250, cy: 200, r: 30}] // 准备圆的数据
let svg = d3.select('.svg-img').append('svg').attr('width', width).attr('height', height) // 准备svg元素
svg.selectAll('circle’) // 选择svg中的所有的circle元素，虽然现在还没有
   .data(circles)       // 将数据绑定到svg上
   .enter()             // enter表示当所需要的元素(上两行的circle)比绑定的数据(上一行)少的时候，自动添加位置，使之一样多
   .append('circle’)    // 添加circle元素
   .attr('cx', (d) => {return d.cx}) // 设定各种属性：圆心，起始位置，颜色
   .attr('cy', (d) => {return d.cy})
   .attr('r', (d) => {return d.r})
   .attr('fill', 'black’)
   .call(drag)  //  将drag行为绑定到元素上
```

2. 实现保存为图片功能

```js
let svgXml = document.querySelector('.svg-img').innerHTML.trim() // 第一步中将svg元素放入svg-img中，在此处拿到svg元素
let str = ' xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink" ' // 准备svg需要的网络协议
svgXml = svgXml.replace(/\s/, str) // 将svg的网络协议插入到svg元素中(否则无法做为图片识别)
let image = new Image();
image.src = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(svgXml))) // 给图片对象写入base64编码的svg流
let canvas = document.createElement('canvas');  // 准备空画布
canvas.width = document.querySelector('.svg-img svg').clientWidth // 添加画布属性
canvas.height = document.querySelector('.svg-img svg').clientHeight

let context = canvas.getContext('2d')  // 取得画布的2d绘图上下文
image.onload = () => {    // 需要做图片加载完成后插入到画布中(即使是base64位的本地图片也要加载时间)
  context.drawImage(image, 0, 0, 400, 400)
  let a = document.createElement('a') // 创建a标签做为下载点
  a.href = canvas.toDataURL('image/png')  // 将画布内的信息导出为png图片数据
  a.download = 'MapByMathArtSys'  // 设定下载名称
  a.click() // 点击触发下载
}
```

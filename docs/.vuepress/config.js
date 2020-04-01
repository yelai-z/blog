const sidebar = [
  {
    title: 'JS',   // 必要的
    collapsable: true, // 是否收起，可选的, 默认值是 true,
    sidebarDepth: 1,    // 可选的, 默认值是 1
    children: [
      '/JS/brackets',
      '/JS/flat',
      '/JS/bracketsAnd0',
      '/JS/setInterval',
      '/JS/stopScala',
      '/JS/bitwise',
      '/JS/jqueryEach',
      '/JS/jqueryToggle',
      '/JS/jqueryPushStack'
    ]
  },
  {
    title: 'CSS',   // 必要的
    collapsable: true, // 是否收起，可选的, 默认值是 true,
    sidebarDepth: 1,    // 可选的, 默认值是 1
    children: [
      '/CSS/objectFit',
    ]
  },
  {
    title: '环境搭建',   // 必要的
    collapsable: true, // 是否收起，可选的, 默认值是 true,
    sidebarDepth: 1,    // 可选的, 默认值是 1
    children: [
      '/Environment/updateNode',
      '/Environment/fish',
      '/Environment/vscode',
      '/Environment/homebrew',
      '/Environment/nrm',
      '/Environment/npmPermission',
      '/Environment/npmPublish',
      '/Environment/VNC',
      '/Environment/iterm2',
      '/Environment/gitDelete',
      '/Environment/webpackAnalyzer',
      '/Environment/nodeSpaceSize',
    ]
  },
  {
    title: 'VSCode',   // 必要的
    collapsable: true, // 是否收起，可选的, 默认值是 true,
    sidebarDepth: 1,    // 可选的, 默认值是 1
    children: [
      '/VsCodeExtension/zero',
      '/VsCodeExtension/first',
      '/VsCodeExtension/secend',
      '/VsCodeExtension/third'
    ]
  },
  {
    title: '网络请求',   // 必要的
    collapsable: true, // 是否收起，可选的, 默认值是 true,
    sidebarDepth: 1,    // 可选的, 默认值是 1
    children: [
      '/Nextwork/corsCookies',
      '/Nextwork/fetch',
      '/Nextwork/iframeMockAjax',
      '/Nextwork/statusCode',
    ]
  },
  {
    title: 'Taro',   // 必要的
    collapsable: true, // 是否收起，可选的, 默认值是 true,
    sidebarDepth: 1,    // 可选的, 默认值是 1
    children: [
      '/Taro/component',
      '/Taro/stateAndProps'
    ]
  },
  {
    title: '面试',   // 必要的
    collapsable: true, // 是否收起，可选的, 默认值是 true,
    sidebarDepth: 1,    // 可选的, 默认值是 1
    children: [
      '/Mianshi/wecash'
    ]
  },
  {
    title: '可视化',   // 必要的
    collapsable: true, // 是否收起，可选的, 默认值是 true,
    sidebarDepth: 1,    // 可选的, 默认值是 1
    children: [
      '/Visualization/dragImgAndSave'
    ]
  },
  {
    title: '正则表达式',   // 必要的
    collapsable: true, // 是否收起，可选的, 默认值是 true,
    sidebarDepth: 1,    // 可选的, 默认值是 1
    children: [
      '/RegExp/getQueryString',
      '/RegExp/hidePrice',
      '/RegExp/miniapp2Taro',
      '/RegExp/replacePath'
    ]
  },
  {
    title: 'Linux',   // 必要的
    collapsable: true, // 是否收起，可选的, 默认值是 true,
    sidebarDepth: 1,    // 可选的, 默认值是 1
    children: [
      '/Linux/copy',
      '/Linux/backgroundRun',
      '/Linux/getJson'
    ]
  },
  {
    title: 'Node',   // 必要的
    collapsable: true, // 是否收起，可选的, 默认值是 true,
    sidebarDepth: 1,    // 可选的, 默认值是 1
    children: [
      '/Node/uncached',
    ]
  },
  {
    title: 'Vue',   // 必要的
    collapsable: true, // 是否收起，可选的, 默认值是 true,
    sidebarDepth: 1,    // 可选的, 默认值是 1
    children: [
      '/Vue/historyMode',
      '/Vue/imageLazyLoad',
      '/Vue/keepAlive',
      '/Vue/nprogress',
      '/Vue/publicPath',
      '/Vue/directiveCanvas',
      '/Vue/proxyTable'
    ]
  },
  
]

module.exports = {
  title: '夜来',
  description: 'Just playing around',
  searchMaxSuggestions: 5,
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '关于我', link: '/Myself/' },
      { text: 'github', link: 'https://github.com/yelai-z/' }
    ],
    sidebar,
    lastUpdated: true, // string | boolean
    smoothScroll: true,
  },
  markdown: {
    lineNumbers: true
  },
  base: '/blog/',
}

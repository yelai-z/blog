(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{219:function(s,e,a){"use strict";a.r(e);var n=a(0),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vscode插件开发1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vscode插件开发1","aria-hidden":"true"}},[s._v("#")]),s._v(" vscode插件开发1")]),s._v(" "),a("h2",{attrs:{id:"初始化项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化项目","aria-hidden":"true"}},[s._v("#")]),s._v(" 初始化项目")]),s._v(" "),a("p",[s._v("官方文档:")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("https://code.visualstudio.com/api/get-started/your-first-extension\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("下载yeoman的vscode插件脚手架：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g yo generator-code\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yo code\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ? What type of extension do you want to create? New Extension (JavaScript)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ? What's the name of your extension? HelloWorld")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### Press <Enter> to choose default for all options below ###")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ? What's the identifier of your extension? helloworld")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ? What's the description of your extension? LEAVE BLANK")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ? Initialize a git repository? Yes")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ? Which package manager to use? npm")]),s._v("\n\ncode ./helloworld\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("使用vscode打开项目，切换到调试面板，点击F5，在新vscode窗口中按键"),a("code",[s._v("shift+command+p")]),s._v("打开命令面板，输入hellow，就可以看见右下角弹窗：“hello world”")]),s._v(" "),a("h2",{attrs:{id:"项目目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目目录结构","aria-hidden":"true"}},[s._v("#")]),s._v(" 项目目录结构")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("your-project\n├── vsc-extension-quickstart.md            // 测试脚本\n├── .eslintrc.json                         // eslint配置\n├── .gitignore                             // gitignore配置\n├── CHANGELOG.md                           // 最新修改说明\n├── extension.js                           // 插件入口\n├── jsconfig.json                          // 项目配置\n├── package-lock.json                      // package-lock\n├── package.json                           // package\n├── README.md                              // 插件细节说明\n├── "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("                                   // 测试目录\n      ├── extension.test.js\n      └── index.js    \n└── image                                  // 图片目录\n      └── icon.png                         // 图标\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[a("strong",[s._v("说明:")])]),s._v(" "),a("ol",[a("li",[s._v("README.md写整个插件的功能，对应vscode插件使用页面的“细节”一栏，不能有http的链接")]),s._v(" "),a("li",[s._v("CHANGELOG.md写最新更新的功能，对应vscode插件使用页面的“更改日志”一栏，不能有http的链接")]),s._v(" "),a("li",[s._v("主要功能在package.json中配置，在extension.js("),a("code",[s._v("对应package.json中的main字段")]),s._v(")中编写逻辑")])]),s._v(" "),a("h2",{attrs:{id:"package-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-json","aria-hidden":"true"}},[s._v("#")]),s._v(" package.json")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"extension-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extension-js","aria-hidden":"true"}},[s._v("#")]),s._v(" extension.js")]),s._v(" "),a("div",{staticClass:"language-JavaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"发布流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布流程","aria-hidden":"true"}},[s._v("#")]),s._v(" 发布流程")]),s._v(" "),a("h4",{attrs:{id:"即使本地打包也需要注册微软azure-devops账号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#即使本地打包也需要注册微软azure-devops账号","aria-hidden":"true"}},[s._v("#")]),s._v(" 即使本地打包也需要注册微软"),a("em",[s._v("Azure DevOps")]),s._v("账号")]),s._v(" "),a("ol",[a("li",[s._v("访问"),a("a",{attrs:{href:"https://aka.ms/SignupAzureDevOps",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://aka.ms/SignupAzureDevOps "),a("OutboundLink")],1),s._v("，注册账号")]),s._v(" "),a("li",[s._v("进入主页，点击右上角个人头像，然后点击==Security==")]),s._v(" "),a("li",[s._v("点击创建新的个人访问令牌，这里特别要注意Organization要选择all accessible organizations，Scopes要选择Full access，否则后面发布会失败。")]),s._v(" "),a("li",[s._v("创建令牌之后生成一个token，需要本地手动保存。")])]),s._v(" "),a("h4",{attrs:{id:"打包流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包流程","aria-hidden":"true"}},[s._v("#")]),s._v(" 打包流程")]),s._v(" "),a("p",[s._v("安装vsce")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i vsce -g\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("创建新发布者")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("vsce create-publisher your-publisher-name\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后根据提示依次输入昵称、Azure DevOps注册邮箱、Azure DevOps的token")]),s._v(" "),a("p",[s._v("如果已经有了发布者账号，可以直接登陆")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("vsce login your-publisher-name\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("进入项目目录下，执行打包命令")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("vsce package\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后会在项目目录下生成vsix文件："),a("strong",[s._v(s._s(s.name)+"-"+s._s(s.version)+".vsix")])]),s._v(" "),a("p",[s._v("从vscode插件面板右上角 ··· 中选择"),a("strong",[s._v("从VSIX安装")]),s._v("。即可使用")]),s._v(" "),a("p",[s._v("发布线上")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("vsce publish\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);
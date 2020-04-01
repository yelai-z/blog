# vscode插件开发1

## 初始化项目

官方文档:
```shell
https://code.visualstudio.com/api/get-started/your-first-extension
```

下载yeoman的vscode插件脚手架：

```shell
npm install -g yo generator-code
```

```shell
yo code

# ? What type of extension do you want to create? New Extension (JavaScript)
# ? What's the name of your extension? HelloWorld
### Press <Enter> to choose default for all options below ###

# ? What's the identifier of your extension? helloworld
# ? What's the description of your extension? LEAVE BLANK
# ? Initialize a git repository? Yes
# ? Which package manager to use? npm

code ./helloworld
```
使用vscode打开项目，切换到调试面板，点击F5，在新vscode窗口中按键``shift+command+p``打开命令面板，输入hellow，就可以看见右下角弹窗：“hello world”




## 项目目录结构



```shell
your-project
├── vsc-extension-quickstart.md            // 测试脚本
├── .eslintrc.json                         // eslint配置
├── .gitignore                             // gitignore配置
├── CHANGELOG.md                           // 最新修改说明
├── extension.js                           // 插件入口
├── jsconfig.json                          // 项目配置
├── package-lock.json                      // package-lock
├── package.json                           // package
├── README.md                              // 插件细节说明
├── test                                   // 测试目录
      ├── extension.test.js
      └── index.js    
└── image                                  // 图片目录
      └── icon.png                         // 图标

```

**说明:**

1. README.md写整个插件的功能，对应vscode插件使用页面的“细节”一栏，不能有http的链接
2. CHANGELOG.md写最新更新的功能，对应vscode插件使用页面的“更改日志”一栏，不能有http的链接
3. 主要功能在package.json中配置，在extension.js(``对应package.json中的main字段``)中编写逻辑

## package.json


```json
{}

```

## extension.js

```JavaScript

```

## 发布流程

#### 即使本地打包也需要注册微软*Azure DevOps*账号

1. 访问[https://aka.ms/SignupAzureDevOps ](https://aka.ms/SignupAzureDevOps )，注册账号
2. 进入主页，点击右上角个人头像，然后点击==Security==
3. 点击创建新的个人访问令牌，这里特别要注意Organization要选择all accessible organizations，Scopes要选择Full access，否则后面发布会失败。
4. 创建令牌之后生成一个token，需要本地手动保存。

#### 打包流程

安装vsce

```shell
npm i vsce -g
```
创建新发布者

```shell
vsce create-publisher your-publisher-name
```
然后根据提示依次输入昵称、Azure DevOps注册邮箱、Azure DevOps的token

如果已经有了发布者账号，可以直接登陆

```shell
vsce login your-publisher-name
```

进入项目目录下，执行打包命令

```shell
vsce package
```
然后会在项目目录下生成vsix文件：**{{name}}-{{version}}.vsix**

从vscode插件面板右上角 ··· 中选择**从VSIX安装**。即可使用

发布线上

```shell
vsce publish
```


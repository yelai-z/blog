# vscode插件开发3

### Activation Events

> **Activation Events**是指package.json里面的配置项==activationEvents==，当满足**Activation Events**条件的时候，你的命令就可以被触发，以下是**Activation Events**列表

- **\***
- **onLanguage**
- **onCommand**
- **onDebug**
  - **onDebugInitialConfigurations**
  - **onDebugResolve**
- **workspaceContains**
- **onFileSystem**
- **onView**
- **onWebviewPanel**

### \*(Start up)
> 当vscode启动时触发action


```
"activationEvents": [
    "*"
]
```

### onLanguage

> 当文件是指定语言类型时触发action

```json
"activationEvents": [
    "onLanguage:python",
    "onLanguage:markdown",
    "onLanguage:typescript"
]
```

### onCommand

> 使用命令触发action

```json
"activationEvents": [
    "onCommand:extension.sayHello"
]
```

### onDebug

> 使用调试工具时触发action

```json
"activationEvents": [
    "onDebug"
]
```
### onDebugInitialConfigurations
### onDebugResolve


> These are two more fine-grained onDebug activation events:

> onDebugInitialConfigurations is fired just before the provideDebugConfigurations method of the DebugConfigurationProvider is called.
onDebugResolve:type is fired just before the resolveDebugConfiguration method of the DebugConfigurationProvider for the specified type is called.
Rule of thumb: If activation of a debug extension is lightweight, use onDebug. If it is heavyweight, use onDebugInitialConfigurations and/or onDebugResolve depending on whether the DebugConfigurationProvider implements the corresponding methods provideDebugConfigurations and/or resolveDebugConfiguration. See Using a DebugConfigurationProvider for more details on these methods.

### workspaceContains
> 当打开的是文件夹，且文件夹中至少有一个文件满足满足要求时触发action

```json
"activationEvents": [
    "workspaceContains:**/.editorconfig"
]
```

### onFileSystem
> 当文件是从scheme中读取时触发action。通常是file-scheme,比如ssh或者ftp

```json
"activationEvents": [
    "onFileSystem:sftp"
]
```

### onView

> This activation event is emitted and interested extensions will be activated whenever a view of the specified id is expanded:

```json
"activationEvents": [
    "onView:nodeDependencies"
]
```

### onUri
> This activation event is emitted and interested extensions will be activated whenever a system-wide Uri for that extension is opened. The Uri scheme is fixed to either vscode or vscode-insiders. The Uri authority must be the extension's identifier. The rest of the Uri is arbitrary.

```json
"activationEvents": [
    "onUri"
]
```
### onWebviewPanel

> This activation event is emitted and interested extensions will be activated whenever VS Code needs to restore a webview with the matching viewType.

> For example, the declaration of onWebviewPanel below:


```json
"activationEvents": [
    ...,
    "onWebviewPanel:catCoding"
]
```

> will cause the extension to be activated when VS Code needs to restore a webview with the viewType: catCoding. The viewType is set in the call to window.createWebviewPanel and you will need to have another activation event (for example, onCommand) to initially activate your extension and create the webview.
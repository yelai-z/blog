# vscode插件开发2

## VS Code API
> **VS Code API**是指你的vscode插件中可以使用的JavaScript APIs

## API namespaces and classes

在[vscode.d.ts](https://github.com/Microsoft/vscode/blob/master/src/vs/vscode.d.ts)文件中查看API的namespaces和classes

## commands

每一条命令都是一个有独立标识的函数，commands也被称作*command handler*.

Commands通过[registerCommand](https://code.visualstudio.com/api/references/vscode-api#commands.registerCommand)和[registerTextEditorCommand](https://code.visualstudio.com/api/references/vscode-api#commands.registerTextEditorCommand)方法添加。Commands可以通过手动或者快捷键执行。
- palette - 通过在命令面板([command palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette))中输入package.json中设置好的命令来执行
- keybinding - 通过使用package.json中设置好的快捷键([keybindings](https://code.visualstudio.com/docs/getstarted/keybindings#_customizing-shortcuts))来执行

例子：

```js
commands.registerCommand('extension.sayHello', () => {
    window.showInformationMessage('Hello World!');
});
```

```json
{
    "contributes": {
        "commands": [{
            "command": "extension.sayHello",
            "title": "Hello World"
        }]
    }
}
```













[link](https://code.visualstudio.com/api/references/vscode-api)
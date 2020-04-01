(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{215:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vscode插件开发2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vscode插件开发2","aria-hidden":"true"}},[s._v("#")]),s._v(" vscode插件开发2")]),s._v(" "),a("h2",{attrs:{id:"vs-code-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vs-code-api","aria-hidden":"true"}},[s._v("#")]),s._v(" VS Code API")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("VS Code API")]),s._v("是指你的vscode插件中可以使用的JavaScript APIs")])]),s._v(" "),a("h2",{attrs:{id:"api-namespaces-and-classes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-namespaces-and-classes","aria-hidden":"true"}},[s._v("#")]),s._v(" API namespaces and classes")]),s._v(" "),a("p",[s._v("在"),a("a",{attrs:{href:"https://github.com/Microsoft/vscode/blob/master/src/vs/vscode.d.ts",target:"_blank",rel:"noopener noreferrer"}},[s._v("vscode.d.ts"),a("OutboundLink")],1),s._v("文件中查看API的namespaces和classes")]),s._v(" "),a("h2",{attrs:{id:"commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commands","aria-hidden":"true"}},[s._v("#")]),s._v(" commands")]),s._v(" "),a("p",[s._v("每一条命令都是一个有独立标识的函数，commands也被称作"),a("em",[s._v("command handler")]),s._v(".")]),s._v(" "),a("p",[s._v("Commands通过"),a("a",{attrs:{href:"https://code.visualstudio.com/api/references/vscode-api#commands.registerCommand",target:"_blank",rel:"noopener noreferrer"}},[s._v("registerCommand"),a("OutboundLink")],1),s._v("和"),a("a",{attrs:{href:"https://code.visualstudio.com/api/references/vscode-api#commands.registerTextEditorCommand",target:"_blank",rel:"noopener noreferrer"}},[s._v("registerTextEditorCommand"),a("OutboundLink")],1),s._v("方法添加。Commands可以通过手动或者快捷键执行。")]),s._v(" "),a("ul",[a("li",[s._v("palette - 通过在命令面板("),a("a",{attrs:{href:"https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette",target:"_blank",rel:"noopener noreferrer"}},[s._v("command palette"),a("OutboundLink")],1),s._v(")中输入package.json中设置好的命令来执行")]),s._v(" "),a("li",[s._v("keybinding - 通过使用package.json中设置好的快捷键("),a("a",{attrs:{href:"https://code.visualstudio.com/docs/getstarted/keybindings#_customizing-shortcuts",target:"_blank",rel:"noopener noreferrer"}},[s._v("keybindings"),a("OutboundLink")],1),s._v(")来执行")])]),s._v(" "),a("p",[s._v("例子：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("commands"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("registerCommand")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'extension.sayHello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("showInformationMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello World!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"contributes"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"commands"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"command"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"extension.sayHello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello World"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("a",{attrs:{href:"https://code.visualstudio.com/api/references/vscode-api",target:"_blank",rel:"noopener noreferrer"}},[s._v("link"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);
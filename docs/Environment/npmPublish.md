# 上传npm包到私有库和更新

## 发布
1. 登陆npm 执行npm login 用户名邮箱前缀 密码邮箱密码
2. 初始化npm包文件 打开自己的npm包代码文件夹，执行npm init。依次需要写好包名版本1.0.0关键字*协议ISC，然后会在文件夹内生成package.json文件，后续可以手动修改
3. 发布npm包 执行npm publish
4. 成功


## 更新

版本号格式：主版本号.次版本号.修订号

如：1.0.0

在命令窗口执行：``npm version $``

可以更新版本号，这里的$根据修改版本号的不同而不同。

```
major: 主版本号
premajor: 预备主版本
minor: 次版本号
preminor: 预备次版本
patch: 修订号
prepatch: 预备修订版
prerelease: 预发布版本
```

比如从1.0.0更新到1.0.1,需要执行``npm version patch``
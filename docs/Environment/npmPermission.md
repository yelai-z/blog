# npm全局安装无权限问题处理

全局安装npm包时，即使使用sudo，仍然会遇到权限问题：

```shell
ERR! stack Error: EACCES: permission denied
```

处理方法：添加参数 --unsafe-perm


```shell
$ sudo  npm install -g XXX --unsafe-perm
```

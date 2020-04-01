# fish shell

Fish 是"the friendly interactive shell"的简称，简单好用。
Fish 有自动联想自动补全的功能。

mac安装：

```shell
$ brew install fish
```


启动：

```shell
$ fish
```


在线文档：

```shell
$ help
```


退出：

```shell
$ exit
```


---

#### 配置为默认shell：

查看fish安装路径：

```shell
chsh -s `which fish`
```

提前在/etc/shells中加入配置路径：
> /etc/shells是只读文件，需要sudo权限

```shell
sodu vim /etc/shells
```

配置为默认shell

```shell
chsh -s `which fish`
```




[Fish shell 入门教程](http://www.ruanyifeng.com/blog/2017/05/fish_shell.html)

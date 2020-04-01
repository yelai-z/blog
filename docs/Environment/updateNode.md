# node升级的正确姿势

1. 查看node版本，没安装的请先安装；


```shell
$  node -v
```

2. 清除node缓存；


```shell
$  sudo npm cache clean -f
```

3. 安装node版本管理工具'n';


```shell
$  sudo npm install n -g
```

4. 使用版本管理工具安装指定node或者升级到最新node版本；


```shell
$  sudo n stable  #（安装node最新版本）

$  sudo n 8.9.4 #（安装node指定版本8.9.4）
```

5. 使用node -v查看node版本，如果版本号改变为你想要的则升级成功。

****若版本号未改变则还需配置node环境变量****

1. 查看通过n安装的node的位置；


```shell
$ which node # (如：/usr/local/n/versions/node/6.12.3）
```


2. cd进入/usr/local/n/versions/node/ ++你应该能看到你刚通过n安装的node版本这里如：8.9.4；编辑/etc/profile;++


```shell
$  vim /etc/profile
```

3.将node安装的路径（这里为：/usr/local/n/versions/node/8.9.4）添加到文件末尾；


```shell
#set node path

export NODE_HOME=/usr/local/n/versions/node/8.9.4

export PATH=$NODE_HOME/bin:$PATH
```


4.wq退出保存文件，编译/etc/profile;

```shell
$ source /etc/profile
```


5.再次使用node -v查看node版本，不出意外版本号应该变为你想要的。
# nrm管理npm源

1. 安装

```
npm install nrm -g
```


2. 如果中途报错：

```
Please try running this command again as root/Administrator.
```
那么说明缺少权限，解决方法，将owner变成自己：

```
sudo chown -R $USER /usr/local
```


3. 查看帮助

```
nrm --help
```


4. 添加新源：

```
nrm add newreg http://registry.npmjs.new.com
```

5. 展示所有可用源

```
nrm ls
```

6. 测试每个源的速度

```
nrm test
```


7. 选择源

```
nrm use cnpm
```







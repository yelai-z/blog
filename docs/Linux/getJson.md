# shell脚本中获取json文件内容

通过执行node语句的方式获得
```shell
curr_json=`node -p "require('./package.json')`
echo curr_json
```
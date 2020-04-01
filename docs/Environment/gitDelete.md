# git 批量删除分支

项目开发久了，本地会遗留各种历史分支，所以用命令一次性清除大量无用分支就和怒有必要

> 例：删除master外的所有分支
```
git branch | grep -v 'master' | xargs git branch -D
```
修改grep -v参数即可删除指定分支。
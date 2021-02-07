# lerna命令
## lerna init  
初始化lerna库  默认会创建lerna.json和packas目录
默认是固定模式,packages下的所有包公用一个版本
lerna init  --independent 触发独立模式  允许每一个包有一个独立的版本号
## lerna bootstrap 
将lerna的包关联起来
这个命令执行了以下操作
1. 在每个package下执行npm install;
2. 根据package下package.json里面的dependencies和devDependencies配置，使用symlink在各个package的node_modules下面建立引用关系
3. 在每个package下执行npm run prepublish
4. 在每个package下执行npm run prepare

## lerna publish  // 发布最新的commit的修改




# 关于lerna.json
## version 当前库的版本
## npmClient 允许指定命令设置client 默认是mpm  可以设置成yarn
## command.publish.ignoreChanges 可以指定哪些目录或者文件的变更不会被publish
## command.bootstrap.ignore 指定不受bootstrap命令影响的包
## command.bootstarp.npmClientArgs  指定默认传给lerna bootstrap的参数
## command.bootstrap.scope 指定哪些包会受lerna bootstrap的影响
## packages  指定包所在的目录




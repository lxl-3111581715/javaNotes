git：
1 版本控制
2 版本控制工具分裂
	集中式版本控制工具
 	分布式版本控制工具
3 安装git

...

4 gitbash

...

5 git的结构
	本地库
	工作区  git add  将工作区的文件提交到暂存区
	暂存区  git commit  暂存区的文件提交到本地库
6 git和代码托管中心
	git
	代码托管中心：
		1 分类
			github  码云：外网
			gitlab:内网	
		2 本地库和远程库交互的方式
			团队内协作 ： 加入团队  clone push
			跨团队协作： fork  [克隆一个远程库]  pull   pullrequest  审核  merge[合并] 

### 7 本地库初始化
​	1 本地库初始化
​		命令： git init  
​		效果：
​		注意：生成.git文件
​	2 基本操作 
​		设置签名1： 识别提交者的身份
 			命令：
​			项目级别、仓库级别：
​				git config user.name tom_pro
​				git config user.email xiaolong.@xioalong.com
​			系统用户级别：
​				git config --global user.name tom
​				git config --global user.email xiaolong.@xioalong.com
​			信息保存的位置 

​				项目级别：当前项目的 .git文件目录的  config文件中

​				系统用户级别：

### 8 git操作命令：

```
1 git sataus  查看工作区文件状态
2 git add  将文件提交到暂存区  第一次提交的文件 可以追踪track新文件
3 git rm --cached [文件名]将文件从暂存区中退回来
4 git commit 将暂存区的文件提交到本地库
	4.1 注意：提交到本地库的时候要填写本次提交的信息
	4.2 git commit -m "" 文件名 
5 git add   git commit -a  对于已经上传过的文件可以直接提交  不能追踪新文件
```

```
1 状态查看指令： 
2 添加操作：
3 提交操作：
4 查看历史记录操作：
5 删除文件并找回
6 
```

### 9 版本的前进和后退：

```
1 git log 
```

```
查看历史记录的几种不同的方式
2 git log --pretty=oneline
3 git log --oneline
4 git reflog 
```

```
切换历史版本的本质；切换指针
1 前进后退历史版本  
	1 基于索引值
		git reflog
		git reset --hrad 索引值  退回 前进
	2 使用^符号  只能后退
		git reset --hard HEAD^
		一个 ^ 符号表示往回退一一个版本
	3 使用~符号 表示回退版本 只能后退
		git reset --hard HEAD~3
	4 reset 命令的三个参数的对比：
    	--hrad: 移动HEAD指针   重置暂存区  重置工作区
    	--soft:在本地库移动指针
    	--mixed:在本地库移动HEAD指针 重置暂存区
```

### 10 永久删除文件后找回

```
1 操作路径：
    本地创建文件  提交到暂存区  提交到本地库  
    本地删除  提交删除到暂存区  提交到本地库
	解决：
        1 回退版本即可
        2 git reset --hard 索引值
 2 操作路径：
 	添加到暂存区的删除文件找回： 还还没有提交到本地库
 	解决：
 		git reset --hard HEAD  刷新工作区 暂存区
```

### 11 比较文件

```
1 暂存区比较
		git diff 文件名
2 和本地库中的版本进行比较
	git diff HEAD 文件名
3 和历史的版本进行比较
	git diff HEAD^ 文件名	
```

### 12 git的分支

``` 
1 什么是分支
  在版本控制的过程中使用多条线同时推进
2 gitinit之后  有一个master分支
3 创建分支
    master
    feature_bule
4 分支的开发是独立的   
5 分支的操作
	1 查看分支  git branch -v
	2 创建分支  git branch 分支名
	3 切换分支  git checkout 分支名
	4 合并分支  
    	1 将分支切换到接受修改的分支上
    	2 执行命令 git merge 指定要把哪一个分支合并到接受修改的分支上
    5 合并分支的时候解决冲突
    	1 产生冲突 冲突的表现
    	2 手动解决冲突
    	3 将状态标为已解决的状态  git add 文件名
    	4 继续合并分支  git commit
    	5 冲突的解决
    		1 编辑文件 删除特殊符号
    		2 把文件修改到满意的程度
    		3 git add 文件名
    		4 git commit -m ""  此时不能带文件名 
```

### 13      git的基本原理

```
1 哈希
明文 到 密文  需要一个加密算法 【哈希算法】
2 哈希算法特点：
	1 得到的结果的长度一样
	2 算法确定 输入数据确定， 输出的数据保持不变
	3 算法确定 输入数据有变化 输出的数据有变化 而且通常变化很大 校验文件
	4 哈希算法不可逆
	5 
```



### 14    git保存版本的机制

```
1 svn机制： 每个版本保持变化的一部分
2 git机制： 快照流
```



### 15    远程库和本地库进行交互

```
1 创建本地库
2 创建远程库 
3 在本地创建远程库地址别名
	git remote add origin https://github.com/lxl-3111581715/-Java-.git
4 推送
	git push orign master
	git push orign master
5 clone操作
	git clone git地址
	1 完成的把远程库下载到本地
	2 创建远程地址别名
	3 初始化本地库
	4 修改后提交
		1 克隆项目者要加入团队
		2 
6 	
```






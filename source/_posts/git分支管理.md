---
title: git分支管理
categories:
  - 前端
date: 2020-12-09 16:21:39
---

作为一名程序员，必定会用到版本管理系统。我们这里就以git为例。
分支怎么管理？这里举一个具体的例子，原本有一个项目，版本发布流程是这样的：
在master开发，
发布新版本时，切一个分支v1.0.0，然后发布，
再有新版本时，切一个分支v1.0.1，然后发布，
以此类推。
当我们的版本非常多时，就会有类似这样的情况（当然，这里是比较夸张的）
![](https://img13.360buyimg.com/imagetools/jfs/t1/132523/7/19340/101969/5fd0c3d5Ebb874c43/6acacf342025dd29.png)

分支会变的太多，难以管理，所以需要一个更好的方案，来解决这样的问题。
我比较赞同Vincent Driessen提出了一个[分支管理的策略](https://nvie.com/posts/a-successful-git-branching-model)，可以使得版本库的演进保持简洁，主干清晰，各个分支各司其职、井井有条。

### 1、主分支master：
代码库有且仅有一个主分支。所有提供给用户使用的正式版本，都在这个主分支上发布。
![](https://img14.360buyimg.com/imagetools/jfs/t1/153087/34/9100/149987/5fd0c3d5E3dc2ce79/59a419d6a715c7af.png)

### 2、开发分支dev：
主分支只用来分布重大版本，日常开发应该在另一条分支上完成。我们把开发用的分支，叫做dev。
这个分支用来开发最新的代码，如果要发布正式的，就合并到master，然后给master打tag。
- master合并dev分支  
- git checkout master  
- git merge dev


- 打tag：git tag v1.0.0   
- 指定commit打tag：git tag v1.0.0 f52c633   
- 显示某个tag对应的具体信息：git show v1.0.0   
- 列出所有的tag：git tag   
- 删除tag：git tag -d v1.0.0   

给分支打tag
![](https://img11.360buyimg.com/imagetools/jfs/t1/152787/16/9170/149283/5fd0c3d5E2fec57bd/c1d8598c78adec95.png)   
显示某个tag对应的具体信
![](https://img10.360buyimg.com/imagetools/jfs/t1/154353/28/9068/79629/5fd0c3d5E3d2fc3a1/6b8eb6ffaaf1fca7.png)


### 3、临时分支：
一些修复较大bug、开发较大功能时，在这些分支上处理。当完成后，合并到dev，并删除改分支，保持分支清爽。
分支命名规范：fixbug-\*、feature-\*  

- 切换分支：git branch fixbug-img_error   
- 回到dev，合并：git checkout dev，git merge fixbug-img_error   
- 删除分支：git branch -d fixbug-img_error   
- 删除本地分支：git branch -d fixbug-img_error   
- 删除远程分支：git branch -r -d origin/fixbug-img_error



参考：
https://www.ruanyifeng.com/blog/2012/07/git.html   
https://nvie.com/posts/a-successful-git-branching-model/
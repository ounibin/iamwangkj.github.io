---
title: console的正确打开方式
categories:
  - 前端
date: 2021-03-30 15:58:37
---
在前端开发这个领域中，相信各位大部分使用的浏览器是chrome，我也是，chrome对于调试脚本及调试前端样式都有它比其它浏览器有优秀的地方。当然console.log对大家来说，也是很熟悉的方法。但是今天要介绍的是console的各种其他用法。

console有很多方法，如图

![](https://img10.360buyimg.com/imagetools/jfs/t1/173757/9/1254/71234/6063dcefEfdad1229/53ab430ca6de66a7.png)

## 基础打印
一、基础方式
1、console.log 用于输出普通信息；  
2、console.info 用于输出提示性信息；  
3、console.error 用于输出错误信息；  
4、console.warn 用于输出警示信息；  

![](https://img10.360buyimg.com/imagetools/jfs/t1/168081/7/15964/20265/6063dcf0E39ee0a3e/d05c68ddb56b7d39.png)

二、占位符
支持四种占位符：字符（%s）、整数（%d）、浮点数（%f）、对象（%o）。  
%d：如果输入浮点类型，会被转化为整数。

![](https://img13.360buyimg.com/imagetools/jfs/t1/157946/5/16301/14142/6063dcf0E59254143/348573ba10c29efa.png)

## 节点
console.dirxml(node)  
用于显示网页的某个节点（node）所包含的html/xml代码。现在console.log也有这样的效果。

![](https://img14.360buyimg.com/imagetools/jfs/t1/156832/31/18972/102001/6063dcf0E4f28a8e5/3217b4e4f6af5d5a.png)

![](https://img12.360buyimg.com/imagetools/jfs/t1/157523/10/16458/14720/6063dcf1E077d8dfa/5739561102f591fe.png)

## 组

1. console.group(label)  
参数为标记名，做标记，输出一组信息的开头。在 Web控制台上创建一个新的分组，随后输出到控制台上的内容都会被添加一个缩进，表示该内容属于当前分组，直到调用console.groupEnd()之后，当前分组结束。

![](https://img11.360buyimg.com/imagetools/jfs/t1/167121/23/15589/17178/6063dcf1E9e9d4704/98b7d09bde915046.png)

2. console.groupCollapsed(label)
在 Web控制台上创建一个新的分组，随后输出到控制台上的内容都会被添加一个缩进，表示该内容属于当前分组，直到调用console.groupEnd() 之后，当前分组结束。和 console.group()方法的不同点是，新建的分组默认是折叠的，用户必须点击一个按钮才能将折叠的内容打开。

![](https://img10.360buyimg.com/imagetools/jfs/t1/162397/40/15498/20995/6063dcf0E4f91c882/9a5df44571a6a1bc.png)

3. console.groupEnd()
结束一组输出信息，配合group和groupEnd方法来一起使用，可以输入各种各样的不同形式的输出信息。


## 表格
console.table(data [, columns])
将数据以表格的形式显示，需要一个必须参数 data，data 必须是一个数组或者是一个对象；可选参数 columns，columns包含列的名称的数组。
它会把数据 data 以表格的形式打印出来。数组中的每一个元素（或对象中可枚举的属性）将会以行的形式显示在表格中。表格的第一列是 index。
如果数据 data 是一个数组，那么这一列的单元格的值就是数组的索引。 
如果数据是一个对象，那么它们的值就是各对象的属性名称。

![](https://img14.360buyimg.com/imagetools/jfs/t1/161204/28/15769/22928/6063e273E1b408ac3/94accdda18e1837f.png)


## 断言
console.assert(expression, message)
第一个参数为需要进行assert的结果，正常情况下应当为true；第二个参数则为出错时在控制台上打印的错误信息。

![](https://img14.360buyimg.com/imagetools/jfs/t1/172153/37/1180/26610/6063dcf1E6e069c8c/75a610d26e044ba4.png)




## 计时
1. console.time(timerName)
2. console.timeEnd(timerName) 
跟踪某一个操作的占用时长。每一个计时器必须拥有唯一的名字，页面中最多能同时运行10000个计时器。当以此计时器名字为参数调用 console.timeEnd() 时，浏览器将以毫秒为单位，输出对应计时器所经过的时间。

![](https://img12.360buyimg.com/imagetools/jfs/t1/165101/37/15222/15808/6063dcf1E6196126a/a631cecb7aaa4a01.png)

3. console.timeLog(label)
在控制台输出计时器的值，该计时器必须已经通过 console.time() 启动。

![](https://img10.360buyimg.com/imagetools/jfs/t1/159282/3/16276/36035/6063e7b7Ea04b4437/75d5f67c6d27a37b.png)

# 非标准
**以下特性是非标准的，请尽量不要在生产环境中使用它！**
## ~~计次~~
console.count(label)
输出 count() 被调用的次数。此函数接受一个可选参数 label。

![](https://img14.360buyimg.com/imagetools/jfs/t1/157718/33/15871/29989/6063dcf1E420a118f/901b7cc4a8010ef9.png)

## ~~目录~~
console.dir()
在控制台中显示指定JavaScript对象的属性，并通过类似文件树样式的交互列表显示。现在console.log也有这样的效果。

![](https://img11.360buyimg.com/imagetools/jfs/t1/166579/25/15209/13609/6063e633E91c531a4/85c133cf4b9a5922.png)

## ~~记录性能描述信息~~
console.profile(profileName)
console.profileEnd(profileName)
第一个：开始记录性能描述信息；第二个：结束记录性能描述信息。这2个配合使用来查看资源的消耗情况。

以前旧版本的chrom可以使用，如下:

![](https://img12.360buyimg.com/imagetools/jfs/t1/155843/24/18982/45880/6063dcf2E312e989c/b80343745b563a81.png)

当前chrome的这个方法已无效，如下:
![](https://img14.360buyimg.com/imagetools/jfs/t1/165447/2/14935/38664/6063dcf2E1929ad90/704ab212968e905b.png)

## ~~记录时间戳~~
console.timeStamp(label)
向浏览器的 Performance 或者 Waterfall 工具添加一个标记。这样可以让你将代码中的一个点和其他在时间轴上已记录的事件相关联，例如布局事件和绘制事件等。
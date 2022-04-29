---
title: 深入了解-Request-Headers中的referer
categories:
  - 前端
date: 2021-06-20 11:54:51
---

请求头中有很多的参数，每个参数都要自己独特的作用。http请求的头信息里面，Referer是一个常见字段，提供访问来源的信息。很多开发者知道这个字段，但是说不清它的具体细节。我们一起来深入了解下Request-Headers中的referer。

## referer是什么？
首先，我们先了解一下referer是什么？
1. referer是http请求的header，用于指明当前请求的来源。通过这个信息，我们可以知道访客是从哪里来的。
2. 这对于Web Analytics非常重要，服务端可以用于分析不同渠道流量分布、用户搜索的关键词等，进行统计分析、日志记录以及缓存优化等。
![](https://img10.360buyimg.com/imagetools/jfs/t1/187639/38/9641/279726/60d1d2c8E1dcaa835/42916150fa8e10c9.jpg)

## 为什么要使用referer？
Referer字段实际上告诉了服务器，用户在访问当前资源之前的位置。这往往可以用来用户跟踪。
举例： 
1. 有些网站不允许图片外链，只有自家的网站才能显示图片，外部网站加载图片就会报错。它的实现就是基于Referer字段，如果该字段的网址是自家网址，就放行。
2. 定制Referer字段。比如社交网站上，用户在对话中提到某个网址。这时，不希望暴露用户所在的原始网址，但是可以暴露社交网站的域名，让对方知道，是我贡献了你的流量。

## 怎么使用referer？
客户端发送请求的时候，自主决定是否加上该字段。有些涉及隐私，很多时候不适合发送Referer字段。  
那什么时候携带，什么时候不携带呢？

* 携带：
1. 用户点击网页上的链接。
2. 用户发送表单。
3. 网页加载静态资源，比如加载图片、脚本、样式。
![](https://img13.360buyimg.com/imagetools/jfs/t1/174214/16/16360/314123/60d1d288E20a1f5de/f7294c1fda3b4e82.png)
![](https://img13.360buyimg.com/imagetools/jfs/t1/174473/28/16199/347124/60d1d288E4a82efe4/834ca760e74e6df9.png)
![](https://img14.360buyimg.com/imagetools/jfs/t1/193582/17/9578/329178/60d1d287E3e459d46/c6823b3d54091db2.png)

* 不携带：
1. 用户在地址栏输入网址，或者选中浏览器书签。
2. 从https到http；与referrer policy的默认值一个意思。
3. 使用重定向

除了浏览器默认的行为，我们也可以改变默认的referer行为，从而进行隐藏referer（涉及隐私，很多时候不适合发送Referer字段）。
比如：
1. 使用rel属性
```html
<a href="xxx" rel="noreferrer" target="_blank">跳转</a>
```
2. 使用重定向，链接的时候，不要直接跳转，而是通过一个重定向网址，就像下面这样。
```html
<a  href="/index.html?url=http%3A%2F%2Fxxx.com">xxx.com</a>
```
上面网址中，先跳转到/index.html，然后再跳转到目标网址。这时，Referer字段就不会包含原始网址。
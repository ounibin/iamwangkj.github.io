---
layout: categories
title: 深入了解-h5中的video标签
date: 2022-04-29 10:20:16
categories: 
  - 前端
tags: 
  - '深入了解系列'
---
video标签的自动播放，https://developer.chrome.com/blog/autoplay/
在静音情况下是可以的，但不是静音情况，需要用户交互后，才能播放。


直播流：
HTML5中video标签播放m3u8，遇到问题是：PC机上浏览器都不能访问（IE11，Chrome，Firefox，Opera，Safari），但安卓手机中的浏览器可以正常使用。

m3u8在chrome不能播放，jdapp中可以。





华为 Nova5 Pro安卓9
谷歌手机，安卓12WiFi环境下，无静音键，不自动播放
安卓11系统的是小米11，WiFi环境下，无静音键，不自动播放



原生video：
1、在ios13低电量时，不自动播放，不展示默认封面，而是展示了一个按钮，点击再播放。
2、如果没视频url，有封面，却展示不能播放的视频，而不是封面。
3、如在ios10以下，展示了播放按钮，上面有一斜杠（不能播放）
4、video在低系统版本（ios10以下，安卓7以下）可能有播放按钮、弹窗等。
5、video在jd-app省电模式会不播放（app默认行为）
6、页面不可见时，如切换、滑动，需要暂停播放
7、在jd-小程序，不能自动静音播放
8、新的策略，可以静音自动播放（https://developer.chrome.com/blog/autoplay/#webaudio），不然，需要交互后才播放
9、直播的产品经理说：不建议4G自动播放，需要用户点击播放按钮再播放，不然会有偷流量的嫌疑（有客诉说在偷流量），影响用户体验，而wifi下可以自动播放
10、小米mix3，安卓9，jd-app，内联视频在最顶层，挡住了利益点，并且出现播放进度条，并且设置了充满屏幕也没有生效

总结：
1、在有src、jd-app内（非省电模式）、安卓 7以上、IOS 10以上、非小米mix3、wifi环境下，才播放视频，其他的只展示模拟封面。
this.canPlay = this.$env.JD && src && (versionCompare(getIOSVersion(), '10.0.0') > 0 || versionCompare(getAndroidVersion(), '7.0.0') > 0)
2、需要我们自己去模拟封面，代码监听播放进度，能播就自动静音播放，不能就展示模拟封面。

const isMIX3 = navigator.userAgent.includes('model/MIX 3')


内联视频：
playsinline， iOS10以上（该属性一定要，x5内核也要）
webkit-playsinline， iOS10以下，做适配最好两个都添加

x5-video-player-type='h5'，解决了视频层级过高的问题，但出现了点击播放自动进入全屏的问题。因此还需要监听x5的全屏事件进行适配
x5-video-player-type='h5-page'， 解决了视频层级过高的问题，视频播放也不会立刻进入全屏状态

x5-video-player-fullscreen="true"， 视频播放时将会进入到全屏模式，如果不申明此属性，页面得到视口区域为原始视口大小(视频未播放前)，比如在微信里，会有一个常驻的标题栏，如果不声明此属性，这个标题栏高度不会给页面，播放时会平均分为两块（上下黑块）
x5-video-orientation="portraint"， 声明播放器支持的方向，portraint竖屏（默认），landscape 横屏, 


总结：内联需要以下3个属性
playsinline
webkit-playsinline
x5-video-player-type='h5-page'

事件


onDurationChange
duration（只读）属性变化就触发

onLoadedData
加载数据就触发

onCanPlay
浏览器缓存好了数据可以播放时触发
拖动进度条，缓存好了数据可以播放时，会再次触发

onCanPlayThrough
浏览器缓存好了可以播放到结束的数据时触发
拖动进度条，缓存好了数据可以播放时，会再次触发

onTimeUpdate
播放时一直触发

onEnded
播放结束时触发





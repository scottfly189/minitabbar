# 模仿美团点餐tabbar联动效果的演示源码

## 切换语言

[English](README.md)

## 开源目的：

近期由于做餐饮的点餐系统，模拟美团外卖点餐的效果做UI，苦于在网上看到的资料都是很复杂的解决方案，所以决定开源自己的解决方案，供各位使用;

## 源码看点:

- 模拟美团点餐列表的tabbar联动效果;

- 提供的解决方案的源码与算法比网上能查到的资料都简单;

- 解决了微信小程序scroll-view在webview渲染模式下的position:sticky的bug（在skyline模式下无此问题）;

- 优化的scroll-view滚动，对scroll进行了防抖等处理，对位置计算也进行了优化处理，在长列表下基本上无白屏现象发生;

- 各种圆角等Css的应用,对微信小程序的Dom操作及对scrollTop等真正理解;

## 使用方法

- 下载源码：
  
  ```javas
  git clone https://github.com/scottfly189/minitabbar.git
  ```

- 导入微信小程序开发工具中

- 在miniprogram目录(注意不是根目录)下安装npm所依赖的包:
  
  ```javascript
  npm install
  ```

- 通过微信小程序开发工具构建项目(工具->构建npm)

## 注意

- 本源码基于微信小程序原生的webview渲染模式，改成skyline渲染模式也是很简单;

- 使用的微信基础库：3.5.8，降低版本也是可以的;
- 如果对你有帮助，欢迎star;

## 效果展示

![](./doc/demo.gif "效果演示")

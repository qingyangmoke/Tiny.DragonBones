## 0.2.1

`2019-08-01`

### Fixed
- 移除引用库的 ES6 语法

## 0.2.0

`2019-07-31`

- 构建方式从 webpack@1.* 换成 rollup
- 构建产物修改，并增加 cjs 模式

## 0.1.10

`2017-12-28`

- worldclock time 每次都设置成当前时间 解决长时间暂停后骨骼动画延迟时间太长才播放的问题

## 0.1.9

`2017-12-28`

- worldclock passedTime 最小值调整为0.01 正常60帧的话是0.016666秒 = 1000/60/1000

## 0.1.8

`2017-12-28`

- 解决用户修改手机系统时间导致 worldclock passedTime 太大的问题

## 0.1.7

`2017-12-27`

- 解决用户修改手机系统时间导致 _onCrossFrame 死循环的问题

## 0.1.4

`2017-12-21`

- 更新 tinyjs-plugin-mesh 为0.0.4 Mesh 新增了 canvasDrawTimes 属性
- 给 TinyArmatureDisplay 增加 meshCanvasRenderDrawImageTimes 属性
- 解决mesh canvas render 渲染骨骼网格动画的时候空白间隙 gap line的问题

## 0.1.3

`2017-12-20`

- 更新Mesh库
- 重构demo结构
- 增加网格动画demo
- 增加解决Mesh Canavs Render 渲染间隙的方法


## 0.1.2

`2017-12-19`

- 暴露Mesh 这样可以通过全局Tiny.DragonBones.Mesh对Mesh进行访问和操作

## 0.1.1

`2017-12-18`


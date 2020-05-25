## 0.5.0

`2020-05-25`

- 升级依赖的 mesh 插件，1.2.0 => 1.3.0

## 0.4.3

`2020-05-07`

### Fixed
- 修复引用默认路径的 mesh 导致 `$global` 全局变量的冲突

## 0.4.2

`2020-04-23`

- 取消 `TinyFactory.factory` 的初始调用

## 0.4.1

`2020-03-31`

### Fixed
- 修复网格的 color Multiplier 因找不到对象的报错

## 0.4.0

`2020-03-31`

### Added
- 支持 color Multiplier

## 0.3.1

`2019-12-24`

### Fixed
- 依赖的 tinyjs-plugin-mesh 版本问题修复

## 0.3.0

`2019-12-24`

- TinyX 环境更改全局挂载对象为 $global，不再使用 my

## 0.2.2

`2019-08-02`

- 构建产物修改，并增加 AppXCanvasPlus 模式

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


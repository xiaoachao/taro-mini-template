# Taro 3.x 项目模板

一个基于 Taro3 的 React 框架项目模版。

## 技术栈

- Taro
- React
- Mobx

## 功能列表

- 基础功能
  - [x] TypeScript
  - [x] Sass 支持, 基础公用文件
  - [x] 状态管理(mobx)
  - [ ] iconfont 支持
- 接口请求
  - [x] request 类
  - [x] 拦截器
    - [x] url 拦截器
    - [x] header 拦截器
    - [x] param 拦截器
    - [x] data 拦截器
  - [x] 项目环境配置预设
  - [x] jsonp 支持
- 基础工具类
  - [x] toast 提示
  - [x] validator 表单验证类
  - [x] page.ts 页面工具类，实现获取页面路由、跳转等功能
- 工程化
  - [x] ts 文件路径 alias
  - [x] 通过 plop 插件一键生成模版文件（页面、组件、样式、服务类、mobx 状态管理）
  - [x] git hooks 实现代码提交前的检查
    - [x] eslint
    - [x] stylelint
    - [x] prettier
    - [x] commit lint
  - [x] 接入 [Taro 项目自定义模板](https://taro-docs.jd.com/taro/docs/template)
  - [x] Taro 自定义项目模板源 taro 安装目录/.taro3/index.json templateSource: github:xiaoachao/taro-mini-template

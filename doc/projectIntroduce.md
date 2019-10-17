[TOC]
# 项目结构介绍

## 默认项目结构
```shell
vue-study
    ├─public # 存放公共文件
    │      ├─favicon.ico # 网页图标
    │      └─index.html # 模板文件, 打包时会根据这个模板文件生成对应的html
    ├─src # 项目主文件
    │   ├─assets # 项目静态资源
    │   ├─components # 组件
    │   ├─views # 视图(页面)
    │   ├─app.vue # 基础组件
    │   ├─main.js # 项目入口文件
    │   ├─router.js # 路由文件
    │   └─store.js # vuex状态管理文件
    ├─.editorconfig # 编辑器配置文件
    ├─.eslintrc.js # eslint规则配置文件
    ├─gitignore # git提交的忽略文件
    ├─bable.config.js # bable 配置文件
    ├─package.json # 定义项目描述, 如项目版本、项目名称、项目运行脚本、项目依赖
    │            ├─name # 项目名
    │            ├─version # 版本号
    │            ├─private # 是否私有
    │            ├─scripts # 运行脚本
    │            ├─dependencies # 项目依赖
    │            └─devDependencies # 开发依赖
    ├─postcss.config.js # css自动补充代码兼容性的配置
    └─vue.config.js # 根配置文件
```

## 本项目结构
```shell
vue-study
    ├─doc
    │   ├─projectIntroduce.md # 项目介绍文档
    ├─public # 存放公共文件
    │      ├─favicon.ico # 网页图标
    │      └─index.html # 模板文件, 打包时会根据这个模板文件生成对应的html
    ├─src # 项目主文件
    │   ├─api # 接口文件,js请求
    │   ├─assets # 项目静态资源
    │   ├─components # 组件
    │   ├─config # 项目配置文件
    │   │      └─index.js
    │   ├─directive # vue自定义指令
    │   ├─lib # 工具包
    │   │   ├─tool.js # 与业务无关的工具函数
    │   │   └─util.js # 与业务有关的工具函数
    │   ├─mock 
    │   │    ├─index.js # 请求数据模拟
    │   ├─router # 路由
    │   │      ├─index.js # 路由实列
    │   │      └─router.js # 路由列表
    │   ├─store # vuex状态管理
    │   │     ├─module #
    │   │     │      ├─usr.js #
    │   │     ├─actions.js # 
    │   │     ├─index.js # vuex状态管理文件
    │   │     ├─mutations.js # 
    │   │     ├─state.js # 
    │   ├─views # 视图(页面)
    │   ├─app.vue # 基础组件
    │   └─main.js # 项目入口文件
    │   
    ├─.editorconfig # 编辑器配置文件
    ├─.eslintrc.js # eslint规则配置文件
    ├─gitignore # git提交的忽略文件
    ├─bable.config.js # bable 配置文件
    ├─package.json # 定义项目描述, 如项目版本、项目名称、项目运行脚本、项目依赖
    │            ├─name # 项目名
    │            ├─version # 版本号
    │            ├─private # 是否私有
    │            ├─scripts # 运行脚本
    │            ├─dependencies # 项目依赖
    │            └─devDependencies # 开发依赖
    ├─postcss.config.js # css自动补充代码兼容性的配置
    └─vue.config.js # 根配置文件
```
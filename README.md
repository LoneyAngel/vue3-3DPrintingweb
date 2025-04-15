# 项目介绍

我们想打造一个面向校内的简单的 3D 打印服务站
于是就有了这个项目
这个项目是一个简单的 3D 打印服务站，它使用 Vite+Vue3+pinia(就用上一点)+router+路由守卫 来实现。
（这个项目其实并没有使用到 element-plus，我搞错了，就当成 div 一直用下去了）
界面做的还行

展示链接：https://stalabwork.xin

# 项目架构

- public (静态资源)
- src
  - assets
    - fonts (字体)
    - css (样式)
    - resource (资源)
  - components (组件)
  - tick (小组件)
  - utils (工具)
  - App.vue (根组件)
  - main.js (入口文件)
  - router.js (路由)
- index.html

# 启动须知

utils 下的 instance 中的 ip 地址给填上，要是你想和后端通信的话

# 运行

npm install
npm run dev 热加载模式
npm run build 打包模式

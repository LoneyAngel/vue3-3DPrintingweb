import axios from "axios";
import router from "@/router";
// 创建 Axios 实例
//避免每次使用的时候都要引入axios
const instance = axios.create({
  //这个用于需要进行拦截的请求
  baseURL: , //可以将这里的baseURL改为你的后端地址
});

const general_Connection = axios.create({
  //这一个用于一般的请求，我的理解是其他vue文件不在需要安装axios
  baseURL: , //将这里的baseURL改为你的后端地址
});

// 请求拦截器
instance.interceptors.request.use(
  // 对请求进行拦截，添加 token 到请求头
  (config) => {
    const token = localStorage.getItem("token"); // 从 localStorage 获取 token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // 添加到请求头
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 标志位，防止重复跳转
let isRedirecting = false;

//拦截所有使用instance的请求，但是依旧使用前端路由进行跳转的控制
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      console.log("Token 过期，请重新登录");
      alert("身份验证过期！请重新登录");
      if (!isRedirecting) {
        isRedirecting = true; // 设置标志位
        localStorage.removeItem("token"); // 清除 Token

        // 跳转回登录页面
        router.push({
          name: "admin",
        });
      }
    }
    return Promise.reject(error); // 确保错误继续传递
  }
);

export { instance, general_Connection };

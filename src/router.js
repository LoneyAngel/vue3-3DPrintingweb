import { createWebHistory, createRouter, useRouter } from "vue-router";
import home from "@/components/HomeVue.vue";
import file from "@/components/FiledealVue.vue";
import verify from "@/components/VerifyVue.vue";
import pay from "@/components/PayVue.vue";
import admin from "@/components/AdminverifyVue.vue";
import admin_m from "@/components/AdminVue.vue";
import kai from "@/components/KaiVue.vue";
const routes = [
  //路由配置
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: home,
    name: "home",
  },
  {
    path: "/home/file",
    component: file,
    name: "file",
  },
  {
    path: "/home/verify",
    component: verify,
    name: "verify",
  },
  {
    path: "/home/pay",
    component: pay,
    name: "pay",
    meta: { requiresAuth1: true }, // 标记需要认证的路由，使用instance保护管理者，使用路由守卫保护用户部分
  },
  {
    path: "/kai",
    component: kai,
    name: "kai",
  },
  {
    path: "/admin",
    component: admin,
    name: "admin",
  },
  {
    path: "/admin/main",
    component: admin_m,
    name: "admin_m",
    meta: { requiresAuth2: true }, // 标记需要认证的路由，使用instance保护管理者，使用路由守卫保护用户部分
  },
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 全局前置守卫,注意这里的参数to, from, next
router.beforeEach((to, from, next) => {
  console.log("全局前置守卫");
  const token = localStorage.getItem("token");

  if (to.meta.requiresAuth1 && !token) {
    next("/verify"); // 如果未登录且访问受保护页面，则跳转到登录页
  } else if (to.meta.requiresAuth2 && !token) {
    next("/admin");
  } else {
    next(); // 否则继续导航
  }
});

export default router;

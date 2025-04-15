<template>
    <div class="header">
        <img src="@/assets/resource/dragon.png" alt="Logo" />
        <a class="text no-style" href="https://www.stalab.fun/" target="_blank"
            style="color: aliceblue; text-decoration: none; user-select: none;border:none;">
            STALAB
        </a>
        <router-link to="/kai" class="text no-style no-xianshi"
            style="position: absolute;right: 15%;color:bisque;">开发者微信</router-link>
        <header_button class="button" @click="handleClick" />
    </div>
</template>
<script setup>
import header_button from "@/components/tick/header_button.vue";
import { useRouter } from 'vue-router';
import model from "@/components/tick/model2.vue";
const router = useRouter();

const handleClick = () => {
    try {
        router.push({
            name: 'file'
        }); // 确保路径正确
        console.log('跳转触发');
        console.log(router.getRoutes().map(route => route.path)); // 应包含 '/verify'
    } catch (error) {
        console.error('跳转失败:', error);
    }
}
</script>

<style scoped>
.button {
    max-width: 200px;
    width: 20vw;
    font-size: 30px;
    height: auto;
    margin: 0 1% 0 auto;
}

.header {
    display: flex;
    width: 100%;
    position: relative;
}

/* 图片样式 */
.header img {
    margin: 0 15px 0 15px;
    width: auto;
    height: 98%;
    transition: transform 0.3s ease;
    /* 添加平滑过渡效果 */
    overflow: hidden;
    /* 防止图片溢出 */
}


.header img:hover {
    transform: scale(1.1);
}

.text {
    align-self: center;
    margin-left: 0px;
    font-size: 26px;
    color: #00ff55;
    font-family: 'Courier New', Courier, monospace;
}


.no-style {
    text-decoration: none;
    /* 去除下划线 */
    color: inherit;
    /* 继承父级文字颜色 */
    background: none;
    /* 去除背景 */
    border: none;
    /* 去除边框 */
    outline: none;
    /* 去除点击后的轮廓 */
    box-shadow: none;
    /* 去除阴影 */
    cursor: pointer;
    /* 保持鼠标悬停时为手型 */
    user-select: none;
    /* 禁止选中文字 */
    -webkit-tap-highlight-color: transparent;
    /* 禁用点击高亮 */
}

@media (max-width: 768px) {
    .button {
        width: auto;
        font-size: 15px;
    }

    .no-xianshi {
        display: none;
    }
}
</style>

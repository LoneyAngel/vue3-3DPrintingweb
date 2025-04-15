<template>
    <el-container>
        <el-header>
            <Header />
        </el-header>
        <el-main ref="mainContent">

            <div class="title-container" :style="{ opacity: titleOpacity }">
                <translation class="responsive-component" :title="title" @update:title="handleTitleUpdate"
                    style="transform: translateY(20vh);" />
                <span class="text1" style="color: aliceblue;font-weight:700;font-family: 'MyFont1';">
                    {{ title[0] }}</span>
                <span class="text2"
                    style=" color: darkorange;font-weight: bold;font-family: 'MyFont1' ;letter-spacing: 2px;">{{
                        title[1]
                    }}</span>
                <br>
                <span class="text3" style=" color: darkorange;font-weight: bold;font-family: 'MyFont1' ;">
                    {{ title[2] }}
                    <button class="text3" @click="handleClick" :disabled="isButtonDisabled" :style="{
                        opacity: titleOpacity
                    }">
                        <svg t=" 1742562284248" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="986" width="50" height="50"
                            style="margin-top: 10px;">
                            <path
                                d="M608.256 565.3504m-179.0976 0a179.0976 179.0976 0 1 0 358.1952 0 179.0976 179.0976 0 1 0-358.1952 0Z"
                                fill="#FFBE0A" p-id="987"></path>
                            <path
                                d="M635.5968 921.6a132.5568 132.5568 0 0 1-117.4016-69.9392l-116.3264-210.4832-231.1168-103.1168a119.6544 119.6544 0 0 1 7.1168-221.44l552.96-205.3632a135.3216 135.3216 0 0 1 178.176 160.5632l-141.1584 547.84a132.8128 132.8128 0 0 1-113.9712 100.4544 144.6912 144.6912 0 0 1-18.2784 1.4848zM202.8544 384a47.9744 47.9744 0 0 0-2.8672 88.7808l242.0736 108.032a35.84 35.84 0 0 1 16.7424 15.36l122.112 220.8768a63.6928 63.6928 0 0 0 117.3504-14.9504l141.1072-547.84a63.6416 63.6416 0 0 0-83.8144-75.52L202.8032 384z"
                                fill="#34332E" p-id="988"></path>
                            <path
                                d="M532.48 529.6128a35.84 35.84 0 0 1-25.6-60.9792l152.064-154.4704a35.84 35.84 0 1 1 51.2 50.2784L558.08 518.912a35.84 35.84 0 0 1-25.6 10.7008z"
                                fill="#34332E" p-id="989"></path>
                        </svg>{{ title[3] }}
                    </button>

                </span>
            </div>
            <div class="infor"
                style="width: 100vw;margin-top: 22%;display: flex;align-items: center;justify-items: center;flex-flow: column;"
                :style="{ opacity: informationOpacity }">
                <l_and_r_button style="transform: translateY(25vh);" />
                <information style="position: relative;" />
                <information_bottom />
            </div>
            <div class="full-content" style="margin: 30% 0 40% 0;">
                <rotatecard />
            </div>
            <!-- <el-footer>
                <Footer />
            </el-footer> -->
        </el-main>
        <div class="container">
            <span class="hover-me">下滑了解更多内容 !</span>
            <div class="tooltip">
                <p>Heyy👋</p>
            </div>
        </div>
    </el-container>
</template>

<script setup>
import translation from '@/components/tick/translation.vue';
import Header from '@/components/HeaderVue.vue';
import Footer from '@/components/FooterVue.vue';
import login_card from '@/components/tick/login_card.vue';
import verify from '@/components/VerifyVue.vue';
import rotatecard from '@/components/tick/rotatecard.vue';
import information_bottom from '@/components/tick/information_bottom.vue';
import l_and_r_button from '@/components/tick/information_lr_button.vue';
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import information from '@/components/tick/information.vue';

const router = useRouter();

//用于控制标题的显示（中文/英文）
const title = ref(["Unleash Your", "Creativity", "with 3D", "Printing"]);

// 处理子组件触发的更新事件
const handleTitleUpdate = (newTitle) => {
    title.value = newTitle;
};


const titleOpacity = ref(1); // 初始化透明度为 1（完全可见）
const informationOpacity = ref(1); // 初始化透明度为 1（完全可见）
const isButtonDisabled = ref(false); // 控制按钮是否禁用
const mainContent = ref(null); // 获取 el-main 的引用

// 处理滚动事件
const handleScroll = (opacity, value) => {
    if (!mainContent.value) return;
    const scrollTop = mainContent.value.scrollTop; // 获取 el-main 的滚动距离
    const maxScroll = 200; // 最大滚动距离（可以根据需求调整）
    if (scrollTop < value) return;
    let a = (scrollTop - value) * 0.5;//这里×0.5是为了让速度慢一点，慢一点消失

    // 计算透明度（滚动越远，透明度越低）
    const newOpacity = Math.max(1 - a / maxScroll, 0);
    opacity.value = newOpacity;
    // 根据透明度更新按钮状态
    if (value == 0) isButtonDisabled.value = newOpacity <= 0.2;
};


const handleTitleScroll = () => handleScroll(titleOpacity, 0);
const handleInformationScroll = () => handleScroll(informationOpacity, 890);

onMounted(() => {// 在组件挂载时添加滚动事件监听
    if (mainContent.value) {
        mainContent.value.addEventListener('scroll', handleTitleScroll);
        mainContent.value.addEventListener('scroll', handleInformationScroll);
    }
});

onUnmounted(() => {// 在组件卸载时移除滚动事件监听
    if (mainContent.value) {
        mainContent.value.removeEventListener('scroll', handleTitleScroll);
        mainContent.value.removeEventListener('scroll', handleInformationScroll);
    }
});
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
/* app下的第一层 */

el-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-image: url('@/assets/resource/image.png');
    background-repeat: no-repeat;
    background-size: cover;
    gap: 10px;
    overflow: hidden;
}

/* 固定头部样式 */
el-header {
    position: fixed;
    display: flex;
    height: 10%;
    width: 100%;
    padding: 10px;
    z-index: 1000;
    backdrop-filter: blur(5px);
    /* 毛玻璃效果 */
}

/* 标题和内容以及尾部分 */
el-main {
    display: flex;
    align-items: center;
    flex-flow: column;
    width: 100%;
    overflow-y: auto;
    padding: 10px;
    gap: 60px;
}

.title-container {
    margin-top: 2%;
    display: flex;
    width: 100%;
    flex-direction: column;
    transition: opacity 1s ease;
    /* 透明度动画 */
}

.title-container span {
    text-align: center;
    line-height: 1;
    user-select: none;
    /* 关键：行高设为 1 */
}


/* 内容部分 */
.full-content {
    height: 250px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* 水平和垂直居中很常见的方式 */
}

button {
    width: auto;
    margin-left: 10px;
    text-align: center;
    font-size: 40px;
    color: gold;
    background-color: rgb(255, 94, 0);
    padding: 0px 10px 10px 10px;
    border-radius: 15px;
    border: none;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
}


button:hover {
    background-color: rgb(162, 0, 255);
    transform: scale(1.1);
}

button:active {
    transform: scale(0.95);
}

button:disabled {
    cursor: default;
}


.container {
    font-size: 18px;
    color: #8ed30e;
    cursor: pointer;
    display: flex;
    height: 10%;
    width: 100%;
    padding: 10px;
    position: fixed;
    bottom: 0;
    justify-content: center;
    align-items: center;
    margin: 0 0 0 0;
    letter-spacing: 5px;
    backdrop-filter: blur(2px);
}

.hover-me {
    position: relative;
    z-index: 1;
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-color: #14d1c1;
    word-spacing: 10px;

}

.tooltip {
    position: absolute;
    /* 使用绝对定位 */
    bottom: 100%;
    /* 将 tooltip 放置在 hover-me 文本的上方 */
    left: 47%;
    /* 水平居中 */
    transform: translateX(-50%);
    /* 确保水平居中 */
    width: auto;
    height: 10px;
    background: #ffffff;
    padding: 0.25em;
    text-align: center;
    opacity: 0;
    visibility: hidden;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
    transition: opacity 0.3s ease-in-out;
}

.tooltip::before {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 8px 7px 0;
    border-style: solid;
    border-color: #ffffff transparent transparent transparent;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
}

.tooltip p {
    margin: 0;
    color: #333;
    font-weight: 600;
}

/* bottom: calc(100% + 10px); */
.container:hover .tooltip {
    top: -10px;
    opacity: 1;
    visibility: visible;
    animation: goPopup 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
}

.container:hover .tooltip p {
    animation: bounce 2s ease-in-out infinite;
}

@keyframes goPopup {
    0% {
        transform: translateY(0) scaleY(0);
        opacity: 0;
    }

    50% {
        transform: translateY(-50%) scaleY(1.2);
        opacity: 1;
    }

    100% {
        transform: translateY(-100%) scaleY(1);
        border-radius: 8px;
        opacity: 1;
        height: 40px;
    }
}

@keyframes bounce {

    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateY(0);
    }

    40% {
        transform: translateY(-3px);
    }

    60% {
        transform: translateY(-2px);
    }
}

.text1 {
    font-size: 95px;
}

.text2 {
    font-size: 155px;
}

.text3 {
    font-size: 45px;
}






@media (max-width: 768px) {

    /* 当屏幕宽度小于 768px 时隐藏 */
    .responsive-component {
        display: none;
    }

    .title-container {
        margin-top: 50%;
    }

    .text1 {
        font-size: 72px;
    }

    .text2 {
        font-size: 50px;
    }

    .text3 {
        font-size: 35px;
    }

    .container {
        font-size: 15px;
        margin-bottom: 10%;
    }

    .infor {
        scale: 0.9;
    }
}
</style>

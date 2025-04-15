<template>
    <transition name="fade">
        <div v-if="showModal" class="modal-overlay">
            <div class="modal-content">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showModal = ref(false); // 控制弹窗显示状态
let timer = null; // 定时器

// 页面加载时显示弹窗
onMounted(() => {
    if (localStorage.getItem('hasShownModal') === null || localStorage.getItem('hasShownModal') === 'false') {
        showModal.value = true; // 显示弹窗
        timer = setTimeout(() => {
            showModal.value = false; // 8秒后关闭弹窗
        }, 8000);
        localStorage.setItem('hasShownModal', 'true');
    }
});

// 清理定时器
onUnmounted(() => {
    clearTimeout(timer);
});
</script>
<style scoped>
.modal-overlay {
    position: absolute;
    top: 3%;
    left: 40%;
    font-size: 25px;
    width: auto;
    height: auto;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    border-radius: 5ch;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    position: relative;
    width: 300px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}


/* 淡入淡出动画 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1.5s ease;
    /* 设置透明度变化的时间 */
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    /* 起始和结束状态为完全透明 */
}

@media (max-width: 768px) {
    .modal-overlay {
        left: 10%;
        width: 70%;
        font-size: 20px;
    }
}
</style>
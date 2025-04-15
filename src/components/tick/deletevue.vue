<!-- 文件删除按钮 -->
<template>
    <button aria-label="Delete item" class="delete-button">
        <svg class="trash-svg" viewBox="0 -10 64 74" xmlns="http://www.w3.org/2000/svg">
            <g id="trash-can">
                <rect x="16" y="24" width="32" height="30" rx="3" ry="3" fill="#e74c3c"></rect>

                <g transform-origin="12 18" id="lid-group">
                    <rect x="12" y="12" width="40" height="6" rx="2" ry="2" fill="#c0392b"></rect>
                    <rect x="26" y="8" width="12" height="4" rx="2" ry="2" fill="#c0392b"></rect>
                </g>
            </g>
        </svg>
    </button>

</template>

<style scoped>
.delete-button {
    padding: 1px;
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 1em;
    transition: transform 0.2s ease;
}

/* 去除默认效果 */
.delete-button:hover,
.delete-button:active {
    background-color: transparent;
    /* 确保背景透明 */
    outline: none;
    /* 移除可能的聚焦边框 */
}

/* 针对一些浏览器可能需要额外移除边框颜色 */
.delete-button:focus {
    border: none;
    outline: none;
    box-shadow: none;
}

.trash-svg {
    width: 20px;
    height: 60%;
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    overflow: visible;
}

#lid-group {
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.delete-button:hover #lid-group {
    transform: rotate(-28deg) translateY(2px);
}

.delete-button:active #lid-group {
    transform: rotate(-12deg) scale(0.98);
}

.delete-button:hover .trash-svg {
    transform: scale(1.08) rotate(3deg);
}

.delete-button:active .trash-svg {
    transform: scale(0.96) rotate(-1deg);
}
</style>
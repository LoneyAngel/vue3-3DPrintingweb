<!-- 用作介绍的小卡片 -->
<template>
    <div class="card">
        <div class="main-content">
            <div class="header">
                <span>Article on</span>
                <span>66-6-2055</span>
            </div>
            <p class="heading">3D打印工作室</p>
            <div class="categories" style="display: flex;flex-flow: column;">
                <div>
                    <span>try</span>
                    <span>兴趣</span>
                </div>
                <div style="display: flex;flex-flow: column;text-align: center;margin: 10px;gap: 10px;">
                    如果你不知道什么是3D打印，
                    <a href="https://baike.baidu.com/item/3D%E6%89%93%E5%8D%B0/9640636" target="_blank"
                        rel="noopener noreferrer" style="color: aqua;font-weight: 500;">Click me !</a>
                    All right，我想现在你知道了，或者你本来就知道,enm...
                    <text style="font-family: 'Courier New', Courier, monospace;">Maybe you can have a try🤔</text>
                    也欢迎造访我们的论坛，<a class="text no-style" href="https://www.stalab.fun/" target="_blank"
                        style="color:deeppink;">
                        STALAB
                    </a>
                </div>
            </div>
        </div>
        <div class="footer">
            by STALAB
        </div>
    </div>
</template>
<style scoped>
.text {
    align-self: center;
    margin-left: 0px;
    font-size: 21px;
    color: #235dad;
    font-family: 'Courier New', Courier, monospace;
}


.no-style {
    text-decoration: none;
    /* 去除下划线 */
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

.card {
    width: 320px;
    height: 400px;
    padding: 20px;
    color: white;
    background: linear-gradient(#212121, #212121) padding-box,
        linear-gradient(145deg, transparent 35%, #e81cff, #40c9ff) border-box;
    border: 2px solid transparent;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transform-origin: right bottom;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.card .main-content {
    flex: 1;
}

.card .header span:first-child {
    font-weight: 600;
    color: #717171;
    margin-right: 4px;
}

.card .heading {
    font-size: 24px;
    margin: 24px 0 16px;
    font-weight: 600;
}

.card .categories {
    display: flex;
    gap: 8px;
}

.card .categories span {
    background-color: #e81cff;
    padding: 4px 8px;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 12px;
    border-radius: 50em;
}

.card .footer {
    font-weight: 600;
    color: #717171;
    margin-right: 4px;
}

.card:hover {
    rotate: 7deg;
}
</style>
<!-- 订单生成页面，确认订单则跳转到支付页面，支付页面一般平台会提供自己找 -->
<template>
    <div class="file-page">
        <div class="container">
            <div class="card cart">
                <label class="title">
                    CHECKOUT
                    <div class="menu-wrapper">
                        <div class="wrapper">
                            <input type="checkbox" id="toogle" class="hidden-trigger" />
                            <label for="toogle" class="circle">
                                <svg class="svg" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="48"
                                    xml:space="preserve" version="1.1" viewBox="0 0 48 48">
                                    <image width="48" height="48"
                                        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAbElEQVR4Ae3XwQnFQAiE4eVVsGAP1mkPFjwvQvYSWCQYCYGZv4Dv5MGB5ghcIiDQI+kCftCzNsAR8y5gYu2rwCBAgMBTgEC3rek2yQEtAZoDjso8AyaKexmIDJUZD40AAQIE0gwx449GgMC9/t0b7GTsa7J+AAAAAElFTkSuQmCC">
                                    </image>
                                </svg>
                            </label>

                            <div class="subs">
                                <button class="sub-circle" @click="rollback">
                                    <svg t="1743230326143" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" p-id="1991" width="50" height="auto">
                                        <path
                                            d="M601.64 904.51H99.49V151.29h502.15v161.75h-77.25v-84.5H176.75v598.72h347.64V707.77h77.25z"
                                            fill="#5C02ED" p-id="1992"></path>
                                        <path d="M350.57 489.27h482.84v77.25H350.57z" fill="#6CF96C" p-id="1993"></path>
                                        <path d="M658.214 359.099l54.624-54.624 218.508 218.508-54.624 54.624z"
                                            fill="#6CF96C" p-id="1994"></path>
                                        <path d="M658.208 696.765l218.508-218.508 54.624 54.623-218.508 218.508z"
                                            fill="#6CF96C" p-id="1995"></path>
                                    </svg>
                                </button>
                                <button class="sub-circle" @click="gohome">
                                    <svg t="1743230395734" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" p-id="986" width="50" height="auto">
                                        <path
                                            d="M171.946667 850.048a42.666667 42.666667 0 0 0 42.666666 42.666667h597.333334a42.666667 42.666667 0 0 0 42.666666-42.666667v-362.88a42.666667 42.666667 0 0 0-14.464-32l-298.666666-262.997333a42.666667 42.666667 0 0 0-56.362667 0l-298.666667 262.954666a42.666667 42.666667 0 0 0-14.506666 32.042667v362.88z"
                                            fill="#B3CDFF" p-id="987"></path>
                                        <path
                                            d="M399.530667 892.714667h227.541333V664.32a42.666667 42.666667 0 0 0-42.666667-42.666667h-142.208a42.666667 42.666667 0 0 0-42.666666 42.666667v228.394667z"
                                            fill="#1971FD" p-id="988"></path>
                                    </svg>
                                </button>
                                <button class="sub-circle">
                                    <!-- 暂时空着 -->
                                    <!-- <input value="1" name="sub-circle" type="checkbox" id="sub3"
                                        class="hidden-sub-trigger" />
                                    <label for="sub3">ß</label> -->
                                </button>
                            </div>
                        </div>
                    </div>

                </label>
                <div class="steps">
                    <div class="step">
                        <!-- 商户信息 -->
                        <div>
                            <span>INFORMATION</span>
                            <p>STA LAB</p>
                            <p>{{ localTime }}</p>
                            <!-- 现在的时间 -->
                        </div>
                        <hr>
                        <div>
                            <span>CUSTOMER</span>
                            <p>Steve</p>
                            <p>**** **** {{ b }}</p>
                            <!-- 这里显示用户的手机号 -->
                        </div>
                        <hr>
                        <!-- <div class="promo">
                            <span>HAVE A PROMO CODE?</span>
                            <form class="form">
                                <input type="text" placeholder="Enter a Promo Code" class="input_field">
                                <button>Apply</button>
                            </form>
                        </div> -->
                        <!-- <hr> -->
                        <div class="payments">
                            <span>PAYMENT</span>
                            <div class="details">
                                <span>模型数量：</span>
                                <span>{{ count }}</span>
                                <!-- <span>Shipping:</span>
                                <span>$10.00</span>
                                <span>Tax:</span>
                                <span>$30.40</span> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card checkout">
                <div class="footer">
                    <label class="price" style="font-size: small;">tip:下单后将手机号发给客服</label>
                    <button class="checkout-btn" @click="handleSubmit">确认下单</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { instance } from "@/utils/instance.js";
import menu from "@/components/tick/menu.vue"
import { useFileStore } from '@/utils/fileStore.js';
const router = useRouter();
const fileStore = useFileStore();
const localTime = ref(""); // 获取本地时间
const count = ref(0);
const b = ref("");
// 定时器
let timer;

// 更新本地时间的函数
function updateLocalTime() {
    const now = new Date();
    localTime.value = now.toLocaleString(); // 获取本地时间
}
// 提交文件到后端
const handleSubmit = async () => {
    const files = fileStore.files; // 从 Pinia 中获取文件信息
    if (files.length === 0) {
        alert('没有选择文件');
        router.push(
            {
                name: 'file',
            }
        )
        return;
    }

    const formData = new FormData();
    files.forEach(file => formData.append('files', file));

    try {
        const response = await instance.post('/file/upload', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        if (response.data.success) {
            alert('文件上传成功！即将跳转客服页面！');
        }
        fileStore.clearFiles(); // 清空文件信息
        count.value = 0;
        console.log("Files uploaded successfully.");
    } catch (error) {
        console.error('文件上传失败:', error);
        alert('文件上传失败，请重试！');
    }
    const url = 'https://www.goofish.com/im?spm=a21ybx.item.want.1.140b3da6Ttl5qw&itemId=906721001985&peerUserId=2211032633482'; // 动态生成 URL
    window.open(url, '_blank'); // 打开新页面
};

const rollback = () => {
    console.log(router.getRoutes().map(route => route.path)); // 应包含 '/verify'
    router.push(
        {
            name: 'file',
        }
    )
}
const gohome = () => {
    console.log(router.getRoutes().map(route => route.path)); // 应包含 '/verify'
    router.push(
        {
            name: 'home',
        }
    )
}

onMounted(() => {
    updateLocalTime(); // 初始化时间
    timer = setInterval(updateLocalTime, 1000); // 每秒更新一次
    count.value = fileStore.files.length;
    if (count.value == 0) {
        alert("文件不存在，请重新上传")
        router.push(
            {
                name: 'file',
            }
        )
    }
    b.value = localStorage.getItem("b");
})

onUnmounted(() => {
    clearInterval(timer); // 清除定时器，避免内存泄漏
    localStorage.removeItem("b");
    localStorage.removeItem("hasShownModal");
});

</script>

<style scoped>
/* 新增样式 */
.title {
    position: relative;
    /* 为绝对定位菜单提供参照 */
    padding-right: 70px;
    /* 为菜单留出空间 */
}

.menu-wrapper {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;
}

/* fffffffffffffff */

.file-page {
    background-color: rgb(83, 99, 156);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Body */
.container {
    display: grid;
    grid-template-columns: auto;
    gap: 0px;
}

hr {
    height: 1px;
    background-color: rgba(16, 86, 82, .75);
    ;
    border: none;
}

.card {
    width: 400px;
    background: rgb(255, 250, 235);
    box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
}

.title {
    width: 100%;
    height: 40px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 20px;
    border-bottom: 1px solid rgba(16, 86, 82, .75);
    font-weight: 700;
    font-size: 11px;
    color: #000000;
}

/* Cart */
.cart {
    border-radius: 19px 19px 0px 0px;
}

.cart .steps {
    display: flex;
    flex-direction: column;
    padding: 20px;
}

.cart .steps .step {
    display: grid;
    gap: 10px;
}

.cart .steps .step span {
    font-size: 13px;
    font-weight: 600;
    color: #000000;
    margin-bottom: 8px;
    display: block;
}

.cart .steps .step p {
    font-size: 11px;
    font-weight: 600;
    color: #000000;
}

/* Promo */
.promo form {
    display: grid;
    grid-template-columns: 1fr 80px;
    gap: 10px;
    padding: 0px;
}

.input_field {
    width: auto;
    height: 36px;
    padding: 0 0 0 12px;
    border-radius: 5px;
    outline: none;
    border: 1px solid rgb(16, 86, 82);
    background-color: rgb(251, 243, 228);
    transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
}

.input_field:focus {
    border: 1px solid transparent;
    box-shadow: 0px 0px 0px 2px rgb(251, 243, 228);
    background-color: rgb(201, 193, 178);
}

.promo form button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 18px;
    gap: 10px;
    width: 100%;
    height: 36px;
    background: rgba(16, 86, 82, .75);
    box-shadow: 0px 0.5px 0.5px #F3D2C9, 0px 1px 0.5px rgba(239, 239, 239, 0.5);
    border-radius: 5px;
    border: 0;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #000000;
}

/* Checkout */
.payments .details {
    display: grid;
    grid-template-columns: 10fr 1fr;
    padding: 0px;
    gap: 5px;
}

.payments .details span:nth-child(odd) {
    font-size: 12px;
    font-weight: 600;
    color: #000000;
    margin: auto auto auto 0;
}

.payments .details span:nth-child(even) {
    font-size: 13px;
    font-weight: 600;
    color: #000000;
    margin: auto 0 auto auto;
}

.checkout .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10px 10px 20px;
    background-color: rgba(16, 86, 82, .5);
}

.price {
    position: relative;
    font-size: 22px;
    color: #2B2B2F;
    font-weight: 900;
}

.checkout .checkout-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 36px;
    background: rgba(16, 86, 82, .55);
    box-shadow: 0px 0.5px 0.5px rgba(16, 86, 82, .75), 0px 1px 0.5px rgba(16, 86, 82, .75);
    ;
    border-radius: 7px;
    border: 1px solid rgb(16, 86, 82);
    ;
    color: #000000;
    font-size: 13px;
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
}




.file-uploaded {
    padding: 10px;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    /* 改为顶部对齐,神奇 */
    align-items: center;
    font-weight: 300;
    width: 99%;
    max-height: 150px;
    overflow-y: auto;
    gap: 5px;
}

.file-item {
    display: flex;
    flex-shrink: 0;
    /* 防止项目被压缩 */
    align-items: center;
    justify-content: space-between;
    width: 90%;
    border-bottom: 1px dashed #ccc;
    /* 底部分割线 */
}

.file-item:not(:last-child) {
    border-bottom: 1px dashed #ccc;
    /* 确保最后一个元素没有分割线 */
}



button {
    display: flex;
    height: 3em;
    width: 100px;
    align-items: center;
    justify-content: center;
    background-color: #eeeeee4b;
    border-radius: 3px;
    letter-spacing: 1px;
    transition: all 0.2s linear;
    cursor: pointer;
    border: none;
    background: #fff;
}

button>svg {
    margin-right: 5px;
    margin-left: 5px;
    font-size: 20px;
    transition: all 0.4s ease-in;
}

button:hover>svg {
    font-size: 1.2em;
    transform: translateX(-5px);
}

button:hover {
    box-shadow: 9px 9px 33px #d1d1d1, -9px -9px 33px #ffffff;
    transform: translateY(-2px);
}














/* cccccccccccccccccccccccccccccccccccc */
.wrapper {
    width: 40px;
    height: 40px;
    transform: scale(0.8);
    --black: #618618;
    --ch-black: #141414;
    --eer-black: #216216;
    --night-rider: #272727;
    --white: #282828;
    --af-white: #cccccc;
    --ch-white: #575757;
}

footer .demo {
    position: absolute;
    bottom: 10px;
    width: 500px;
    margin: 0 auto;
}

footer .demo a {
    text-align: center;
    color: var(--black);
    text-decoration: none;
    font-weight: 100;
    border-bottom: 1px solid var(--black);
}

.circle {
    display: block;
    position: relative;
    padding: 0;
    z-index: 98;
    margin: 0 auto;
    -webkit-box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3);
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    height: 60px;
    width: 60px;
    background-color: var(--night-rider);
    transition: 0.2s;
    text-align: center;
}

.circle:active {
    transform: scale(0.9);
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.3);
}

.circle:hover {
    cursor: pointer;
    background-color: var(--night-rider);
    box-shadow: 0 8px 15px 0 rgba(0, 0, 0, 0.3);
}

.circle .svg {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -16px;
    margin-top: -16px;
    width: 32px;
    height: 32px;
    transition: 0.5s;
    transform: rotate(180deg);
}

.sub-circle {
    z-index: 0;
    position: absolute;
    height: 40px;
    width: 40px;
    overflow: hidden;
    border-radius: 50%;
    transition: 0.3s;
    transform: scale(0.5);
    opacity: 0;
    padding: 0;
    margin: 0;
    box-shadow: 0 8px 13px 0 rgba(0, 0, 0, 0.51);
    border: dotted 3.12px #212121;
    user-select: none;
}

.sub-circle label {
    background-color: var(--eer-black);
    display: block;
    color: var(--eer-black);
    width: 100%;
    height: 100%;
    line-height: 40px;
    transition: 0.5s;
}

.sub-circle label:hover {
    cursor: pointer;
    background-color: var(--eer-black);
}

.subs {
    top: -35px;
    left: -5px;
    width: 40px;
    height: 40px;
    text-align: center;
    z-index: 0;
    margin: 0 auto;
    position: relative;
}

.hidden-sub-trigger {
    display: none;
}

.hidden-sub-trigger:checked~label {
    background-color: var(--black);
}

.hidden-trigger {
    display: none;
}

.hidden-trigger:checked~.circle {
    transform: scale(0.75);
    cursor: pointer;
    background-color: var(--black);
    box-shadow: 0px 8px 13px 0px rgba(0, 0, 0, 0.51);
}

.hidden-trigger:checked~.circle .svg {
    transform: rotate(-315deg);
}

.hidden-trigger:checked~.subs button:nth-of-type(1) {
    transform: translate(-40px, -69.28px) scale(1);
    opacity: 1;
    transition: 0.1s;
}

.hidden-trigger:checked~.subs button:nth-of-type(2) {
    transform: translate(40px, -69.28px) scale(1);
    opacity: 1;
    transition: 0.2s;
}

.hidden-trigger:checked~.subs button:nth-of-type(3) {
    transform: translate(80px, 0px) scale(1);
    opacity: 1;
    transition: 0.3s;
}

.hidden-trigger:checked~.subs button:nth-of-type(4) {
    transform: translate(-40px, 69.28px) scale(1);
    opacity: 1;
    transition: 0.4s;
}

.hidden-trigger:checked~.subs button:nth-of-type(5) {
    transform: translate(40px, 69.28px) scale(1);
    opacity: 1;
    transition: 0.5s;
}

.hidden-trigger:checked~.subs button:nth-of-type(6) {
    transform: translate(-80px, 0px) scale(1);
    opacity: 1;
    transition: 0.6s;
}

@media (max-width: 768px) {
    .container {
        scale: 0.8;
    }
}
</style>
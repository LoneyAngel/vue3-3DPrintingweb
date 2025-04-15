<!-- 验证页面 -->
<template>
    <div class="container">
        <div class="card">
            <div class="imge">
                <div class="Usericon"></div>
                <p class="UserName">{{ phone }}</p>
                <p class="Id">{{ verify }}</p>
                <div class="menu-wrapper">
                    <div class="wrapper">
                        <input type="checkbox" id="toogle" class="hidden-trigger" />
                        <label for="toogle" class="circle">
                            <svg class="svg" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="48" xml:space="preserve"
                                version="1.1" viewBox="0 0 48 48">
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
            </div>

            <div class="Description">
                <div class="wave-group" style="margin-top: 10px;">
                    <input v-model="phone" required="" type="text" class="input">
                    <span class="bar"></span>
                    <label class="label">
                        <span class="label-char" style="--index: 0">P</span>
                        <span class="label-char" style="--index: 1">h</span>
                        <span class="label-char" style="--index: 2">o</span>
                        <span class="label-char" style="--index: 3">n</span>
                        <span class="label-char" style="--index: 4">e</span>
                    </label>
                </div>
                <div class="wave-group" style="margin-top: 10px;">
                    <input v-model="verify" required="" type="text" class="input">
                    <span class="bar"></span>
                    <label class="label">
                        <span class="label-char" style="--index: 0">验</span>
                        <span class="label-char" style="--index: 1">证</span>
                        <span class="label-char" style="--index: 2">码</span>
                    </label>
                </div>
                <div style="display: flex;">
                    <loginbutton :ni="buttonText" @click="get_verify"
                        style="margin-top: 15px;transform:  translateX(160px);width: 55px;padding:2px;color:rebeccapurple;" />
                    <loginbutton @click="equal"
                        style="margin-top: 15px;transform:  translateX(180px);color:rebeccapurple;" />
                </div>
            </div>
            <div class="social-media">
                <a href="#1">
                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                        </path>
                    </svg>
                </a>
                <a href="#2">
                    <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                        </path>
                    </svg>
                </a>
                <a href="#3">
                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z">
                        </path>
                    </svg>
                </a>
                <a href="#4">
                    <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                        </path>
                    </svg>
                </a>
            </div>

        </div>
        <div class="pyramid-loader">
            <div class="wrapper_">
                <span class="side side1"></span>
                <span class="side side2"></span>
                <span class="side side3"></span>
                <span class="side side4"></span>
                <span class="shadow"></span>
            </div>
        </div>
    </div>

</template>
<script setup>
import card from '@/components/tick/login_card.vue'
import loginbutton from '@/components/tick/loginbutton.vue'
import { useRouter } from 'vue-router';
import menu from "@/components/tick/menu.vue"
import { general_Connection } from "@/utils/instance.js"
import { ref, onUnmounted } from 'vue'

const router = useRouter();
const phone = ref('')
const verify = ref('')
const buttonText = ref('验证码')
const isCounting = ref(false) // 是否正在倒计时
const countdown = ref(60)  // 倒计时秒数

const rollback = () => {
    router.push(
        {
            name: 'file',
        }
    )
}
const gohome = () => {
    router.push(
        {
            name: 'home',
        }
    )
}
function isValidChinesePhoneNumber(phone) {
    const regex = /^1[3-9]\d{9}$/;
    return regex.test(phone);
}
function isValidSixDigitNumber(input) {
    const regex = /^\d{6}$/;
    return regex.test(input);
}

async function get_verify() {
    try {
        if (isValidChinesePhoneNumber(phone.value)) {
            if (isCounting.value) return; // 如果正在倒计时，则直接返回

            // 开始倒计时
            isCounting.value = true;
            buttonText.value = `${countdown.value}`; // 更新按钮文本

            const timer = setInterval(() => {
                countdown.value--;
                buttonText.value = `${countdown.value}`; // 更新倒计时文本

                if (countdown.value <= 0) {
                    clearInterval(timer); // 清除定时器
                    isCounting.value = false; // 结束倒计时
                    countdown.value = 60; // 恢复初始值
                    buttonText.value = "验证码"; // 恢复按钮文本
                }
            }, 1000);
            const response = await general_Connection.post('/user/get_verify', {
                phone: phone.value
            });
            if (response.data.success) { // success 为 true 或 1（假设 1 表示成功）
                alert("验证码发送成功");
            }
            else {
                alert("验证码发送失败" + response.data.message)
            }
        }
        else {
            alert("请输入11位的大陆手机号！")
        }
    } catch (error) {
        if (error.response) {
            // 后端返回了响应（如 400）
            alert(`请求失败: ${error.response.data.message || '未知错误'}`);
        } else {
            // 网络错误或请求未发送
            alert("网络请求失败，请检查网络");
        }
        console.log(error)
    }
}

async function equal() {
    try {
        if (!isValidSixDigitNumber(verify.value)) {
            alert("请输入6位的数字验证码")
            return
        }
        if (!isValidChinesePhoneNumber(phone.value)) {
            alert("请输入11位的大陆手机号！")
            return
        }
        console.log("开始验证")
        const response = await general_Connection.post('/user/verify',
            {
                phone: phone.value,
                get_input: verify.value
            }
        );
        console.log(response.data)
        if (response.data.success) {
            alert("验证成功")
            localStorage.setItem('b', phone.value.toString().slice(-3));//设置手机号后三位
            localStorage.setItem('token', response.data.token);
            router.push({
                name: 'pay',
            })//再订单页面确定后跳转到支付页面
        }
        else {
            alert("验证失败")
        }
    } catch (error) {
        console.error('发送失败:', error.response ? error.response.data : error.message);
        alert("可能是验证码过期")
    }
}

onUnmounted(() => {
    if (timer) clearInterval(timer);
})
</script>


<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #0000 18.75%, #3b82f6 0 31.25%, #0000 0),
        linear-gradient(45deg, #0000 18.75%, #3b82f6 0 31.25%, #0000 0),
        linear-gradient(135deg, #0000 18.75%, #3b82f6 0 31.25%, #0000 0),
        linear-gradient(45deg, #0000 18.75%, #3b82f6 0 31.25%, #0000 0);
    background-size: 60px 60px;
    background-position:
        0 0,
        0 0,
        30px 30px,
        30px 30px;
    animation: slide 4s linear infinite;
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
        transform: translateY(-30px);
    }

    60% {
        transform: translateY(-15px);
    }
}


@keyframes slide {
    to {
        background-position:
            60px 0,
            60px 0,
            90px 30px,
            90px 30px;
    }
}


a {
    text-decoration: none;
    /* 去除下划线 */
    background-color: inherit;
    /* 强制去除悬停效果 */
    color: inherit;
    /* 继承父级文字颜色 */
    transition: none;
    /* 禁用过渡效果 */
}


.card {
    width: 350px;
    max-width: 88%;
    height: 375px;
    background: rgb(38, 38, 38);
    box-shadow: 30px 20px 3px rgba(0, 0, 0, 0.333);
}

.imge {
    position: relative;
    height: 80px;
    background-color: #ff5858;
}

.imge .Usericon {
    background-color: rgb(255, 255, 255);
    transform: translateX(10px) translateY(10px);
    width: 50px;
    height: 50px;
    border-radius: 10px;
    background-image: url("@/assets/resource/dragon.png");
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
}

.imge .UserName {
    justify-content: center;
    /* background-color: #414141; */
    width: 60px;
    height: 15px;
    border-width: 10px;
    border-radius: 5px;
    border-color: #262626;
    color: #262626;
    font-size: 15px;
    font-weight: bold;
    transform: translateX(80px) translateY(-30px);
}

.imge .Id {
    /* background-color: #414141; */
    width: 50%;
    height: 15px;
    border-width: 10px;
    border-radius: 5px;
    border-color: #262626;
    color: #262626;
    font-size: 15px;
    font-weight: bold;
    transform: translateX(80px) translateY(-20px);
}

.Description {
    border-color: #141414;
    background-color: #414141;
    transform: translate(5px, 6px);
    width: 85%;
    height: 45%;
    border-radius: 5px;
    margin: 10px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 20px 0 0 8px;
}

/*______Social Media______*/

.social-media {
    display: flex;
    flex-direction: row;
    align-content: center;
}

.social-media:before {
    content: " ";
    display: block;
    width: 100%;
    height: 2px;
    transform: translatey(15px);
    background: #414141;

}

.social-media a {
    margin-right: 20px;
    text-decoration: none;
    color: inherit;
}

.social-media a svg {
    color: #ff5858;
    transform: translatex(-65px) translateY(35px);
    width: 25px;
    fill: currentColor;
}


.wave-group {
    position: relative;
}

.wave-group .input {
    font-size: 16px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 200px;
    border: none;
    border-bottom: 1px solid #515151;
    background: transparent;
}

.wave-group .input:focus {
    outline: none;
}

.wave-group .label {
    color: #999;
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    display: flex;
}

.wave-group .label-char {
    transition: 0.2s ease all;
    transition-delay: calc(var(--index) * .05s);
}

.wave-group .input:focus~label .label-char,
.wave-group .input:valid~label .label-char {
    transform: translateY(-20px);
    font-size: 14px;
    color: #5264AE;
}

.wave-group .bar {
    position: relative;
    display: block;
    width: 200px;
}

.wave-group .bar:before,
.wave-group .bar:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #5264AE;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
}

.wave-group .bar:before {
    left: 50%;
}

.wave-group .bar:after {
    right: 50%;
}

.wave-group .input:focus~.bar:before,
.wave-group .input:focus~.bar:after {
    width: 50%;
}













/* 菜单 */
.title {
    position: relative;
    /* 为绝对定位菜单提供参照 */
    padding-right: 70px;
    /* 为菜单留出空间 */
}

.menu-wrapper {
    position: absolute;
    right: 10px;
    top: 10%;
    transform: translateY(-50%);
    z-index: 100;
}

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
    display: flex;
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

/* 以上皆是菜单样式 */




/* 窗体底座 */
.pyramid-loader {
    position: relative;
    width: 300px;
    height: 100px;
    display: block;
    transform-style: preserve-3d;
    transform: rotateX(-20deg);
    transition: 0.5s;
}

.pyramid-loader:hover {
    translate: -6px 6px;


}

.wrapper_ {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: spin 4s linear infinite;
}

@keyframes spin {
    100% {
        transform: rotateY(360deg);
    }
}

.pyramid-loader .wrapper_ .side {
    width: 70px;
    height: 70px;
    /* you can choose any gradient or color you want */
    /* background: radial-gradient( #2F2585 10%, #F028FD 70%, #2BDEAC 120%); */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform-origin: center top;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.pyramid-loader .wrapper_ .side1 {
    transform: rotateZ(-30deg) rotateY(90deg);
    background: conic-gradient(#2BDEAC, #F028FD, #D8CCE6, #2F2585);
}

.pyramid-loader .wrapper_ .side2 {
    transform: rotateZ(30deg) rotateY(90deg);
    background: conic-gradient(#2F2585, #D8CCE6, #F028FD, #2BDEAC);
}

.pyramid-loader .wrapper_ .side3 {
    transform: rotateX(30deg);
    background: conic-gradient(#2F2585, #D8CCE6, #F028FD, #2BDEAC);
}

.pyramid-loader .wrapper_ .side4 {
    transform: rotateX(-30deg);
    background: conic-gradient(#2BDEAC, #F028FD, #D8CCE6, #2F2585);
}

.pyramid-loader .wrapper_ .shadow {
    width: 60px;
    height: 60px;
    background: #8B5AD5;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform: rotateX(90deg) translateZ(-40px);
    filter: blur(12px);
}

/* 窗体底座 */
</style>
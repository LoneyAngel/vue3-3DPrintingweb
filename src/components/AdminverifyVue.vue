<!-- 管理登录，写的比较简陋-->
<template>
    <div class="admin-container">
        <input type="text" placeholder="请输入手机号" v-model="phone">
        <input type="text" placeholder="请输入密码" v-model="password">
        <text>忘记密码，通过验证码修改密码</text>
        <div>
            <input type="text" placeholder="请输入验证码" v-model="verify">
            <button @click="get_verify">获取验证码</button>
        </div>
        <input type="text" placeholder="请输入新密码" :disabled="isDisabled" :class="{ hidden: !isVisible }" v-model="p1">
        <input type="text" placeholder="确认新密码" :disabled="isDisabled" :class="{ hidden: !isVisible }" v-model="p2">

        <button @click="login">登入</button>
        <button @click="Verify">验证</button>
        <button @click="update">修改</button>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue'
import { general_Connection } from "@/utils/instance.js"

const router = useRouter();

const inputValue = ref("")  // 输入框的值
const isDisabled = ref(true) // 控制输入框是否禁用
const isVisible = ref(false)// 控制输入框是否可见
const phone = ref('')
const password = ref('')
const verify = ref('')
const p1 = ref('')
const p2 = ref('')

function isValidChinesePhoneNumber(phone) {
    const regex = /^1[3-9]\d{9}$/;
    return regex.test(phone);
}
function isValidSixDigitNumber(input) {
    const regex = /^\d{6}$/;
    return regex.test(input);
}


// 登录
async function login() {
    try {
        if (isValidChinesePhoneNumber(phone.value)) {
            console.log("开始尝试")
            const response = await general_Connection.post(
                '/admin/login',
                {
                    phone: phone.value,
                    password: password.value
                }
            );
            console.log(response.data)
            if (response.data.success) {
                alert("登录成功")
                localStorage.setItem('token', response.data.token);


                router.push({
                    name: 'admin_m',
                })
            }
            else {
                alert("登录失败" + response.data.message)
            }
        }
        else {
            alert("请输入11位的大陆手机号！")
        }
    } catch (error) {
        console.log(error)
    }
}


// 获取验证码
async function get_verify() {
    try {
        if (isValidChinesePhoneNumber(phone.value)) {
            const response = await general_Connection.post('/admin/get_verify', {
                phone: phone.value
            });
            console.log(response.data)
            if (response.data.success) {
                alert("验证码发送成功")
            }
            else {
                alert("验证码发送失败")
            }
        }
        else {
            alert("请输入11位的大陆手机号！")
        }
    } catch (error) {
        console.log(error)
    }
}

// 验证验证码的正确性
async function Verify() {
    try {
        console.log(phone.value)
        if (isValidSixDigitNumber(verify.value) && isValidChinesePhoneNumber(phone.value)) {
            const response = await general_Connection.post('/admin/verify', {
                phone: phone.value,
                get_input: verify.value
            });
            console.log(response.data)
            if (response.data.success) {
                alert("验证成功")
                isDisabled.value = false;
                isVisible.value = true;
            }
            else {
                alert("验证失败")
            }
        }
        else {
            alert("验证码格式不对或者手机号码不对")
        }
    } catch (error) {
        console.error('发送失败:', error.response ? error.response.data : error.message);
    }
}

//更新密码
async function update() {
    try {
        if (p2.value === p1.value) {
            const response = await general_Connection.post('/admin/udpate', {
                phone: phone.value,
                password: p1.value,
            });
            console.log(response.data)
            if (response.data.success) {
                alert("修改成功")
            }
            else {
                alert("修改失败")
            }
        }
        else {
            alert("两次密码不一致")
        }
    } catch (error) {
        console.log(error)
    }
}

</script>

<style scoped>
.admin-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
}
</style>
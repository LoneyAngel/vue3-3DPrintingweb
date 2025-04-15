<!-- 管理员界面 -->
<script setup>
import { ref, onMounted, computed } from 'vue';
import { instance } from '@/utils/instance.js';

const fileList = ref([]); // 存储展示文件列表
const searchQuery = ref(''); // 搜索框绑定的手机号
// 计算属性：过滤文件列表
const filteredFileList = computed(() => {
    console.log('搜索框内容：', searchQuery.value);
    if (!searchQuery.value.trim()) return fileList.value; // 如果搜索框为空，返回原始列表
    return fileList.value.filter(file =>
        file.phone.includes(searchQuery.value.trim())
    );
});


// 页面加载时获取文件列表
onMounted(async () => {
    try {
        const response = await instance.get('/file/files'); // 请求文件列表
        if (response.data.files.length === 0) alert("文件列表为空");
        else {
            fileList.value = response.data.files; // 更新文件列表
            console.log('文件列表获取成功', fileList.value);
        }
    } catch (error) {
        console.error('获取文件列表失败', error);
    }
});

async function downloadFile(filename) {
    try {
        console.log('开始下载文件:', filename);

        // 发起带有请求头的下载请求
        const response = await instance.get(`/file/download/${filename}`, {
            responseType: 'blob', // 告诉 Axios 返回二进制数据
        });

        // 创建一个临时链接并触发下载
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename); // 设置下载文件名
        document.body.appendChild(link);
        link.click();
        link.remove();

        console.log('文件下载成功');
    } catch (error) {
        console.error('文件下载失败:', error);
        alert('文件下载失败');
        window.location.reload()
    }
}

function formatDate(isoDate) {
    const date = new Date(isoDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从 0 开始
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
}
</script>

<template>
    <div class="file-list-container">
        <h1>文件列表</h1>
        <div class="search-bar">
            <input type="text" v-model="searchQuery" placeholder="搜索手机号" class="search-input" />
            <!-- <button @click="jiansuo" class="search-button">搜索</button> -->
        </div>
        <ul>
            <li v-for="file in filteredFileList" :key="file.file_name">
                <span class="phone">{{ file.phone }}</span>
                <a href="#" @click.prevent="downloadFile(file.file_name)" class="file-link">{{ file.file_name }}</a>
                <span class="date">{{ formatDate(file.date) }}</span>
                <span class="count">{{ file.count }}</span>
                <span class="count">{{ file.status }}</span>
                <hr class="divider">
            </li>
        </ul>
    </div>
</template>




<style scoped>
/* 容器样式 */
.file-list-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
}

/* 标题样式 */
h1 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
}

/* 列表样式 */
ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
}

/* 手机号样式 */
.phone {
    color: #555;
    font-size: 14px;
}

/* 文件名链接样式 */
.file-link {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
    margin: 5px 50px;
}

.file-link:hover {
    text-decoration: underline;
}

/* 日期样式 */
.date {
    color: #888;
    font-size: 12px;
}

/* 日期样式 */
.count {
    color: #a11d1d;
    font-size: 15px;
    margin-left: 40px;
}

/* 分隔线样式 */
.divider {
    border: none;
    height: 2px;
    background-color: #ccc;
    margin: 10px 0;
}


/* 搜索栏样式 */
.search-bar {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.search-input {
    width: 70%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
}

.search-button {
    padding: 8px 16px;
    margin-left: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.search-button:hover {
    background-color: #0056b3;
}

/* 未找到相关文件提示 */
p {
    text-align: center;
    color: #a11d1d;
    font-size: 16px;
    margin-top: 20px;
}
</style>

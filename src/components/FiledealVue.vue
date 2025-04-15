<!-- 文件上传页面 -->
<template>
    <div class="file-page">
        <Model style="opacity: 0.8;">
            <h2 style="color: aqua;font-size: 1em;">温馨提示！</h2>
            <p style="font-size: 0.65em;">将手机号发送给最后展示的咸鱼客服完成下单！</p>
        </Model>
        <div class="container">
            <form class="modal">
                <div class="content">
                    <button @click="rollback">
                        <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1"
                            viewBox="0 0 1024 1024">
                            <path
                                d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z">
                            </path>
                        </svg>
                        <span>Back</span>
                    </button>
                    <span class="title">上传文件</span>

                    <div class="actions">
                        <label for="file" class="button upload-btn">Choose File
                            <input hidden="" type="file" id="file" multiple :accept="jud" @change="handleFileUpload">
                        </label>
                        <!--  accept=".stl,.obj,.fbx,.dae,.glb,.gltf,.3ds,.max,.mtl,.3dl" -->
                    </div>
                    <div class="file-uploaded">
                        <li class="file-item" v-for="file in files" :key="file.name">
                            + {{ file.name }}
                            <deletebutton style="margin-right: 1px;" @click="removeFile(file)" />
                        </li>
                    </div>
                </div>
            </form>
            <br>
            <a padding=0 href="https://www.niushifu.top/viewer" target="_blank" rel="noopener noreferrer"
                style="text-decoration: none;background-color: transparent;">
                <button style="width: 50%;margin:0 25% 0 auto;">预览</button>
            </a>

            <button @click="go_forward" target="_blank" style="width: 50%;margin-left: 25%;">下一步</button>
        </div>
    </div>
</template>
<script setup>
//使用files处理页面的展示逻辑，使用pinia处理数据的持久化
//神奇的，我没有pinia的文件上传好像是覆盖的
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { useFileStore } from '@/utils/fileStore.js';
import deletebutton from '@/components/tick/deletevue.vue';
import Model from '@/components/tick/model2.vue';
const files = ref([]);
const router = useRouter();
const fileStore = useFileStore();
const jud = ref(".stl,.obj,.fbx,.dae,.glb,.gltf,.3ds,.max,.mtl,.3ml")
const showModal = ref(false);


onMounted(() => {
    if (fileStore.files.length > 0) {
        files.value = fileStore.files;
    }
    if (screen.width < 1000) {
        jud.value = "model/stl,model/obj,model/fbx,model/gltf+json,model/3ds,application/x-3ds"
    }
    else {
        jud.value = ".stl,.obj,.fbx,.dae,.glb,.gltf,.3ds,.max,.mtl,.3mf"
    }
})

const handleFileUpload = (event) => {
    const Files = event.target.files;
    for (let i = 0; i < Files.length; i++) {
        files.value.push(Files[i]);
    }
};


const rollback = () => {
    console.log(router.getRoutes().map(route => route.path)); // 应包含 '/verify'
    router.push(
        {
            name: 'home',
        }
    )
}


//最后页面切换的时候将文件上传到pinia中
const go_forward = (event) => {
    if (files.value.length == 0) {
        alert('请选择文件');
        return;
    } else if (files.value.length > 3) {
        alert(`确定上传${files.value.length}个文件吗？`);
    } else if (files.value.length > 10) {
        alert(`抱歉暂不支持一次上传10个以上的文件`);
        return;
    }
    const selectedFiles = Array.from(files.value);
    fileStore.setFiles(selectedFiles); // 将文件存储到 Pinia 中
    router.push(
        {
            name: 'verify',
        }
    )
}


const removeFile = (fileToRemove) => {
    files.value = files.value.filter(file => file !== fileToRemove);
};



</script>

<style scoped>
/* 这里特别设置的背景图片 */
.file-page {
    width: 100%;
    height: 100%;
    --s: 194px;
    /* control the size */
    --c1: #f6edb3;
    --c2: #acc4a3;

    --_l: #0000 calc(25% / 3), var(--c1) 0 25%, #0000 0;
    --_g: conic-gradient(from 120deg at 50% 87.5%, var(--c1) 120deg, #0000 0);

    background: var(--_g), var(--_g) 0 calc(var(--s) / 2),
        conic-gradient(from 180deg at 75%, var(--c2) 60deg, #0000 0),
        conic-gradient(from 60deg at 75% 75%, var(--c1) 0 60deg, #0000 0),
        linear-gradient(150deg, var(--_l)) 0 calc(var(--s) / 2),
        conic-gradient(at 25% 25%,
            #0000 50%,
            var(--c2) 0 240deg,
            var(--c1) 0 300deg,
            var(--c2) 0),
        linear-gradient(-150deg, var(--_l)) #55897c
        /* third color here */
    ;
    background-size: calc(0.866 * var(--s)) var(--s);
    background-color: rgb(83, 99, 156);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #ffffff;
    width: 25%;
    max-width: 350px;
    max-height: 95vh;
    padding: 10px;
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
}

.modal {
    background-color: rgb(255, 255, 255);
    border-radius: 1em;
    box-shadow: 100px 10px 100px 100px rgba(0, 0, 0, 0.1);
    color: rgb(15, 14, 14);
    max-width: 330px;
    position: relative;
    transition: background-color 0.3s, color 0.3s;
    height: auto;
    width: 95%;
}

.content>*,
.modal>* {
    padding: 0.875em;
}

.title {
    font-size: 1.25em;
    font-weight: 600;
    line-height: 1.2;
    display: flex;
    justify-content: center;
}

.actions {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.upload-btn {
    background-color: transparent;
    border: 0.125rem dashed hsla(223, 10%, 50%, 0.4);
    flex: 1;
    padding: 0.375rem 2rem;
}

.upload-btn:hover {
    background-color: hsla(223, 10%, 60%, 0.2);
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
    /* 不换行 */
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

@media (max-width: 768px) {
    .container {
        scale: 0.8;
        width: 350px;
        height: auto;
    }
}
</style>
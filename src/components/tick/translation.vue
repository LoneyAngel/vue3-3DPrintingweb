<template>
    <div class="card">
        <div class="head">Window</div>
        <div class="content">
            {{ sentence }}
            <br />
            <button class="button" @click="translationEnglish">Click me</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    title: {
        type: Array, // 明确指定类型
        required: true,
    },
});

const sentences = ["再点一次你将见证魔法，复原魔术。", "如果你看不懂这句英文🤔"];

const sentence = ref('如果你看不懂这句英文🤔');

const emit = defineEmits(['update:title']);

const temp = [
    "Unleash Your",
    "Creativity",
    "with 3D",
    "Printing",
    "释 放 你 的",
    "创造力",
    "BY",
    "3D打印",
];

const translationEnglish = () => {
    let newTitle;
    if (props.title[0] === temp[0]) {
        newTitle = [temp[4], temp[5], temp[6], temp[7]];
        sentence.value = sentences[0];
    } else {
        newTitle = [temp[0], temp[1], temp[2], temp[3]];
        sentence.value = sentences[1];
    }
    emit('update:title', newTitle); // 通过事件通知父组件
};
</script>
<style scoped>
.card {
    font-family: Montserrat, sans-serif;
    width: 15%;
    min-width: 100px;
    height: 50%;
    translate: -6px -6px;
    background: #ff66a3;
    border: 3px solid #000000;
    box-shadow: 12px 12px 0 #000000;
    overflow: hidden;
    transition: all 0.3s ease;
    margin-left: 1%;
}

.head {
    font-family: Montserrat, sans-serif;
    font-size: 14px;
    font-weight: 900;
    width: 100%;
    height: 32px;
    background: #ffffff;
    padding: 5px 12px;
    color: #000000;
    border-bottom: 3px solid #000000;
}

.content {
    padding: 8px 12px;
    font-size: 14px;
    font-weight: 600;
}

.button {
    max-width: 100px;
    width: 50%;
    height: auto;
    padding: 5px 10px;
    margin-top: 10px;
    border: 3px solid #000000;
    box-shadow: 3px 3px 0 #000000;
    font-weight: 750;
    background: #4ade80;
    transition: all 0.3s ease;
    cursor: pointer;
}

.button:hover {
    translate: 1.5px 1.5px;
    box-shadow: 1.5px 1.5px 0 #000000;
    background: #1ac2ff;
}

.button:active {
    translate: 3px 3px;
    box-shadow: 0 0 0 #000000;
}

.card:hover {
    translate: -6px;
}
</style>
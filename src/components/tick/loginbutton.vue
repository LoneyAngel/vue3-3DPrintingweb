<script setup>
const props = defineProps({
    ni: {
        type: String,
        default: "login" // 默认值
    }
});

</script>
<style scoped>
button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 20px;
    font: inherit;
    background-color: #f0f0f0;
    border: 0;
    color: #242424;
    border-radius: 3px;
    font-size: 1.35rem;
    padding: 0.375em 1em;
    font-weight: 600;
    text-shadow: 0 0.0625em 0 #fff;
    box-shadow: inset 0 0.0625em 0 0 #f4f4f4, 0 0.0625em 0 0 #efefef,
        0 0.125em 0 0 #ececec, 0 0.25em 0 0 #e0e0e0, 0 0.3125em 0 0 #dedede,
        0 0.375em 0 0 #dcdcdc, 0 0.425em 0 0 #cacaca, 0 0.425em 0.5em 0 #cecece;
    transition: 0.15s ease;
    cursor: pointer;
}


button text {
    font-size: 13px;
    font-family: 'Courier New', Courier, monospace;
}

button:active {
    translate: 0 0.225em;
    box-shadow: inset 0 0.03em 0 0 #f4f4f4, 0 0.03em 0 0 #efefef,
        0 0.0625em 0 0 #ececec, 0 0.125em 0 0 #e0e0e0, 0 0.125em 0 0 #dedede,
        0 0.2em 0 0 #dcdcdc, 0 0.225em 0 0 #cacaca, 0 0.225em 0.375em 0 #cecece;
}

button:hover {
    translate: 0 0.125em;
    box-shadow: inset 0 0.0625em 0 0 #f4f4f4, 0 0.0625em 0 0 #efefef,
        0 0.125em 0 0 #ececec, 0 0.25em 0 0 #e0e0e0, 0 0.3125em 0 0 #dedede,
        00.375em 0 0 #dcdcdc,
}
</style>

<template>
    <button><text>{{ ni }}</text></button>
</template>

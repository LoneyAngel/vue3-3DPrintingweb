<template>
    <div class="wrapper">
        <div class="inner" style="--quantity: 10;border: none;">
            <div class="card" style="--index: 0;--color-card: 142, 249, 252;">
                <div class="img" style="background-image: url('@/assets/resource/dragon.png');">
                    <img style="max-height:10vh" src="@/assets/resource/dragon.png" alt="Logo" />
                </div>
            </div>
            <div class="card" style="--index: 1;--color-card: 142, 252, 204;">
                <div class="img"></div>
            </div>
            <div class="card" style="--index: 2;--color-card: 142, 252, 157;">
                <div class="img"></div>
            </div>
            <div class="card" style="--index: 3;--color-card: 215, 252, 142;">
                <div class="img"></div>
            </div>
            <div class="card" style="--index: 4;--color-card: 252, 252, 142;">
                <div class="img"></div>
            </div>
            <div class="card" style="--index: 5;--color-card: 252, 208, 142;">
                <div class="img"></div>
            </div>
            <div class="card" style="--index: 6;--color-card: 252, 142, 142;">
                <div class="img"></div>
            </div>
            <div class="card" style="--index: 7;--color-card: 252, 142, 239;">
                <div class="img"></div>
            </div>
            <div class="card" style="--index: 8;--color-card: 204, 142, 252;">
                <div class="img"></div>
            </div>
            <div class="card" style="--index: 9;--color-card: 142, 202, 252;">
                <login_card />
            </div>
        </div>
    </div>
</template>

<style scoped>
/* From Uiverse.io by ilkhoeri */
.wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    /* overflow: hidden; */
}

.inner {
    --w: 200px;
    --h: 300px;
    --translateZ: calc((var(--w) + var(--h)) + 0px);
    --rotateX: 0deg;
    --perspective: 2000px;
    position: absolute;
    width: var(--w);
    height: var(--h);
    top: 25%;
    left: calc(50% - (var(--w) / 2) - 2.5px);
    z-index: 2;
    transform-style: preserve-3d;
    transform: perspective(var(--perspective));
    animation: rotating 20s linear infinite;

}

@keyframes rotating {
    from {
        transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(0);
    }

    to {
        transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(1turn);
    }
}



.card {
    font-family: Montserrat, sans-serif;
    width: 8vw;
    min-width: 100px;
    height: 23vh;
    translate: -6px -6px;
    background: #ff66a3;
    box-shadow: 12px 12px 0 #000000;
    transition: all 0.3s ease;
    margin-left: 1%;

    /* 这个positon去除有意想不到的效果！！！！ */
    position: absolute;
    border: 2px solid rgba(var(--color-card));
    border-radius: 12px;
    /* inset: 1000px; */
    /* 这个也很强，好像是整体的 */
    transform: rotateY(calc((360deg / var(--quantity)) * var(--index))) translateZ(var(--translateZ));
}

.card:hover {
    translate: -6px;
}

.img {
    width: 100%;
    height: 100%;
    max-width: 20px;
    object-fit: none;
}
</style>
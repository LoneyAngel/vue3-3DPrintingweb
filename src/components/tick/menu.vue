<template>
    <div class="wrapper">
        <input type="checkbox" id="toogle" class="hidden-trigger" />
        <label for="toogle" class="circle">
            <svg class="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48"
                height="48" xml:space="preserve" version="1.1" viewBox="0 0 48 48">
                <image width="48" height="48"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAbElEQVR4Ae3XwQnFQAiE4eVVsGAP1mkPFjwvQvYSWCQYCYGZv4Dv5MGB5ghcIiDQI+kCftCzNsAR8y5gYu2rwCBAgMBTgEC3rek2yQEtAZoDjso8AyaKexmIDJUZD40AAQIE0gwx449GgMC9/t0b7GTsa7J+AAAAAElFTkSuQmCC">
                </image>
            </svg>
        </label>

        <div class="subs">
            <button class="sub-circle">
                <input value="1" name="sub-circle" type="checkbox" id="sub1" class="hidden-sub-trigger" />
                <label for="sub1">ç</label>
            </button>
            <button class="sub-circle">
                <input value="1" name="sub-circle" type="checkbox" id="sub2" class="hidden-sub-trigger" />
                <label for="sub2">M¼³</label>
            </button>
            <button class="sub-circle">
                <input value="1" name="sub-circle" type="checkbox" id="sub3" class="hidden-sub-trigger" />
                <label for="sub3">ß</label>
            </button>
        </div>
    </div>

</template>

<style scoped>
.wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    width: 60px;
    height: 60px;
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
    left: -20px;
    top: -50px;
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
</style>
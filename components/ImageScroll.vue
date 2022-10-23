<template>
    <div>
        <span>
            <h2 class="image_scroller_title">{{ title }}</h2>
        </span>
        <div class="container">
            <div v-for="i in images" :key="i" class="image_container">
                <NuxtImg :src="i" />
            </div>
            <div class="image_container">
                <NuxtImg :src="images[0]" />
            </div>
            <div class="image_container">
                <NuxtImg :src="images[1]" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    title: string;
    images: string[];
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
//how much scroll should scale with # of images, 100% is width of 1 image
@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-300%);
    }
}
// pause scroll on hover
// .container:hover .image_container {
//     animation-play-state: paused;
// }
.container {
    display: flex;
    height: 100%;
    width: auto;
    flex-direction: row;
    justify-content: left;
    overflow-x: hidden;
    z-index: 2;
}
.container .image_container {
    width: 800px;
    height: auto;
    animation: scroll 35s linear infinite; //animation time, should scale with # of images
}

img {
    height: 800px;
    max-height: 85vh;
    min-height: 400px;
    width: auto;
}

.image_scroller_title {
    display: block;
    position: absolute;
    background-color: rgba(#1a2b43, var(--alpha));
    z-index: 1;

    text-align: center;
    width: 100%;
    padding-top: var(--indent-s);
    padding-bottom: var(--indent-s);
    // margin-top: var(--indent-m);
    // margin-left: 45%;
    // padding: 0 var(--indent-s) 0 var(--indent-s);
    // border-radius: 0.5rem;
}

.content {
    background: var(--theme-color);
    flex-grow: 1;
}
</style>

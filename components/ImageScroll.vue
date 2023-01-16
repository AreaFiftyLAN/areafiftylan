<template>
    <div>
        <h2 class="image_scroller_title">{{ title }}</h2>
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
        transform: translateX(calc(-100% * 3));
    }
}
// pause scroll on hover
// .container:hover .image_container {
//     animation-play-state: paused;
// }
.container {
    display: flex;
    height: 80%;
    width: auto;
    flex-direction: row;
    padding-bottom: var(--indent-xl);
    justify-content: left;
    overflow-x: hidden;
    z-index: 2;
}
.container .image_container {
    animation: scroll 35s linear infinite; //animation time, should scale with # of images
    width: 1200px;
    height: auto;
}

img {
    height: 800px;
    max-height: 85vh;
    min-height: 400px;
    width: auto;
}

.image_scroller_title {
    display: block;
    margin-bottom: var(--indent-s);
    text-align: center;
    margin-top: var(--indent-s);
}

.content {
    background: var(--theme-color);
    flex-grow: 1;
}
</style>

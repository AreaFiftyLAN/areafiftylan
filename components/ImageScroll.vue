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
            <input id="count" type="number" :value="images.length" />
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
:root {
    --end-translate: 0;
}

//how much scroll, should scale with # of images, 100% is width of 1 image
@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-300%);
    }
}

.container {
    display: flex;
    flex-direction: row;
    justify-content: left;
    overflow-x: auto;
    counter-reset: c 0;
    height: 80%;
    z-index: 2;
}
.container .image_container {
    animation: scroll 35s linear infinite; //animation time, should scale with # of images
    counter-increment: c 1;
}

// pause scroll on hover
// .container:hover .image_container {
//     animation-play-state: paused;
// }

::-webkit-scrollbar {
    height: 0;
}

.image_scroller_title {
    display: flex;
    position: absolute;
    padding-top: var(--indent-m);
    margin-left: 50%;
    z-index: 1;
}

.content {
    background: var(--theme-color);
    flex-grow: 1;
    padding: var(--indent-xl);
}
</style>

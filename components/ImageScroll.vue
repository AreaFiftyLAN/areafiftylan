<template>
    <div>
        <h2 class="sponsor_category_title">{{ title }}</h2>
        <div v-for="i in images" :key="i" class="container">
            <div class="images_container">
                <img :src="i" />
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
.container {
    display: flex;
    justify-content: space-between;
}

.inverse {
    flex-direction: row-reverse;
}
.content {
    background: var(--theme-color);
    flex-grow: 1;
    padding: var(--indent-xl);
}

img {
    max-width: 66%;
}
</style>

<template>
    <div>
        <div v-for="s in sponsors" :key="s.title" class="container">
            <h2 class="sponsor_category_title">{{ s.title }}</h2>
            <div class="images_container">
                <div v-for="im in s.sponsors" :key="im" class="image_container">
                    <img :src="im" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface SponsorCategory {
    title: string;
    sponsors: string[];
}

interface Props {
    sponsors: SponsorCategory[];
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
.container {
    padding: var(--indent-l);
    background: var(--color-white);
}

.sponsor_category_title {
    color: var(--theme-color);
    font-weight: 700;
    font-size: var(--font-size-l);
    line-height: var(--line-height-l);
    display: flex;
    justify-content: center;
}

.images_container {
    display: flex;
    justify-content: space-evenly;
}

.image_container {
    max-width: 22%;
}

img {
    width: 100%;
}
</style>

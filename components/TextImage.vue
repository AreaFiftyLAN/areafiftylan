<template>
    <div class="container" :class="{ inverse: inverse }">
        <div class="content">
            <slot />
        </div>

        <NuxtImg :src="image" />
    </div>
</template>

<script setup lang="ts">
interface Props {
    inverse?: boolean;
    image: string;
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

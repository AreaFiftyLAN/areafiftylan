<template>
    <div class="container">
        <h2>{{ title }}</h2>
        <div
            v-for="t in tournaments"
            :key="t.game"
            class="tournament_container"
        >
            <div>{{ t.game }} {{ t.form }}</div>

            <div>Prize: {{ t.prize }}</div>
            <a href="#">Rules</a>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Tournaments {
    gameImage: string;
    game: string;
    form: string;
    logo: string;
    prize: string;
}

interface Props {
    title: string;
    tournaments: Tournaments[];
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
.container {
    background: var(--color-white);
    padding: var(--indent-xl) 11rem;
}

h2 {
    color: var(--theme-color);
    font-size: var(--font-size-m);
    line-height: var(--line-height-l);
}
</style>

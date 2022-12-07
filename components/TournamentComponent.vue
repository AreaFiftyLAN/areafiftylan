<template>
    <div class="container">
        <h2>{{ title }}</h2>
        <div class="slides_container">
            <div v-for="s in slides" :key="s.name" class="slide_container">
                <img :src="s.image" />
                <div class="slide_info">
                    <div class="attribute_container">
                        <div class="game_form_container">
                            <p class="game">{{ s.name }}</p>
                            <p>{{ s.form }}</p>
                        </div>
                        <img class="logo" :src="s.logo" />
                    </div>

                    <div class="prize_rules_container">
                        <p>Prize: {{ s.prize }}</p>
                        <a href="#">Rules</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Tournaments {
    image: string;
    name: string;
    tournament?: boolean;
    form?: string;
    logo?: string;
    prize?: string;
    quoute?: string;
}

interface Props {
    title: string;
    tournaments: Tournaments[];
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
.slides_container {
    display: flex;
}

.slide_container {
    margin: var(--indent-m);
    width: 210px;
    height: 320px;
    overflow: hidden;
    position: relative;

    .slide_info {
        display: none;
    }

    &:hover {
        transform: translate(0, -10px);
        .slide_info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: linear-gradient(0deg, rgba(253, 227, 115, 0.76), rgba(253, 227, 115, 0.76));
    }

    }
}

.attribute_container {
    margin: var(--indent-s);
    width: calc(100% - (2 * var(--indent-s)));
    display: flex;
    justify-content: space-between;
}
.logo {
    max-height: 25px;
}

img {
    height: inherit;
}
.container {
    background: var(--color-white);
    padding: var(--indent-xl) 11rem;
}

.slide_info {
    position: absolute;
    top: 0;
    width: 210px;
    height: 320px;
}

.prize_rules_container {
    display: flex;
    margin: var(--indent-m) auto;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

h2 {
    color: var(--theme-color);
    font-size: var(--font-size-m);
    line-height: var(--line-height-l);
}

p,
a {
    color: var(--text-color-alt);
    font-size: var(--font-size-m);
    margin: 0;
}

a {
    text-decoration: underline;
}

.game {
    font-weight: bold;
}
</style>

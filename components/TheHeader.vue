<template>
    <nav :class="{ scrolled: y > 0 }">
        <NuxtLink href="/"><NuxtImg src="/images/logo.png" /></NuxtLink>
        <div>
            <a href="#">Tickets</a>
            <a href="/about">About us</a>
            <a href="#">My Area</a>
        </div>
    </nav>
</template>

<script lang="ts" setup>
const { y } = useWindowScroll();
</script>

<style lang="scss" scoped>
nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--theme-color-alt);
    padding: var(--indent-m) 0;
    transition: background-color 0.5s;
}

img {
    z-index: 2;
    height: 40px;
    padding: 0 var(--indent-s);
}

a {
    padding: 0 var(--indent-m);
    z-index: 2;
    font-size: var(--font-size-m);

    &:hover {
        text-decoration: underline;
    }
}

.scrolled {
    background-color: var(--theme-color);
}
</style>

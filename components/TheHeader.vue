<template>
    <nav class="header" :class="{ sticky: y > 0 }">
        <NuxtLink to="/"> <NuxtImg src="/images/logo.png" /> </NuxtLink>
        <div class="header__link">
            <a class="header__link" href="#">Tickets</a>
            <a class="header__link" href="/about">About us</a>
            <a class="header__link" href="#">My Area</a>
        </div>
    </nav>
</template>

<script lang="ts" setup>
const { y } = useWindowScroll();
</script>

<style lang="scss" scoped>
img {
    z-index: 2;
    height: 40px;
    padding: 0 var(--indent-s);
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--theme-color-alt);
    padding: var(--indent-m) 0;
    z-index: 2;
    position: absolute;
    width: 100%;
    transition: background-color 0.5s;
}

a {
    padding: 0 var(--indent-m);
    z-index: 2;
    font-size: var(--font-size-m);

    &:hover {
        text-decoration: underline;
    }
}

.sticky {
    background-color: var(--theme-color);
    position: sticky;
    top: 0;
}
</style>

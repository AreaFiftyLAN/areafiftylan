<template>
    <TheHeader />
    <slot />
    <TheFooter />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap");

:root {
    --theme-color: #1a2b43;
    --theme-color-alt: #ffe574;
    --color-white: #fff;

    --indent-s: 8px;
    --indent-m: 16px;
    --indent-l: 24px;
    --indent-xl: 48px;

    --font-size-s: 1.4rem;
    --font-size-m: 1.6rem;
    --font-size-l: 2rem;
    --font-size-xl: 3.2rem;

    --line-height-s: 1.8rem;
    --line-height-m: 2rem;
    --line-height-l: 2.4rem;
    --line-height-xl: 3.9rem;

    --text-color: #fff;
    --text-color-alt: #000;

    font-size: 62.5%;
}

html {
    scroll-behavior: smooth;
    background-color: var(--theme-color);
    font-size: 62.5%;
}

body {
    margin: 0;
    font-family: "Roboto", sans-serif;
}

a {
    text-decoration: none;
    color: inherit;
}

h1,
h2 {
    color: var(--theme-color-alt);
    font-size: var(--font-size-xl);
    line-height: var(--line-height-xl);
    font-weight: 700;
    margin-top: 0;
}

p {
    color: var(--text-color);
    font-size: var(--font-size-m);
    line-height: var(--line-height-m);
}
</style>

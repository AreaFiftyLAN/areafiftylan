<template>
    <nav class="header" :class="{'sticky': y > 0}">
        <img class="header__img" src="/Images/Area51Lan Yellow.png" />
        <div class="header__link">
            <a class= "header__link" href="#">Tickets</a>
            <a class= "header__link" href="#">About us</a>
            <a class= "header__link" href="#">My Area</a>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
    img {
        z-index: 2;
        height: 40px;
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--theme-color-alt);
        padding: var(--indent-s);
        z-index: 2;
    }

    a {
        padding: var(--indent-s);
        z-index: 2;

        &:hover {
            text-decoration: underline;
        }
    }

    .sticky {
        background-color: var(--theme-color);
        position: sticky;
        top: 0;
        transition: background-color 0.5s;
    }

    div {
        z-index: 2;
    }

</style>

<script lang='ts' setup>
    const { x, y } = useWindowScroll()
</script>




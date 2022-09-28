<script>
export default {
    props: {
        inverse: Boolean,
        size: String,
    },
};
</script>

<template>
    <button :class="[{ inverse: inverse }, size]">
        <slot />
    </button>
</template>

<style lang="scss" scoped>
button {
    border-radius: 5px;
    background: var(--theme-color);
    color: var(--theme-color-alt);
    font-size: var(--font-size-l);
    line-height: var(--line-height-l);
    border: none;
    padding: var(--indent-s);
    min-width: 23rem;

    &:hover {
        cursor: pointer;
    }
}

.inverse {
    background: var(--theme-color-alt);
    color: var(--theme-alt);
}

.small {
    font-size: var(--font-size-s);
    line-height: var(--line-height-m);
    padding: var(--indent-s) var(--indent-m);
    min-width: unset;
}

.title__container {
    button {
        margin-top: var(--indent-xl);
    }
}
</style>

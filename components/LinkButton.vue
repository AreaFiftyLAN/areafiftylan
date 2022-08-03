<template>
    <button>
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

.title__container {
    button {
        margin-top: var(--indent-xl);
    }
}
</style>

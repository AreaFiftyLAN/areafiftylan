<template>
    <button>
        <slot />
    </button>
</template>

<style lang="scss" scoped>
button {
    width: 10rem;
    height: 3rem;
    border-radius: 10px;
    background: #000;
    color: #fff;
    padding: 1rem;
    margin: 1rem auto;

    &:hover {
        cursor: pointer;
    }
}
</style>

<script>
export default {
  props: {
    inverse: Boolean,
    image: String
  }
}
</script>

<template>
<div class="container" :class="{'inverse': inverse}">
    <div class="content">
        <slot/>
    </div>

    <img :src="image"/>
</div>
</template>

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
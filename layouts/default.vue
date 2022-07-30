<style lang="postcss">
    @import 'public/index.pcss';
</style>

<template>
    <div>
        <TheHeader></TheHeader>
        <slot />
    </div>
</template>

<script lang="ts">
import TheHeader from "~~/components/TheHeader.vue";

export default {
    components: {
    TheHeader
},
    data: function () {
        return {
        };
    },
};
</script>


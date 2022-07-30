<template>
    <IntroImage></IntroImage>
    <div>This is a page.</div>
    <LinkButton @click="showBoop = !showBoop">Click me!</LinkButton>
    <div v-if="showBoop">Boop! Thank you.</div>
</template>

<script lang="ts">
import IntroImage from "~~/components/IntroImage.vue";
export default {
    data: function () {
        return {
            showBoop: false,
        };
    },
    components: { IntroImage }
};
</script>

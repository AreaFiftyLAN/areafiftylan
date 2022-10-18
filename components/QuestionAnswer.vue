<template>
    <div class="container">
        <a class="question" @click="toggleActive">
            {{ question }}
        </a>
        <p class="answer" :class="{ active: isActive }">
            <slot />
        </p>
    </div>
</template>

<script setup lang="ts">
interface Props {
    question: string;
}

defineProps<Props>();

const isActive = ref(false);

const toggleActive = () => {
    isActive.value = !isActive.value;
};
</script>

<style lang="scss" scoped>
.question {
    color: var(--theme-color-alt);
    font-size: var(--font-size-m);
    line-height: var(--line-height-m);
    display: block;
}

.answer {
    display: none;
}

.answer.active {
    display: block;
}

p,
a {
    margin: none;
    margin-bottom: 1rem;
}
</style>

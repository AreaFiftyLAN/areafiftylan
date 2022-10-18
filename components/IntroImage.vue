<template>
    <div class="container">
        <div class="introImage__container">
            <NuxtImg class="introImage__image" src="/images/gamers.jpg" />
        </div>
        <div class="title__container">
            <NuxtImg class="introImage__title" src="/images/logo.png" />
            <h2>26, 27 and 28 February 2022</h2>
            <LinkButton size="medium">Get Tickets</LinkButton>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    position: relative;
}

.introImage__image {
    object-fit: cover;
    width: 100%;
    filter: contrast(0.55);
}

.introImage__container {
    // position: absolute;
    top: 0;
    width: 100%;
    max-height: 50rem;
    overflow: hidden;
}

.title__container {
    // position: absolute;
    height: 70%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 0;
}
.introImage__title {
    height: 11rem;
}

h2 {
    color: var(--theme-color-alt);
    font-size: var(--font-size-xl);
    line-height: var(--line-height-xl);
    margin: 0;
    font-weight: 400;
}
</style>

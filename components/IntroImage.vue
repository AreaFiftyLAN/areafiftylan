<template>
    <div class="container">
        <div class="introImage__container">
            <img class="introImage__image" src="/Images/Gamers.jpg"/>
        </div>
        <div class="title__container">
            <img class="introImage__title" src="/Images/Area51Lan Yellow.png" />
            <h2>26, 27 and 28 February 2022</h2>
            <LinkButton>Get Tickets</LinkButton>
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

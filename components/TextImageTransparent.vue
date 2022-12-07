<template>
    <div class="textimagetransparent">
        <NuxtImg class="image" :src="image" />
        <div class="content">
            <h1>{{ type }}</h1>
            <input type="text" placeholder="E-mail" />
            <input type="password" placeholder="Password" />
            <input
                v-if="type === 'Signup'"
                type="password"
                placeholder="Password Repeat"
            /><br />
            <NuxtLink v-if="type === 'Login'" href="https://google.com"
                >Reset Password</NuxtLink
            >
            <NuxtLink v-if="type === 'Signup'" href="/login"
                >Already have an account? Login here.</NuxtLink
            >
            <div class="buttons">
                <Button v-if="type === 'Login'" class="button" href="/login"
                    >Login</Button
                >
                <Button v-if="type === 'Signup'" class="button" href="/signup"
                    >Register</Button
                >
                <NuxtLink v-if="type === 'Login'" class="button" href="/signup"
                    >Register</NuxtLink
                >
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    image: string;
    type: string;
}

defineProps<Props>();
</script>
<style lang="scss" scoped>
img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    min-height: 450px;

    @media (max-width: 425px) {
        max-height: 175px;
    }
}

.content {
    position: absolute;
    right: 0;
    top: 0;
    width: 40vw;
    height: 100vh;
    background-color: rgba($color: #ffff, $alpha: 0.5);
    padding-left: 5%;
    padding-top: 10%;
    z-index: 4;
    min-height: 450px;

    @media (max-width: 425px) {
        width: 100vw;
        padding-top: 20%;
        max-height: 175px;
    }
}

.content h1 {
    font-size: var(--font-size-xl);
    @media (max-width: 425px) {
        text-align: center;
    }
}

.content input {
    width: 50%;
}

.textimagetransparent {
    position: relative;
    text-align: left;
    color: white;
    min-height: 450px;
}

a {
    color: var(--theme-color-alt);
    text-decoration: underline;
    font-size: 1.5rem;
    &:hover {
        color: var(--theme-color);
    }

    @media (max-width: 425px) {
        display: flex;
        justify-content: center;
    }
}

.buttons {
    display: flex;
    margin: 1rem 0;
    align-items: center;

    @media (max-width: 425px) {
        justify-content: center;
    }
}

.button {
    width: 25%;
    height: 40px;
    font-size: 2em;
    font-weight: bold;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: 0.2s ease-in;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    &:nth-child(even) {
        background-color: var(--theme-color);
        color: var(--theme-color-alt);
        margin: 20px 0 0 10px;
    }

    &:nth-child(odd) {
        background-color: var(--theme-color-alt);
        color: var(--theme-color);
        margin: 20px 0 0 0;
    }
}

input {
    width: 60%;
    height: 20px;
    background: #e0dede;
    justify-content: flex-start;
    display: flex;
    margin: 20px 0;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;

    @media (max-width: 425px) {
        margin: 20px auto;
    }
}
</style>

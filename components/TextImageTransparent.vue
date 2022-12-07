<template>
    <div class="textimagetransparent">
        <NuxtImg class="image" :src="image" />
        <div class="content">
            <h1>{{ type }}</h1>
            <input type="text" placeholder="E-mail" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Password Repeat" v-if="(type === 'Signup')"/><br />
            <NuxtLink href="https://google.com" v-if="(type === 'Login')">Reset Password</NuxtLink>
            <NuxtLink href="/login" v-if="(type === 'Signup')">Already have an account? Login here.</NuxtLink>
            <div class="buttons">
                <Button class="button" href="/login" v-if="(type === 'Login')">Login</Button>
                <Button class="button" href="/signup" v-if="(type === 'Signup')">Register</Button>
                <NuxtLink class="button" href="/signup" v-if="(type === 'Login')">Register</NuxtLink>
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
}

.content h1 {
    font-size: var(--font-size-xl);
}

.content input {
    width: 50%;
}

.textimagetransparent {
    position: relative;
    text-align: left;
    color: white;
}

a {
    color: var(--theme-color-alt);
    text-decoration: underline;
    font-size: 1.5rem;
    &:hover {
        color: var(--theme-color);
    }
}

.buttons {
    display: flex;
    margin: 1rem 0;
    align-items: center;
}

.button {
    width: 25%;
    height: 40px;
    font-size: 2em;
    font-weight: bold;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: .2s ease-in;
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

input{
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
}
</style>

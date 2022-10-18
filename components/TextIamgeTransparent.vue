<template>
    <div class="textimagetransparent">
        <img class="image" :src="image" />
        <div class="content">
            <h1>Login</h1>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" /><br />
            <a class="link" href="https://google.com">Reset Password</a>

            <div class="buttons">
                <button class="button">Login</button>
                <button class="button">Register</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    image: string;
}

defineProps<Props>();
</script>
<style lang="scss" scoped>
.image {
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
    margin: 0.5rem 0rem;
}

.textimagetransparent {
    position: relative;
    text-align: left;
    color: white;
}

.link {
    color: var(--theme-color-alt);
    text-decoration: underline;
}
.link:hover {
    color: var(--theme-color);
}

.buttons {
    display: flex;
    margin: 1rem 0;
}

.button {
    all: none;
    margin: 0 0.5rem;
    width: 7rem;
}

.button:nth-child(even) {
    background-color: var(--theme-color);
    color: var(--theme-color-alt);
}

.button:nth-child(odd) {
    background-color: var(--theme-color-alt);
    color: var(--theme-color);
}
</style>

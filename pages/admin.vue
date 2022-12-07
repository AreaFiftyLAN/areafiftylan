<template>
    <main>
        <h1>Admin Area</h1>
        <div class="layout">
            <div class="menu">
                <NuxtLink href="/admin/home">My Admin</NuxtLink>
                <NuxtLink href="/admin/users">Users</NuxtLink>
            </div>
            <NuxtPage />
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    max-width: 1200px;
    margin: 60px auto;
    height: 700px;
}

.layout {
    display: flex;
    flex-direction: column;

    @media (min-width: 600px) {
        flex-direction: row;
    }
}

.menu {
    display: flex;
    flex-direction: column;
    margin: 0 16px 0 0;
    padding: 0;
    font-size: var(--font-size-l);

    a {
        background: var(--theme-color);
        color: var(--color-white);
        padding: 8px 32px;
        margin: 4px 0;
        border-radius: var(--indent-s);

        &:hover,
        &.router-link-active {
            background: var(--theme-color-alt);
            color: var(--theme-color);
        }
    }
}
</style>

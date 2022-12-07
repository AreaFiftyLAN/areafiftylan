<template>
    <div>
        <h2>View users</h2>
        <table>
            <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Name</th>
            </tr>
            <tr v-for="user in users" :key="user.id">
                <td>{{ user.username }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.firstName }} {{ user.lastName }}</td>
            </tr>
            <tr v-if="pending">
                <td colspan="3">Loading users..</td>
            </tr>
            <tr v-else-if="!users || users.length === 0">
                <td colspan="3">No users found.</td>
            </tr>
        </table>
    </div>
</template>

<script setup lang="ts">
const { data: users, pending } = await useLazyApiFetch<
    Awaited<ReturnType<typeof import("~~/server/api/user/index.get").default>>
>("/api/user", () => true);
</script>

<style lang="scss" scoped>
table {
    color: var(--color-white);
}
</style>

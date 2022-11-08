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
        </table>
    </div>
</template>

<script setup lang="ts">
const { data: users } = await useFetch("/api/user");
</script>

<style lang="scss" scoped>
table {
    color: var(--color-white);
}
</style>

export default defineNuxtConfig({
    modules: ["@vueuse/nuxt", "@nuxt/image-edge"],
    typescript: {
        strict: true,
    },
    image: {},
    vite: {
        server: {
            hmr: {
                protocol: "ws",
            },
        },
    },
});

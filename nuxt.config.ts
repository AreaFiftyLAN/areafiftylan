export default defineNuxtConfig({
    modules: ["@vueuse/nuxt", "@nuxt/image-edge"],
    typescript: {
        strict: true,
    },
    runtimeConfig: {
        seed: false,
    },
    app: {
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            title: "AreaFiftyLAN",
            meta: [
                {
                    name: "description",
                    content: "AreaFiftyLAN - Gaming Event",
                },
                { name: "theme-color", content: "#1a2b43" },
            ],
            link: [{ rel: "icon", href: "/invader.png" }],
        },
    },
});

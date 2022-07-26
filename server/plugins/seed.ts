import { seed } from "~/server/prisma/seed";
import { user } from "~/server/logic";
import { isApiError } from "~/utils/error";

/**
 * Seed the database automatically when no members are detected.
 * This is only done when the runtime config flag is set.
 */
export default defineNitroPlugin(async () => {
    const config = useRuntimeConfig();

    if (!config.seed) {
        return;
    }

    if ((await user.count()) > 0) {
        return;
    }

    try {
        await seed();
    } catch (e) {
        console.error("Failed to seed the database!");

        if (isApiError(e)) {
            console.error(`[${e.code}] ${e.context}`);
        } else {
            console.error(e);
        }
    }
});

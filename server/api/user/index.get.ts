import { user } from "~~/server/logic";

export default defineEventHandler(async () => {
    return await user.getAll();
});

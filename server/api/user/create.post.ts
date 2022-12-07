import { user } from "~~/server/logic";
import { readValidatedBody } from "~~/server/utils";
import { UserCreateValidator } from "~~/server/validation";

export default defineEventHandler(async (e) => {
    const input = await readValidatedBody(e, UserCreateValidator);

    return await user.create(input);
});

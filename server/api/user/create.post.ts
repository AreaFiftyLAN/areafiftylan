import { User } from "@prisma/client";
import { object, string, pattern, assert, size } from "superstruct";

import { user, makeError } from "~~/logic";

const Body = object({
    username: size(string(), 5, 60),
    email: size(pattern(string(), /^[^@]+@[^@]+\.[^@]+$/), 4, 100),
    firstName: size(string(), 3, 50),
    lastName: size(string(), 3, 50),
});

export default defineEventHandler<User>(async (e) => {
    const body = await readBody(e);

    try {
        assert(body, Body);
    } catch (e) {
        throw makeError(400, e);
    }

    return await user.create(body);
});

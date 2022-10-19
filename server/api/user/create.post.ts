import { PrismaClient, User } from "@prisma/client";
import { object, string, define, assert, size } from "superstruct";

import isEmail from "is-email";

const Body = object({
    username: size(string(), 5, 60),
    email: size(define("Email", isEmail), 4, 100),
    firstName: size(string(), 3, 50),
    lastName: size(string(), 3, 50),
});

export default defineEventHandler<User>(async (e) => {
    const body = await readBody(e);
    assert(body, Body);

    const prisma = new PrismaClient();

    return await prisma.user.create({
        data: body,
    });
});

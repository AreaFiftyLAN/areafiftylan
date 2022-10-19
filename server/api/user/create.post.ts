import { PrismaClient, User } from "@prisma/client";
import { object, string, define, assert, size, StructError } from "superstruct";

import isEmail from "is-email";

const Body = object({
    username: size(string(), 5, 60),
    email: size(define("Email", isEmail), 4, 100),
    firstName: size(string(), 3, 50),
    lastName: size(string(), 3, 50),
});

export default defineEventHandler<User>(async (e) => {
    const body = await readBody(e);

    try {
        assert(body, Body);
    } catch (e) {
        throw createError({
            statusCode: 400,
            statusMessage: "Bad Request",
            message: (e as StructError)?.message,
            cause: e,
            fatal: false,
            stack: undefined,
        });
    }

    const prisma = new PrismaClient();

    return await prisma.user.create({
        data: body,
    });
});

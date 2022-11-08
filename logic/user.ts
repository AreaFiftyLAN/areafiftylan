import { Prisma, User } from "@prisma/client";

import { Database } from "./database";
import { makeError } from "./index";

/**
 * Create a new user.
 * This also does some basic validation.
 * @param user The user to create.
 * @returns The created user object.
 */
export const create = async (user: Prisma.UserCreateInput): Promise<User> => {
    if ((await findByUsername(user.username)) !== null) {
        throw makeError(400, "User with this username already exists!");
    }

    if ((await findByEmail(user.email)) !== null) {
        throw makeError(400, "User with this email already exists!");
    }

    const db = Database.get();

    return await db.user.create({
        data: user,
    });
};

/**
 * Find an unique user by it's username.
 * @param username The username to search for.
 * @returns The user if found, or null otherwise.
 */
export const findByUsername = async (
    username: string,
): Promise<User | null> => {
    const db = Database.get();

    return await db.user.findUnique({
        where: {
            username,
        },
    });
};

/**
 * Find an unique user by it's email.
 * @param email The email to search for.
 * @returns The user if found, or null otherwise.
 */
export const findByEmail = async (email: string): Promise<User | null> => {
    const db = Database.get();

    return await db.user.findUnique({
        where: {
            email,
        },
    });
};

/**
 * Get all saved users.
 * @returns A list of all users.
 */
export const getAll = async (): Promise<User[]> => {
    const db = Database.get();

    return await db.user.findMany();
};

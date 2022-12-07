import { prisma } from "../prisma";
import { UserCreate } from "../validation";

/**
 * Create a new user.
 * This also does some basic validation.
 * @param user The user to create.
 * @returns The created user object.
 */
export const create = async (user: UserCreate) => {
    if ((await findByUsername(user.username)) !== null) {
        throw apiError(ErrorCode.Exists, {
            message: "User with this username already exists!",
            field: "username",
        });
    }

    if ((await findByEmail(user.email)) !== null) {
        throw apiError(ErrorCode.Exists, {
            message: "User with this username already exists!",
            field: "email",
        });
    }

    return await prisma.user.create({
        data: user,
    });
};

/**
 * Find an unique user by it's username.
 * @param username The username to search for.
 * @returns The user if found, or null otherwise.
 */
export const findByUsername = async (username: string) => {
    return await prisma.user.findUnique({
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
export const findByEmail = async (email: string) => {
    return await prisma.user.findUnique({
        where: {
            email,
        },
    });
};

/**
 * Get all saved users.
 * @returns A list of all users.
 */
export const getAll = async () => {
    return await prisma.user.findMany();
};

/**
 * Count the amount of registered users.
 * @returns The amount of registered users.
 */
export const count = async () => {
    return await prisma.user.count();
};

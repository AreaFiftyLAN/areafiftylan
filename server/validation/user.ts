import { Infer, object, omit, size, string } from "superstruct";

import { email, uuid } from "./utils";

/**
 * Complete user validator.
 * This has all fields, but is probably not useful on it's own.
 */
const UserValidator = object({
    id: uuid(),
    username: size(string(), 3, 60),
    email: size(email(), 4, 100),
    firstName: size(string(), 2, 50),
    lastName: size(string(), 2, 50),
});

/**
 * Creation of new user.
 */
export const UserCreateValidator = omit(UserValidator, ["id"]);
export type UserCreate = Infer<typeof UserCreateValidator>;

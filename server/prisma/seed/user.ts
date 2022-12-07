import { array, create } from "superstruct";

import userJson from "./data/user.json" assert { type: "json" };

import { user } from "~~/server/logic";
import { UserCreateValidator } from "~~/server/validation";

export default async () => {
    const users = create(userJson, array(UserCreateValidator));

    for (const u of users) {
        await user.create(u);
    }
};

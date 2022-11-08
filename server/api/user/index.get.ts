import { User } from "@prisma/client";

import { user } from "~~/logic";

export default defineEventHandler<User[]>(async () => {
    return await user.getAll();
});

import { PrismaClient, User } from "@prisma/client";

export default defineEventHandler<User[]>(async () => {
    const prisma = new PrismaClient();
    return await prisma.user.findMany();
});

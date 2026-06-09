import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg"

const connectionString = process.env.DATABASE_URL;

const adapter = new PrismaPg({ connectionString });

const createPrismaClient  = () => {
    return new PrismaClient({
        adapter,
    });
};

const globalPrismaClient = globalThis as unknown as {
    prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const db = globalPrismaClient.prisma ?? createPrismaClient();

if(process.env.NODE_ENV !== "production") {
    globalPrismaClient.prisma = db;
}
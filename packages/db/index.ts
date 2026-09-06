import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL || "postgresql://neondb_owner:npg_BdzPof60yMlK@ep-plain-frog-ayvxkhtp-pooler.c-5.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require";

if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

const adapter = new PrismaPg({
  connectionString,
});

const prisma = new PrismaClient({
  adapter,
});


export { prisma as prismaClient };
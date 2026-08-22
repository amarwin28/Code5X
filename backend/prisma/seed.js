import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
    const password = await bcrypt.hash("Eleva@123", 12);

    const users = [
        {
            email: "admin@eleva.com",
            role: "ADMIN",
        },
        {
            email: "institution@eleva.com",
            role: "INSTITUTION",
        },
        {
            email: "student@eleva.com",
            role: "STUDENT",
        },
        {
            email: "recruiter@eleva.com",
            role: "RECRUITER",
        },
    ];

    for (const user of users) {
        await prisma.user.upsert({
            where: {
                email: user.email,
            },
            update: {
                password,
                role: user.role,
            },
            create: {
                email: user.email,
                password,
                role: user.role,
            },
        });
    }

    console.log("✅ Eleva test users created successfully");
}

main()
    .catch((error) => {
        console.error("❌ Seed failed:", error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
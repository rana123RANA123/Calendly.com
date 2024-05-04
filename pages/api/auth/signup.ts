// // pages/api/auth/signup.ts
// import { PrismaClient } from "@prisma/client";
// import bcrypt from "bcryptjs";

// const prisma = new PrismaClient();

// export default async (req: any, res: any) => {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method Not Allowed" });
//   }

//   const { email, password } = req.body;

//   // Check if user already exists
//   const existingUser = await prisma.user.findUnique({
//     where: { email },
//   });
//   if (existingUser) {
//     return res.status(400).json({ message: "User already exists" });
//   }

//   // Hash password
//   const hashedPassword = await bcrypt.hash(password, 10);

//   try {
//     // Create new user
//     const newUser = await prisma.user.create({
//       data: {
//         email,
//         password: hashedPassword,
//       },
//     });
//     res
//       .status(201)
//       .json({ message: "User created successfully", user: newUser });
//   } catch (error) {
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

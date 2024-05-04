// // pages/api/auth/[...nextauth].ts

// import NextAuth from "next-auth";
// import { PrismaClient } from "@prisma/client";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import CredentialsProvider from "next-auth/providers/credentials";

// const prisma = new PrismaClient();

// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         username: { label: "Username", type: "text", placeholder: "jsmith" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials, req) {
//         const user = await prisma.user.findUnique({
//           where: { email: credentials?.username },
//         });

//         if (user && user.password === credentials?.password) {
//           return user;
//         } else {
//           return null;
//         }
//       },
//     }),
//   ],
//   adapter: PrismaAdapter(prisma),
// });

import { AuthOptions, User } from "next-auth";
import prismadb from "./prismadb";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import Credentials from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  pages: { signIn: "/login" },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Missing credentials");
          }

          const user = await prismadb.user.findFirst({
            where: {
              email: credentials.email,
            },
          });

          if (!user || !user.id || !user.hashedPassword) {
            throw new Error("Invalid credentials");
          }

          const correctPassword = await bcrypt.compare(
            credentials.password,
            user.hashedPassword
          );

          if (!correctPassword) {
            throw new Error("Invalid credentials");
          }

          return user as any;
        } catch (error: any) {
          throw new Error("Authentication failed: " + error.message);
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "your-secret-goes-here",
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV !== "production",
};

export default authOptions;

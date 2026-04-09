import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      userId: string;
      name: string;
      role: "admin" | "patient";
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    userId: string;
    name: string;
    role: "admin" | "patient";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    userId: string;
    name: string;
    role: "admin" | "patient";
  }
}
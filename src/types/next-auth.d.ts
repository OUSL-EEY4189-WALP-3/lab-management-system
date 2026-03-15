import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      _id: string;
      userId: string;
      name: string;
      role: "admin" | "patient";
    } & DefaultSession["user"];
  }

  interface User {
    userId: string;
    name: string;
    role: "admin" | "patient";
  }
}
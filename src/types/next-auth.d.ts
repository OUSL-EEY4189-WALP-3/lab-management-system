import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      role: "admin" | "patient";
    } & DefaultSession["user"];
  }

  interface User {
    role: "admin" | "patient";
  }
}
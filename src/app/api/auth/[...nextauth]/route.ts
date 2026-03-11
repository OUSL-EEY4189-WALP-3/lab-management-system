import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import CredentialProviders from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialProviders({
            name: "credentials",
            credentials: {},

            async authorize(credentials: any) {
                await connectDB();
                const user = await User.findOne({
                    email: credentials.email,
                });

                if(!user) throw new Error("User not found");

                const isValid = await bcrypt.compare(credentials.password, user.password);

                if(!isValid) throw new Error("Wrong password");
                return {
                    id: user._id.toString(),
                    name: user.name,
                    email: user.email,
                    role: user.role,
                };
            },
        }),
    ],

    session: {
        strategy: "jwt",
    },

    callbacks: {
        async jwt({ token, user }: any) {
            if(user) {
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }: any) {
            if(session.user) {
                session.user.role = token.role;
            }
            return session;
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST};
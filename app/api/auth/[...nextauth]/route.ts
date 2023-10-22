import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";
import type { NextAuthOptions as NextAuthConfig } from "next-auth";

export const AuthConfig = {
  // Configure one or more authentication providers
  providers: [
    Google({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || "",
    }),

    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthConfig;

const handler = NextAuth(AuthConfig);
export { handler as GET, handler as POST };

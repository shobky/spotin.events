import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";
import type { NextAuthOptions as NextAuthConfig } from "next-auth";
import { setAccessToken } from "@/lib/utils/server";

export const AuthConfig = {
  pages: {
    signIn: "/login",
    signOut: "/signout",
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || "",
      authorization: {
        params: {
          scope: "https://www.googleapis.com/auth/calendar openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      await setAccessToken(account?.access_token || "");
      return true;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthConfig;

const handler = NextAuth(AuthConfig);
export { handler as GET, handler as POST };

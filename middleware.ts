import { withAuth } from "next-auth/middleware";

export default withAuth(function middleware() {}, {
  callbacks: {
    authorized: async ({ req, token }) => {
      if (req.nextUrl.pathname.startsWith("/admin") && token === null) {
        return false;
      }
      return true;
    },
  },
});

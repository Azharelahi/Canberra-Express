import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  // Enable JWT session
  session: {
    strategy: "jwt",
  },

  callbacks: {
    /**
     * Fires when user successfully signs in with Google
     * We send user info to backend asynchronously (fire-and-forget)
     */
    async signIn({ user }) {
      try {
        // Fire-and-forget: don't await to avoid Vercel timeout
        fetch("https://canberra-express-backend-git-main-azharelahis-projects.vercel.app/v1/user/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: user.name, email: user.email }),
        }).catch(console.error);

        return true; // allow login
      } catch (err) {
        console.error("Error sending user to backend:", err);
        return false;
      }
    },

    /**
     * Called whenever a session is checked/created.
     * Fetch backend JWT asynchronously and attach to session
     */
    async session({ session, token }) {
      try {
        // Fire-and-forget fetch
        fetch("https://canberra-express-backend-git-main-azharelahis-projects.vercel.app/v1/user/login-jwt", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: session.user.email }),
        })
          .then(res => res.json())
          .then(data => {
            if (data?.token) {
              session.jwt = data.token; // attach backend JWT
            }
          })
          .catch(console.error);

        return session;
      } catch (err) {
        console.error("Failed to get backend JWT:", err);
        return session;
      }
    },

    /**
     * JWT callback ensures token persists across requests
     */
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
  },

  // Optional: custom pages
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
});

export { handler as GET, handler as POST };

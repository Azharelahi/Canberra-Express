import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        // Send user info to backend
        const response = await fetch("https://canberra-express-backend-git-main-azharelahis-projects.vercel.app/v1/user/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: user.name, email: user.email }),
        });

        const data = await response.json();
        console.log("Backend response:", data);

        return true;
      } catch (err) {
        console.error("Error sending user to backend:", err);
        return false;
      }
    },

    async session({ session }) {
      // Here you fetch the backend JWT for this user
      try {
        const response = await fetch("https://canberra-express-backend-git-main-azharelahis-projects.vercel.app/v1/user/login-jwt", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: session.user.email }),
        });
        const data = await response.json();
        session.jwt = data.token; // attach backend JWT to session
      } catch (err) {
        console.error("Failed to get backend JWT:", err);
      }

      return session;
    },
  },
});

export { handler as GET, handler as POST };

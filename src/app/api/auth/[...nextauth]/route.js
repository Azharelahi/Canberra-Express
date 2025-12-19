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
      console.log("User signed in:", user); // just log info
      return true; // allow login
    },
    async session({ session }) {
      return session; // make session available
    },
  },
});

export { handler as GET, handler as POST }; // App Router requirement

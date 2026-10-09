import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "admin@toyota.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // MOCK AUTHENTICATION (Bypass DB since MySQL is not ready)
        if (
          credentials?.email === "admin@toyota.com" &&
          credentials?.password === "admin123"
        ) {
          return {
            id: "1",
            name: "Administrator",
            email: "admin@toyota.com",
            role: "admin",
          };
        }
        return null; // Login failed
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role;
      }
      return session;
    }
  },
  pages: {
    signIn: '/admin/login',
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 hours
  },
  secret: process.env.NEXTAUTH_SECRET || "fallback_secret_key_123",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

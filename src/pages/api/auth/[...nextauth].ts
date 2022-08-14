import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const res = await fetch('http://localhost:8000/auth/login', {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const user = await res.json();

        if (res.ok && user) {
          return user;
        }

        return null;
      },
    }),
  ],
  theme: {
    colorScheme: 'light',
  },
  callbacks: {
    async jwt(token) {
      return token;
    },
  },
};

export default NextAuth(authOptions);

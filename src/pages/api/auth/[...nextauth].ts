import NextAuth, { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [],
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

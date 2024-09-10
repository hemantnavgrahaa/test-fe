import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {
  credentials,
  credentialsAuth,
} from "./services/next-auth-options/credentials";

import GoogleProvider from "next-auth/providers/google";

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET;
const authSecret = process.env.NEXT_PUBLIC_SECRET;

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID as string,
      clientSecret: GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      credentials: credentials,
      name: "credentials",
      // @ts-ignore
      authorize: async () => ({
        email: "cat@gmail.com",
        name: "Cat god",
      }),
    }),
  ],
  callbacks: {
    jwt: async ({ user, token, trigger, session }) => {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }
      return { ...token, ...user };
    },
  },
  secret: authSecret,
};

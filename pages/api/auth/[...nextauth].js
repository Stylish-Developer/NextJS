import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

// ---------------------------------------
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENTID,
      clientSecret: process.env.GITHUB_SECRETS_ID,
    }),
    // ...add more providers here
  ],
  adapter: MongoDBAdapter(clientPromise, {
    databaseName: "nextAuthDb",
  }),
  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.AUTH_SECRET,
  },
  /*   callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session(session, token) {
      session.user.id = token.id
      return session
    }
  } */
};

export default NextAuth(authOptions);

/* export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENTID,
      clientSecret: process.env.GITHUB_SECRETS_ID,
    }),
    // ...add more providers here
  ],
  database: process.env.DB_URL,
  session: {
    jwt: true
  },
  jwt: {
    secret:'asdfghjkl'
  }
}; */

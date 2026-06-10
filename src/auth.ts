import NextAuth from "next-auth" 
import Google from "next-auth/providers/google"
import Discord from "next-auth/providers/discord"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import Credentials from "next-auth/providers/credentials" 
import { signInShema } from "./lib/shema"
import { getUserByEmail } from "./lib/user"
import type { Session, User } from "next-auth"
import type { JWT } from "next-auth/jwt"
import bcrypt from "bcrypt"

export const {handlers,auth,signIn,signOut} =NextAuth ({
  adapter:PrismaAdapter(prisma),
  providers:[
    Discord({
      clientId: process.env.AUTH_DISCORD_ID as string,
      clientSecret: process.env.AUTH_DISCORD_SECRET as string
    }),
  Google({
  clientId: process.env.AUTH_GOOGLE_ID as string,
  clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
}),
    Credentials({                              
      async authorize(credentials) {
        const parsed = signInShema.safeParse(credentials)
        if (!parsed.success) return null

        const { email, password } = parsed.data
        const user = await getUserByEmail(email)
        if (!user || !user.password) return null

        const passwordMatch = await bcrypt.compare(password, user.password)
        if (passwordMatch) return user

        return null
      },
    }),
  ],
  pages:{
    signIn:"/login", 
  },
  session:{
    strategy:"jwt"
  },
  callbacks:{
    authorized:async ({ auth }) =>{
      return !!auth
    },
async jwt({ token, user }) {
  if (user) {
    if (user.id) token.id = user.id
    token.favoriteAgent = user.favoriteAgent
  }
  return token
},
async session({ session, token }) {
  if (token.id) {
    session.user.id = token.id
  }
  session.user.favoriteAgent = token.favoriteAgent ?? null
  return session
},
  },
})
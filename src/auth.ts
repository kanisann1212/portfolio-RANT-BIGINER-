import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Discord from "next-auth/providers/discord"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"


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
})
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
    async jwt({user,token}){
      if(user){
        token.id = user.id
      }
      return token
    },
    async session({session,token}){
      session.user.id = token.id 
      return session
    },
  },
})
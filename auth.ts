import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Discord from "next-auth/providers/discord"

export const {handlers,auth,signIn,signOut} =NextAuth ({
  basePath: "/api/auth",
  providers:[
    Discord({
      clientId: process.env.AUTH_DISCORD_ID as string,
      clientSecret: process.env.AUTH_DISCORD_SECRET as string
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
    jwt({user,token}){
      if(user){
        token.id = user.id
      }
      return token
    },
    session({session,token}){
      session.user.id = token.id 
      return session
    },
  },
})
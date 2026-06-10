import { DefaultSession } from "next-auth"

type UserId = string;

declare module "next-auth/jwt"{
  interface JWT{
    id?: UserId;
    favoriteAgent?: string | null
  }
}

declare module "next-auth" {
  interface User {
    favoriteAgent?: string  | null
  } 
  interface Session {
    user: User & {
      id: UserId
      favoriteAgent?: string | null
    } & DefaultSession["user"]  
  }
}
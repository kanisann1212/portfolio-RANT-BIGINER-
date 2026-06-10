import { z } from "zod"

export const videoshema = z.object({
  url: z.string().url(),
  title:z.string().min(1),
  agent:z.string(),
  map:z.string(),
})

export const signUpShema = z.object({
  name:z.string().min(2),
  email:z.string().email({
    message:'メールアドレスを入力してください'
  }),
  password:z.string().min(8,{
    message:'パスワードを入力してください'
  }),
  favoriteAgent:z.string(),
})

export const signInShema = z.object({
  email:z.string().email({
    message:'メールアドレスを入力してください'
  }),
  password:z.string().min(8,{
    message:'パスワードを入力してください'
  }),
})

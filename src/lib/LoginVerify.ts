import { auth } from "@/auth";

export const LoginVerify = async() => {
  const session = await auth()
  return session
}
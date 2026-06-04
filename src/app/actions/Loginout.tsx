"use server"

import { signIn,signOut } from "../../auth"

export async function handleSingIN(provider:string){
  await signIn(provider, { redirectTo: "/mypage" })
}

export async function handleSignOut() {
  await signOut()
}
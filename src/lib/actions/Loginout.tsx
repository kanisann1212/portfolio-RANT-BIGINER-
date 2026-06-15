"use server"

import { signIn, signOut } from "../../auth"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function handleSingIN(provider: string) {
  await signIn(provider, { redirectTo: "/mypage" })
}

export async function handleSignOut() {
  await signOut({ redirect: false })
  revalidatePath("/", "layout")
  redirect("/")
}


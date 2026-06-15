"use client"
import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"

export const LogoutButton = () => {
  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" })
  }

  return (
    <Button
      onClick={handleLogout}
      variant="outline"
      className="flex items-center gap-2 text-sm md:text-base px-3 py-2 md:px-4 md:py-2"
    >
      <LogOut className="w-4 h-4 md:w-5 md:h-5" />
      <span className="hidden sm:inline">ログアウト</span>
    </Button>
  )
}
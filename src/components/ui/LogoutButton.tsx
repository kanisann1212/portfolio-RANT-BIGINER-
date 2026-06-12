"use client"
import { handleSignOut } from "@/lib/actions/Loginout"
import { Button } from "@/components/ui/button"

export const LogoutButton = () => {
  return (
    <Button 
     onClick={() => handleSignOut()}
     className="bg-red-600 text-white font-extrabold ">
      ログアウト
    </Button>
  )
}
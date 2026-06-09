'use client'
import { GoogleIcon } from "@/components/ui/GoogleIcon";
import { handleSingIN } from "@/app/actions/Loginout";
import { Button } from "@/components/ui/button";

export const GoogleSignIn = () =>{
  return (
    <>
    <Button 
    className="w-[200px] h-[50px] text-[20px]"
    onClick={()=>handleSingIN("google")}> <GoogleIcon/>Google</Button>
    </>
  )
}
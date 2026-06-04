'use client'

import { handleSingIN } from "@/app/actions/Loginout";
import { Button } from "@/components/ui/button";

export const GoogleSignIn = () =>{
  return (
    <>
    <Button 
    className="w-[100px] h-[50px] text-[20px]"
    onClick={()=>handleSingIN("google")}> Google</Button>
    </>
  )
}
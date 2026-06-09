'use client'
import { DiscordIcon } from "@/components/ui/DiscordIcon";
import { handleSingIN } from "@/app/actions/Loginout";
import { Button } from "@/components/ui/button";

export const DiscordSignIn = () =>{
  return (
    <>
    <Button 
    className="w-[200px] h-[50px] text-[20px]"
    onClick={()=>handleSingIN("discord")}> <DiscordIcon/>Discord</Button>
    </>
  )
}
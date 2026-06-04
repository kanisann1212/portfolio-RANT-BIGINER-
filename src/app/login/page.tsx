
import { DiscordSignIn } from "@/components/session/DiscordsignIn";
import { DiscordLogoIcon,InstagramLogoIcon } from "@radix-ui/react-icons";
import { GoogleSignIn } from "@/components/session/Googlesignin";

export default function Mypage (){
  return(
    <div className=" container mx-auto flex flex-col items-center gap-3 justify-center h-screen w-screen">
      <div className="font-extrabold text-5xl">Start your game</div>
       <div>あなたのだけの物語を始めましょう</div>
    <DiscordSignIn />
    <GoogleSignIn/>
     <div className="underline ">アカウントを持っていませんか？</div>
    </div>
  )
}
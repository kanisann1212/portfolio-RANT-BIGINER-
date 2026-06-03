import { Button } from "@/components/ui/button";
import { DiscordLogoIcon,InstagramLogoIcon } from "@radix-ui/react-icons";

export default function Mypage (){
  return(
    <div className=" container mx-auto flex flex-col items-center gap-3 justify-center h-screen w-screen">
      <div className="font-extrabold text-5xl">Start your game</div>
       <div>あなたのだけの物語を始めましょう</div>
    <Button className="w-[100px] h-[50px] text-[20px]"> Discord</Button>
     <Button className="w-[100px] h-[50px] text-[20px]">google</Button>
     <div className="underline ">アカウントを持っていませんか？</div>
    </div>
  )
}
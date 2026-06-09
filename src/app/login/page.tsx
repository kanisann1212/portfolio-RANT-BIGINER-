
import { DiscordSignIn } from "@/components/session/DiscordsignIn";
import Image from "next/image";
import { GoogleSignIn } from "@/components/session/Googlesignin";
import { Video } from "@/components/TOP PAGE/Video";
import { LoginCard } from "@/components/ui/LoginCard";
export default function Mypage() {
  return (
    <>
      <div className="grid grid-cols-2 h-screen w-screen items-center justify-center lg:max-w-none lg:px-0 bg-[url(/AISOLOGIN.jpg)] bg-position-[160px] bg-cover">
        <div className="relative lg:block hidden">
          <Video />
          <h1 className="text-white absolute top-130 left-40 text-8xl">RANT BIGINNER</h1>
          <div className="absolute left-120 top-170 " >
            <Image
              src="/VALORANT.png"
              alt="VALORANT"
              width={200}
              height={400}
              className="h-auto "
            />
          </div>
        </div>
          <div className="mx-auto w-full sm:w-[550px] flex flex-col justify-center space-y-6 items-center backdrop-blur-2xl rounded-3xl pt-20 pb-20 backdrop-brightness-[1.75]">
          <div className="font-extrabold text-5xl mb-10">Start your game</div>
          <LoginCard />
          <div className="flex items-center gap-4 w-full">
            <div className="border-t border-gray-300 flex-1" />
            <span className="text-gray-500">または</span>
            <div className="border-t border-gray-300 flex-1" />
          </div>
          <div className="mt-5">
            <DiscordSignIn />
            <GoogleSignIn />
          </div>
          <div className="underline ">アカウントを持っていませんか？</div>
        </div>
        </div>
  
    </>
  )
}
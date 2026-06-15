import Image from "next/image";
import { Video } from "@/components/TOP PAGE/Video";
import { CreateIDCard } from "@/components/ui/CreateIdCard";
import { Header } from "@/components/TOP PAGE/Header";

export default function Mypage() {
  return (
    <>
      <Header />
      <div className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen w-screen items-center justify-center bg-[url(https://totnfaipgpkmgjvlcqee.supabase.co/storage/v1/object/public/RANTBIGINNER.IMAGE/AISOLOGIN.jpg)] bg-cover bg-center lg:bg-position-[160px]">

  
          <div className="relative hidden lg:block">
            <Video />
            <h1 className="text-white absolute top-130 left-40 text-8xl">RANT BIGINNER</h1>
            <div className="absolute left-120 top-170">
              <Image
                src="https://totnfaipgpkmgjvlcqee.supabase.co/storage/v1/object/public/RANTBIGINNER.IMAGE/VALORANT.png"
                alt="VALORANT"
                width={200}
                height={400}
                className="h-auto"
              />
            </div>
          </div>

          
          <div className="mx-auto w-[90%] sm:w-[550px] flex flex-col justify-center space-y-6 text-black items-center backdrop-blur-2xl rounded-3xl py-10 md:py-20 px-6 md:px-0 backdrop-brightness-[1.75]">
            <div className="font-extrabold text-3xl md:text-5xl mb-5 md:mb-10 text-center">
              Create your game
            </div>
            <CreateIDCard />
          </div>
        </div>
      </div>
    </>
  )
}
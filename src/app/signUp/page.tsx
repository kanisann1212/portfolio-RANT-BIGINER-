import Image from "next/image";
import { Video } from "@/components/TOP PAGE/Video";
import { CreateIDCard } from "@/components/ui/CreateIdCard";
export default function Mypage() {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-2 h-screen w-screen items-center justify-center lg:max-w-none lg:px-0 bg-[url(/AISOLOGIN.jpg)] bg-position-[160px] bg-cover ">
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
          <div className="mx-auto w-full sm:w-[550px] flex flex-col justify-center space-y-6 text-black items-center backdrop-blur-2xl rounded-3xl pt-20 pb-20 backdrop-brightness-[1.75]">
          <div className="font-extrabold text-5xl mb-10">Create your game</div>
          <CreateIDCard />
        </div>
        </div>
    </div>
  )
}
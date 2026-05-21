import { User } from "lucide-react"
import { Video } from "@/components/TOP PAGE/Video";
import { Midashi } from "@/components/MAP/Midashi";
import Image from "next/image";


export const Top = () => {
  return (
    <>
      <Video />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className='font-bold text-white italic text-center text-9xl ' >RANT BEGINNER</h1>
      </div>
      <div className="fixed left-10 top-10 " >
        <Image
          src="/VALORANT.png"
          alt="VALORANT"
          width={200}
          height={400}
          className="h-auto "
        />
      </div>
      <div className="fixed top-10 right-10" >
        <User className="w-10 h-10 text-white" />
      </div>


      <div className="flex mt-96 mb-96  ml-24 mr-24 justify-between items-center" >
        <div className="relative flex-shrink-0 w-3/5 h-[700px]">
        <Image
          src="/kai.jpg"
          alt="VALORANT"
          fill
          className="object-cover rounded-3xl "
        />
        </div>
        <div className="flex-1 pb-20 justify-between items-center">
        <h1 className="text-black m-45 mb-20  text-7xl text-center">
          -FOR YOU-</h1>

        <p className="text-black font-bold text-center p-10 text-2xl">このサイトは初心者である方全員に向けて作りました。<br />どうかこのサイトがあなたのバロ人生の糧になることを祈っております。</p>
        </div>
      </div>






      <div className="grid grid-cols-3 gap-10 m-15 mr-20 ml-20 h-[80vh]">
        <div className="h-full">
          <Midashi
            src={"/abys.webp"}
            midashi={"MAP"}

            page={"/map"}
          />
        </div>
        <div className="h-full">
          <Midashi
            src={"/egents.avif"}
            midashi={"EGENT"}

            page={"/egents"}
          />
        </div>
        <div className="h-full">
          <Midashi
            src={"/wepon.avif"}
            midashi={"WEPON"}
            page={"/guns"}
          />
        </div>
      </div>
    </>
  )
}
import { User } from "lucide-react"
import { Video } from "@/components/TOP PAGE/Video";
import { Midashi } from "@/components/TOP PAGE/Midashi";
import Image from "next/image";
import { MIBAE } from "./MIBAE";


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
        <MIBAE syubun="このサイトは初心者である方全員に向けて作りました。" hukubun="どうかこのサイトがあなたのバロ人生の糧になることを祈っております。" kime="ーFOR YOUー" gazou="/kai.jpg"/>
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
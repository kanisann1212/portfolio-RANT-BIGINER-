import { User } from "lucide-react"
import { Video } from "@/components/Video";
import { Top } from "@/components/Top";
import { Midashi } from "@/components/Midashi";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Video />
      <div className="fixed left-10" >
        <Image 
        src="/VALORANT.png"
        alt="VALORANT"
        width={200}
        height={400}
        />
      </div>
      <div className="fixed top-10 right-10" >
        <User className="w-10 h-10 text-white" />
      </div>
      <Top />
      <div className=" mt-40 bg-[image:url('/BGVAL.jpg')] bg-contain bg-center  rounded-2xl w-full  mask-t-from-95% mask-b-from-90%  ">
        <Midashi
          src={"/abys.webp"}
          midashi={"MAP"}
          honbun={"構造を学び、戦略に活かす"}
          page={"/map"}
        />
        <Midashi
          src={"/egents.avif"}
          midashi={"EGENT"}
          honbun={"己を知り、チームを強化する"}
          page={"/egents"}
        />
        <Midashi
          src={"/wepon.avif"}
          midashi={"WEPON"}
          honbun={"定められた平等の力を活かす"}
          page={"/guns"}
        />
      </div>
    </>
  );
}

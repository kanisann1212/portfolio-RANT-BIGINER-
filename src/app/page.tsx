import { User } from "lucide-react"
import { Video } from "@/components/Video";
import { Top } from "@/components/Top";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Video />
      <div className="absolute top-10 right-10" >
        <User className="w-7 h-7 text-white" />
      </div>
      <Top />
      <div className="bg-black mt-40">
        <div className="flex">
          <Image
            src="/abys.webp"
            alt="mapの画像"
            width={600}
            height={600}
            className="mr-40"
          />
          <div>
            <h1 className="text-white text-8xl mb-20 ">MAP</h1>
            <p>マップ構造を学び、戦略に生かす</p>
          </div>
        </div>
      </div>
      <img />
      <h1></h1>
      <img />
      <h1></h1>
    </>
  );
}

import { User } from "lucide-react"
import { Video } from "@/components/Video";
import { Top } from "@/components/Top";
import { Midashi } from "@/components/Midashi";

export default function Home() {
  return (
    <>
      <Video />
      <div className="absolute top-10 right-10" >
        <User className="w-7 h-7 text-white" />
      </div>
      <Top />
      <div className="bg-black mt-40 ml-10">
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

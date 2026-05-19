import type { midashiProps } from "@/types/type"
import Image from "next/image"
import Link from "next/link"


export const Midashi = ({ midashi, src, honbun, page }: midashiProps) => {
  return (
    <div className="flex mt-20 rouded-2xl backdrop-blur-sm mb-20 bg-black/30 shadow-2xs ">
      <Link href={page}>
        <Image
          src={src}
          alt={midashi}
          width={600}
          height={600}
          className="mr-40 rounded-2xl border "
        />
        </Link>
      <div className="flex flex-col justify-center ">
        <h1 className="text-white text-8xl mb-10 text-shadow-2xs ">{midashi}</h1>
        <div className="bg-white h-[2px] w-[1000px]" />
        <p className="text-white font-bold mt-10">{honbun}</p>
      </div>
    </div>
  )
}
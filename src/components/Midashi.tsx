import type { midashiProps } from "@/types/type"
import Image from "next/image"
import Link from "next/link"


export const Midashi = ({ midashi, src, honbun, page }: midashiProps) => {
  return (
    <div className="flex mt-20">
      <Link href={page}>
        <Image
          src={src}
          alt={midashi}
          width={600}
          height={600}
          className="mr-40 rounded-2xl"
        />
        </Link>
      <div>
        <h1 className="text-white text-8xl mb-20 ">{midashi}</h1>
        <p className="text-white font-bold">{honbun}</p>
      </div>

    </div>
  )
}
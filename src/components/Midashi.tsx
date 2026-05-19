import type { midashiProps } from "@/types/type"
import Image from "next/image"

export const Midashi = ({midashi,src}:midashiProps) => {
  return (
            <div className="flex">
              <Image
                src={src}
                alt={midashi}
                width={600}
                height={600}
                className="mr-40"
              />
              <div>
                <h1 className="text-white text-8xl mb-20 ">{midashi}</h1>
                <p>マップ構造を学び、戦略に生かす</p>
              </div>
            </div>
  )
}
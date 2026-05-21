import type { Agent } from "@/types/type"
import type { AProps } from "@/types/type"
import Image from "next/image"

export const AGENT = ({A}:AProps) =>{
  const basepath = "/egents"
  return(
    <>
    <div className="grid grid-cols-7 gap-10 mr-24 ml-24">
        {A.map((sen:Agent) => {
          return (
            <div key={sen.uuid} className="text-black flex justify-between flex-col items-center">
              <div className="relative w-full h-[300px] overflow-hidden">
              <Image
                src={sen.displayIcon}
                alt="VALORANT"
                fill
                className="object-contain rounded-3xl "
              />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
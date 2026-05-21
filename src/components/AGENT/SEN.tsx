import type { Agent } from "@/types/type"
import type { AProps } from "@/types/type"
import Image from "next/image"
import Link from "next/link"

export const SEN = ({ A }: AProps) => {
  const basepath = "/egents"
  return (
    <>
      <div className="relative bg-[url(/KILLJOY.jpg)] bg-size-[auto_px] mask-b-from-80% bg-no-repeat mask-t-from-90%"
      >
        <h1 className="text-black text-8xl absolute left-190 top-50">Sentinel</h1>
        <div className="grid grid-cols-4 grid-rows-2 w-[700px] ml-10 h-[500px] backdrop-blur-xs">
          {A.map((sen: Agent) => {
            return (
              <Link
                key={sen.uuid}
                className="text-black"
                href={`${basepath}/${sen.uuid}`}
              >
                <div className="relative w-[150px] h-[200px] overflow-hidden">
                  <Image
                    src={sen.displayIcon}
                    alt="VALORANT"
                    fill
                    className="object-contain rounded-full "
                  />
                </div>
              </Link>
            )
          })}
        </div>
        </div>
    </>
  )
}
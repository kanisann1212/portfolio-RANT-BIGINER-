import type { Agent } from "@/types/type"
import type { AProps } from "@/types/type"
import Image from "next/image"
import Link from "next/link"

export const DUE = ({A}:AProps) =>{
  const basepath = "/egents"
  return(
    <>
      <div className="relative bg-[url(/JETT.jpg)] bg-size-[auto_px] mask-b-from-80% bg-no-repeat mask-t-from-70%"
      >
        <h1 className="text-black text-8xl absolute left-235 top-50">DUELIST</h1>
        <div className="grid  h-[500px] "
          style={{ gridTemplateColumns: 'repeat(8,110px)' }}>
          {A.map((sen: Agent) => {
            return (
              <Link
                key={sen.uuid}
                className="text-black"
                href={`${basepath}/${sen.uuid}`}
              >
                <div className="relative h-[500px] overflow-hidden border-4 border-white">
                  <Image
                    src={sen.displayIcon}
                    alt="VALORANT"
                    fill
                    className="object-cover"
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
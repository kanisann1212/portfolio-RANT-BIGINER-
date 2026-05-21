import { MapType } from "@/types/type"
import Image from "next/image"

export const MapSChild = ({MapMicro}:{MapMicro:MapType}) =>{
  return(
    <>
  
      <div
        style={{
          backgroundImage: `url(${MapMicro.stylizedBackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "200px",
        }}
      >
        <h1 className="text-9xl">{MapMicro.displayName}</h1>
        <div className="flex justify-center">
          <div className="relative w-[1000]">
            <Image
              src={MapMicro.displayIcon}
              alt="VALORANT"
              width={500}
              height={500}
              className=" w-full h-auto"
            />
          </div>
        </div>
        <p>{MapMicro.tacticalDescription}</p>
      </div>
    </>
  )
}
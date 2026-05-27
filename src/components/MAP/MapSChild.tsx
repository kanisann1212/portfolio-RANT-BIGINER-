import { MapType } from "@/types/type"
import Image from "next/image"
import { Header } from "../TOP PAGE/Header"
import { MapsPattern } from "../../data/MapPattern"
import { MapsRecomendparts } from "./MapsRecomend"



export const MapSChild = ({ MapMicro }: { MapMicro: MapType }) => {
  const MapNameInfo: string = MapMicro.displayName
  const MapsRecomend = MapsPattern[MapNameInfo].agents
  console.log(MapsRecomend)

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${MapMicro.stylizedBackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
           minHeight: "100vh",
        }}
      >
        <Header Hanten={true} />
        <h1 className="text-9xl">{MapMicro.displayName}</h1>
        <div className="flex  items-center">
          <div className="relative justify-between w-[1000] ">
            <Image
              src={MapMicro.displayIcon}
              alt="VALORANT"
              width={500}
              height={500}
              className=" w-full h-auto"
            />
          </div>
           <MapsRecomendparts MapsRecomend={MapsRecomend} />
        </div>
      </div>

    </>
  )
}
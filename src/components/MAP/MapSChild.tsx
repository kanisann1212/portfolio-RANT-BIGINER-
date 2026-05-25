import { MapType } from "@/types/type"
import Image from "next/image"
import { Header } from "../TOP PAGE/Header"

// typ Mapspattern = {
//   [key:string]:{EgentIcon:string,Egent}
// }

export const MapSChild = ({MapMicro}:{MapMicro:MapType}) =>{
   const MapsPattern  = {
    Ascent:{Windex:8},
    Split:{Windex:31},
    Fracture:{Windex:8},
    Bind:{Windex:1},
    Breeze:{Windex:87},
    Abys:{Windex:7},
    Lotus:{Windex:21},
    Pearl:{Windex:2},
    Sunset:{Windex:21},
    Icebox:{Windex:5},
    Haven:{Windex:5},
    Corrode:{Windex:18},
  }
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
        <Header />
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
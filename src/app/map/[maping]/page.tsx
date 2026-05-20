import { Header } from "@/components/Header"
import type { MapType } from "@/types/type"
import Image from "next/image"

type Prop = {
  params: Promise<{ maping: string }>
}

export default async function Mapp({ params }: Prop) {
  const { maping } = await params
  const res = await fetch(`https://valorant-api.com/v1/maps/${maping}`)
  const json = await res.json()
  const MapMicro: MapType = json.data
  console.log(MapMicro)
 
  return (
    <>
      <Header />
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
          className="pl-auto pr-auto w-full h-auto"
        />
        </div>
        </div>
        <p>{MapMicro.tacticalDescription}</p>
      </div>
    </>
  )
};
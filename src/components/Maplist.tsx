import Image from "next/image"
import type { MapType } from "@/types/type"

export const MapList = async () => {
  const res = await fetch("https://valorant-api.com/v1/maps")
  const json = await res.json()
  console.log(json.data)

  const BattleMap: MapType[] = json.data
    .filter((map: MapType) => map.splash)
    .filter((map: MapType) => map.tacticalDescription)

  return (
    <div className="grid grid-cols-3 gap-2 m-5">
      {BattleMap.map((item) => {
        return (
          <div key={item.uuid} className="relative rounded-3xl" >
            <Image
              src={item.splash}
              alt={item.displayName}
              width={900}
              height={338}
             />
            <h1 className="text-white text-3xl absolute top-4 left-4">{item.displayName}</h1>
            </div>
        )
      })}
    </div>
  )
}
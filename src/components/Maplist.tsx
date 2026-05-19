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
    <div>
      {BattleMap.map((item) => {
        return (
          <div key={item.uuid} className="flex">
            <Image
              src={item.splash}
              alt={item.displayName}
              width={400}
              height={400}
              className="h-auto" />
            <h1 className="text-black">{item.displayName}</h1>
          </div>
        )
      })}
    </div>
  )
}
import type { MapType } from "@/types/type"
import { AnimationMaplist } from "./AnimationMaplist"

type MapJson = {
  data:MapType[]
}

export const MapList = async () => {
  const res = await fetch("https://valorant-api.com/v1/maps",{ next: { revalidate: 86400 } })
  const json :MapJson= await res.json()

  const BattleMap: MapType[] = json.data
    .filter((map: MapType) => map.splash)
    .filter((map: MapType) => map.tacticalDescription)
  return (
    <AnimationMaplist BattleMap={BattleMap} />
  )
}
import { MapSChild } from "@/components/MAP/MapSChild"
import { MapsRecomendparts } from "@/components/MAP/MapsRecomend"
import type { MapType } from "@/types/type"


type Prop = {
  params: Promise<{ maping: string }>
}

type MapTypedata = {
  data:MapType
}

export default async function MapS({ params }: Prop) {
  const { maping } = await params
  const res = await fetch(`https://valorant-api.com/v1/maps/${maping}`)
  const json :MapTypedata = await res.json()
  const MapMicro: MapType = json.data
  return (
    <>
      <MapSChild MapMicro={MapMicro} />
    </>
  )
};
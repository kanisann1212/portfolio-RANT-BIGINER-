import { Header } from "@/components/Header"
import { MapSChild } from "@/components/MapSChild"
import type { MapType } from "@/types/type"


type Prop = {
  params: Promise<{ maping: string }>
}

export default async function MapS({ params }: Prop) {
  const { maping } = await params
  const res = await fetch(`https://valorant-api.com/v1/maps/${maping}`)
  const json = await res.json()
  const MapMicro: MapType = json.data
  return (
    <>
      <Header />
      <MapSChild MapMicro={MapMicro} />
    </>
  )
};
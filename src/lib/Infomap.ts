import type { MapType } from "@/types/type"

export const InfoMap = async(map :string) => {
  const mapRes = await fetch("https://valorant-api.com/v1/maps",{ next: { revalidate: 86400 } })
  const mapJson = await mapRes.json()
  const Map = mapJson.data.find(
    (a:MapType) => a.displayName === map 
  )
  return Map
}
import "server-only"
import { cache } from "react"
import { RANKjson } from "@/types/type";
type RANKdata = {
  data: RANKjson
}



export const RANKICON = cache(async () => {
  const res = await fetch("https://valorant-api.com/v1/competitivetiers")
  const json: RANKdata = await res.json()
  const RANKD = json.data
  const RANK = {
    ...RANKD[4],
    tiers: RANKD[4].tiers.filter((RAN) =>
      RAN.tierName.includes("3") || RAN.tierName.includes("RADIANT")
    ),
  }
  const RANKbadge= RANK.tiers
  return RANKbadge 
})
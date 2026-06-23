import "server-only"
import { auth } from "@/auth"
import { cache } from "react"
import type { Agent } from "@/types/type"

type Egentdata = { data: Agent[] }

export const IconHeader = cache(async () => {
  const session = await auth()
  const res = await fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=ja-JP",{ next: { revalidate: 86400 } })
  const json: Egentdata = await res.json()
  const fav = session?.user.favoriteAgent
  const iconUrl = json.data.find((a) => a.displayName === fav)?.displayIcon ?? ""
  return iconUrl
})
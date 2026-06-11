import { auth } from "@/auth"
import { cache } from "react"
import type { Agent } from "@/types/type"

type Egentdata = {
  data: Agent[]
}
export const IconHeader = cache(async () => {
  const session = await auth()
  const resIcon = await fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=ja-JP")
  const jsonIcon: Egentdata = await resIcon.json()
  const EgentIcoN = session?.user.favoriteAgent
  const EgentIcon1 = jsonIcon.data.find((a) => a.displayName === EgentIcoN)?.displayIcon ?? ""
  return EgentIcon1
})
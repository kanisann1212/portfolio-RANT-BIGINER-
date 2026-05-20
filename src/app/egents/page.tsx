import { Header } from "@/components/Header"
import type { Agent } from "@/types/type"

export default async function Egents() {
  const res = await fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=ja-JP")
  const json = await res.json()
  const Sentinel = json.data
  .filter((EGEN:Agent)=>EGEN.role.displayName === "センチネル")
  console.log(Sentinel)
  return (
    <>
      <Header />
    </>
  )
}
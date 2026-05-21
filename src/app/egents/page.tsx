import { AGENT } from "@/components/AGENT/AGENT"
import { Header } from "@/components/TOP PAGE/Header"
import type { Agent } from "@/types/type"

export default async function Egents() {
  const res = await fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=ja-JP")
  const json = await res.json()
  const Sentinel = json.data
    .filter((EGEN: Agent) => EGEN.role.displayName === "センチネル")
  const Initiater = json.data
    .filter((EGEN: Agent) => EGEN.role.displayName === "イニシエーター")
  const duelist = json.data
    .filter((EGEN: Agent) => EGEN.role.displayName === "デュエリスト")
  const controller = json.data
    .filter((EGEN: Agent) => EGEN.role.displayName === "コントローラー")
  console.log(Sentinel)
  return (
    <>
      <Header />
      <h1 className="text-black text-5xl mt-24">Sentinel</h1>
      <AGENT A= {Sentinel} />
      <h1 className="text-black text-5xl mt-24">Duelist</h1>
      <AGENT A= {duelist} />
       <h1 className="text-black text-5xl mt-24">Initiator</h1>
      <AGENT A= {Initiater} />
       <h1 className="text-black text-5xl mt-24">Controller</h1>
      <AGENT A= {controller} />
      </>
  )
}
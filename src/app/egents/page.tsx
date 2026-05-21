import { CONT } from "@/components/AGENT/CONT"
import { DUE } from "@/components/AGENT/DUE"
import { INI } from "@/components/AGENT/INI"
import { SEN } from "@/components/AGENT/SEN"
import { Header } from "@/components/TOP PAGE/Header"
import { MIBAE } from "@/components/TOP PAGE/MIBAE"
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
      <MIBAE syubun="ヴァロラントはチームプレイが必須です。"hukubun="キャラの理解を深めて勝利をつかみましょう" kime="ーONE FOR ALLー" gazou="/AGENTP.jpg"/>
      <SEN A={Sentinel} />
      <h1 className="text-black text-9xl m-10 text-center"></h1>
      <DUE A={duelist} />
      <h1 className="text-black text-9xl m-10  text-center"></h1>
      <INI A={Initiater} />
      <h1 className="text-black text-9xl m-10  text-center"></h1>
      <CONT A={controller} />
    </>
  )
}
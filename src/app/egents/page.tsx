import { Header } from "@/components/TOP PAGE/Header"
import { MIBAE } from "@/components/TOP PAGE/MIBAE"
import type { Agent } from "@/types/type"
import { Videodata } from "@/lib/Video"
import { KAISETSU } from "@/components/TOP PAGE/KAISETSU"
import { LoginVerify } from "@/lib/LoginVerify"
import { Egentdata } from "@/types/type"
import { AgentUnlock } from "@/components/AGENT/AgentUnlock"


export default async function Egents() {
  const res = await fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=ja-JP")
  const json : Egentdata= await res.json()
const Sentinel = json.data
  .filter((EGEN: Agent) => EGEN.role.displayName === "センチネル")
  .filter((EGEN: Agent) => EGEN.displayName !== "ヴィトー") 
  const Initiater = json.data
    .filter((EGEN: Agent) => EGEN.role.displayName === "イニシエーター")
  const duelist = json.data
    .filter((EGEN: Agent) => EGEN.role.displayName === "デュエリスト")
  const controller = json.data
    .filter((EGEN: Agent) => EGEN.role.displayName === "コントローラー")
  const Video = await Videodata()
  const session = await LoginVerify()
  const isLogin :boolean= !!session?.user
  return (
    <>
      <Header />
      <MIBAE syubun="ヴァロラントはチームプレイが必須です。"hukubun="キャラの理解を深めて勝利をつかみましょう" kime="ーONE FOR ALLー" gazou="https://totnfaipgpkmgjvlcqee.supabase.co/storage/v1/object/public/RANTBIGINNER.IMAGE/AGENTP.jpg"/>
      {Video.length >= 20 && isLogin ?
      (   
        <AgentUnlock Sentinel={Sentinel} Initiater={Initiater} duelist={duelist} controller={controller} />
      ) 
      :      
      <KAISETSU kime="LOCK" syubun="あなたのランクを上げましょう" hukubun="現在機能をロック中です。動画を投稿して機能を開放しましょう" gazou="/RANKUP.png" />
      }
    </>
  )
}
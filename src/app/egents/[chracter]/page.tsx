import { AnimationEgentSkil } from "@/components/animation/AnimationEgentSkil"
import type { AgentTypeInfo } from "@/types/type"

type Egentdata = {
  data: AgentTypeInfo
}

type EgentPromise = {
  params: Promise<{ chracter: string }>
}

export default async function Chracter({ params }: EgentPromise) {
  const basepath = 'https://valorant-api.com/v1/agents'
  const { chracter } = await params
  const res = await fetch(`${basepath}/${chracter}?isPlayableCharacter=true&language=ja-JP`)
  const json: Egentdata = await res.json()
  const Egentinfo = json.data
  return (
    <AnimationEgentSkil Egentinfo={Egentinfo} />
  )
}
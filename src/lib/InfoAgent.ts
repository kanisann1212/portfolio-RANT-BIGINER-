import type { AgentTypeInfo } from "@/types/type"

export const infoAgent = async(agent:string) => {
const agentRes = await fetch( "https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=ja-JP")
const agentJson = await agentRes.json()
const Agent = agentJson.data.find(
  (a:AgentTypeInfo) => a.displayName === agent
)
return Agent
}
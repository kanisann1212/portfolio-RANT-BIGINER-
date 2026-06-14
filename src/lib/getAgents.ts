
import type { Agent } from "@/types/type"

type AgentData = { data: Agent[] }

export const getAgents = async (): Promise<Agent[]> => {
  const res = await fetch(
    "https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=ja-JP"
  )
  const json: AgentData = await res.json()
  return json.data
}


export const getAgentIcon = (agents: Agent[], name: string): string => {
  return agents.find((a) => a.displayName === name)?.displayIcon ?? ""
}
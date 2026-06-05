import type { Agent } from "@/types/type"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Egentdata = {
  data: Agent[]
}
const res = await fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=ja-JP")
const json: Egentdata = await res.json()
export const AgentSelectData = json.data

export const SelectAgent = async () => {
  return (
    <Select>
      <SelectTrigger className="w-[800px]  font-extrabold text-2xl">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Agents</SelectLabel>
          {AgentSelectData.map((agent: Agent) => {
            return (
              <SelectItem
                value={agent.displayName}
                key={agent.uuid}
              >
                {agent.displayName}
              </SelectItem>
            )
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
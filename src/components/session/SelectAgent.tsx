import type { Agent } from "@/types/type"
import { Controller, useWatch } from "react-hook-form"
import Image from "next/image"
import { Control } from "react-hook-form"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { VideoFormData } from "./CreateVideo"

type Egentdata = {
  data: Agent[]
}

type Props = {
  control : Control<VideoFormData>
}
const res = await fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=ja-JP")
const json: Egentdata = await res.json()
export const AgentSelectData = json.data

export const SelectAgent = async ({control}:Props) => {
  const selectedName = useWatch({control,name:"agent"})
  const
  return (
    <Controller 
    name="agent"
    control={control}
    render={({field})=>(
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
    )}
    />

  )
}
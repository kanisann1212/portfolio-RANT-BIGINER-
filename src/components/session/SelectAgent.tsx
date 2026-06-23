"use client"
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
import { useEffect, useState } from "react"

type Egentdata = {
  data: Agent[]
}

type Props = {
  control: Control<VideoFormData>
}

export const SelectAgent = ({ control }: Props) => {
  const [agents, setAgents] = useState<Agent[]>([])
  useEffect(() => {
    const fetchAgent = async () => {
      const res = await fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=ja-JP",{ next: { revalidate: 86400 } })
      const json: Egentdata = await res.json()
      setAgents(json.data)
    }
    fetchAgent()
  }, [])

  const selectedName = useWatch({ control, name: "agent" })
  const selectedAgent = agents.find((a) => a.displayName === selectedName)

  return (
    <div>
      <Controller
        name="agent"
        control={control}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="w-full md:w-[400px] font-extrabold text-lg md:text-2xl">
              <SelectValue placeholder="Select Agent" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Agents</SelectLabel>
                {agents.map((agent: Agent) => (
                  <SelectItem value={agent.displayName} key={agent.uuid}>
                    {agent.displayName}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      />
      {selectedAgent && (
        <Image
          src={selectedAgent.fullPortrait}
          alt={selectedAgent.displayName}
          width={400}
          height={150}
          className="w-[200px] h-auto md:w-[400px]"
        />
      )}
    </div>
  )
}
"use client"
import type { Agent } from "@/types/type"
import { Controller, } from "react-hook-form"
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
import { useEffect, useState } from "react"
import type { SignUpData } from "../ui/CreateIdCard"
type Egentdata = {
  data: Agent[]
}


type Props = {
  control: Control<SignUpData>
}


export const SelectAgentByID = ({ control }: Props) => {
  const [agents, setAgents] = useState<Agent[]>([])
  useEffect(() => {
    const fetchAgent = async() =>{ 
     const res = await fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=ja-JP")
     const json: Egentdata = await res.json()
    setAgents(json.data)
  }
  fetchAgent()
  },[])

  return (
    <div>
      <Controller
        name="favoriteAgent"
        control={control}
        render={({ field }) => (
          <>
          <h1 className="text-2xl">Favorite Agent</h1>
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="w-[320px]  font-extrabold">
              <SelectValue placeholder="Select Agent" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Agents</SelectLabel>
                {agents.map((agent: Agent) => {
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
          </>
        )}
      />
    </div>
  )
}
import type { Agent } from "@/types/type"
import { Controller, useWatch } from "react-hook-form"
import Image from "next/image"
import { Control } from "react-hook-form"
import type { MapType } from "@/types/type"
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


type Props = {
  control: Control<VideoFormData>
}


export const SelectMap = ({ control }: Props) => {
  const [Map, setMap] = useState<MapType[]>([])
  useEffect(() => {
    const fetchAgent = async () => {
      const res = await fetch("https://valorant-api.com/v1/maps")
      const json = await res.json()
      const BattleMap: MapType[] = json.data
        .filter((map: MapType) => map.splash)
        .filter((map: MapType) => map.tacticalDescription)
      setMap(BattleMap)
    }
    fetchAgent()
  }, [])
  const selectedName = useWatch({ control, name: "map" })
  const selectedMap = Map.find(
    (a) => a.displayName === selectedName
  )
  return (
    <div className="relative w-[500px] h-[250px]">
      <Controller
        name="map"
        control={control}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="w-[400px]  font-extrabold text-2xl">
              <SelectValue placeholder="Select Map" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Agents</SelectLabel>
                {Map.map((Map: MapType) => {
                  return (
                    <SelectItem
                      value={Map.displayName}
                      key={Map.uuid}
                    >
                      {Map.displayName}
                    </SelectItem>
                  )
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      />
      {selectedMap && (
        <Image
          src={selectedMap?.splash}
          alt={selectedMap?.displayName}
          fill
          className="rounded-3xl mt-20"
        />
      )}
    </div>
  )
}
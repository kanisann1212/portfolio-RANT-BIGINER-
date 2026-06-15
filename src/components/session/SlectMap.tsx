import { Controller, useWatch } from "react-hook-form"
import Image from "next/image"
import { Control } from "react-hook-form"
import type { MapType } from "@/types/type"
import type { MapTypedata } from "@/types/type"
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
  const [maps, setMap] = useState<MapType[]>([])
  useEffect(() => {
    const fetchMap = async () => {
      const res = await fetch("https://valorant-api.com/v1/maps")
      const json: MapTypedata = await res.json()
      const BattleMap: MapType[] = json.data
        .filter((map: MapType) => map.splash)
        .filter((map: MapType) => map.tacticalDescription)
      setMap(BattleMap)
    }
    fetchMap()
  }, [])

  const selectedName = useWatch({ control, name: "map" })
  const selectedMap = maps.find((a) => a.displayName === selectedName)

  return (
    <div className="relative w-full md:w-[500px] h-[150px] md:h-[250px]">
      <Controller
        name="map"
        control={control}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="w-full md:w-[400px] font-extrabold text-lg md:text-2xl">
              <SelectValue placeholder="Select Map" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Maps</SelectLabel>
                {maps.map((Map: MapType) => (
                  <SelectItem value={Map.displayName} key={Map.uuid}>
                    {Map.displayName}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      />
      {selectedMap && (
        <Image
          src={selectedMap.splash}
          alt={selectedMap.displayName}
          fill
          className="rounded-3xl mt-14 md:mt-20 object-cover"
        />
      )}
    </div>
  )
}
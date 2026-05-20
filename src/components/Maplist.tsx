import type { MapType } from "@/types/type"
import Link from "next/link"

export const MapList = async () => {
  const res = await fetch("https://valorant-api.com/v1/maps")
  const json = await res.json()
  const BattleMap: MapType[] = json.data
    .filter((map: MapType) => map.splash)
    .filter((map: MapType) => map.tacticalDescription)
  const basepath = "/map"

  const SpanStyles: string[] = [
    "row-span-2 col-span-1",
    "col-span-2",
    "col-span-2",
    "col-span-2",
    "row-span-3 col-span-1",
    "col-span-2",
    "col-span-2",
    "col-span-1 row-span-2",
    "col-span-2",
    "col-span-2",
    "row-span-1",
    "col-span-2",
  ]

  return (
    <div className="grid grid-cols-3 gap-8 m-10">
      {BattleMap.map((item, index) => {
        return (
            <Link
              href={`${basepath}/${item.uuid}`}
              key={item.uuid}
              className={`relative rounded-3xl ${SpanStyles[index % SpanStyles.length]} `}
              style={{
                backgroundImage: `url(${item.splash})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "200px",
              }}
            >
              <h1 className="text-white text-3xl absolute top-4 left-4">{item.displayName}</h1>
          </Link>
        )
      })}
    </div>
  )
}
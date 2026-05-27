import { Header } from "@/components/TOP PAGE/Header"
import Image from "next/image"
import { Dela_Gothic_One } from "next/font/google"
import { EgentSkils } from "@/components/AGENT/EGENTskils"
import type { AgentTypeInfo } from "@/types/type"
import { AgentMapPattern } from "@/data/EgentMapPattern"
import Link from "next/link"

type Egentdata = {
  data: AgentTypeInfo
}

type EgentPromise = {
  params: Promise<{ chracter: string }>
}

const valorantEgent = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"]
})

export default async function Chracter({ params }: EgentPromise) {
  const basepath = 'https://valorant-api.com/v1/agents'
  const basepatMap = "/map"
  const { chracter } = await params
  const res = await fetch(`${basepath}/${chracter}?isPlayableCharacter=true&language=ja-JP`)
  const json: Egentdata = await res.json()
  const Egentinfo = json.data
  const MapAgentInfo: string = Egentinfo.displayName
  const MapOfAgent = AgentMapPattern[MapAgentInfo].maps
  console.log(MapOfAgent.map(item => item.splash))

  console.log(MapOfAgent)
  return (
    <div className="-z-0 relative bg-gradient-to-b from-blue-900 via-red-700 to-gray-800 min-h-screen">
      <div className="relative z-10">
        <Header />
      </div>
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${Egentinfo.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3
        }}
      />


      <div className="relative z-10 grid grid-cols-[600px_1fr] w-full mt-10">

        <div className="relative w-[600px] h-screen sticky top-0">
          <Image
            src={Egentinfo.fullPortrait}
            alt="VALORANT"
            fill
            className="object-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${Egentinfo.role.displayIcon})`,
              backgroundSize: "250px",
              backgroundPosition: "top",
            }}
          />
        </div>


        <div className="flex flex-col gap-10 pt-20 pb-20 items-center">
          <div>
            <h1 className={`${valorantEgent.className} font-bold text-9xl text-center text-white`}>
              {Egentinfo.displayName}
            </h1>
            <p className="text-white text-2xl p-5 font-bold">{Egentinfo.description}</p>
          </div>
          <EgentSkils description={Egentinfo.abilities[0].description} Name={Egentinfo.abilities[0].displayName} Icon={Egentinfo.abilities[0].displayIcon} />
          <EgentSkils description={Egentinfo.abilities[1].description} Name={Egentinfo.abilities[1].displayName} Icon={Egentinfo.abilities[1].displayIcon} />
          <EgentSkils description={Egentinfo.abilities[2].description} Name={Egentinfo.abilities[2].displayName} Icon={Egentinfo.abilities[2].displayIcon} />
          <EgentSkils description={Egentinfo.abilities[3].description} Name={Egentinfo.abilities[3].displayName} Icon={Egentinfo.abilities[3].displayIcon} />
          <h1 className={`${valorantEgent.className} font-bold text-5xl text-center text-white m-10`}>主要マップ</h1>
          {MapOfAgent.map((item) => {
            return (
              <Link
                href={`${basepatMap}/${item.uuid}`}
                key={item.uuid}
                className="relative rounded-3xl w-[800px] h-[200px] block overflow-hidden"
              >
                <Image
                  src={item.splash}
                  alt={item.displayName}
                  width={800}
                  height={200}
                  className="object-cover rounded-3xl"
                />
                <h1 className="text-white text-3xl absolute top-4 left-4">{item.displayName}</h1>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
import { AnimationEgentSkil } from "@/components/AGENT/AgentInfo/AnimationEgentSkil"
import { Header } from "@/components/TOP PAGE/Header"
import { Videodata } from "@/lib/Video"
import { DBsumnail } from "@/components/session/DBsumnail"
import { KAISETSU } from "@/components/TOP PAGE/KAISETSU"
import { EgentdataInfo } from "@/types/type"
import { EgentPromise } from "@/types/type"


export default async function Chracter({ params }: EgentPromise) {
  const basepath = 'https://valorant-api.com/v1/agents'
  const { chracter } = await params
  const res = await fetch(`${basepath}/${chracter}?isPlayableCharacter=true&language=ja-JP`)
  const json: EgentdataInfo = await res.json()
  const Egentinfo = json.data
  const Video = await Videodata()
  return (
    <div className="z-0 relative bg-gradient-to-b from-blue-900 via-red-700 to-gray-800 min-h-screen">
      <div className="relative z-10">
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
      <Header />
      <AnimationEgentSkil Egentinfo={Egentinfo} />
      {Video.length > 0 ? (<div className="grid lg:grid-cols-5 gap-2 grid-cols-2 mt-30 ml-2 mr-2">
        {Video.map((v) => {
          return (
            <div className=" w-[500px] h-[350px]" key={v.id}>
              <div className="flex flex-col items-center justify-ceter gap-2 ">
                <DBsumnail url={v.url}  title={v.title}  />
                <div className="flex items-center gap-4 w-full">
                  <div className="border-t border-black flex-1" />
                </div>
              </div>
            </div>
          )
        })}
      </div>) : <KAISETSU kime="LOCK" syubun="あなたのランクを上げましょう" hukubun="現在機能をロック中です。動画を投稿して機能を開放しましょう" gazou="/RANKUP.png" />}
    </div>
  )
}
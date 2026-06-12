import { MapSChild } from "@/components/MAP/MapSChild"
import type { MapType } from "@/types/type"
import { Header } from "@/components/TOP PAGE/Header"
import { Videodata } from "@/lib/Video"
import { DBsumnail } from "@/components/session/DBsumnail"
import { KAISETSU } from "@/components/TOP PAGE/KAISETSU"
import { LoginVerify } from "@/lib/LoginVerify"


type Prop = {
  params: Promise<{ maping: string }>
}

type MapTypedata = {
  data: MapType
}

export default async function MapS({ params }: Prop) {
  const { maping } = await params
  const res = await fetch(`https://valorant-api.com/v1/maps/${maping}`)
  const json: MapTypedata = await res.json()
  const MapMicro: MapType = json.data
  const Video = await Videodata()
  const session = await LoginVerify()
  const isLogin = !!session?.user
  return (
    <div
      style={{
        backgroundImage: `url(${MapMicro.stylizedBackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        minWidth: "1400px",
      }}
    >
      <Header />
      <MapSChild MapMicro={MapMicro} Vlength={Video.length} isLogin={isLogin}/>
      {Video.length > 20 && isLogin ? (<div className="grid lg:grid-cols-5 gap-2 grid-cols-2 mt-30 ml-2 mr-2">
        {Video.map((v) => {
          return (
            <div className=" w-[500px] h-[350px]" key={v.id}>
              <div className="flex flex-col items-center justify-ceter gap-2 ">
                <DBsumnail url={v.url} EgentIcoN={v.agent} title={v.title} urlid={v.id} />
                <div className="flex items-center gap-4 w-full">
                  <div className="border-t border-black flex-1" />
                </div>
              </div>
            </div>
          )
        })}
      </div>) : <KAISETSU kime="LOCK" syubun="あなたのランクを上げましょう" hukubun="現在機能をロック中です。動画を投稿して機能を開放しましょう" gazou="/RANK UP!!.png" />}
    </div>
  )
};
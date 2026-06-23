import { MapSChild } from "@/components/MAP/MapSChild"
import type { MapType } from "@/types/type"
import { Header } from "@/components/TOP PAGE/Header"
import { Videodata } from "@/lib/Video"
import { DBsumnail } from "@/components/session/DBsumnail"
import { KAISETSU } from "@/components/TOP PAGE/KAISETSU"
import { LoginVerify } from "@/lib/LoginVerify"
import { MapInfoProp } from "@/types/type"
import { MapTypeD } from "@/types/type"

export default async function MapS({ params }: MapInfoProp) {
  const { maping } = await params
  const res = await fetch(`https://valorant-api.com/v1/maps/${maping}`,{ next: { revalidate: 86400 } })
  const json: MapTypeD = await res.json()
  const MapMicro: MapType = json.data
  const Video = await Videodata()
  const session = await LoginVerify()
  const isLogin: boolean = !!session?.user

  return (
    <div
      style={{
        backgroundImage: `url(${MapMicro.stylizedBackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
      className="w-full overflow-x-hidden"
    >
      <Header />
      <MapSChild MapMicro={MapMicro} Vlength={Video.length} isLogin={isLogin} />

      {Video.length > 20 && isLogin ? (
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 mt-10 md:mt-30 mx-2">
          {Video.map((v) => (
            <div className="w-full md:w-[500px] h-[200px] md:h-[350px]" key={v.id}>
              <div className="flex flex-col items-center justify-center gap-2">
                <DBsumnail url={v.url}  title={v.title} />
                <div className="flex items-center gap-4 w-full">
                  <div className="border-t border-black flex-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <KAISETSU
          kime="LOCK"
          syubun="あなたのランクを上げましょう"
          hukubun="現在機能をロック中です。動画を投稿して機能を開放しましょう"
          gazou="/RANKUP.png"
        />
      )}
    </div>
  )
}
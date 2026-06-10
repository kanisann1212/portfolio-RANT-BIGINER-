import { auth } from "../../auth"
import Image from "next/image"
import { Header } from "@/components/TOP PAGE/Header";
import { CreateVideo } from "@/components/session/CreateVideo";
import { prisma } from "@/lib/prisma"
import { RANKjson } from "@/types/type";
import { KAISETSU } from "@/components/TOP PAGE/KAISETSU";
import { DBsumnail } from "@/components/session/DBsumnail";
type RANKdata = {
  data: RANKjson
}

const getRank = (count: number) => {
  if (count >= 100) return 27
  if (count >= 90) return 26
  if (count >= 80) return 23
  if (count >= 60) return 20
  if (count >= 40) return 17
  if (count >= 30) return 14
  if (count >= 15) return 11
  if (count >= 10) return 8
  return 5
}


export default async function Mypage() {
  const session = await auth()
  const res = await fetch("https://valorant-api.com/v1/competitivetiers")
  const json: RANKdata = await res.json()
  const RANKD = json.data
  const RANK = {
    ...RANKD[4],
    tiers: RANKD[4].tiers.filter((RAN) =>
      RAN.tierName.includes("3") || RAN.tierName.includes("RADIANT")
    ),
  }

  const Video = await prisma.video.findMany({
    where: { userId: session?.user.id },
  })
  const VideoRank: number = Video.length
  const VRank: number = getRank(VideoRank)
  const VTier = RANK.tiers.find((t) => t.tier === VRank)
  console.log(Video)



  return (
    <div>
      <Header Hanten />
      <div
        style={{ backgroundColor: `#${VTier?.color}` }}
        className="flex justify-between  items-center p-20 mask-b-from-90% mask-t-from-90%">
        <div className="flex items-center gap-5">
          <Image
            src={session?.user.image}
            alt="VALORANT"
            width={150}
            height={150}
            className="object-cover rounded-full "
          />
          <h1 className="text-8xl font-extrabold">{session?.user.name}</h1>
        </div>
        <div className="flex ">
          {VTier && (
            <Image
              src={VTier.largeIcon}
              alt={VTier.tierName}
              width={150}
              key={VTier.divisionName}
              height={150}
            />
          )}
          <h1 className="text-9xl font-extrabold text-white ">{VTier?.divisionName}</h1>
        </div>
      </div>
      <KAISETSU kime="TAKE YOUR VIDEO" syubun="あなたのランクを上げましょう" hukubun="マイページでは動画の投稿・管理が可能です。また動画投稿数に応じてあなたの表示ランクが上がります。たくさんあげて報酬をゲットしましょう" gazou="/RANK UP!!.png" />
      <CreateVideo />

      {Video ? (
        <div className="grid lg:grid-cols-5 grid-cols-1 md:grid-cols-2 lg:gap-1">
        {Video.map((v) => {
          return (
            <div 
            className=" w-[490px] h-[300px]"
            key={v.id}>
              <div className="flex flex-col items-center justify-ceter gap-2 ">
                <DBsumnail url={v.url} Agentname={v.agent} title={v.title}/>
                  <div className="border-t border-black flex-1" />
              </div>
            </div>
          )
        })}
      </div>) : (<h1 className="text-8xl font-extrabold text-center">動画がありません</h1>)}
    </div>

  )
}
import { auth } from "../../auth"
import Image from "next/image"
import { Header } from "@/components/TOP PAGE/Header";
import { CreateVideo } from "@/components/session/CreateVideo";
import { KAISETSU } from "@/components/TOP PAGE/KAISETSU";
import { DBsumnail } from "@/components/session/DBsumnail";
import { RankHeader } from "@/lib/RANK";
import { IconHeader } from "@/lib/getIconHeader";
import { Gauge } from "@/components/GUN LAYOUT/gauge";
import { MypageCarousel } from "@/components/ui/Mypagecarousel";
import { Videodata } from "@/lib/Video";


export default async function Mypage() {
  const session = await auth()
  const EgentIcon1 = await IconHeader()
  const VTier = await RankHeader()
  const Video = await Videodata()

  return (
    <div>
      <Header />
      <div
        className="flex  justify-between bg-[url(https://totnfaipgpkmgjvlcqee.supabase.co/storage/v1/object/public/RANTBIGINNER.IMAGE/Reaver.jpg)] bg-left items-center p-20 mask-b-from-90% mask-t-from-90% bg-cover  h-[300px]">
        <div className="flex items-center gap-5 ">
          <Image
            src={(session?.user.favoriteAgent ? EgentIcon1 : session?.user.image) ?? ""}
            alt="VALORANT"
            width={150}
            height={150}
            className="object-cover rounded-full "
          />
          <h1
            className="text-9xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]  font-extrabold"
            style={{
              WebkitTextStroke: "4px rgba(0,0,0,0.85)",
              paintOrder: "stroke fill",
            }}
          >{session?.user.name}</h1>
        </div>
        <div className="flex ">
          {VTier && (
            <Image
              src={VTier.largeIcon}
              alt={VTier.tierName}
              width={150}
              height={150}
            />
          )}
          <h1 className="text-9xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]  font-extrabold"
            style={{
              WebkitTextStroke: "4px rgba(0,0,0,0.85)",
              paintOrder: "stroke fill",
            }}>{VTier?.divisionName}</h1>
        </div>
      </div>
      <KAISETSU kime="TAKE YOUR VIDEO" syubun="あなたのランクを上げましょう" hukubun="マイページでは動画の投稿・管理が可能です。また動画投稿数に応じてあなたの表示ランクが上がります。たくさんあげて報酬をゲットしましょう" gazou="/RANKUP.png" />
      <MypageCarousel /> 
      <div className="flex ml-5">
        <CreateVideo />
        <Gauge value={Video.length} max={100} label="YOUR VIDEO" />
      </div>
      {Video.length > 0 ? (<div className="grid lg:grid-cols-5 gap-2 grid-cols-2">
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
      </div>) : (<h1 className="text-8xl font-extrabold text-center text-white">動画がありません</h1>)}
    </div>
  )
}
import { Header } from "@/components/TOP PAGE/Header"
import { DeleteBudgeMenu } from "@/components/ui/DelteBudgeMenu"
import { IconHeader } from "@/lib/getIconHeader"
import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"
import { VideoPlayer } from "@/components/ui/VideoPlayer"

type Props ={
  params :Promise<{Vinfo:string}>
}

export default async function MypageVideo({params}:Props) {
  const { Vinfo } = await params
  const videoID =await prisma.video.findUnique({where:{ id:Vinfo }})
  const Icon = await IconHeader()
    if (!videoID) {
    notFound()
  }
    const getYoutubeId = (url: string) => {
    const match = url.match(/[?&]v=([^&]+)/)
    if (match) return match[1]
    const short = url.match(/youtu\.be\/([^?]+)/)
    if (short) return short[1]
    return null
  }
  const videoURL = getYoutubeId(videoID.url)
  console.log(videoURL)
  return (
    <div>
      <Header />
      <div className="flex justify-between items-center">       
        <h1 className="text-8xl text-center font-extrabold">{videoID.title}</h1>
        <DeleteBudgeMenu Vinfo = {Vinfo}  Icon={Icon} />
      </div>
      <div>
        <VideoPlayer  src={videoURL}/>
        {/* ↑これがサーバーコンポーネントなのにstateつかってんじゃねえ！ってエラー出てるのでこの会社からしてね♡ */}
        </div>
    </div>
  )
}
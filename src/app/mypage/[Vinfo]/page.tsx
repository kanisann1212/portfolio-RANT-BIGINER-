import { Header } from "@/components/TOP PAGE/Header"
import { DeleteBudgeMenu } from "@/components/ui/DelteBudgeMenu"
import { IconHeader } from "@/lib/getIconHeader"
import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"
import { VideoPlayer } from "@/components/ui/VideoPlayer"
import { infoAgent } from "@/lib/InfoAgent"
import { InfoMap } from "@/lib/Infomap"
import { MapAgentMypage } from "@/components/session/MapAgentMypage"
import { auth } from "@/auth"
import { LikeButton } from "@/components/ui/Likebutton"
import type { AgentTypeInfo } from "@/types/type"
import type { MapType } from "@/types/type"
import { MypageInfoProps } from "@/types/type"

export default async function MypageVideo({ params }: MypageInfoProps) {
  const { Vinfo } = await params
  const videoID = await prisma.video.findUnique({ where: { id: Vinfo } })
  if (!videoID) {
    notFound()
  }
  const session = await auth()
  const count = await prisma.like.count({
    where: { videoId: videoID.id },
  })
  let myLike = null
  if (session?.user) {
    myLike = await prisma.like.findUnique({
      where: {
        userId_videoId: { userId: session.user.id, videoId: videoID.id },
      },
    })
  }

  const Icon = await IconHeader()
  const getYoutubeId = (url: string) => {
    const match = url.match(/[?&]v=([^&]+)/)
    if (match) return match[1]
    const short = url.match(/youtu\.be\/([^?]+)/)
    if (short) return short[1]
    return null
  }
  const videoURL = getYoutubeId(videoID.url)
  const Agent: AgentTypeInfo = await infoAgent(videoID.agent)
  const Map: MapType = await InfoMap(videoID.map)

  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="flex flex-col gap-6 md:gap-20 px-4 md:px-10">

        {/* タイトル + ボタン */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6 md:mt-20 gap-4">
          <h1 className="text-2xl md:text-8xl font-extrabold">{videoID.title}</h1>
          <div className="flex items-center gap-4">
            <DeleteBudgeMenu Vinfo={Vinfo} Icon={Icon} />
            <LikeButton
              videoId={videoID.id}
              initialLiked={!!myLike}
              initialCount={count}
            />
          </div>
        </div>

        {/* 動画プレイヤー */}
        <div className="w-full aspect-video max-w-[1400px] mx-auto">
          <VideoPlayer src={videoURL} />
        </div>

        {/* エージェント + マップ情報 */}
        <div className="w-full max-w-[1400px] mx-auto overflow-hidden">
          <MapAgentMypage Agent={Agent} Map={Map} />
        </div>
      </div>
    </div>
  )
}
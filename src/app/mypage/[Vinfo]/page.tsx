import { Header } from "@/components/TOP PAGE/Header"
import { DeleteBudgeMenu } from "@/components/ui/DelteBudgeMenu"
import { IconHeader } from "@/lib/getIconHeader"
import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"
import { VideoPlayer } from "@/components/ui/VideoPlayer"
import { infoAgent } from "@/lib/InfoAgent"
import { InfoMap } from "@/lib/Infomap"
import { MapAgentMypage } from "@/components/animation/MapAgentMypage"
import { auth } from "@/auth"
import { LikeButton } from "@/components/ui/Likebutton"

type Props = {
  params: Promise<{ Vinfo: string }>
}

export default async function MypageVideo({ params }: Props) {
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
  const Agent = await infoAgent(videoID.agent)
  const Map = await InfoMap(videoID.map)

  console.log(Map)
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-between gap-20">
        <div className="flex justify-between items-center mr-20 mt-20">
          <h1 className="text-8xl text-center font-extrabold">{videoID.title}</h1>
          <div>
          <DeleteBudgeMenu Vinfo={Vinfo} Icon={Icon} />
          <LikeButton
            videoId={videoID.id}
            initialLiked={!!myLike}

            initialCount={count}
          />
          </div>
        </div>
        <div className="flex items-center mx-auto w-[1400px] h-[700px]">
          <VideoPlayer src={videoURL} />
        </div>
        <div className="flex items-center mx-auto">
          <MapAgentMypage Agent={Agent} Map={Map} />
        </div>
      </div>
    </div>
  )
}
import { auth } from "../../auth"
import Image from "next/image"
import { Header } from "@/components/TOP PAGE/Header"
import { CreateVideo } from "@/components/session/CreateVideo"
import { KAISETSU } from "@/components/TOP PAGE/KAISETSU"
import { RankHeader } from "@/lib/RANK"
import { IconHeader } from "@/lib/getIconHeader"
import { Gauge } from "@/components/GUN LAYOUT/gauge"
import { MypageCarousel } from "@/components/ui/Mypagecarousel"
import { Videodata } from "@/lib/Video"
import { prisma } from "@/lib/prisma"
import { VideoGridList } from "@/components/session/VideoGridList"
import { SectionTitle } from "@/components/session/SectionTitle"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { getAgents, getAgentIcon } from "@/lib/getAgents"

export default async function Mypage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const session = await auth()
  const EgentIcon1 = await IconHeader()
  const VTier = await RankHeader()
  const Video = await Videodata()
  const { page } = await searchParams
  const currentPage = Number(page) || 1
  const perPage = 12

  const totalCount = await prisma.video.count()
  const totalPages = Math.ceil(totalCount / perPage)

  const videos = await prisma.video.findMany({
    orderBy: { createdAt: "desc" },
    include: { user: true },
    take: perPage,
    skip: (currentPage - 1) * perPage,
  })

  const likedVideos = await prisma.like.findMany({
    where: { userId: session?.user.id },
    include: { video: true },
    orderBy: { createdAt: "desc" },
  })

  const agents = await getAgents()

  const allVideoItems = videos.map((v) => ({
    id: v.id,
    url: v.url,
    title: v.title,
    agentIcon: getAgentIcon(agents, v.agent),
    userName: v.user.name ?? "名無し",
  }))

  const likedVideoItems = likedVideos.map((like) => ({
    id: like.video.id,
    url: like.video.url,
    title: like.video.title,
    agentIcon: getAgentIcon(agents, like.video.agent),
  }))

  const myVideoItems = Video.map((v) => ({
    id: v.id,
    url: v.url,
    title: v.title,
    agentIcon: getAgentIcon(agents, v.agent),
  }))

  return (
    <div className="overflow-x-hidden">
      <Header />


      <div className="flex flex-col md:flex-row justify-between bg-[url(https://totnfaipgpkmgjvlcqee.supabase.co/storage/v1/object/public/RANTBIGINNER.IMAGE/Reaver.jpg)] bg-left items-center p-6 md:p-20 mask-b-from-90% mask-t-from-90% bg-cover min-h-[200px] md:h-[300px] gap-4">
        <div className="flex items-center gap-3 md:gap-5">
          <Image
            src={(session?.user.favoriteAgent ? EgentIcon1 : session?.user.image) ?? ""}
            alt="VALORANT"
            width={150}
            height={150}
            className="object-cover rounded-full w-[80px] h-[80px] md:w-[150px] md:h-[150px]"
          />
          <h1
            className="text-3xl md:text-9xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] font-extrabold"
            style={{ WebkitTextStroke: "4px rgba(0,0,0,0.85)", paintOrder: "stroke fill" }}
          >
            {session?.user.name}
          </h1>
        </div>
        <div className="flex items-center">
          {VTier && (
            <Image
              src={VTier.largeIcon}
              alt={VTier.tierName}
              width={150}
              height={150}
              className="w-[60px] h-[60px] md:w-[150px] md:h-[150px]"
            />
          )}
          <h1
            className="text-2xl md:text-9xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] font-extrabold"
            style={{ WebkitTextStroke: "4px rgba(0,0,0,0.85)", paintOrder: "stroke fill" }}
          >
            {VTier?.divisionName}
          </h1>
        </div>
      </div>

      <KAISETSU
        kime="TAKE YOUR VIDEO"
        syubun="あなたのランクを上げましょう"
        hukubun="マイページでは動画の投稿・管理が可能です。また動画投稿数に応じてあなたの表示ランクが上がります。たくさんあげて報酬をゲットしましょう"
        gazou="/RANKUP.png"
      />

      <MypageCarousel />

  
      <div className="flex flex-col md:flex-row ml-2 md:ml-5 gap-4">
        <CreateVideo />
        <Gauge value={Video.length} max={100} label="YOUR VIDEO" />
      </div>

  
      <SectionTitle title="みんなの動画" />
      <VideoGridList videos={allVideoItems} showUserName />

      <Pagination className="my-10">
        <PaginationContent>
          {currentPage > 1 && (
            <PaginationItem>
              <PaginationPrevious href={`/mypage?page=${currentPage - 1}`} />
            </PaginationItem>
          )}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <PaginationItem key={p}>
              <PaginationLink href={`/mypage?page=${p}`} isActive={p === currentPage}>
                {p}
              </PaginationLink>
            </PaginationItem>
          ))}
          {currentPage < totalPages && (
            <PaginationItem>
              <PaginationNext href={`/mypage?page=${currentPage + 1}`} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>

 
      <SectionTitle title="いいねした動画" />
      <VideoGridList
        videos={likedVideoItems}
        emptyMessage="まだいいねした動画がありません"
      />


      <SectionTitle title="あなたの動画" />
      <VideoGridList videos={myVideoItems} />
    </div>
  )
}
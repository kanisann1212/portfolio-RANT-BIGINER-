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
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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

  return (
    <div>
      <Header />
      <div className="flex justify-between bg-[url(https://totnfaipgpkmgjvlcqee.supabase.co/storage/v1/object/public/RANTBIGINNER.IMAGE/Reaver.jpg)] bg-left items-center p-20 mask-b-from-90% mask-t-from-90% bg-cover h-[300px]">
        <div className="flex items-center gap-5">
          <Image
            src={(session?.user.favoriteAgent ? EgentIcon1 : session?.user.image) ?? ""}
            alt="VALORANT"
            width={150}
            height={150}
            className="object-cover rounded-full"
          />
          <h1
            className="text-9xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] font-extrabold"
            style={{ WebkitTextStroke: "4px rgba(0,0,0,0.85)", paintOrder: "stroke fill" }}
          >{session?.user.name}</h1>
        </div>
        <div className="flex">
          {VTier && (
            <Image src={VTier.largeIcon} alt={VTier.tierName} width={150} height={150} />
          )}
          <h1
            className="text-9xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] font-extrabold"
            style={{ WebkitTextStroke: "4px rgba(0,0,0,0.85)", paintOrder: "stroke fill" }}
          >{VTier?.divisionName}</h1>
        </div>
      </div>

      <KAISETSU
        kime="TAKE YOUR VIDEO"
        syubun="あなたのランクを上げましょう"
        hukubun="マイページでは動画の投稿・管理が可能です。また動画投稿数に応じてあなたの表示ランクが上がります。たくさんあげて報酬をゲットしましょう"
        gazou="/RANKUP.png"
      />

      <MypageCarousel />

      <div className="flex ml-5">
        <CreateVideo />
        <Gauge value={Video.length} max={100} label="YOUR VIDEO" />
      </div>

      <div className="flex items-center gap-4 my-10">
        <div className="border-t-2 borde-white flex-1" />
        <h2 className="text-5xl font-extrabold whitespace-nowrap">みんなの動画</h2>
        <div className="border-t-2 borde-white flex-1" />
      </div>
      <div className="grid lg:grid-cols-5 gap-2 grid-cols-2">
        {videos.map((v) => (
          <Link key={v.id} href={`/gallery/${v.id}`}>
            <div className="w-[500px] h-[350px]">
              <div className="flex flex-col items-center justify-center gap-2">
                <DBsumnail url={v.url} EgentIcoN={v.agent} title={v.title} urlid={v.id} />
                <p className="text-center font-bold">{v.user.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Pagination className="my-10">
        <PaginationContent>
          {currentPage > 1 && (
            <PaginationItem>
              <PaginationPrevious href={`/mypage?page=${currentPage - 1}`} />
            </PaginationItem>
          )}

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <PaginationItem key={p}>
              <PaginationLink
                href={`/mypage?page=${p}`}
                isActive={p === currentPage}
              >
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


      <div className="flex items-center gap-4 my-10">
        <div className="border-t-2 borde-white flex-1" />
        <h2 className="text-5xl font-extrabold whitespace-nowrap">いいねした動画</h2>
        <div className="border-t-2 borde-white flex-1" />
      </div>
      {likedVideos.length > 0 ? (
        <div className="grid lg:grid-cols-5 gap-2 grid-cols-2">
          {likedVideos.map((like) => (
            <Link key={like.id} href={`/gallery/${like.video.id}`}>
              <div className="w-[500px] h-[350px]">
                <div className="flex flex-col items-center justify-center gap-2">
                  <DBsumnail
                    url={like.video.url}
                    EgentIcoN={like.video.agent}
                    title={like.video.title}
                    urlid={like.video.id}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <h1 className="text-4xl font-bold text-center text-gray-400 my-10">
          まだいいねした動画がありません
        </h1>
      )}


      <div className="flex items-center gap-4 my-10 ">
        <div className="border-t-2 borde-white flex-1" />
        <h2 className="text-5xl font-extrabold whitespace-nowrap">あなたの動画</h2>
        <div className="border-t-2 borde-white flex-1" />
      </div>
      {Video.length > 0 ? (
        <div className="grid lg:grid-cols-5 gap-2 grid-cols-2">
          {Video.map((v) => (
            <div className="w-[500px] h-[350px]" key={v.id}>
              <div className="flex flex-col items-center justify-center gap-2">
                <DBsumnail url={v.url} EgentIcoN={v.agent} title={v.title} urlid={v.id} />
                <div className="flex items-center gap-4 w-full">
                  <div className="border-t border-black flex-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="text-8xl font-extrabold text-center text-white">動画がありません</h1>
      )}

    </div>
  )
}
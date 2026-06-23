import { RANKjson } from "@/types/type";
import { prisma } from "@/lib/prisma";
import { cache } from "react"
import { auth } from "@/auth";
const getRank = (count: number) => {
  if (count >= 100) return 27
  if (count >= 90) return 26
  if (count >= 60) return 23
  if (count >= 40) return 20
  if (count >= 20) return 17
  if (count >= 15) return 14
  if (count >= 10) return 11
  if (count >= 5) return 8
  return 5
}

type RANKdata = {
  data: RANKjson
}

export const RankHeader = cache(async () => {
  const session = await auth()
  const res = await fetch("https://valorant-api.com/v1/competitivetiers",{ next: { revalidate: 86400 } })
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
  return VTier
})

// 非同期なので呼ぶ側でawaitつけよう。呼び出すとオブジェクトが返ってくる。
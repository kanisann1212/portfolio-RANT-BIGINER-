import Image from "next/image"
import type { Agent } from "@/types/type"
const getYoutubeId = (url: string) => {
  const match = url.match(/[?&]v=([^&]+)/)
  if (match) return match[1]

  const short = url.match(/youtu\.be\/([^?]+)/)
  if (short) return short[1]
  return null
}

type Props = {
  url: string,
  EgentIcoN:string
}

type Egentdata = {
  data: Agent[]
}
export const DBsumnail = async({ url,EgentIcoN }: Props) => {
  const videoId = getYoutubeId(url)
  const res = await fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=ja-JP")
  const json: Egentdata = await res.json()
  const EgentIcon2 =json.data.find((a) => a.displayName === EgentIcoN)?.displayIcon ?? ""
  return (
    <div className="relative w-full h-[300px] rounded-2xl">
      {videoId ? (
        <Image
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt="サムネイル"
          fill
          className="object-contain rounded-2xl"
        />
      ) : (
        <Image
          src="/画像を取得できませんでした.png"
          alt="サムネイル"
          fill
          className="object-contain rounded-3xl"
        />
      )}
    </div>
  )
}
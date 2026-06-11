import Image from "next/image"
import type { Agent } from "@/types/type"
import Link from "next/link"
const getYoutubeId = (url: string) => {
  const match = url.match(/[?&]v=([^&]+)/)
  if (match) return match[1]

  const short = url.match(/youtu\.be\/([^?]+)/)
  if (short) return short[1]
  return null
}

type Props = {
  url: string,
  EgentIcoN: string,
  title: string
  urlid:string
}

type Egentdata = {
  data: Agent[]
}
export const DBsumnail = async ({ url, EgentIcoN, title,urlid }: Props) => {
  const basepath = "/mypage"
  const videoId = getYoutubeId(url)
  const res = await fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=ja-JP")
  const json: Egentdata = await res.json()
  const EgentIcon = json.data.find((a) => a.displayName === EgentIcoN)?.displayIcon ?? ""
  return (
    <div className="relative w-full h-[250px] rounded-2xl">
      {videoId ? (
        <Link href={`${basepath}/${urlid}`}>
          <Image
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="サムネイル"
            fill
            className="object-contain rounded-2xl"
          />
          <div className="absolute bottom-2 left-8 rounded-3xl backdrop-blur-2xl w-[430px] flex items-center gap-4">
            <Image
              src={EgentIcon}
              alt="サムネイル"
              width={50}
              height={50}
              className="object-contain rounded-full"
            />
            <h1 className="pl-5 border-l-2">{title}</h1>
          </div>
        </Link>
      ) : (
        <Link href={`${basepath}/${urlid}`}>
          <Image
            src="https://totnfaipgpkmgjvlcqee.supabase.co/storage/v1/object/public/RANTBIGINNER.IMAGE/NotImage.png"
            alt="サムネイル"
            fill
            className="object-contain rounded-3xl"
          />
          <div className="rounded-3xl backdrop-blur-2xl flex items-center gap-4">
            <Image
              src={EgentIcon}
              alt="サムネイル"
              width={50}
              height={50}
              className="object-contain rounded-full"
            />
            <h1 className="pl-5 border-l-2">{title}</h1>
          </div>
        </Link>
      )}
    </div>
  )
}
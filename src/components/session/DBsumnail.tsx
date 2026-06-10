import Image from "next/image"
import type { Agent } from "@/types/type"

const getYoutubeId = (url: string) => {
  const match = url.match(/[?&]v=([^&]+)/)
  if (match) return match[1]

  const short = url.match(/youtu\.be\/([^?]+)/)
  if (short) return short[1]
  return null
}

type Egentdata = {
  data: Agent[]
}

type Props = {
  url: string,
  Agentname: string,
  title: string
}

export const DBsumnail = async ({ url, Agentname, title }: Props) => {
  const videoId = getYoutubeId(url)
  const res = await fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=ja-JP")
  const json: Egentdata = await res.json()
  const AgentIcon = json.data.find((a) => a.displayName === Agentname)?.displayIcon ?? ""
  return (
    <div className="relative w-full h-[300px] rounded-2xl">
      {videoId ? (
        <>
          <Image
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="サムネイル"
            fill
            key={videoId}
            className="object-contain rounded-2xl -z-10"
          />
          <div className="flex items-center gap-10 backdrop-blur-2xl rounded-2xl">
            <Image
              src={AgentIcon}
              alt="サムネイル"
              width={60}
              height={50}
              className="object-contain rounded-2xl z-10 rounded-full "
            />
            <h1 className="border-l-2 pl-5">{title}</h1>
          </div>
        </>
      ) : (
        <>
          <Image
            src="/画像を取得できませんでした.png"
            alt="サムネイル"
            fill
            className="object-contain rounded-3xl"
          />
          <div className="flex items-center gap-10 backdrop-blur-2xl rounded-2xl">
            <Image
              src={AgentIcon}
              alt="サムネイル"
              width={60}
              height={50}
              className="object-contain rounded-2xl z-10 rounded-full "
            />
            <h1 className="border-l-2 pl-5">{title}</h1>
          </div>
        </>
      )}
    </div>
  )
}
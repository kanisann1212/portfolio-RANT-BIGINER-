import Image from "next/image"
import Link from "next/link"

const getYoutubeId = (url: string) => {
  const match = url.match(/[?&]v=([^&]+)/)
  if (match) return match[1]
  const short = url.match(/youtu\.be\/([^?]+)/)
  if (short) return short[1]
  return null
}

type Props = {
  url: string
  agentIcon: string   
  title: string
  urlid: string
}

export const DBsumnail = ({ url, agentIcon, title, urlid }: Props) => {  
  const basepath = "/mypage"
  const videoId = getYoutubeId(url)

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
            {agentIcon && (
              <Image
                src={agentIcon}
                alt="エージェント"
                width={50}
                height={50}
                className="object-contain rounded-full"
              />
            )}
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
            {agentIcon && (
              <Image
                src={agentIcon}
                alt="エージェント"
                width={50}
                height={50}
                className="object-contain rounded-full"
              />
            )}
            <h1 className="pl-5 border-l-2">{title}</h1>
          </div>
        </Link>
      )}
    </div>
  )
}
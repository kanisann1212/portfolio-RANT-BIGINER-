import Image from "next/image"

const getYoutubeId = (url: string) => {
  const match = url.match(/[?&]v=([^&]+)/)
  if (match) return match[1]
  const short = url.match(/youtu\.be\/([^?]+)/)
  if (short) return short[1]
  return null
}

type Props = {
  url: string
  agentIcon?: string
  title: string
}

export const DBsumnail = ({ url, agentIcon, title }: Props) => {
  const videoId = getYoutubeId(url)

  return (
    <div className="relative w-full h-[120px] sm:h-[150px] md:h-[250px] rounded-2xl">
      {videoId ? (
        <>
          <Image
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="サムネイル"
            fill
            className="object-cover rounded-2xl"
          />
          <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 md:left-8 rounded-3xl backdrop-blur-2xl w-[95%] md:w-[430px] flex items-center gap-1 sm:gap-2 md:gap-4 p-1 sm:p-0">
            {agentIcon && (
              <Image
                src={agentIcon}
                alt="エージェント"
                width={50}
                height={50}
                className="object-contain rounded-full w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[50px] md:h-[50px]"
              />
            )}
            <h1 className="pl-1 sm:pl-2 md:pl-5 border-l-2 text-xs sm:text-sm md:text-base truncate">
              {title}
            </h1>
          </div>
        </>
      ) : (
        <>
          <Image
            src="https://totnfaipgpkmgjvlcqee.supabase.co/storage/v1/object/public/RANTBIGINNER.IMAGE/NotImage.png"
            alt="サムネイル"
            fill
            className="object-contain rounded-3xl"
          />
          <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 rounded-3xl backdrop-blur-2xl w-[95%] flex items-center gap-1 sm:gap-2 md:gap-4 p-1 sm:p-0">
            {agentIcon && (
              <Image
                src={agentIcon}
                alt="エージェント"
                width={50}
                height={50}
                className="object-contain rounded-full w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[50px] md:h-[50px]"
              />
            )}
            <h1 className="pl-1 sm:pl-2 md:pl-5 border-l-2 text-xs sm:text-sm md:text-base truncate">
              {title}
            </h1>
          </div>
        </>
      )}
    </div>
  )
}
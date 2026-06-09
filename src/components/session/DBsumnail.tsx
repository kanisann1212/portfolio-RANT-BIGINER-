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
}

export const DBsumnail = ({ url }: Props) => {
  const videoId = getYoutubeId(url)

  return (
    <div className="relative w-full h-[400px]">
      {videoId ? (
        <Image
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt="サムネイル"
          fill
          className="object-contain rounded-3xl"
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
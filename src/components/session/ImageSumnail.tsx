import type { VideoFormData } from "./CreateVideo"
import { Control } from "react-hook-form"
import { useWatch } from "react-hook-form"
import Image from "next/image"

type Props = {
  control: Control<VideoFormData>
}

export const ImageSumnail = ({ control }: Props) => {
  const getYoutubeId = (url: string) => {
    const match = url.match(/[?&]v=([^&]+)/)
    if (match) return match[1]
    const short = url.match(/youtu\.be\/([^?]+)/)
    if (short) return short[1]
    return null
  }

  const url = useWatch({ control, name: "url" })
  const videoId = url ? getYoutubeId(url) : null

  return (
    <div className="relative w-full md:w-[900px] h-[200px] md:h-[400px]">
      {videoId && (
        <Image
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt="サムネイル"
          fill
          className="rounded-3xl object-cover"
        />
      )}
    </div>
  )
}
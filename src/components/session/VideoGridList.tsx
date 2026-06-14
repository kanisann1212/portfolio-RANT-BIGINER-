
'use client'
import Link from "next/link"
import { motion } from "framer-motion"
import { DBsumnail } from "@/components/session/DBsumnail"


type VideoItem = {
  id: string
  url: string
  title: string
  agentIcon: string
  userName?: string   
}

type Props = {
  videos: VideoItem[]
  linkable?: boolean      
  showUserName?: boolean  
  emptyMessage?: string  
}

const MotionLink = motion.create(Link)

export const VideoGridList = ({
  videos,
  linkable = true,
  showUserName = false,
  emptyMessage = "動画がありません",
}: Props) => {
  const linkVariants = {
    initial: { opacity: 0, y: 200 },
    hover: { scale: 1.1 },
    transition: { duration: 1.5 },
  }

  if (videos.length === 0) {
    return (
      <h1 className="text-4xl font-bold text-center text-gray-400 my-10">
        {emptyMessage}
      </h1>
    )
  }

  return (
    <div className="grid lg:grid-cols-5 gap-2 grid-cols-2">
      {videos.map((v) => (
        <MotionLink
          key={v.id}
          href={linkable ? `/gallery/${v.id}` : "#"}
          variants={linkVariants}
          initial="initial"
          whileHover="hover"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-[500px] h-[350px]">
            <div className="flex flex-col items-center justify-center gap-2">
<DBsumnail
  url={v.url}
  agentIcon={v.agentIcon}   
  title={v.title}
  urlid={v.id}
/>
              {showUserName && v.userName && (
                <p className="text-center font-bold">{v.userName}</p>
              )}
            </div>
          </div>
        </MotionLink>
      ))}
    </div>
  )
}
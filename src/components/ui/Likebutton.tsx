"use client"
import { useState } from "react"
import { Heart } from "lucide-react"
import { motion } from "framer-motion"

type Props = {
  videoId: string
  initialLiked: boolean
  initialCount: number
}

export const LikeButton = ({ videoId, initialLiked, initialCount }: Props) => {
  const [liked, setLiked] = useState(initialLiked)
  const [count, setCount] = useState(initialCount)

  const handleLike = async () => {

    setLiked(!liked)
    setCount((prev) => (liked ? prev - 1 : prev + 1))

    const res = await fetch("/api/like", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ videoId }),
    })

    if (!res.ok) {
  
      setLiked(liked)
      setCount((prev) => (liked ? prev + 1 : prev - 1))
    }
  }

  return (
    <motion.button
      onClick={handleLike}
      whileTap={{ scale: 1.4 }}
      className="flex items-center gap-2"
    >
      <motion.div
        animate={{ scale: liked ? [1, 1.3, 1] : 1 }}
        transition={{ duration: 0.3 }}
      >
        <Heart
          fill={liked ? "#ef4444" : "none"}
          color={liked ? "#ef4444" : "#9ca3af"}
          size={28}
        />
      </motion.div>
      <span className="text-xl">{count}</span>
    </motion.button>
  )
}
'use client'
import Image from "next/image"
import Link from "next/link"
import type { WeponType } from "@/types/type"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

type WepondataProps = {
  filterdWeponSkin: WeponType[]
}

const MotionLink = motion.create(Link)

export const AnimationGunlist = ({ filterdWeponSkin }: WepondataProps) => {
  const basepath = "/guns"
  const containerRef = useRef<HTMLDivElement>(null)
  const imageBlocksRef = useRef(filterdWeponSkin)
  const [, forceUpdate] = useState(0)

  const itemWidth = 200
  const gap = 24
  const itemWidthWithGap = itemWidth + gap

  useEffect(() => {
    if (
      containerRef.current?.offsetWidth &&
      imageBlocksRef.current.length * itemWidthWithGap < containerRef.current.offsetWidth
    ) {
      const newImageBlocks = [...imageBlocksRef.current]
      const fillableNumberOfContents = Math.floor(
        (containerRef.current.offsetWidth - imageBlocksRef.current.length * itemWidthWithGap) / filterdWeponSkin.length
      )
      const fillableNumberOfSequence = Math.ceil(fillableNumberOfContents / filterdWeponSkin.length)
      Array.from({ length: fillableNumberOfSequence }).forEach(() => {
        newImageBlocks.push(...filterdWeponSkin)
      })
      imageBlocksRef.current = newImageBlocks
      forceUpdate(n => n + 1)
    }
  }, [containerRef.current])

  const linkVariants = {
    initial: { opacity: 1 },
    hover: {
      scale: 1.1,
      color: "#00F5FF",
      textShadow: [
        "0 0 8px #00F5FF, 0 0 20px #00F5FF",
        "0 0 12px #BF00FF, 0 0 30px #BF00FF, 0 0 50px #7B00FF",
        "0 0 8px #00F5FF, 0 0 20px #00F5FF",
      ],
      transition: { duration: 1 }
    }
  }

  const textVariants = {
    initial: { color: "#ffffff" },
    hover: { color: "#00F5FF" },
  }

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden relative bg-gradient-to-b from-blue-900 via-red-700 to-gray-800 py-10"
    >
      <motion.div
        animate={{ x: itemWidthWithGap }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
        }}
        onUpdate={(latest) => {
          if (Number(latest.x) >= itemWidthWithGap) {
            const newImageBlocks = [...imageBlocksRef.current]
            newImageBlocks.unshift(imageBlocksRef.current[imageBlocksRef.current.length - 1])
            newImageBlocks.pop()
            imageBlocksRef.current = newImageBlocks
            forceUpdate(n => n + 1)
          }
        }}
      >
        <div
          className="flex"
          style={{
            gap: `${gap}px`,
            width: `${itemWidthWithGap * imageBlocksRef.current.length}px`,
            marginLeft: `-${itemWidth}px`,
          }}
        >
          {imageBlocksRef.current.map((wepon, index) => (
            <MotionLink
              href={`${basepath}/${wepon.uuid}`}
              key={`${wepon.uuid}-${index}`}
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
              style={{ display: "block", flexShrink: 0 }}
            >
              <div
                style={{ width: `${itemWidth}px`, height: "400px", position: "relative" }}
                className="overflow-hidden backdrop-blur-xl border rounded-3xl"
              >
                <Image
                  src={wepon.displayIcon}
                  alt={wepon.displayName}
                  fill
                  className="object-contain"
                />
                <motion.p
                  className="font-bold text-xl text-center p-2"
                  variants={textVariants}
                >
                  {wepon.displayName}
                </motion.p>
              </div>
            </MotionLink>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
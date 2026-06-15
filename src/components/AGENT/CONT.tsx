'use client'

import type { Agent } from "@/types/type"
import type { AProps } from "@/types/type"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const variants = {
  initial: { x: -2000, opacity: 0 },
  animate: { x: 0, opacity: 1 },
}

const MotionLink = motion.create(Link)
const linkVariants = {
  initial: { opacity: 0, y: 200 },
  hover: { scale: 1.1 },
  transition: {
    duration: 1.5
  }
}

export const CONT = ({ A }: AProps) => {
  const basepath = "/egents"
  return (
    <>
      <motion.div
        // 修正点1: スマホでは高さをコンテンツに合わせ(h-auto)、PC(md以上)では500pxに固定
        className="relative mask-b-from-80% mask-t-from-70% min-h-[500px] md:h-[500px] overflow-hidden"
        initial='initial'
        whileInView="animate"
        variants={variants}
        viewport={{ once: true }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 10,
          mass: 1,
          duration: 1
        }}
      >
        {/* ご要望修正1: スマホ版は背景画像を非表示 (hidden md:block を追加) */}
        <Image
          src="https://totnfaipgpkmgjvlcqee.supabase.co/storage/v1/object/public/RANTBIGINNER.IMAGE/OMEN.jpg"
          alt="background"
          fill
          className="hidden md:block object-cover -z-10" 
          style={{ objectPosition: "0% 0%" }}
        />
        
        {/* 修正点2: タイトルの位置をTailwindで中央/右寄りにレスポンシブ配置 */}
        <h1
          className="absolute inset-0 flex items-center justify-center md:justify-end md:pr-[20vw] z-10 text-5xl md:text-8xl font-black text-black pointer-events-none"
        >
          CONTROLLER
        </h1>

        {/* 修正点3: styleタグでのGrid指定を削除し、flexboxでレスポンシブ化 */}
        <div className="relative z-20 flex flex-col md:flex-row w-full h-auto md:h-[500px]">
          {A.map((sen: Agent) => {
            return (
              <MotionLink
                key={sen.uuid}
                href={`${basepath}/${sen.uuid}`}
                variants={linkVariants}
                initial="initial"
                whileHover="hover"
                whileInView={{ opacity: 1, y: 0 }}
                // スマホは横幅100%(w-full)、PCは120px固定
                className="w-full md:w-[120px] block"
              >
                {/* 修正点4: スマホでは高さを抑え(例:120px)、PCでは500pxにする */}
                <div className="relative h-[120px] md:h-[500px] w-full overflow-hidden border-2 md:border-4 border-white">
                  <Image
                    src={sen.displayIcon}
                    alt="VALORANT"
                    fill
                    // ご要望修正2: スマホ版の画像位置を下寄せ (object-bottom md:object-center に変更)
                    // 真ん中が良い場合は `object-center md:object-center` (または単に `object-center` )にしてください。
                    className="object-cover object-center md:object-center"
                  />
                </div>
              </MotionLink>
            )
          })}
        </div>
      </motion.div>
    </>
  )
}
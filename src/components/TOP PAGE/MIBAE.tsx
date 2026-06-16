'use client'

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

type MIBAProps = {
  gazou: string
  kime: string
  syubun: string
  hukubun: string
}

export const MIBAE = ({ gazou, kime, syubun, hukubun }: MIBAProps) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2])
  const filter = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(10px)"])

  return (
    <motion.div ref={ref} style={{ opacity, scale, filter }}>
      <motion.div
        className="flex flex-col md:flex-row mt-[100px] md:mt-[150px] mb-[200px] md:mb-[300px] mx-4 md:mx-12 lg:mx-24 justify-between items-center gap-8 md:gap-12"
        initial={{ scale: 0, y: -50 }}
        whileInView={{ scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* 画像 */}
        <div className="relative flex-shrink-0 w-full md:w-1/2 h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden">
          <Image src={gazou} alt="VALORANT" fill className="object-cover" />
        </div>

        {/* テキスト */}
        <div className="flex flex-col flex-1 w-full justify-center items-center md:items-start px-2 md:px-6 lg:px-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center md:text-left w-full break-words">
            {kime}
          </h1>

          <div className="w-full h-[2px] bg-black my-6 md:my-8" />

          <p className="font-bold text-center md:text-left text-base md:text-xl lg:text-2xl leading-relaxed">
            {syubun}
            <br />
            {hukubun}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
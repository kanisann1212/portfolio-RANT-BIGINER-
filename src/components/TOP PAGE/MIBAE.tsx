'use client'

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image";

type MIBAProps = {
  gazou: string,
  kime: string,
  syubun: string,
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
    <motion.div
      ref={ref}
      style={{
        opacity,
        scale,
        filter,
      }}
    >
      <motion.div
        // 余白を少し調整しました（mb-[800px]はかなり大きいので必要に応じて調整してください）
        className="flex flex-col md:flex-row mt-[200px] mb-[400px] md:mx-24 justify-between items-center gap-10"
        initial={{ scale: 0, y: -50 }}
        whileInView={{ scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >


        <div className="relative flex-shrink-0 w-full md:w-1/2 h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden">
          <Image
            src={gazou}
            alt="VALORANT"
            fill
            className="object-cover"
          />
        </div>

   
        <div className="flex flex-col flex-1 w-full justify-center items-center md:items-start px-4 md:px-50">
          <h1 className="text-4xl md:text-7xl font-bold text-center md:text-left w-full">
            {kime}
          </h1>
          
          <div className="w-full h-[2px] bg-black my-6 md:my-10" />
          
          <p className="font-bold text-center md:text-left text-base md:text-2xl leading-relaxed">
            {syubun}<br />{hukubun}
          </p>
        </div>

      </motion.div>
    </motion.div>
  )
}
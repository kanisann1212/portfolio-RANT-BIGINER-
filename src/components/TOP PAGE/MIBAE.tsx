'use client'

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image";
type MIBAProps = {
  gazou: string,
  kime: string,
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

    <motion.div
      ref={ref}
      style={{
        opacity,
        scale,
        filter,
      }}
      >
      <motion.div
      className="flex mt-[400px] mb-[800px]  ml-24  justify-between items-center"
        initial={{ scale: 0, y: -50 }}
        whileInView={{ scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}>

        <div className="relative flex-shrink-0 w-3/5 h-[700px]">
          <Image
            src={gazou}
            alt="VALORANT"
            fill
            className="object-cover rounded-3xl "
          />
        </div>
        <div className="flex-1 pb-20 justify-between items-center">
          <h1 className=" mt-45 mb-35  text-7xl text-center">
            {kime}</h1>
          <div className="w-full h-[2px] bg-black my-10" />
          <p className=" font-bold text-center p-10 text-2xl">{syubun}<br />{hukubun}</p>
        </div>
      </motion.div>
    </motion.div>

  )
}
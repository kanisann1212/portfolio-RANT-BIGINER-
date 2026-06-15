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

export const KAISETSU = ({ gazou, kime, syubun, hukubun }: MIBAProps) => {
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
      }}>
      <motion.div
        className="flex mt-[100px] mb-[700px] w-screen items-center justify-center"
        initial={{ scale: 0, y: -50 }}
        whileInView={{ scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <div className="flex flex-col items-center ">
        <h1 className=" mt-45 mb-35 text-4xl md:text-7xl text-center">{kime}</h1>
          <Image
            src={gazou}
            alt="VALORANT"
            width={1100}
            height={200}
            className="object-cover rounded-3xl "
          />
          <div className="w-full h-[2px] bg-black my-10" />
          <p className=" font-bold text-center p-10 md:text-2xl">{syubun}<br />{hukubun}</p>
        </div>
      </motion.div>
    </motion.div>

  )
}
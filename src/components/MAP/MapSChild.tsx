'use client'
import { MapType } from "@/types/type"
import Image from "next/image"
import { MapsPattern } from "../../data/MapPattern"
import { MapsRecomendparts } from "./MapsRecomend"
import { motion } from "framer-motion"

const variants = {
  initial: { x: -2000, opacity: 0 },
  animate: { x: 0, opacity: 1 },
}

type Props = {
  MapMicro: MapType
  Vlength: number
  isLogin: boolean
}

export const MapSChild = ({ MapMicro, Vlength, isLogin }: Props) => {
  const MapNameInfo: string = MapMicro.displayName
  const MapsRecomend = MapsPattern[MapNameInfo].agents

  return (
    <>
      <motion.h1
        className="text-4xl md:text-9xl ml-4 md:ml-0"
        initial="initial"
        whileInView="animate"
        variants={variants}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          mass: 1,
          duration: 1,
        }}
      >
        {MapMicro.displayName}
      </motion.h1>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="relative w-full lg:w-[1000px] px-4 lg:px-0 sm:mb-10">
          <Image
            src={MapMicro.displayIcon}
            alt="VALORANT"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
        <MapsRecomendparts MapsRecomend={MapsRecomend} Vlength={Vlength} isLogin={isLogin} />
      </div>
    </>
  )
}
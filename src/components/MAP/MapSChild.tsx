'use client'

import { MapType } from "@/types/type"
import Image from "next/image"
import { Header } from "../TOP PAGE/Header"
import { MapsPattern } from "../../data/MapPattern"
import { MapsRecomendparts } from "./MapsRecomend"
import { motion } from "framer-motion"

const variants = {
  initial: { x: -2000, opacity: 0 },
  animate: { x: 0, opacity: 1 },
}

export const MapSChild = ({ MapMicro }: { MapMicro: MapType }) => {
  const MapNameInfo: string = MapMicro.displayName
  const MapsRecomend = MapsPattern[MapNameInfo].agents
  console.log(MapsRecomend)

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${MapMicro.stylizedBackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          minWidth: "1400px",
        }}
      >
        <Header Hanten={true} />
        <motion.h1
          className="text-9xl"
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
        >{MapMicro.displayName}</motion.h1>
        <div className="flex  items-center ">
          <div className="relative justify-between w-[1000] ">
            <Image
              src={MapMicro.displayIcon}
              alt="VALORANT"
              width={500}
              height={500}
              className=" w-full h-auto"
            />
          </div>
          <MapsRecomendparts MapsRecomend={MapsRecomend} />
        </div>
      </div>

    </>
  )
}
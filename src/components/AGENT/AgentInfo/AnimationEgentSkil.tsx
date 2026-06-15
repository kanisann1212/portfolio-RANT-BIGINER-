'use client'
import { Dela_Gothic_One } from "next/font/google"
import { AnimationSkilofMap } from "@/components/AGENT/AgentInfo/AnimatioSkilofMap"
import ScrambleText from "@/components/ui/ScrambleText"
import { EgentSkils } from "./EGENTskils"
import Image from "next/image"
import type { AgentTypeInfo } from "@/types/type"
import { motion } from "framer-motion"

const MotionImage = motion.create(Image)

type AgentSkilProps = {
  Egentinfo: AgentTypeInfo
}


const valorantEgent = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"]
})

const ImageVariants = {
  initial: { opacity: 0, y: 200 },
  animate: { opacity: 1, y: 0 },
  hover: { scale: 1.1 },
}



export const AnimationEgentSkil = ({ Egentinfo }: AgentSkilProps) => {
  const MapAgentInfo: string = Egentinfo.displayName
  return (

    <div className="relative z-10 grid grid-cols-[600px_1fr] w-full mt-10">
      <div className="relative w-[600px] h-screen sticky top-0">
        <MotionImage
          src={Egentinfo.fullPortrait}
          alt="VALORANT"
          fill
          variants={ImageVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          transition={{ duration: 1.5 }}
          className="object-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${Egentinfo.role.displayIcon})`,
            backgroundSize: "250px",
            backgroundPosition: "top",
          }}
        />
      </div>
      <div className="flex flex-col gap-10 pt-20 pb-20 items-center">
        <div>
          <ScrambleText className={`${valorantEgent.className} font-bold text-9xl text-center text-white`}>{Egentinfo.displayName}</ScrambleText>
          <p className="text-white text-2xl p-5 font-bold">{Egentinfo.description}</p>
        </div>
        <EgentSkils description={Egentinfo.abilities[0].description} Name={Egentinfo.abilities[0].displayName} Icon={Egentinfo.abilities[0].displayIcon} />
        <EgentSkils description={Egentinfo.abilities[1].description} Name={Egentinfo.abilities[1].displayName} Icon={Egentinfo.abilities[1].displayIcon} />
        <EgentSkils description={Egentinfo.abilities[2].description} Name={Egentinfo.abilities[2].displayName} Icon={Egentinfo.abilities[2].displayIcon} />
        <EgentSkils description={Egentinfo.abilities[3].description} Name={Egentinfo.abilities[3].displayName} Icon={Egentinfo.abilities[3].displayIcon} />
        <h1 className={`${valorantEgent.className} font-bold text-5xl text-center text-white m-10`}>主要マップ</h1>
        <AnimationSkilofMap MapAgentInfo={MapAgentInfo} />
      </div>
    </div>
  )
}
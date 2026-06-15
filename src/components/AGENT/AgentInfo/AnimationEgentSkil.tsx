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
  subsets: ["latin"],
})

const ImageVariants = {
  initial: { opacity: 0, y: 200 },
  animate: { opacity: 1, y: 0 },
  hover: { scale: 1.1 },
}

export const AnimationEgentSkil = ({ Egentinfo }: AgentSkilProps) => {
  const MapAgentInfo: string = Egentinfo.displayName
  return (
    <div className="relative z-10 w-full mt-10">

      <div className="block lg:hidden relative w-full h-[400px] mb-6">
        <MotionImage
          src={Egentinfo.fullPortrait}
          alt={Egentinfo.displayName}
          fill
          variants={ImageVariants}
          initial="initial"
          animate="animate"
          className="object-contain bg-no-repeat"
          style={{
            backgroundImage: `url(${Egentinfo.role.displayIcon})`,
            backgroundSize: "150px",
            backgroundPosition: "top",
          }}
        />
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-[600px_1fr]">


        <div className="relative w-[600px] h-screen sticky top-0 hidden lg:block">
          <MotionImage
            src={Egentinfo.fullPortrait}
            alt={Egentinfo.displayName}
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


        <div className="flex flex-col gap-6 md:gap-10 pt-10 md:pt-20 pb-10 md:pb-20 items-center px-4 lg:px-0">
          <div>
            <ScrambleText
              className={`${valorantEgent.className} font-bold text-5xl md:text-9xl text-center text-white`}
            >
              {Egentinfo.displayName}
            </ScrambleText>
            <p className="text-white text-base md:text-2xl p-3 md:p-5 font-bold">
              {Egentinfo.description}
            </p>
          </div>

          {Egentinfo.abilities.map((ability, index) => (
            <EgentSkils
              key={index}
              description={ability.description}
              Name={ability.displayName}
              Icon={ability.displayIcon}
            />
          ))}

          <h1
            className={`${valorantEgent.className} font-bold text-3xl md:text-5xl text-center text-white m-5 md:m-10`}
          >
            主要マップ
          </h1>
          <AnimationSkilofMap MapAgentInfo={MapAgentInfo} />
        </div>
      </div>
    </div>
  )
}
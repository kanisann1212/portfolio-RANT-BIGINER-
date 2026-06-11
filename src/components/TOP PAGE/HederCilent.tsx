'use client'

import Link from "next/link"
import Image from "next/image"
import { User } from "lucide-react"
import { motion } from "framer-motion"
import { useSession, SessionProvider } from "next-auth/react"
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const MotionLink = motion.create(Link)

type Props = {
  Hanten?: boolean,
  VTier: string | undefined,
  Icon: string
}



export const HeaderClient = ({ Hanten, VTier, Icon }: Props) => {
  const { data: session } = useSession()
  const textVariants = {
    initial: { color: Hanten ? 'white' : 'black' },
    hover: { color: "#ff0000" },
    transition: {
      duration: 1.5
    }
  }


  const linkVariants = {
    initial: { opacity: 1, y: 0 },
    hover: { scale: 1.5 },
    transition: {
      duration: 1.5
    }
  }
  const blackZ = "/VALG.png"
  const whiteZ = "/LOGOWHITE.png"
  return (
    <div className={`flex justify-between items-center ${Hanten ? "text-white " : "text-black"}  pt-5  border-b`}>
      <div className="flex pl-10 pb-5 items-center">
        <MotionLink
          href="/"
          className={`${Hanten ? "text-white " : "text-black"}`}
          variants={linkVariants}
          initial="initial"
          whileHover="hover"
        >
          <Image
            src={Hanten ? whiteZ : blackZ}
            alt="VALOGO"
            width={30}
            height={30}
          />
        </MotionLink>
        <MotionLink
          href="/"
          variants={linkVariants}
          initial="initial"
          whileHover="hover">
          <motion.h1
            className={`${Hanten ? "text-white " : "text-black"} text-3xl pl-5 `}
            variants={textVariants}
          >RANT BEGINNER</motion.h1>
        </MotionLink>
      </div>
      <div className="space-x-15 flex pr-15 pb-5">
        <MotionLink
          href="/"
          className={`${Hanten ? "text-white " : "text-black"} text-3xl `}
          variants={linkVariants}
          initial="initial"
          whileHover="hover"
        >HOME</MotionLink>
        <MotionLink
          href="/guns"
          className={`${Hanten ? "text-white " : "text-black"} text-3xl `}
          variants={linkVariants}
          initial="initial"
          whileHover="hover"
        >WEAPON</MotionLink>
        <MotionLink
          href="/map"
          className={`${Hanten ? "text-white " : "text-black"} text-3xl `}
          variants={linkVariants}
          initial="initial"
          whileHover="hover"
        >MAP</MotionLink>
        <MotionLink
          href="/egents"
          className={`${Hanten ? "text-white " : "text-black"} text-3xl `}
          variants={linkVariants}
          initial="initial"
          whileHover="hover"
        >EGENT</MotionLink>
        <SessionProvider>
          {session?.user ?
            <MotionLink
              href="/mypage"
              className={`${Hanten ? "text-white " : "text-black"} text-3xl `}
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
            >
              <Avatar>
                <AvatarImage src={session.user.image ?? Icon} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
                <AvatarBadge className=" bg-green-600 dark:bg-green-800">
                  {VTier && 
                    <Image
                    src={VTier}
                    alt="VALOGO"
                    fill
                    className="object-cover"
                  />}
                </AvatarBadge>
              </Avatar>
            </MotionLink>
            :
            <MotionLink
              href="/mypage"
              className={`${Hanten ? "text-white " : "text-black"} text-3xl `}
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
            >
              <User className="w-10 h-10 " />
            </MotionLink>}
        </SessionProvider>

      </div>
    </div>
  )
}

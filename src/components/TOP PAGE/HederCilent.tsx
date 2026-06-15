'use client'
import { useState } from "react"
import { LogoutButton } from "../ui/LogoutButton"
import Link from "next/link"
import Image from "next/image"
import { User, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useSession, SessionProvider } from "next-auth/react"
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const MotionLink = motion.create(Link)

type Props = {
  Hanten?: boolean
  VTier: string | undefined
  Icon: string
  isLogin: boolean
}

export const HeaderClient = ({ Hanten, VTier, Icon, isLogin }: Props) => {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useState(false)

  const textVariants = {
    initial: { color: Hanten ? "white" : "black" },
    hover: { color: "#ff0000" },
    transition: { duration: 1.5 },
  }

  const linkVariants = {
    initial: { opacity: 1, y: 0 },
    hover: { scale: 1.5 },
    transition: { duration: 1.5 },
  }

  const blackZ = "https://totnfaipgpkmgjvlcqee.supabase.co/storage/v1/object/public/RANTBIGINNER.IMAGE/VALG.png"
  const whiteZ = "https://totnfaipgpkmgjvlcqee.supabase.co/storage/v1/object/public/RANTBIGINNER.IMAGE/LOGOWHITE.png"

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/guns", label: "WEAPON" },
    { href: "/map", label: "MAP" },
    { href: "/egents", label: "EGENT" },
  ]

  return (
    <div className={`flex justify-between items-center ${Hanten ? "text-white" : "text-black"} pt-5 border-b relative`}>


      <div className="flex pl-10 pb-5 items-center">
        <MotionLink href="/" variants={linkVariants} initial="initial" whileHover="hover">
          <Image src={Hanten ? whiteZ : blackZ} alt="VALOGO" width={30} height={30} />
        </MotionLink>
        <MotionLink href="/" variants={linkVariants} initial="initial" whileHover="hover">
          <motion.h1
            className={`${Hanten ? "text-white" : "text-black"} text-xl md:text-3xl pl-5`}
            variants={textVariants}
          >RANT BEGINNER</motion.h1>
        </MotionLink>
      </div>


      <button
        className="md:hidden pr-10 pb-5 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="w-8 h-8" />
        ) : (
          <Menu className="w-8 h-8" />
        )}
      </button>


      <div className="hidden md:flex space-x-15 pr-15 pb-5 items-center">
        {navLinks.map((link) => (
          <MotionLink
            key={link.href}
            href={link.href}
            className={`${Hanten ? "text-white" : "text-black"} text-3xl`}
            variants={linkVariants}
            initial="initial"
            whileHover="hover"
          >
            {link.label}
          </MotionLink>
        ))}

        <SessionProvider>
          {session?.user ? (
            <MotionLink
              href="/mypage"
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
            >
              <Avatar>
                <AvatarImage src={session.user.image ?? Icon} alt="user" />
                <AvatarFallback>CN</AvatarFallback>
                <AvatarBadge className="bg-green-600 dark:bg-green-800">
                  {VTier && (
                    <Image src={VTier} alt="rank" fill className="object-cover" />
                  )}
                </AvatarBadge>
              </Avatar>
            </MotionLink>
          ) : (
            <MotionLink
              href="/mypage"
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
            >
              <User className="w-10 h-10" />
            </MotionLink>
          )}
        </SessionProvider>

        {isLogin && <LogoutButton />}
      </div>


      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className={`fixed top-0 right-0 w-3/4 h-screen ${Hanten ? "bg-black" : "bg-white"} z-40 flex flex-col items-center justify-center gap-8 md:hidden`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${Hanten ? "text-white" : "text-black"} text-3xl font-bold`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <SessionProvider>
              {session?.user ? (
                <Link href="/mypage" onClick={() => setIsOpen(false)}>
                  <Avatar>
                    <AvatarImage src={session.user.image ?? Icon} alt="user" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Link>
              ) : (
                <Link href="/mypage" onClick={() => setIsOpen(false)}>
                  <User className="w-10 h-10" />
                </Link>
              )}
            </SessionProvider>

            {isLogin && <LogoutButton />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
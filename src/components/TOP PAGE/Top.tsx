'use client'
import { User } from "lucide-react"
import { Video } from "@/components/TOP PAGE/Video";
import { Midashi } from "@/components/TOP PAGE/Midashi";
import Image from "next/image";
import { MIBAE } from "./MIBAE";
import { motion } from "framer-motion"
import Link from "next/link";
import { useSession, SessionProvider } from "next-auth/react"
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const MotionUser = motion.create(User)
const MotionAvatar = motion.create(Avatar)

type Props = {
  Icon: string,
  VTier: string | undefined,
}


export const Top = ({ Icon, VTier }: Props) => {
  const { data: session } = useSession()
  return (
    <>
      <Video />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className={'font-bold text-white italic text-center text-9xl '}>RANT BEGINNER</h1>
      </div>
      <div className="fixed left-10 top-10 " >
        <Image
          src="https://totnfaipgpkmgjvlcqee.supabase.co/storage/v1/object/public/RANTBIGINNER.IMAGE/VALORANT.png"
          alt="VALORANT"
          width={200}
          height={400}
          className="h-auto "
        />
      </div>
      <div className="fixed top-10 right-10" >
        <SessionProvider>
          {session?.user ?
            <Link href="/mypage">
              <MotionAvatar
                initial={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.5 }}
              >
                <AvatarImage src={session.user.image ?? Icon} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
                <AvatarBadge className="bg-green-600 dark:bg-green-800" >
                  {VTier &&
                    <Image
                      src={VTier}
                      alt="VALOGO"
                      fill
                      className="object-cover"
                    />}
                </AvatarBadge>
              </MotionAvatar>
            </Link>
            :
            <Link
              href="/mypage"
            >
              <MotionUser
                className="w-10 h-10 text-white"
                initial={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.5 }}
              />
            </Link>}
        </SessionProvider>
      </div>
      <MIBAE syubun="このサイトは初心者である方全員に向けて作りました。" hukubun="どうかこのサイトがあなたのバロ人生の糧になることを祈っております。" kime="ーFOR YOUー" gazou="https://totnfaipgpkmgjvlcqee.supabase.co/storage/v1/object/public/RANTBIGINNER.IMAGE/kai.jpg" />
      <div className="grid grid-cols-3 gap-10 m-15 mr-20 ml-20 h-[80vh]">
        <div className="h-full">
          <Midashi
            src={"https://totnfaipgpkmgjvlcqee.supabase.co/storage/v1/object/public/RANTBIGINNER.IMAGE/abys.webp"}
            midashi={"MAP"}

            page={"/map"}
          />
        </div>
        <div className="h-full">
          <Midashi
            src={"https://totnfaipgpkmgjvlcqee.supabase.co/storage/v1/object/public/RANTBIGINNER.IMAGE/egents.avif"}
            midashi={"EGENT"}
            page={"/egents"}
          />
        </div>
        <div className="h-full">
          <Midashi
            src={"https://totnfaipgpkmgjvlcqee.supabase.co/storage/v1/object/public/RANTBIGINNER.IMAGE/wepon.avif"}
            midashi={"WEPON"}
            page={"/guns"}
          />
        </div>
      </div>
    </>
  )
}
'use client'
import { Trash2Icon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSession, SessionProvider } from "next-auth/react"
import { User } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { VideoDelete } from "./VideoDelete"
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const MotionLink = motion.create(Link)

  const linkVariants = {
    initial: { opacity: 1, y: 0 },
    hover: { scale: 1.5 },
    transition: {
      duration: 1.5
    }
  }
  type Props = {
  VTier: string | undefined,
  Icon: string,
}

export function DropdownMenuAvatar({VTier, Icon}:Props) {
  const { data: session } = useSession()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <SessionProvider>
            {session?.user ?
              <MotionLink
                href="/mypage"
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
                variants={linkVariants}
                initial="initial"
                whileHover="hover"
              >
                <User className="w-10 h-10 " />
              </MotionLink>}
          </SessionProvider>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Trash2Icon />
          <VideoDelete />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}



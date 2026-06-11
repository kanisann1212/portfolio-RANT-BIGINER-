import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export const Videodata = async() =>{
    const session = await auth()
    const Video = await prisma.video.findMany({
        where: { userId: session?.user.id },
      })
      return Video
}

import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json("ログインしてください", { status: 403 })
  }

  const { videoId } = await req.json()
  const userId = session.user.id

  const existing = await prisma.like.findUnique({
    where: { userId_videoId: { userId, videoId } },
  })

  if (existing) {

    await prisma.like.delete({
      where: { userId_videoId: { userId, videoId } },
    })
    return NextResponse.json({ liked: false })
  } else {

    await prisma.like.create({
      data: { userId, videoId },
    })
    return NextResponse.json({ liked: true })
  }
}
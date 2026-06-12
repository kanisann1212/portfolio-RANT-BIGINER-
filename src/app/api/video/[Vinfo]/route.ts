import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { LoginVerify } from "@/lib/LoginVerify"

type VideoPromise = {
  params: Promise<{ Vinfo: string }>
}

export async function DELETE(req:NextRequest,{params}:VideoPromise) {
  try{
    const session = await LoginVerify()
    if(!session?.user){
      return NextResponse.json("ログインしてください",{status:403})
    }

    const { Vinfo } = await params
    const VideoData = await prisma.video.findUnique({where:{ id:Vinfo }})
    if(!VideoData || VideoData.userId !== session.user.id){
      return NextResponse.json("削除権限がありません",{status:403})
    }
    await prisma.video.delete({where:{id:Vinfo}})
    return NextResponse.json({ok:true})
  }catch{
    return NextResponse.json("削除に失敗しました",{status:500})

  }
  
}
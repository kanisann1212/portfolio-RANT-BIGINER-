import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { z ,ZodError } from "zod"
import { videoshema } from "@/lib/shema"
import { LoginVerify } from "@/lib/LoginVerify"

type VideoPromise = {
  params: Promise<{ Vinfo: string }>
}

export async function POST(req:NextRequest){
  try{
    const session = await LoginVerify()
    
    if(!session){
      return NextResponse.json("ログインしてください",{status:403})
    }
    const {user} = session
    const json = await req.json()
    const body = videoshema.parse(json)
    const {url,title,agent,map} = body
    const video = await prisma.video.create({
      data:{
        url,
        title,
        agent,
        map,
        userId: user.id,
      },
      select:{
        id:true,
      },
    })
    return NextResponse.json(video)  
  }
  catch(err){
    if(err instanceof z.ZodError){
      return NextResponse.json(err.issues,{status:422})
      }
    return NextResponse.json(null,{status:500})  
  }
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
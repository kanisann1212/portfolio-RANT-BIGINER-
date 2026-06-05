import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { z, ZodError } from "zod"

const videoshema = z.object({
  id:z.string(),
  url:z.url(),
  title:z.string().min(1),
  agent:z.string(),
  map:z.string(),
})

export async function POST(req:NextRequest){
  try{
    const session = await auth()
    
    if(!session){
      return NextResponse.json("ログインしてください",{status:403})
    }
    const {user} = session
    const json = await req.json()
    const body = videoshema.parse(json)
    const {id,url,title,agent,map} = body
    const video = await prisma.video.create({
      data:{
        id,
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
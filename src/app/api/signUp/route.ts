import { getUserByEmail } from "@/lib/user";
import { signUpShema } from "@/lib/shema";
import { prisma } from "@/lib/prisma"
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
  try{
    const json = await req.json()
    const parsed = signUpShema.safeParse(json)

    if(!parsed.success){
      return NextResponse.json(
        {errors:parsed.error.flatten().fieldErrors},
        {status:422}
      )
    }
    const {email,name,password,favoriteAgent} =parsed.data
    const existingUser = await getUserByEmail(email)
    if(existingUser){
      return NextResponse.json({message:"既に登録済み"},{status:409})
    }
    const hashedpassword =await bcrypt.hash(password,10)
    await prisma.user.create({
      data:{email,password:hashedpassword,name,favoriteAgent},
    })
    return NextResponse.json({ok:true})
  }catch{
   return NextResponse.json({message:"エラーです"},{status:500}) 
  }
}
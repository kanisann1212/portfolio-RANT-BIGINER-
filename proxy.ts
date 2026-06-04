import { auth } from "./auth"
import { NextResponse } from "next/server"

export const proxy = auth((req)=>{
  const isLogIn = !!req.auth
  const isLoginPage = req.nextUrl.pathname === "/login"

  if (isLoginPage && isLogIn){
    return NextResponse.redirect(new URL("/mypage",req.nextUrl.origin))
  }
  if(!isLogIn && req.nextUrl.pathname.startsWith("/mypage")){
    return NextResponse.redirect(new URL("/login",req.nextUrl.origin))
  }
})

export const config = {
  matcher: ["/mypage", "/mypage/:path*","/login"],
}
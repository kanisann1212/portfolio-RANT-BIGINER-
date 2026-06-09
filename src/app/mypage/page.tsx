import { auth } from "../../auth"
import Image from "next/image"
import { Header } from "@/components/TOP PAGE/Header";
import { CreateVideo } from "@/components/session/CreateVideo";
import { prisma } from "@/lib/prisma"


export default async function Mypage() {
  const session = await auth()
  const Video = await prisma.video.findMany()
  console.log (Video)
  // すべてのでーたは同じデータテーブルに管理されるのか、一旦ログアウトして確認
  return (
    <div>
      <Header />
      <div>
        <h1 className="text-6xl font-extrabold">ようこそ{session?.user.name}</h1>
        <Image
          src={session?.user.image}
          alt="VALORANT"
          width={300}
          height={300}
          className="object-cover rounded-full "
        />
        <CreateVideo />
      </div>
    </div>

  )
}
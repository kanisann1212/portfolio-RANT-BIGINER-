 import { auth } from "../../auth"
import Image from "next/image"

export default async function Mypage (){
  const session = await auth()
  return(
    <>
    <h1 className="text-6xl font-extrabold">ようこそ{session?.user.name}</h1>
          <Image
            src={session?.user.image}
            alt="VALORANT"
            width={300}
            height={300}
            className="object-cover rounded-full "
          />
    </>

  )
}
import { auth } from "../../auth"
import Image from "next/image"
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Header } from "@/components/TOP PAGE/Header";


export default async function Mypage() {
  const session = await auth()
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
      </div>
      <Drawer>
        <div className="flex items-center justify-center">
          <DrawerTrigger
            className="border h-[50px] w-[100px] rounded-3xl"
          >Open
          </DrawerTrigger>
        </div>
        <DrawerContent
          className="h-[700px] ">
          <DrawerHeader>
            <DrawerTitle className="text-2xl font-bold">CREATE YOUR VIDEO</DrawerTitle>
            <form>
              <textarea 
              id="title" 
              autoFocus 
              placeholder="Video Title" 
              className="w-full resize-none overflow-hidden bg-transparent text-4xl focus:outline-none font-extrabold"></textarea>
            </form>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>

  )
}
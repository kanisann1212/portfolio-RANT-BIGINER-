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
          className="h-[500px] ">
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
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
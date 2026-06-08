'use client'
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { SelectAgent } from "@/components/session/SelectAgent";

export type VideoFormData = {
  title: string
  url: string
  agent: string
  map: string
}

export const CreateVideo = () => {
  const { register, control, handleSubmit } = useForm<VideoFormData>()

  const onSubmit = async (data:VideoFormData) => {
    await fetch("/api/video", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
  }

  return (
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
              id="title"
              autoFocus
              placeholder="Video Title"
              className="w-full resize-none overflow-hidden bg-transparent text-4xl focus:outline-none font-extrabold" />
            <textarea
              id="YoutubeURL"
              autoFocus
              placeholder="URL"
              className="w-full resize-none overflow-hidden bg-transparent text-4xl focus:outline-none font-extrabold" />
          </form>
        </DrawerHeader>
        <DrawerFooter>
          <SelectAgent control={control}/>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>

  )
}
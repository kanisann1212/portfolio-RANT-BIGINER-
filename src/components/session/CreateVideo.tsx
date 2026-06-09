'use client'
import { useForm } from "react-hook-form"
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
import { SelectAgent } from "@/components/session/SelectAgent";
import { SelectMap } from "./SlectMap";
import { toast } from "sonner"


export type VideoFormData = {
  title: string
  url: string
  agent: string
  map: string
}

export const CreateVideo = () => {
  const { register, control, handleSubmit } = useForm<VideoFormData>()

  const onSubmit = async (data: VideoFormData) => {
    const response = await fetch("/api/video", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    if(!response.ok){
    toast.error("投稿に失敗しました。値を入力してやり直してください")
    return
    }

  }

  return (
    <Drawer>
      <div className="flex items-center justify-center">
        <DrawerTrigger
          className="border h-[50px] w-[100px] rounded-3xl"
        >Open
        </DrawerTrigger>
      </div>
      <div>
        <DrawerContent
          className="h-[700px] ">
          <DrawerHeader>
            <DrawerTitle className="text-2xl font-bold">CREATE YOUR VIDEO</DrawerTitle>
            <textarea
              id="title"
              autoFocus
              placeholder="Video Title"
              {...register("title")}
              className="w-full resize-none overflow-hidden bg-transparent text-4xl focus:outline-none font-extrabold" />
            <textarea
              id="YoutubeURL"
              autoFocus
              placeholder="URL"
              {...register("url")}
              className="w-full resize-none overflow-hidden bg-transparent text-4xl focus:outline-none font-extrabold" />
          </DrawerHeader>
          <div className="flex justify-between ml-5 mr-5">
          <SelectAgent control={control} />
          <SelectMap control={control} />
          </div>
          <DrawerFooter>
            <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </div>
    </Drawer>

  )
}
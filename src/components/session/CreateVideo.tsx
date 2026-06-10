'use client'
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { SelectAgent } from "@/components/session/SelectAgent";
import { SelectMap } from "./SlectMap";
import { toast } from "sonner"
import { ImageSumnail } from "./ImageSumnail";


export type VideoFormData = {
  title: string
  url: string
  agent: string
  map: string
}

export const CreateVideo = () => {
  const { register, control, handleSubmit } = useForm<VideoFormData>()

  const onSubmit = async (data: VideoFormData) => {
    toast.promise(
      async () => {
        const response = await fetch("/api/video", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })

        if (!response.ok) {
          throw new Error("投稿失敗")  
        }
      },
      {
        loading: "投稿中...",
        success: "投稿しました！",
        error: "投稿に失敗しました。値を確認してください",
      },
      
    )
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
            <div className="grid grid-cols-2">
            <SelectAgent control={control} />
            <SelectMap control={control} />
            </div>
            <ImageSumnail control={control}/>  
          </div>
          <DrawerFooter>
            <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </div>
    </Drawer>

  )
}
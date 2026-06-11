import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { RANKICON } from "@/data/RANKICON";
import { Videodata } from "@/lib/Video";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export const MypageCarousel = async () => {
  const RANKicon = await RANKICON()
  const Video =await Videodata()
  return (
    <Carousel className="w-full max-w-2xl mx-auto">
      <CarouselContent className="">
        <CarouselItem>
          <Card className={`bg-black border-white border-2 ${Video.length >= 5 ? "opacity-100" : "opacity-50"}`}>
            <CardContent className="relative  flex aspect-square items-center justify-center">
              <Image
                src={RANKicon[1].largeIcon}
                alt="Bronze"
                width={140}
                height={20}
                className="absolute top-1 opacity-70 "
              />
              <h1 className="text-center text-7xl text-white">NONE</h1>
            </CardContent>
          </Card>
        </CarouselItem>

        <CarouselItem>
          <Card className={`bg-black border-white border-2 ${Video.length >= 10 ? "opacity-100" : "opacity-50"}`}>
            <CardContent className="relative flex aspect-square items-center justify-center">
              <Image
                src={"https://totnfaipgpkmgjvlcqee.supabase.co/storage/v1/object/public/RANTBIGINNER.IMAGE/10.png"}
                alt="Silver"
                width={400}
                height={300}
              />
              <Image
                src={RANKicon[2].largeIcon}
                alt="Silver"
                width={140}
                height={20}
                className="absolute top-1 opacity-70 "
              />
            </CardContent>
          </Card>
        </CarouselItem>

        <CarouselItem>
          <Card className={`bg-black border-white border-2 ${Video.length >= 15 ? "opacity-100" : "opacity-50"}`}>
            <CardContent className="relative flex aspect-square items-center justify-center">
              <Image
                src={RANKicon[3].largeIcon}
                alt="Gold"
                width={140}
                height={20}
                className="absolute top-1 opacity-70 "
              />
              <h1 className="text-center text-7xl text-white">NONE</h1>
            </CardContent>
          </Card>
        </CarouselItem>

        <CarouselItem>
          <Card className={`bg-black border-white border-2 ${Video.length >= 20 ? "opacity-100" : "opacity-50"}`}>
            <CardContent className="relative flex aspect-square items-center justify-center">
              <Image
                src={"https://totnfaipgpkmgjvlcqee.supabase.co/storage/v1/object/public/RANTBIGINNER.IMAGE/20.png"}
                alt="Pratinum"
                width={400}
                height={300}
              />
              <Image
                src={RANKicon[4].largeIcon}
                alt="Platinum"
                width={140}
                height={20}
                className="absolute top-1 opacity-70 "
              />
            </CardContent>
          </Card>
        </CarouselItem>

        <CarouselItem>
          <Card className={`bg-black border-white border-2 ${Video.length >= 40 ? "opacity-100" : "opacity-50"}`}>
            <CardContent className="relative flex aspect-square items-center justify-center">
              <Image
                src={RANKicon[5].largeIcon}
                alt="Diamond"
                width={140}
                height={20}
                className="absolute top-1 opacity-70 "
              />
              <h1 className="text-center text-7xl text-white">NONE</h1>
            </CardContent>
          </Card>
        </CarouselItem>

        <CarouselItem>
          <Card className={`bg-black border-white border-2 ${Video.length >= 60 ? "opacity-100" : "opacity-50"}`}>
            <CardContent className="relative flex aspect-square items-center justify-center">
              <Image
                src={"https://totnfaipgpkmgjvlcqee.supabase.co/storage/v1/object/public/RANTBIGINNER.IMAGE/60.png"}
                alt="Acendant"
                width={400}
                height={300}
              />
              <Image
                src={RANKicon[6].largeIcon}
                alt="Acendant"
                width={140}
                height={20}
                className="absolute top-1 opacity-70 "
              />
            </CardContent>
          </Card>
        </CarouselItem>

        <CarouselItem>
          <Card className={`bg-black border-white border-2 ${Video.length >= 90 ? "opacity-100" : "opacity-50"}`}>
            <CardContent className="relative flex aspect-square items-center justify-center">
              <Image
                src={RANKicon[7].largeIcon}
                alt="Immortal"
                width={140}
                height={20}
                className="absolute top-1 opacity-70 "
              />
              <h1 className="text-center text-7xl text-white">NONE</h1>
            </CardContent>
          </Card>
        </CarouselItem>

        <CarouselItem>
          <Card className={`bg-black border-white border-2 ${Video.length >= 100 ? "opacity-100" : "opacity-50"}`}>
            <CardContent className="relative flex aspect-square items-center justify-center">
              <Image
                src={"https://totnfaipgpkmgjvlcqee.supabase.co/storage/v1/object/public/RANTBIGINNER.IMAGE/100.png"}
                alt="Radiant"
                width={400}
                height={300}
              />
              <Image
                src={RANKicon[8].largeIcon}
                alt="Radiant"
                width={140}
                height={20}
                className="absolute top-1 opacity-70 "
              />
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
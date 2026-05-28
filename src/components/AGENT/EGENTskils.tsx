import Image from "next/image"
import { Dela_Gothic_One } from "next/font/google"
import ScrambleText from "../animation/ScrambleText"

const valorantEgent = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"]
})

type Eprops = {
  Icon:string,
  Name:string,
  description:string
}

export const EgentSkils = ({ Icon,Name,description }: Eprops) => {
  return (
    <div className="grid grid-cols-[120px_1fr_1fr] grid-rows-2 w-[1100px]">
      <div className="border-r border-white row-span-2 flex items-center justify-center self-center ">
        <Image
          src={Icon}
          alt="VALORANT"
          height={100}
          width={100}
          className="object-cover"
        />
      </div>
      <ScrambleText className={`${valorantEgent.className} border-b border-white text-center text-4xl font-bold col-span-2 p-10 block`}>
        {Name}
      </ScrambleText>
      <p className="col-span-2 text-center pt-5 ">{description}</p>
    </div>
  )
}
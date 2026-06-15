import Image from "next/image"
import { Dela_Gothic_One } from "next/font/google"
import ScrambleText from "@/components/ui/ScrambleText"

const valorantEgent = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"],
})

type Eprops = {
  Icon: string
  Name: string
  description: string
}

export const EgentSkils = ({ Icon, Name, description }: Eprops) => {
  return (
    <div className="w-full max-w-[1100px] px-4 lg:px-0">
  
      <div className="flex flex-col md:grid md:grid-cols-[120px_1fr] md:grid-rows-2 gap-2 md:gap-0">

        <div className="flex md:border-r border-white md:row-span-2 items-center justify-center py-4 md:py-0">
          <Image
            src={Icon}
            alt={Name}
            height={100}
            width={100}
            className="object-cover w-[60px] h-[60px] md:w-[100px] md:h-[100px]"
          />
        </div>

        <ScrambleText
          className={`${valorantEgent.className} border-b border-white text-center text-2xl md:text-4xl font-bold p-4 md:p-10 block`}
        >
          {Name}
        </ScrambleText>

        <p className="text-center text-sm md:text-base pt-3 md:pt-5">
          {description}
        </p>
      </div>
    </div>
  )
}
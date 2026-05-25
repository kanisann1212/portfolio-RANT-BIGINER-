import { Header } from "@/components/TOP PAGE/Header"
import Image from "next/image"
import { Dela_Gothic_One } from "next/font/google"

type EgentPromise = {
  params: Promise<{ chracter: string }>
}

const valorantEgent = Dela_Gothic_One({
  weight:"400",
  subsets:["latin"]
})

export default async function Chracter({ params }: EgentPromise) {
  const basepath = 'https://valorant-api.com/v1/agents'
  const { chracter } = await params
  const res = await fetch(`${basepath}/${chracter}?isPlayableCharacter=true&language=ja-JP`)
  const json = await res.json()
  const Egentinfo = json.data
  console.log(Egentinfo)
  return (
    <>
      
      <div className="bg-gradient-to-b from-blue-900 via-red-700 to-gray-800">
        <Header />
        <div
          style={{
            backgroundImage: `url(${Egentinfo.background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
          }}
        >
          <div className="flex">
            <div
              className="relative w-[600px] h-[900px]"
            >
              <Image
                src={Egentinfo.fullPortrait}
                alt="VALORANT"
                fill
                className="object-cover"
              />
              <h1 className={`${valorantEgent.className} font-bold text-9xl text-black`}>{Egentinfo.displayName}</h1>
              <p className="text-black font-bold">{Egentinfo.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
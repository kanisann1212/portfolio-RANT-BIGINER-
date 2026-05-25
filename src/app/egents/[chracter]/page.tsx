import { Header } from "@/components/TOP PAGE/Header"
import Image from "next/image"
import { Dela_Gothic_One } from "next/font/google"

type EgentPromise = {
  params: Promise<{ chracter: string }>
}

const valorantEgent = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"]
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
        <div className="relative" style={{ minHeight: "100vh" }}>
          <div
            style={{
              backgroundImage: `url(${Egentinfo.background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "100vh",
              opacity: 0.3
            }}
          />
          <div className="absolute top-5 grid grid-cols-3">
            <div
              className="relative w-[450px] h-[900px] "
            >
              <Image
                src={Egentinfo.fullPortrait}
                alt="VALORANT"
                fill
                className="object-cover"
              />
            </div>
            <div className="col-span-2 pt-20 ">
              <h1 className={`${valorantEgent.className} l p-5 mb-10 font-bold text-9xl text-center rounded-3xl  text-black`}>{Egentinfo.displayName}</h1>
              <p className="text-black text-2xl p-5 rounded-3xl font-bold">{Egentinfo.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
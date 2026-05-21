import Image from "next/image";
type MIBAProps = {
  gazou: string,
  kime: string,
  syubun: string
  hukubun: string
}

export const MIBAE = ({ gazou, kime, syubun, hukubun }: MIBAProps) => {
  return (
    
    <div className="flex mt-[400px] mb-[800px]  ml-24  justify-between items-center" >
      <div className="relative flex-shrink-0 w-3/5 h-[700px]">
        <Image
          src={gazou}
          alt="VALORANT"
          fill
          className="object-cover rounded-3xl "
        />
      </div>
      <div className="flex-1 pb-20 justify-between items-center">
        <h1 className="text-black mt-45 mb-35  text-7xl text-center">
          {kime}</h1>
                 <div className="w-full h-[2px] bg-black my-10" />
        <p className="text-black font-bold text-center p-10 text-2xl">{syubun}<br />{hukubun}</p>
      </div>
    </div>
  )
}
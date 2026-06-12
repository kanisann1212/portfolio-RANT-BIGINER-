import { Header } from "@/components/TOP PAGE/Header"
import { DeleteBudgeMenu } from "@/components/ui/DelteBudgeMenu"
import { IconHeader } from "@/lib/getIconHeader"

type Props ={
  params :Promise<{Vinfo:string}>
}

export default async function MypageVideo({params}:Props) {
  const { Vinfo } = await params
  const Icon = await IconHeader()
  return (
    <div>
      <Header />
      <DeleteBudgeMenu Vinfo = {Vinfo}  Icon={Icon} />
    </div>
  )
}
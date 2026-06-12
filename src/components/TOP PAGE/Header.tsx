import { RankHeader } from "@/lib/RANK"
import { IconHeader } from "@/lib/getIconHeader"
import { HeaderClient } from "./HederCilent"
import { LoginVerify } from "@/lib/LoginVerify"
export const Header = async() => {
  const Icon = await IconHeader()
  const Tier = await RankHeader()
  const VTier = Tier?.smallIcon 
  const session = await LoginVerify()
  const isLogin = !!session?.user
  return (
<HeaderClient Hanten VTier={VTier} Icon={Icon} isLogin={isLogin}/>
  )
}

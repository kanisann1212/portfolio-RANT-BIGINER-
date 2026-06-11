import { RankHeader } from "@/lib/RANK"
import { IconHeader } from "@/lib/getIconHeader"
import { HeaderClient } from "./HederCilent"
export const Header = async() => {
  const Icon = await IconHeader()
  const Tier = await RankHeader()
  const VTier = Tier?.smallIcon 
  return (
<HeaderClient Hanten VTier={VTier} Icon={Icon} />
  )
}

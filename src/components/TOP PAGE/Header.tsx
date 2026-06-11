import { RankHeader } from "@/data/RANK"
import { IconHeader } from "@/data/Icon"
import { HeaderClient } from "./HederCilent"
export const Header = async() => {
  const Icon = await IconHeader()
  const Tier = await RankHeader()
  const VTier = Tier?.smallIcon 
  return (
<HeaderClient Hanten VTier={VTier} Icon={Icon} />
  )
}
